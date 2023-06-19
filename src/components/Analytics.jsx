import Laptop from '../assets/Laptop.jpg';
function Analytics(){
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
               <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
               <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sint dolorem nam earum modi assumenda magni, dolore doloremque quasi aspernatur facilis enim neque harum aliquam voluptatem? Rerum dicta vero iure?</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 px-6 bg-black'>Get Started</button>
               </div>
            </div>
        </div>
    )
    }
    export default Analytics