import { Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                exact={true}
                path={`${route.path}`}
                element={<route.component />}
              />
            );
          })}
          {/* <Route path="/*" element={<Page404 />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
