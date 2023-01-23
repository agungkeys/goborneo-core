import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';

const app = document.getElementById('app');
const root = createRoot(app); 
root.render(
  <InertiaApp 
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => require(`./Pages/${name}`).default}
  />
)