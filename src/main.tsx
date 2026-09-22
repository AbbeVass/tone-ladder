import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles/index.css";
import App from './App.tsx';

const theme = createTheme({
  cursorType: 'pointer',
});

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
