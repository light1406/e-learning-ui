import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { DefaultLayout } from "./components/Layout/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
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
