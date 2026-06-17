import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./styles/index.css";
import App from './App.tsx'

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
