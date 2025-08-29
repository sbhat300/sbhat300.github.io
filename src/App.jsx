import { Route, Routes } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ContactPage from './components/ContactPage/ContactPage';
import ExperiencePage from './components/ExperiencePage/ExperiencePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="experience" element={<ExperiencePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
