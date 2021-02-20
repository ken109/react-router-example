import React, { useContext, useEffect } from 'react';
import { Switch as RealSwitch, useLocation } from 'react-router-dom'
import { SwitchProps } from 'react-router'
import { definedRoutes, Route, RouteType } from "./index";
import { RouteProps } from "./Route";
import { ParamsContext, ParamsType } from "./Router";


const search = (name: string, routes: RouteType[]): string => {
    for (const route of routes) {
        if (route.name === name) return route.path
        else if (route.children) return route.path + search(name, route.children)
    }
    return ""
}

const get = (name: string, params: { [key: string]: string }): string => {
    const path: string = search(name, definedRoutes)

    return Object.keys(params).length > 0
        ? [path].concat(Object.keys(params)
            .sort((a: string, b: string) => b.length - a.length))
            .reduce((p: string, c: string) => {
                return p.replace(`:${c}`, params[c])
            })
        : path
};

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
    const location = useLocation()
    const setParams = useContext(ParamsContext)[1]

    let params: ParamsType = {}

    const searchMatch = (routes: RouteType[], now: string): string => {
        for (const route of routes) {
            const path = route.children ? searchMatch(route.children, now + route.path) : now + route.path
            const match = location.pathname.match(new RegExp(
                `^\\/${path
                .split('/')
                .filter(v => v)
                .map((v: string) => v[0] !== ':' ? v : `(?<${v.slice(1)}>[^/]*)`)
                .join('\\/')}/?$`))
            if (match && match.groups) params = match.groups
        }
        return ""
    }

    searchMatch(definedRoutes, '')

    useEffect(() => {
        setParams(params)
    }, [setParams])

    return (
        <RealSwitch {...props}>
            {React.Children.map<React.ReactElement<RouteProps>, any>(
                props.children,
                (value: React.ReactElement<RouteProps>) => {
                    let cloned = {...value.props}

                    if (!value.props.path && value.props.name) {
                        cloned = {...value.props, path: get(value.props.name, params)}
                    }

                    return (
                        <Route key={cloned.path
                            ? typeof cloned.path === 'string'
                                ? cloned.path
                                : cloned.path[0]
                            : Math.random()
                        } {...cloned}/>
                    )
                })}
        </RealSwitch>
    );
}

export default Switch;
