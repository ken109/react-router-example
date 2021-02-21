import React from 'react';
import { RouteProps as RealRouteProps } from "react-router";
import { Route as RealRoute } from "react-router-dom"


export interface RouteProps extends RealRouteProps {
    name?: string;
}

const Route: React.FC<RouteProps> = (props: RouteProps) => {
    return <RealRoute {...props}/>
}

export default Route
