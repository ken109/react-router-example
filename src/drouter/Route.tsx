import React from 'react';
import { Route as RealRoute } from "react-router-dom"
import { RouteProps as RealRouteProps } from "react-router";


export interface RouteProps extends RealRouteProps {
    name?: string;
}

const Route: React.FC<RouteProps> = (props: RouteProps) => {
    return <RealRoute {...props}/>
}

export default Route
