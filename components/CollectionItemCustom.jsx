import React from 'react'

import Image from 'next/image.js'

const CollectionItem = ({title, backgroundImg, price, price2}) => {
    return (
        <div>
            <div className='relative z-0 flex items-center justify-center h-auto bg-redleather/70
                    w-full shadow-xl shadow-tanleather rounded-xl p-4 group hover:shadow-tanleather/50'>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl xl:text-4xl text-white tracking-wider text-center '>
                        {title}
                    </h3>
                    <p className='xl:pb-4 xl:pt-6 pt-1 pb-1 text-white text-center text-lg xl:text-xl font-bold '>{price}</p>
                    <p className='xl:pb-4 xl:pt-6 pt-1 pb-1 text-white text-center text-lg xl:text-xl font-bold'>{price2}</p>
                </div>
            </div>

        </div>
    )
}

export default CollectionItem