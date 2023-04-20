import "./App.css";
// import Parent from "./useCallback/Parent";
import Child from "./useMemo/Child";

function App() {
  console.log("grandparent called");
  // const [num, setNum] = useState(0);
  return (
    <div className="App">
      {/* <button onClick={() => setNum(num + 1)}>{num}</button> */}
      <Child />
      {/* <Parent /> */}
    </div>
  );
}

export default App;
