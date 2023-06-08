import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'



const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed z-10 w-full h-25 shadow-xl  mb-2 bg-slate-100'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div className='flex items-center'>
                    <Link href='/'>
                    <Image src='/../public/assets/logo_no_text.png' alt='logo' width='100' height='50' className='mt-2' />
                    </Link><Link href='/'>
                        <h1 className='uppercase text-burgundyleather'>Archers Tidbits</h1>
                </Link>
                </div>
                
                <div>
                    <ul className='hidden lg:flex text-brownleather'>
                        <Link href='/'>
                            <li className='ml-24 text-xl font-bold uppercase hover:border-b border-gray-400'>Home</li>
                        </Link>
                        <Link href='/about'>
                            <li className='ml-24 text-xl font-bold uppercase hover:border-b border-gray-400'>About</li>
                        </Link>
                        <Link href='/creations'>
                            <li className='ml-24 text-xl font-bold uppercase hover:border-b border-gray-400'>Creations</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='ml-24 text-xl font-bold uppercase hover:border-b border-gray-400'>Contact</li>
                        </Link>

                    </ul>
                    <div onClick={handleNav} className='lg:hidden mr-4 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600' >
                        <AiOutlineMenu size={25} />
                    </div>

                </div>

            </div>

            {/*Mobile menu*/}
            <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-200 p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/logo_no_text.png' alt='logo' width='60' height='35' className='mt-2' />
                            <h1 className='uppercase text-xl text-burgundyleather'>Archers Tidbits</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 '>
                                <AiOutlineClose className='text-burgundyleather'/>
                            </div>
                        </div>
                        <div className='border-y text-center mt-4  border-redleather'>
                            <p className=' py-4 tracking-widest font-bold text-lg text-redleather'>Let's Build Your Favorite Gear</p>
                        </div >
                    </div>
                    <div className='py-4 flex flex-col '>
                        <ul >
                            <Link href='/'>
                                <li className=' py-4 text-xl font-bold uppercase text-redleather hover:border-b hover:text-burgundyleather'>Home</li>
                            </Link>
                            <Link href='/about'>
                                <li className=' py-4 text-xl font-bold uppercase text-redleather hover:border-b  hover:text-burgundyleather'>About</li>
                            </Link>
                            <Link href='/creations'>
                                <li className=' py-4 text-xl font-bold uppercase text-redleather hover:border-b  hover:text-burgundyleather'>Creations</li>
                            </Link>
                            <Link href='/contact'>
                                <li className=' py-4 text-xl font-bold uppercase text-redleather hover:border-b  hover:text-burgundyleather'>Contact</li>
                            </Link>
                        </ul>
                        <div className='mt-5 pt-5 border-t border-redleather '>
                            <p className='uppercase tracking-widest text-burgundyleather font-bold text-xl '>Let's Connect</p>
                            <div className='items-center flex justify-between my-8 w-full '>
                                <div className='text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-blue-500'>
                                    <Link href='https://www.facebook.com/MakeItTeck'><FaFacebook /></Link>
                                </div>
                               
                                <div className='text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-red-600'>
                                    <Link href='https://www.instagram.com/archers_tidbits/'>
                                    <FaInstagram />
                                </Link>                                   
                                </div>
                                <div className='text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-green-500'>
                                    <Link href='mailto:tom.teck@gmail.com'><HiOutlineMail /></Link>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar