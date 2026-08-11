import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import Settings from './pages/Settings.tsx';

export default function App() {
  return (
    <BrowserRouter basename='/tone-ladder'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
