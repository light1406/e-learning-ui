import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Order from "../pages/Home/Home";

import 
function App() {
  return (
    <Router>
      <Routes>
       <Route key={index} path={route.path} element={<Order />} />;
      </Routes>
    </Router>
  );
}

export default App;
