import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from'react-icons/hi'

const About = () => {
    return (
        <div id='aboutId' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] md:m-auto md:grid grid-cols-3 gap-8 mx-12'>
                <div className='col-span-2 '>
                    <p className='mt-24 md:mt-8 uppercase text-burgundyleather font-bold tracking-widest text-2xl'>About</p>
                    <h2 className='my-8 text-3xl text-white '>Why I Do What I Do</h2>
                    <div className='text-xl tracking-wider text-gray-800'>
                        <p className='mb-4'>I became a leatherworker by accident. That is more or less the gist of this story.</p>
                        <p>When I caught the traditional archery bug almost five years ago, it was because of the videos by Armin Hirmer.</p>
                        <p>The concept of thumb draw was immediately appealing to me, but for some reason I was not able to find
                            any thumb ring that felt right, and more importantly, comfortable.</p>
                        <p className='mb-4'>Having visited a leathercraft shop a few years before out of interest, I had some scraps still laying around.</p>
                        <p>I started messing with them to find something that worked for me. After a bit of back and forth between Armin and myself, he also reviewed the first version.</p>
                       <p className='mt-8'>Looking back now, it was very rough and basic but it did lay the foundations of where I am today.</p>
                    </div>
                    <h2 className='my-8 text-2xl border-t pt-4 text-white'>So if you would like to join me on this every continuing journey of learning and creating, please let me know and I will try to build you what you want!</h2>
                </div>
                <div className='w-[65%] md:w-full h-auto m-auto shadow-xl bg-redleather/70 shadow-brownleather p-4 hover:scale-105 ease-in duration-300 rounded-xl flex items-center justify-center'>
        <Image src='/../public/assets/about.jpg' alt='about' width='400' height='350' className='rounded-xl'/>
                </div>
                <div className='flex justify-center py-12 sm:hidden'>
                    <Link href='/about/#aboutId' >
                        <div className='shadow-lg p-4 bg-grayleather/80 hover:scale-110 ease-in duration-300  shadow-brownleather rounded-full'>
                            <HiOutlineChevronDoubleUp className='text-burgundyleather' size={30}/>
                        </div>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default About