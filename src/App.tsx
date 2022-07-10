import "./App.css";
import Appbar from "./components/shared/Appbar/Appbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./components/History/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
