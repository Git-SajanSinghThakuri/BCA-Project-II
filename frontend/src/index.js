import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ContextProvider } from "./context/Context";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);