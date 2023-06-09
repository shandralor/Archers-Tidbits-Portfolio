import React from 'react'
import Image from 'next/image.js'

const CollectionItem = ({title, backgroundImg, basePrice}) => {
    return (
        <div>
            <div className='relative z-0 flex items-center justify-center h-auto bg-redleather/70
                    w-full shadow-xl shadow-tanleather rounded-xl p-4 group hover:shadow-tanleather/50'>
                <Image  className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={title} />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-4xl text-white tracking-wider text-center'>
                        {title}
                    </h3>
                    <p className='pb-4 pt-6 text-white text-center text-xl font-bold'>Base Model Price: {basePrice} € </p>
                </div>
            </div>

        </div>
    )
}

export default CollectionItem