import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import SolutionPage from "./pages/SolutionPage";
import About from './pages/About'
import CloudMigration from "./pages/CloudMigration";
import DataAnalytics from "./pages/DataAnalytics";
import Industries40 from "./pages/Industries";
import Complisight from "./pages/Complisight";
import Loadsight from "./pages/Loadsight";
import CarbonSight from "./pages/CarbonSight";
import DevOpsServices from "./pages/DevOpsServices";
import CloudServices from "./pages/CloudServices";
import ContactPage from "./pages/ContactPage";
import ApplicationPage from "./pages/ApplicationPage";
import ItOutsourcing from "./pages/ItOutsourcing";
import QualityAI from "./pages/QualityAI";
import Insights from "./pages/Insights";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services/cloud/cloud-migration" element={<CloudMigration/>} />
        <Route path="/services/data-analytics" element={<DataAnalytics/>} />
        <Route path="/industries" element={<Industries40/>} />
        <Route path="/complisight" element={<Complisight/>} />
        <Route path="/loadsight" element={<Loadsight />} />
        <Route path="/carbonsight"element={<CarbonSight/>} />
        <Route path="/services/cloud/devops-services"element={<DevOpsServices/>} />
        <Route path="/services/cloud/cloud-services"element={<CloudServices/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/application_development" element={<ApplicationPage />} />
        <Route path="/services/it-consulting" element={<ItOutsourcing />} />
        <Route path="/services/data-aiops" element={<QualityAI />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/search" element={<SearchResults />} />





        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
      </Routes>
      <Footer />
    </>
  );
}
