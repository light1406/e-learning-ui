import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
