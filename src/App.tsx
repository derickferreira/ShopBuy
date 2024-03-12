import "./App.css";

// react-router -- config
import { Outlet } from "react-router-dom";

// layout components
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
