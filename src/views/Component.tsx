import React from 'react';
import { useParams } from "react-router-dom";

const Component: React.FC = () => {
    let params = useParams<{ topicId: string, componentId: string }>();
    return <h3>{params.topicId}: {params.componentId}</h3>;
}

export default Component;
