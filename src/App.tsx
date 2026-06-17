import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import NotFound from './pages/NotFound.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="tone-ladder/*" element={<NotFound />} />
          <Route path="tone-ladder/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
