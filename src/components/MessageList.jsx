import React from 'react'
import { MessageInfo } from './MessageInfo'

const messages = [
    {
        id: "1",
        from: "The Google Account",
        to: "Me",
        subject: "Shinichi, có người đã theo dõi bạn.",
        timestamp: "14:08"
    },
    {
        id: "2",
        from: "123 accounts",
        to: "Me",
        subject: "Shinichi, có người đã theo dõi bạn",
        timestamp: "14/08"
    },
    // {
    //     id: "3",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "1",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn.",
    //     timestamp: "14:08"
    // },
    // {
    //     id: "2",
    //     from: "123 accounts",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "3",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "1",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn.",
    //     timestamp: "14:08"
    // },
    // {
    //     id: "2",
    //     from: "123 accounts",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "3",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "1",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn.",
    //     timestamp: "14:08"
    // },
    // {
    //     id: "2",
    //     from: "123 accounts",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
    // {
    //     id: "3",
    //     from: "The Google Account",
    //     to: "Me",
    //     subject: "Shinichi, có người đã theo dõi bạn",
    //     timestamp: "14/08"
    // },
]

export const MessageList = ({ className }) => {
    return (
        <section className={`card overflow-y-auto ${className}`}>
            {
                (messages && messages.length) ?
                    messages.map(mess => <MessageInfo key={mess.id} {...mess} />)
                    : <p className='italic font-bold text-xl pl-5'>No messages</p>
            }
        </section>
    )
}
