import React, { useContext } from 'react';
import { Link as RealLink, LinkProps as RealLinkProps } from "react-router-dom";
import { Location, LocationDescriptorObject as RealLocationDescriptorObject, LocationState, Path } from "history";

import { getPath } from "./getPath";
import { ParamsContext, ParamsType } from "./Router";


interface LocationDescriptorObject<S = LocationState> extends RealLocationDescriptorObject<S> {
    name?: string
    params?: ParamsType
}

type LocationDescriptor<S = LocationState> = Path | LocationDescriptorObject<S>;

export interface LinkProps<S = LocationState> extends RealLinkProps<S> {
    to: LocationDescriptor<S> | ((location: Location<S>) => LocationDescriptor<S>);
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
    const [params] = useContext(ParamsContext)

    return (
        <RealLink {...props} to={typeof props.to === 'string' || typeof props.to === 'function'
            ? props.to
            : props.to.name
                ? getPath(props.to.name, {...params, ...props.to.params})
                : ''
        }/>
    );
}

export default Link;
