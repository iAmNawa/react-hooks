import React, { useState } from 'react';

const App = () => {
  //  resource is similar to this.state.resource
  // setResource is this.setState
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        {/*call function setState to change resource state*/}
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        {/*call function setState to change resource state*/}
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      {/*here is the state*/}
      {resource}
    </div>
  );
}

export default App;
