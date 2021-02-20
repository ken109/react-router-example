import { ParamsContext, ParamsType } from "./Router";
import { useContext } from "react";

export { default as Router } from "./Router"
export { default as Switch } from "./Switch"
export { default as Route } from "./Route"

export type RouteType = {
    name?: string,
    path: string,
    meta?: { [key: string]: any },
    children?: RouteType[]
}

export let definedRoutes: RouteType[]

export const setRoutes = (routes: RouteType[]) => {
    definedRoutes = routes
}

export const useParams = (): ParamsType => {
    return useContext(ParamsContext)[0]
}
