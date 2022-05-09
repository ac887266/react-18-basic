import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstComponent from "../FirstComponent/FirstComponent";

export default function Router() {
  return (
    <>
      <div className="App" id="content">
        <BrowserRouter>
          <Routes>
            <Route path="/first" element={<FirstComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
