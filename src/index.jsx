import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { createRoot } from 'react-dom/client';
import {App} from './App';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);