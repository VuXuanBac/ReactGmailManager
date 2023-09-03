import React from 'react'
import { BsFillEnvelopeFill, BsCollection } from 'react-icons/bs'

import { SearchBox } from '../components/custom/SearchBox'
import { MessageList } from '../components/MessageList'
import { Card } from '../components/custom/Card'

export const Inbox = () => {
    const threadsTotal = 99;
    const messagesTotal = 123;
    return (
        <>
            <Card className='flex flex-wrap items-center sticky top-0'>
                <span className='flex items-center mx-2 gap-2 flex-1'>
                    {messagesTotal} <BsFillEnvelopeFill className='mr-5' /> {threadsTotal} <BsCollection />
                </span>
                <SearchBox className="w-1/2" />
            </Card>
            {/* <section className="card flex flex-row justify-between sticky top-0">
                <span className='flex items-center mx-2 gap-2'>
                    {messagesTotal} <BsFillEnvelopeFill /> {threadsTotal} <BsCollection />
                </span>
                <SearchBox className="w-1/2" />
            </section> */}
            <MessageList className="max-h-[95vh]" />
        </>
    )
}
