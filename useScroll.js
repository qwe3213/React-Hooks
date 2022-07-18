import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const onScroll = (event) => {
      setState({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello{" "}
      </h1>
    </div>
  );
}
