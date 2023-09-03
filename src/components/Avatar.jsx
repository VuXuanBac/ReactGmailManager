import React from 'react'

import { TooltipContainer } from './custom/TooltipContainer'
import { DialogContainer } from './custom/DialogContainer';

export const Avatar = ({ account }) => {
    const color = "#" + (((1 + Math.random()) * (1 << 24) | 0).toString(16)).slice(-6) + "44";

    return (
        <>
            <DialogContainer style={{ backgroundColor: color }}
                className='rounded-full w-12 h-12 p-2 m-auto text-center cursor-pointer'
                dialog={
                    <span className="bg-white border border-black rounded-lg text-xs w-fit whitespace-nowrap p-2">
                        Gmail: <a href="https://mail.google.com/mail/u/0/" target='_blank'><b>{account}</b></a>
                    </span>
                }
                dialogStyle={{ position: "relative", right: "0.5rem", bottom: "-1.25rem" }}
            >
                <span className='text-xl font-bold text-tertiary-500'>
                    {account[0].toUpperCase()}
                </span>
            </DialogContainer>
            {/* <TooltipContainer style={{ backgroundColor: color }}
                className='rounded-full w-12 h-12 p-2 m-auto text-center cursor-pointer'
                tooltip={
                    <span className="bg-white border border-black rounded-lg text-xs w-fit whitespace-nowrap p-2">
                        Gmail: <b>{account}</b>
                    </span>
                }
                tooltipStyle={{ position: "relative", right: "0.5rem", bottom: "-1.25rem" }}
            >
                <span className='text-xl font-bold text-tertiary-500'>
                    {account[0].toUpperCase()}
                </span>
            </TooltipContainer> */}
        </>
    )
}
