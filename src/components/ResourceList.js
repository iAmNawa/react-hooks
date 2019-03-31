import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  // Initialized state - [], resources has access, and setResources can change it
  const [resources, setResources] = useState([]);

  // ComponentDidMount and ComponentDidUpdate called here
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      // setState
      setResources(response.data);
    })(resource);
    // Arrow function above is not called if resource below is the same
  }, [resource]);
  return resources;
}

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  );
}

export default ResourceList;
