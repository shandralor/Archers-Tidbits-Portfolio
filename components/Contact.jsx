import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import contact from "../public/assets/contact.jpg"
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp, HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contactId' className='w-full h-screen'>
            <div className='max-w-[1240px] m-auto px-2 pt-36 w-full '>
                <p className='mt-24 md:mt-8 uppercase text-burgundyleather font-bold tracking-widest text-4xl text-center'>Contact</p>

                <div className='grid lg:grid-cols-5 gap-8 mt-4 text-white justify-center'>
                    {/*Left col*/}
                    <div className='bg-tanleather/50 col-span-3 lg:col-span-2 w-full h-full shadow-xl  shadow-tanleather rounded-xl p-4 '>
                        <div className='lg:p-4 h-full '>
                            <div className='items-center'>
                                <Image src={contact} height={350} className='rounded-xl hover:scale-105 ease-in duration-300 mx-auto' />
                            </div>
                            <div className=''>
                                <h2 className='pt-6  text-3xl text-center'>Tom Teck</h2>
                                <p className='italic my-4 text-center text-2xl border-y border-burgundyleather text-burgundyleather'>Leatherworking and Archery</p>
                            </div>
                            <div>
                                <p className='uppercase pt-6 text-xl text-center'>Contact Me Through</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='bg-tanleather/80 text-xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-blue-500'>
                                        <Link href='https://www.facebook.com/MakeItTeck'><FaFacebook /></Link>
                                    </div>
                                    <div className='text-xl bg-tanleather/80 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-red-600'>
                                        <Link href='https://www.instagram.com/archers_tidbits/'>
                                            <FaInstagram />
                                        </Link>
                                    </div>
                                    <div className='text-xl bg-tanleather/80 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-600 hover:scale-105 hover:text-green-500'>
                                        <Link href='mailto:tom.teck@gmail.com'><HiOutlineMail /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*Right col*/}
                    <div className='bg-tanleather/50 col-span-3  w-full h-full shadow-xl  shadow-tanleather rounded-xl '>
                        <div className='p-4'>
                            <form action='https://getform.io/f/4a37df59-81b6-4205-b92a-a2fa58b7f2d7' method='POST'>
                                <div className='grid md:grid-cols-2 gap-5 w-full py-2'>
                                <input type='hidden' name='_gotcha' style={{ display: 'none !important' }} />
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-md py-2'>Name</label>
                                        <input required name='name' className='border-2 rounded-lg p-3 flex border-brownleather text-gray-800' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-md py-2'>First Name</label>
                                        <input required name='first_name' className='border-2 rounded-lg p-3 flex border-brownleather text-gray-800' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-md py-2'>Email</label>
                                    <input required name='email' className='border-2 rounded-lg p-3 flex border-brownleather text-gray-800' type="email" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-md py-2'>Subject</label>
                                    <input required name='subject' className='border-2 rounded-lg p-3 flex border-brownleather text-gray-800' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-md py-2'>Message</label>
                                    <textarea required name='message' rows='8' className='border-2 rounded-lg p-3 flex border-brownleather text-gray-800' type="text" />
                                </div>
                                <button type='submit' className='my-4 w-full text-xl bg-[#417341] hover:bg-[#67a65d] py-3 tracking-widest'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12 sm:hidden'>
                    <Link href='/contact/#contactId' >
                        <div className='shadow-lg p-4 bg-grayleather/80 hover:scale-110 ease-in duration-300  shadow-brownleather rounded-full'>
                            <HiOutlineChevronDoubleUp className='text-burgundyleather' size={30} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact