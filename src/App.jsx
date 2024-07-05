import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Info from "./Info";

function App() {
  return (
    <>
      <header className="mb-12">
        <Link to="/">Home</Link>
      </header>
      <Outlet />
    </>
  );
}

export default App;
