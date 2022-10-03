import Landing from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/createEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" />
        <Route path="/event" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
