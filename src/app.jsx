import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Company from "./pages/company.jsx";
import Resources from "./pages/resources.jsx";
import About from "./pages/about.jsx";
import Contacts from "./pages/contacts.jsx";



 const Skeleton = () =>{
     return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
 }


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Skeleton/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/company"} element={<Company/>}/>
                    <Route path={"/resources"} element={<Resources/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contacts"} element={<Contacts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
