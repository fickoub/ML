import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const VisualiserarticlesScalerTwo = React.lazy(() =>
  import("pages/VisualiserarticlesScalerTwo")
);
const AccueilAdminTwo = React.lazy(() => import("pages/AccueilAdminTwo"));
const ArticleTwo = React.lazy(() => import("pages/ArticleTwo"));
const HistoriqueTwo = React.lazy(() => import("pages/HistoriqueTwo"));
const AccueilAdminpopup = React.lazy(() => import("pages/AccueilAdminpopup"));
const VisualiserarticlesbaseEDT = React.lazy(() =>
  import("pages/VisualiserarticlesbaseEDT")
);
const VisualiserarticlesScaler = React.lazy(() =>
  import("pages/VisualiserarticlesScaler")
);
const Article = React.lazy(() => import("pages/Article"));
const HistoriqueAdmin = React.lazy(() => import("pages/HistoriqueAdmin"));
const AccueilUser = React.lazy(() => import("pages/AccueilUser"));
const Pgeconnexion = React.lazy(() => import("pages/Pgeconnexion"));
const AccueilAdmin = React.lazy(() => import("pages/AccueilAdmin"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AccueilAdmin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pgeconnexion" element={<Pgeconnexion />} />
          <Route path="/accueiluser" element={<AccueilUser />} />
          <Route path="/historiqueadmin" element={<HistoriqueAdmin />} />
          <Route path="/article" element={<Article />} />
          <Route
            path="/visualiserarticlesscaler"
            element={<VisualiserarticlesScaler />}
          />
          <Route
            path="/visualiserarticlesbaseedt"
            element={<VisualiserarticlesbaseEDT />}
          />
          <Route path="/accueiladminpopup" element={<AccueilAdminpopup />} />
          <Route path="/historiquetwo" element={<HistoriqueTwo />} />
          <Route path="/articletwo" element={<ArticleTwo />} />
          <Route path="/accueiladmintwo" element={<AccueilAdminTwo />} />
          <Route
            path="/visualiserarticlesscalertwo"
            element={<VisualiserarticlesScalerTwo />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
