import ProductInfo from './productInfo.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Gallery from './gallery.jsx';
import Contact from './contact.jsx';
import Headers from './header.jsx';
import Footer from './footer.jsx';
import Products from './products.jsx';
import CoverPhoto from './cover.jsx';
import Pdt1 from './pdt1.jsx';
import NavBar from './navBar.jsx';
import Pdt2 from './pdt2.jsx';
import Pdt3 from './pdt3.jsx';
import Pdt4 from './pdt4.jsx';
import Pdt5 from './pdt5.jsx';
import Pdt6 from './pdt6.jsx';
import Pdt7 from './pdt7.jsx';
import Pdt8 from './pdt8.jsx';
import Pdt9 from './pdt9.jsx';
import Pdt10 from './pdt10.jsx';
import Pdt11 from './pdt11.jsx';
import Pdt12 from './pdt12.jsx';


function App() {
  return (

    <div className="App">
      <div className="stk"><Headers /></div>

      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pdt1" element={<Pdt1 />} />
        <Route exact path="/pdt2" element={<Pdt2 />} />
        <Route exact path="/pdt3" element={<Pdt3 />} />
        <Route exact path="/pdt4" element={<Pdt4 />} />
        <Route exact path="/pdt5" element={<Pdt5 />} />
        <Route exact path="/pdt6" element={<Pdt6 />} />
        <Route exact path="/pdt7" element={<Pdt7 />} />
        <Route exact path="/pdt8" element={<Pdt8 />} />
        <Route exact path="/pdt9" element={<Pdt9 />} />
        <Route exact path="/pdt10" element={<Pdt10 />} />
        <Route exact path="/pdt11" element={<Pdt11 />} />
        <Route exact path="/pdt12" element={<Pdt12 />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
