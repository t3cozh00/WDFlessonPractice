import ViewA from "./ViewA";
import ViewB from "./ViewB";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function RouterDemo() {
  return (
    <div>
      <BrowserRouter>
        <h3>This is React Router Demo</h3>
        <div>
          Menu
          <Link to={"/"}>
            <div>Menuitem for View A</div>
          </Link>
          <Link to={"/viewB"}>
            <div>Menuitem for View B</div>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ViewA />} />
          <Route path="/viewB" element={<ViewB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
