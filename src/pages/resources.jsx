import {RESOURCES} from "../constants/resources.js";
import Resource from "../components/Resource.jsx";

const Resources = () =>{
    return(
        <div className={'text-white min-h-screen max-w-[1240px] w-screen mx-auto p-8 space-y-8'}>
            <span className={'text-lg md:text-3xl lg:text-5xl font-bold'}>List of Resources</span>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4'}>
                {
                    RESOURCES.map( (resource,i) =>(
                        <Resource key={i} resource={resource}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Resources;
