import ReactDOM from "react-dom/client";
import { App } from "./App";

const reactDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(reactDiv);

reactRoot.render(<App />);
