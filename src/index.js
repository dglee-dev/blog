import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "@lib/router/components/Router";
import "./shared/fonts/Pretendard/pretendard.css";
import "./shared/fonts/Gravi/gravi.css";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <Router>
    <App />
  </Router>,
);
