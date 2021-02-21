import { RouteType } from "./router";


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
                        name: 'component',
                        path: '/:componentId'
                    }
                ]
            }
        ]
    },
]
