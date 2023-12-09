import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useScrollbarWidth } from "./hooks/useScrollbarWidth";

function App() {
  const [count, setCount] = useState(0);
  const width = useScrollbarWidth();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(() => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <p>Ширина скроллбара: {width}px</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
