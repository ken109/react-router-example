import { RouteType } from "./drouter";


export const routes: RouteType[] = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'topics',
        path: '/topics',
        children: [
            {
                name: 'topic',
                path: '/:topicId',
                children: [
                    {
                        name: 'component_top',
                        path: '/'
                    },
                    {
                        name: 'component',
                        path: '/:componentId'
                    }
                ]
            }
        ]
    },
]
