import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';// from documentation
import Tour from './components/tours/tour/Tour';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  const data = require ("./data/data.json")
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails arrData={data}/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
