import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
