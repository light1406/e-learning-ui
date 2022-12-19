import {
  BrowserRouter,
  BrowserRouter as Route,
  Router,
  Routes,
} from "react-router-dom";
import { publicRoutes } from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Router>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
