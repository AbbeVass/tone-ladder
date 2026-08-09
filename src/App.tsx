import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import Settings from './pages/Settings.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tone-ladder/*" element={<NotFound />} />
        <Route path="tone-ladder" element={<Home />} />
        <Route path="tone-ladder/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
