export { BrowserRouter as Router } from "react-router-dom"
export { default as Switch } from "./Switch"
export { default as Route } from "./Route"

export type RouteType = {
    name?: string,
    path: string,
    meta?: { [key: string]: any },
    children?: RouteType[]
}

class Routes {
    public routes: RouteType[]

    constructor(routes: RouteType[]) {
        this.routes = routes
    }

}

export let routesObj: Routes

export const setRoutes = (routes: RouteType[]) => {
    routesObj = new Routes(routes)
}