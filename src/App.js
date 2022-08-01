import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/logo192.png";
import Header from "./components/Header";
import Profile from "../src/pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="octocat" />} />
          <Route path="/projects" element={<Projects userName="octocat" />} />
          <Route
            path="/projects/:name"
            element={<ProjectDetails userName="octocat" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
