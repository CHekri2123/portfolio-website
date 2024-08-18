import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import PageNotFound from "./components/PageNotFound";
import Social from "./components/Social";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="social">
        <Social />
      </div>
      <div className="home">
        <Routes>
          {/* Redirect from / to /kalyan */}
          <Route path="/" element={<Navigate to="/kalyan" />} />

          {/* Set up your other routes */}
          <Route path="/kalyan" element={<Home />} />
          <Route path="/kalyan/contacts" element={<Contacts />} />
          <Route path="/kalyan/bio" element={<Bio />} />
          <Route path="/kalyan/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
