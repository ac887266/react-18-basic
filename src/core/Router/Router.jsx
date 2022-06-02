import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstComponent from "../../views/apps/FirstComponent/FirstComponent";
import SecondComponent from "../../views/apps/SecondComponent/SecondComponent";
import ThirdComponent from "../../views/apps/ThirdComponent/ThirdComponent";

export default function Router() {
  return (
    <>
      <div className="App" id="content">
        <BrowserRouter>
          <Routes>
            <Route path="/first" element={<FirstComponent />} />
            <Route path="/second" element={<SecondComponent />} />
            <Route path="/third" element={<ThirdComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
