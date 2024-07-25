function Analytics(){
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
               <img src={'laptop.jpg'} alt="/" className='w-[500px] mx-auto my-4' />
               <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Infinity is a leader in data analytics, providing comprehensive solutions to unlock the full potential of your data. Our advanced analytics help businesses make informed decisions and achieve their goals</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 px-6 bg-black'>Get Started</button>
               </div>
            </div>
        </div>
    )
    }
    export default Analytics
