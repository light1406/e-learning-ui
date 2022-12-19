import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Cart from "@pages/Cart";
// import
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {publicRoutes.map((route, index) => {
    //       const Page = route.component;

    //       let Layout = DefaultLayout;
    //       route.layout ? (Layout = route.layout) : (Layout = Fragment);

    //       return (
    //         <Route
    //           key={index}
    //           path={route.path}
    //           element={
    //             <Layout>
    //               <Page />
    //             </Layout>
    //           }
    //         />
    //       );
    //     })}
    //   </Routes>
    // </BrowserRouter>
    <>
      <Cart></Cart>
    </>
  );
}

export default App;
