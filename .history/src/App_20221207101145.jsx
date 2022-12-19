import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { DefaultLayout } from "./components/Layout/index";
import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = DefaultLayout;
          route.layout !== null ? (Layout = route.layout) : (Layout = Fragment);

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
