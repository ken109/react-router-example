export { BrowserRouter as Router } from "react-router-dom"
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
