import { Route, Routes } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="about" element={<TestComponent/>}/>
          <Route path="projects" element={<TestComponent/>}/>
          <Route path="contact" element={<TestComponent/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
