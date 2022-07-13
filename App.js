
import React, { useState } from "react";
export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decreasentItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increate</button>
      <button onClick={decreasentItem}>decrease</button>
    </div>
  );
}
