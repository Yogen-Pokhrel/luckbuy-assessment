import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Page404 from "pages/errors/Page404";
import {Header,Footer} from "components/layout";
import Home from "pages/Home";
import Contact from "pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;



