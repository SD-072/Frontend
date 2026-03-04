import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import AlphaCentauri from './pages/AlphaCentauri.jsx';
import SingleStar from './pages/SingleStar.jsx';
import Stars from './pages/Stars.jsx';

function App() {
  return (
    <Routes>
      {/* Routes container defines all available routes */}
      {/* Parent route with MainLayout as wrapper */}
      <Route path='/' element={<MainLayout />}>
        {/* index route is displayed at exactly "/" */}
        <Route index element={<Stars />} />
        {/* Static route for Alpha Centauri */}
        <Route path='/alpha-centauri' element={<AlphaCentauri />} />
        {/* Dynamic route with parameter :slug */}
        <Route path='/star/:slug' element={<SingleStar />} />
        {/* Catch-all route for non-existent paths */}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
