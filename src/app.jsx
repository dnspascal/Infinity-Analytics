import Analytics from "./components/Analytics";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Newaletter from "./components/Newsletter";


function App(){
    return(
        <div>
       <Navbar/>
       <Hero/>
       <Analytics/>
       <Newaletter/>
       <Card/>
       <Footer/>
        </div>
    )
}
export default App;