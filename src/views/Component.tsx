import React from 'react';
import { useParams } from "@ken109/react-router";

const Component: React.FC = () => {
    const params = useParams();
    return <h3>{params.topicId}: {params.componentId}</h3>;
}

export default Component;
