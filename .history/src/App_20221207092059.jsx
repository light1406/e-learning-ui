import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rrder" element={<Order />} />;
      </Routes>
    </Router>
  );
}

export default App;
