import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { BsStar, BsStarFill, BsTrash, BsArrowRight } from 'react-icons/bs'
import { Modal } from './custom/Modal';

export const MessageInfo = ({ from, to, subject, timestamp }) => {
    const [isShown, setIsShown] = useState(false);
    const favorite = true;
    return (
        <div className='flex flex-col p-2 border-b-2 cursor-pointer hover:bg-primary-50 active:bg-secondary-50'
            onClick={() => setIsShown(prev => !prev)}>
            <div className='flex justify-between items-center gap-7'>
                <span className='italic text-ellipsis overflow-hidden whitespace-nowrap'>{subject}</span>
                <ul className='flex gap-4'>
                    <li className='btn-icon text-yellow-400'>{favorite ? <BsStarFill /> : <BsStar />}</li>
                    <li className='btn-icon text-red-600 active:text-red-600'><BsTrash /></li>
                </ul>
            </div>
            <div className='text-sm flex items-center justify-between'>
                <span className='w-2/5'>{from}</span>
                <span className='mr-3'><BsArrowRight /></span>
                <span className='w-2/5'>{to}</span>
                <span className='w-1/10'>{timestamp}</span>
            </div>
            {/* {isShown && createPortal(<Modal>Message Info</Modal>, document.body)} */}
        </div>
    )
}
