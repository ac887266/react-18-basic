import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstComponent from "../FirstComponent/FirstComponent";
import SecondComponent from "../FirstComponent/SecondComponent";

export default function Router() {
  return (
    <>
      <div className="App" id="content">
        <BrowserRouter>
          <Routes>
            <Route path="/first" element={<FirstComponent />} />
            <Route path="/second" element={<SecondComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
