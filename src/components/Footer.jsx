import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
function Footer(){
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>INFINITY</h1>
                <p className='py-4'>Infinity specializes in data analytics, transforming complex data into actionable
                    insights. Our expertise drives better decision-making and innovation, ensuring success in today's
                    data-driven world.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                <FaFacebookSquare className='cursor-pointer hover:text-[#00df9a]' size={30}/>
                <FaInstagramSquare className='cursor-pointer hover:text-[#00df9a]' size={30}/>
                <FaTwitterSquare className='cursor-pointer hover:text-[#00df9a]' size={30}/>
                <FaGithubSquare className='cursor-pointer hover:text-[#00df9a]' size={30}/>
                <FaDribbbleSquare className='cursor-pointer hover:text-[#00df9a]' size={30}/>
            </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'> Analytics</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Marketing</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Commerce</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Insights</li>

                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'> Pricing</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Documentation</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Guides</li>
                        <li className=' cursor-pointer hover:text-[#00df9a] py-2 text-sm'>API Status</li>

                    </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'> About</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Blog</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Jobs</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Press</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Careers</li>

                    </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'> Claim</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Policy</li>
                        <li className='cursor-pointer hover:text-[#00df9a] py-2 text-sm'>Terms</li>
                    </ul>
                </div>



            </div>


        </div>
    )
}
export default Footer;
