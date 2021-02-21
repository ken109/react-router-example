import React, { useContext } from 'react';
import { Link as RealLink } from "react-router-dom";
import { getPath } from "./getRoute";
import { ParamsContext, ParamsType } from "./Router";
import * as H from "history";

export interface LinkProps<S = H.LocationState> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    name?: string
    params?: ParamsType
    component?: React.ComponentType<any>;
    to?: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>);
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
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
