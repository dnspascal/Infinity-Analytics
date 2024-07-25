import TypingEffect from 'react-typing-effect';

export const Hero = () => {
    return (<div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col  justify-center">
            <p className="text-[#00df9a]
                 p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with Infinity </h1>
            <div className='flex justify-center items-center'>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                    fast, flexible financing for
                </p>
                <TypingEffect
                    text={['BTB', 'BTC', 'BTG']}
                    speed={100}
                    eraseSpeed={100}
                    typingDelay={50}
                    loadingDelay={1}
                    loop={true}
                    delay={1}
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase
                revenue for BTB, BTC & SASS platform.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto px-6 text-black'>Get
                Started
            </button>
        </div>
    </div>);
}



