import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

// Shown once per browser session on any page: no new orders for now.
const SEEN_KEY = 'closedNoticeSeen';

export const ClosedNotice = () => {
    const [open, setOpen] = useState(false);

    // sessionStorage only exists in the browser, so decide after mounting (next tick, not during the effect).
    useEffect(() => {
        let seen = false;
        try {
            seen = Boolean(sessionStorage.getItem(SEEN_KEY));
        } catch {}
        if (seen) return;
        const id = setTimeout(() => setOpen(true), 0);
        return () => clearTimeout(id);
    }, []);

    const close = () => {
        setOpen(false);
        try {
            sessionStorage.setItem(SEEN_KEY, '1');
        } catch {}
    };

    if (!open) return null;

    return (
        <div onClick={close} className='fixed z-[1000] inset-0 flex justify-center items-center bg-black/50 p-4'>
            <div
                role='dialog'
                aria-modal='true'
                aria-labelledby='closed-notice-title'
                onClick={(e) => e.stopPropagation()}
                className='text-slate-100 w-full max-w-lg bg-brownleather rounded-md p-8 md:p-12 max-h-[90vh] overflow-y-auto relative shadow-xl'
            >
                <button
                    onClick={close}
                    aria-label='Close'
                    className='cursor-pointer bg-slate-200 absolute top-3 right-3 rounded-full shadow-lg shadow-tanleather p-2 hover:shadow-slate-200'
                >
                    <AiOutlineClose size={22} className='text-burgundyleather' />
                </button>
                <h2 id='closed-notice-title' className='text-center py-3 text-2xl uppercase border-y border-slate-200/60'>
                    A small announcement
                </h2>
                <p className='mt-6 text-lg leading-relaxed'>
                    For now I am no longer able to make any items, due to current family and professional requirements.
                </p>
                <p className='mt-4 text-lg leading-relaxed'>
                    Thank you to everyone who has bought from me in the past. Maybe we&apos;ll see each other in the future.
                </p>
                <button
                    onClick={close}
                    className='mt-8 w-full bg-burgundyleather hover:bg-red-600/90 py-2 font-extrabold tracking-widest rounded-md'
                >
                    Close
                </button>
            </div>
        </div>
    );
};
