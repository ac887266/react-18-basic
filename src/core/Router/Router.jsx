import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstComponent from "../../views/apps/FirstComponent/FirstComponent";
import SecondComponent from "../../views/apps/SecondComponent/SecondComponent";

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
