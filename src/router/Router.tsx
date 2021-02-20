import React, { useState } from 'react';
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";

export type ParamsType = { [key: string]: string }

export const ParamsContext = React.createContext<[ParamsType, React.Dispatch<React.SetStateAction<ParamsType>>]>(
    [{}, () => void 0]
)

const Router: React.FC<BrowserRouterProps> = (props: BrowserRouterProps) => {
    const [params, setParams] = useState<ParamsType>({})
    return (
        <ParamsContext.Provider value={[params, setParams]}>
            <BrowserRouter {...props}/>
        </ParamsContext.Provider>
    );
}

export default Router;
