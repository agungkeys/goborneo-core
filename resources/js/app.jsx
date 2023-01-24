import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import '../css/app.css';

const app = document.getElementById('app');
const root = createRoot(app); 
root.render(
  <ChakraProvider>
    <InertiaApp 
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name => require(`./Pages/${name}`).default}
    />
  </ChakraProvider>
)
// createInertiaApp({
//     resolve: name => import(`./Pages/${name}`),
//     setup({ el, App, props }) {
//         render(<App {...props} />, el);
//     }
// });

// createInertiaApp({
//   resolve: name => {
//     const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
//     let page = pages[`./Pages/${name}.jsx`]
//     page.default.layout = page.default.layout || (page => <Layout children={page} />)
//     return page
//   },
// })