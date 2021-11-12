import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Page404 from "pages/errors/Page404";
import {Header,Footer, Aside} from "components/layout";
import Home from "pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-page-wrapper">
        <BrowserRouter>
        <Aside />
        </BrowserRouter>
        <div className="page-container d-flex flex-column">
          <div className="page-content">
            <BrowserRouter>
              <Routes>
                <Route path="/404" element={<Page404 />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer className="mt-auto mb-0" />
        </div>
      </div>
    </div>
  );
}

export default App;



