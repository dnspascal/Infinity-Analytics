import {Hero} from "../components/Hero.jsx";
import Analytics from "../components/Analytics.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Card from "../components/Cards.jsx";


const Home = () =>{
    return(
      <div>
          <Hero/>
          <Analytics/>
          <Newsletter/>
          <Card/>
      </div>
    );
}

export default Home;
