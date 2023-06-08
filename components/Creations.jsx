import React from 'react'

import thumbProtectors from "../public/assets/img4.jpg"
import bowHandProtectors from "../public/assets/img6.jpg"
import quivers from "../public/assets/quiver.jpg"
import pouches from "../public/assets/img2.jpg"
import threeFinger from "../public/assets/img5.jpg"
import bracers from "../public/assets/bracers.jpg"
import bags from "../public/assets/handbag.jpg"
import itemSet from "../public/assets/itemset.jpg"
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

import CollectionItem from './CollectionItem.jsx'
import CollectionItemCustom from './CollectionItemCustom.jsx'

const Creations = () => {

    return (
        <div id='creationId' className='w-full'>
            <div className='max-w-[1440px] mx-12 md:mx-auto px-2 py-36'>
                <h1 className='mb-4 text-3xl tracking-widest text-burgundyleather uppercase py-4 text-center'>Things I Build</h1>
                <div className='grid md:grid-cols-4 gap-8'>
                    <CollectionItemCustom title='Thumb Protector' backgroundImg={thumbProtectors} price=' Base Model Price: 34 €' price2=' 44 € with index protection(in picture)'/>
                    <CollectionItem title='3 Finger Protector' backgroundImg={threeFinger} basePrice='55' />
                    <CollectionItem title='Bow Hand Protector' backgroundImg={bowHandProtectors} basePrice='40' />
                    <CollectionItem title='Quivers' backgroundImg={quivers} basePrice='120' />
                    <CollectionItem title='Pouches' backgroundImg={pouches} basePrice='50' />
                    <CollectionItem title='Bracers' backgroundImg={bracers} basePrice='65' />
                    <CollectionItem title='Bags' backgroundImg={bags} basePrice='150' />

                    <CollectionItemCustom title='Custom Items / Sets' backgroundImg={itemSet} price='Price on demand'/>

                </div>
                <div className='flex justify-center py-12 sm:hidden'>
                    <Link href='/creations/#creationId' >
                        <div className='shadow-lg p-4 bg-grayleather/80 hover:scale-110 ease-in duration-300  shadow-brownleather rounded-full'>
                            <HiOutlineChevronDoubleUp className='text-burgundyleather' size={30}/>
                        </div>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Creations