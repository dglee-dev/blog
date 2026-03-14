import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./shared/lib/router/components/Router";
import "./fonts/Pretendard/pretendard.css";
import "./fonts/Gravi/gravi.css";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <Router>
    <App />
  </Router>,
);
