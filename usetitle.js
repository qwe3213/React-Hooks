import { useState, useEffect } from "react";


const useTitle = (inintialTitle) => {
  const [title, setTitle] = useState(inintialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
export default function App() {
  const titleUpdater = useTitle("Loading..");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}