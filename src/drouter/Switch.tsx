import React from 'react';
import { Switch as RealSwitch, useLocation } from 'react-router-dom'
import { SwitchProps } from 'react-router'
import { Route, routesObj, RouteType } from "./index";


const search = (name: string, routes: RouteType[]): string => {
    for (const route of routes) {
        if (route.name === name) return route.path
        else if (route.children) return route.path + search(name, route.children)
    }
    return ""
}

const get = (name: string, params?: { [key: string]: string }): string => {
    let path: string = search(name, routesObj)

    return params
        ? Object.keys(params).length > 0
            ? [path].concat(Object.keys(params)
                .sort((a: string, b: string) => b.length - a.length))
                .reduce((p: string, c: string) => {
                    return p.replace(`:${c}`, params[c])
                })
            : [][1]
        : path;
};

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
    const location = useLocation()
    let params: { [key: string]: string } | undefined

    const searchMatch = (routes: RouteType[], now: string): string => {
        for (const route of routes) {
            const path = route.children ? searchMatch(route.children, now + route.path) : now + route.path
            const match = location.pathname.match(new RegExp(
                `^\\/${path
                .split('/')
                .filter(v => v)
                .map((v: string) => v[0] !== ':' ? v : `(?<${v.slice(1)}>[^/]*)`)
                .join('\\/')}/?$`))
            if (match) params = match.groups
        }
        return ""
    }

    searchMatch(routesObj, '')

    return (
        <RealSwitch {...props}>
            {React.Children.map<any, any>(props.children, value => {
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
                           }
                           {...cloned}/>
                )
            })}
        </RealSwitch>
    );
}

export default Switch;
