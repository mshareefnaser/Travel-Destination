import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import data from "../../data/data.json"
const data = require ("../../data/data.json")
function Home(){
    return(
        <div>
            <Header/>
            <h2>Home Page</h2>
            <Tours arrData={data}/>
            <Footer/>
        </div>
        
    )
}
export default Home;
