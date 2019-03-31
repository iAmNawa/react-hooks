import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  // Initialized state - [], resources has access, and setResources can change it
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    // setState
    setResources(response.data);
  }

  // ComponentDidMount and ComponentDidUpdate called here
  useEffect(() => {
    fetchResource(resource);
    // Arrow function above is not called if resource below is the same
  }, [resource]);

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;
