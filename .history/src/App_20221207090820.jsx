import { Route, Router, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} component={route.component} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
