import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tone-ladder/*" element={<NotFound />} />
        <Route path="tone-ladder/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
