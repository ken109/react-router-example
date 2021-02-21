import React, { useContext, useEffect } from 'react';
import { SwitchProps } from 'react-router'
import { Switch as RealSwitch, useLocation } from 'react-router-dom'

import { definedRoutes, Route, RouteType } from "./index";
import { getPath } from "./getPath";
import { ParamsContext, ParamsType } from "./Router";
import { RouteProps } from "./Route";


let _before: string = ''
let params: ParamsType = {}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
    const location = useLocation()
    const [, setParams] = useContext(ParamsContext)

    const searchMatch = (routes: RouteType[], now: string): string => {
        for (const route of routes) {
            const paths = route.children
                ? [now + route.path, searchMatch(route.children, now + route.path)]
                : [now + route.path]
            for (const path of paths) {
                const match = location.pathname.match(new RegExp(
                    `^\\/${path
                .split('/')
                .filter(v => v)
                .map((v: string) => v[0] !== ':' ? v : `(?<${v.slice(1)}>[^/]*)`)
                .join('\\/')}/?$`))
                if (match && match.groups) params = match.groups
            }
        }
        return ""
    }

    searchMatch(definedRoutes, '')

    useEffect(() => {
        if (_before !== JSON.stringify(params)) {
            setParams(params)
            _before = JSON.stringify(params)
        }
    }, [params])

    return (
        <RealSwitch {...props}>
            {React.Children.map<React.ReactElement<RouteProps>, any>(
                props.children,
                (child: React.ReactElement<RouteProps>) => {
                    let cloned = {...child.props}

                    if (!child.props.path && child.props.name) {
                        cloned = {...child.props, path: getPath(child.props.name, params)}
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
