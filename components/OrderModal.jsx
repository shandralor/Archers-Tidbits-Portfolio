import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const OrderModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div onClick={onClose} className='fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center mb-8'>
            <div onClick={(e) =>{e.stopPropagation()}} className='text-white w-[75%] md:w-[40%]  bg-brownleather rounded-md p-16 max-h-[95vh] overflow-y-auto relative'>
            <div onClick={onClose} className='cursor-pointer bg-slate-200 absolute top-3 right-3 rounded-full shadow-lg shadow-tanleather p-3 hover:shadow-slate-200 ' ><AiOutlineClose size={25} className='text-burgundyleather'/></div>
                <h1 className='text-center py-4 text-slate-200 uppercase border-y border-'>What would you like ?</h1>
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="d7b12061-a8f9-4365-be3a-a1caea4e1e51"/>
                    <div class="h-captcha" data-captcha="true"></div>
                    <div className ="flex flex-row justify-even">
                    <input type='text' name='name' required placeholder='Name' className='my-4 p-2 rounded-md text-redleather text-lg' />
                    <input type='email' name='email' required placeholder='Email' className='my-4 p-2 rounded-md text-redleather text-lg' />
                    </div>
                    
                    <p className='mb-2 sm:mb-0 px-1 border-t mt-2 text-2xl md:text-xl'>I want a :</p>
                    <div className='my-4 gap-2 justify-around flex flex-col xl:flex-row border-2 rounded-md p-2 text-xl md:text-lg'>

                        <label className='mb-2 sm:ml-2'>
                            <input type='radio' name='orderOption' value='Thumb Protector' />
                            <span className='ml-2'>Thumb Protector</span>
                        </label>
                        <label className='mb-2 sm:ml-2'>
                            <input type='radio' name='orderOption' value='Slavic Draw Protector' />
                            <span className='ml-2'>Slavic Draw Protector</span>
                        </label>

                        <label className='mb-2 sm:ml-2'>
                            <input type='radio' name='orderOption' value='Bow Hand Protector' />
                            <span className='ml-2'>Bow Hand Protector</span>
                        </label>

                        <label className='mb-2 sm:ml-2'>
                            <input type='radio' name='orderOption' value='Something else' />
                            <span className='ml-2'>Something else (please specify below)</span>
                        </label>
                    </div>
                    <p className='mb-2 sm:mb-0 px-1 text-xl md:text-lg'>OPTIONAL (In case of the last option above):</p>
                    <textarea name='specific_order' placeholder='Specify your request' rows='4' className='my-4 p-2 rounded-md text-burgundyleather text-lg' />
                    <p className='mb-2 sm:mb-0 px-1 border-t mt-2 text-2xl md:text-xl'>Color preferences: </p>
                    <div className= "flex justify-even"> 
                        <input type='text' name='leather_color' required placeholder='Leather color preference' className='my-4 p-2 rounded-md text-burgundyleather text-lg' />
                    <input type='text' name='stitching_color' required placeholder='Stitching/cord color preference' className='my-4 p-2 rounded-md text-burgundyleather text-lg' />
                    </div>
                   
                    <textarea name='other_remarks' placeholder='Other remarks' rows='6' className='my-4 p-2 rounded-md text-burgundyleather text-lg' />

                    <div className='flex flex-col  font-extrabold '>
                        
                        <button type='submit' className='mb-4 bg-[#417341] hover:bg-[#67a65d] py-2 tracking-widest'>Send</button>
                        <button onClick={onClose} className='bg-burgundyleather hover:bg-red-600/90 py-2 tracking-widest'>Cancel</button>
                    </div>
                </form>
            </div>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </div>
    );
};
