import React, { useContext } from 'react';
import { Link as RealLink, LinkProps as RealLinkProps } from "react-router-dom";
import * as H from "history";

import { getPath } from "./getPath";
import { ParamsContext, ParamsType } from "./Router";


export interface LinkProps<S = H.LocationState> extends Partial<RealLinkProps<S>> {
    name?: string
    params?: ParamsType
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
    const [params] = useContext(ParamsContext)

    return (
        <RealLink to={!props.to && props.name
            ? getPath(props.name, {...params, ...props.params})
            : props.to
                ? props.to
                : ''
        } {...props}/>
    );
}

export default Link;
