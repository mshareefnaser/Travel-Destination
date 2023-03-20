// Home.js
import Tours from "../tours/Tours";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import data from "../../data/data.json"
const data = require ("../../data/data.json")
function Home(){
    return(
        <div>
            <Tours arrData={data}/>
        </div>
        
    )
}
export default Home;
