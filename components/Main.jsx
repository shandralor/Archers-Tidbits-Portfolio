import React, { useState } from 'react'
import Image from 'next/image'
import { OrderModal } from "../components/OrderModal";
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'
import img4 from '../public/assets/img4.jpg'
import img5 from '../public/assets/img5.jpg'
import img6 from '../public/assets/img6.jpg'


const Main = () => {

    const [modal, setModal] = useState(false);

    return (

        <div className='w-full h-screen text-center  pt-32 '>
            <OrderModal open={modal} onClose={() => setModal(false)} />
            <div className='max-w-[1240px]  mx-auto p-2 flex justify-center items-center'>
                <div className='flex flex-col '>
                    <div className='mx-4'>
                        <h1 className='py-8 text-brownleather'>Hi, my name is <span className='text-tanleather'>Tom</span></h1>
                        <h1 className='py-2 text-brownleather'>I am an archer and a leatherworker</h1>
                        <button onClick={() => setModal(true)} className='uppercase text-lg tracking-widest my-4 2xl:my-16 text-white bg-tanleather p-2 hover:shadow-lg hover:shadow-[#57403e] hover:bg-burgundyleather'>
                            Click To Build Your Gear
                        </button>
                    </div>

                </div>

            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-none '>
                <div className='md:grid-cols-1 2xl:hidden justify-center'>
                    <Image src={img1} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                    <Image src={img2} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                    <Image src={img3} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                </div>
                <div className='md:grid-cols-1 2xl:hidden'>
                    <Image src={img4} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                    <Image src={img5} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                    <Image src={img6} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0  mx-auto shadow-xl shadow-white' />
                </div>
                <div className='hidden 2xl:flex 2xl:flex-row  2xl:justify-between'>
                    <Image src={img1} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    <Image src={img2} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    <Image src={img3} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    <Image src={img4} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    <Image src={img5} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    <Image src={img6} alt='logo' width='250' height='250' className='rounded-full my-4 2xl:my-0 xl:mx-4 mx-auto shadow-xl shadow-white' />
                    </div>
            </div>

            


        </div>

    )
}

export default Main