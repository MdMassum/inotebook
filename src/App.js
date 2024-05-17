import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/notestate";
import Alert from "./components/Alert";

function App() {
  const alert = {
    type:"danger",
    msg:": This is alert message"

  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
  );
}

export default App;
