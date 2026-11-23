import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-xxl" >
      <h1 className="text-primary">{count}</h1>
      <button className="btn btn-success mx-1" onClick={() => setCount(count + 1)}>
        <i className="bi bi-plus"></i>
      </button>
      <p class='h1'> This is the para</p>
      <button className="btn btn-danger mx-1" onClick={() => setCount(count - 1)}>
        <i className="bi bi-dash"></i>
      </button>
    </div>
  );
}

export default App;