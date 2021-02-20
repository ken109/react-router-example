import React from 'react';
import { useParams } from "../router";

const Component: React.FC = () => {
    let params = useParams();
    return <h3>{params.topicId}: {params.componentId}</h3>;
}

export default Component;
