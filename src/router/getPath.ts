import { definedRoutes, RouteType } from "./index";

const search = (name: string, routes: RouteType[] = definedRoutes): string => {
    for (const route of routes) {
        if (route.name === name) return route.path
        else if (route.children) return route.path + search(name, route.children)
    }
    return ""
}

export const getPath = (name: string, params: { [key: string]: string }): string => {
    const path: string = search(name)

    return Object.keys(params).length > 0
        ? [path].concat(Object.keys(params)
            .sort((a: string, b: string) => b.length - a.length))
            .reduce((p: string, c: string) => {
                return p.replace(`:${c}`, params[c])
            })
        : path
};
