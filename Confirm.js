const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };
  
  export default function App() {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
      <div className="App">
        <button onClick={confirmDelete}>Deleting the world</button>
      </div>
    );
  }