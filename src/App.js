import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import NewProject from "./components/pages/newproject";
import Projects from "./components/pages/projects";

import Container from "./components/layout/container";
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Project from "./components/pages/project";

function App() {
  return (

    <Router>
      < Navbar  />

      <Container customClass="min-height" >
        <Routes>
          <Route exact path="/" element= {< Home />}/>
          <Route path="/projects" element= {< Projects />}/>
          <Route path="/company" element= {< Company />}/>
          <Route path="/contact" element= {< Contact />}/>
          <Route path="/newproject" element= {< NewProject />}/>
          <Route path="/project/:id" element= {< Project />}/>
        </Routes>
      </Container>

      < Footer />

    </Router>
  );
}

export default App;