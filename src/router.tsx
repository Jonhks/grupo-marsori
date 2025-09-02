import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./views/Layout";
import ScrollToTop from "./components/ScrollTop";
const App = lazy(() => import("./App"));
const Nosotros = lazy(() => import("./views/Nosotros"));
const Servicios = lazy(() => import("./views/Servicios"));
const Proyectos = lazy(() => import("./views/Proyectos"));
const Contacto = lazy(() => import("./views/Contacto"));

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<App />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />
          <Route
            path="/servicios"
            element={<Servicios />}
          />
          <Route
            path="/proyectos"
            element={<Proyectos />}
          />
          <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
