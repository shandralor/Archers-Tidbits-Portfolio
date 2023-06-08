import React, {useState} from 'react'
import Image from 'next/image'
import { OrderModal } from "../components/OrderModal";


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
                        <button onClick={() => setModal(true)}  className='uppercase text-lg tracking-widest my-4 2xl:my-16 text-white bg-tanleather p-2 hover:shadow-lg hover:shadow-[#57403e] hover:bg-burgundyleather'>
                            Click To Build Your Gear
                        </button>
                    </div>

                </div>

            </div>
            <div className='flex flex-col  xl:flex-row  mb-8 xl:justify-between'>
                <Image src='/../public/assets/img1.jpg' alt='logo' width='350' height='350' className='rounded-full  my-4 md:my-0  xl:mx-4 mx-auto' />
                <Image src='/../public/assets/img2.jpg' alt='logo' width='350' height='350' className='rounded-full my-4 md:my-0  xl:mx-4 mx-auto' />
                <Image src='/../public/assets/img3.jpg' alt='logo' width='350' height='350' className='rounded-full my-4 md:my-0  xl:mx-4 mx-auto'/>
                <Image src='/../public/assets/img4.jpg' alt='logo' width='350' height='350' className='rounded-full my-4 md:my-0  xl:mx-4 mx-auto' />
                <Image src='/../public/assets/img5.jpg' alt='logo' width='350' height='350' className='rounded-full my-4 md:my-0  xl:mx-4 mx-auto' />
                <Image src='/../public/assets/img6.jpg' alt='logo' width='350' height='350' className='rounded-full my-4 md:my-0  xl:mx-4 mx-auto' />
            </div>
            
        </div>
    )
}

export default Main