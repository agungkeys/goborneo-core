import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import './bootstrap';
import '../css/app.css';

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText ||
  'GoBorneo - Kalimantan Tourism Information';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <ChakraProvider theme={theme}>
        <App {...props} />
      </ChakraProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
