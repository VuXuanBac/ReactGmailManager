import React from 'react'
import { BsFillReplyFill, BsTrash } from 'react-icons/bs'
import { RiSpamFill } from 'react-icons/ri'
import { MdMarkunread } from 'react-icons/md'

import { Field } from './custom/Field'
import { Card } from './custom/Card'

import { Viewer } from './Viewer'
import { FileList } from './FileList'
import { LabelList } from './LabelList'

const data = {
    From: {
        value: "noreply@gmail.com",
    },
    To: {
        value: "shinichikudovu712@gmail.com",
    },
    Cc: {
        value: "123 Accounts",
    },
    Subject: {
        value: "Hello World. Đây là email kiểm thử"
    },
    Content: {
        value: "<html><body><p>Xin chào</p><b>This is a simple program for reading and composing email with Gmail</b>" + "<br>".repeat(100) + "</body></html>"
    },
    Attachments: {
        value: [
            {
                name: "Hello",
            },
            {
                name: "World",
            },
        ]
    },
    Labels: {
        value: [
            {
                name: "Inbox"
            },
            {
                name: "Custom"
            }
        ]
    },
    Buttons: [
        {
            key: "reply",
            element: <BsFillReplyFill className="text-green-600" />,
            title: "Reply",
        },
        {
            key: "trash",
            element: <BsTrash className="text-red-600" />,
            title: "Move to Trash",
        },
        {
            key: "spam",
            element: <RiSpamFill className="text-amber-600" />,
            title: "Mark as Spam",
        },
        {
            key: "unread",
            element: <MdMarkunread className="text-slate-600" />,
            title: "Mark as Unread",
        },
    ]
}

export const MessageDetail = () => {
    return (
        <article className='flex flex-col gap-3'>
            {/* Labels */}
            {
                ("Labels" in data) &&
                <Card header='Labels' headerClassName='w-28' headerTitle="Click on label to remove">
                    <LabelList labels={data["Labels"].value} onItemClick={() => { }} />
                </Card>
            }

            {/* Fields: To, Cc, Bcc */}
            <Card className='flex flex-wrap justify-end'>
                {
                    ["From", "To", "Cc", "Bcc"].map(label => {
                        return (label in data) &&
                            <Field key={label} label={label} editable={false} value={data[label].value} />
                    })
                }
            </Card>

            {/* Attachments:  */}
            {
                ("Attachments" in data) &&
                <Card header='Attachments' headerClassName='w-28' headerTitle="Click on attachment to download">
                    <FileList files={data["Attachments"].value} onItemClick={() => { }} />
                </Card>
            }

            {/* Buttons: Reply, Trash */}
            {
                ("Buttons" in data) &&
                <Card className='flex flex-wrap items-center justify-start sticky top-0'>
                    {
                        data["Buttons"].map(btn => (
                            <span key={btn.key} className='btn-icon text-xl mr-5' title={btn.title}>
                                {btn.element}
                            </span>
                        ))
                    }
                </Card>
            }


            {/* Main: Subject, Viewer */}
            <Card className='flex flex-col flex-auto'>
                {
                    ["Subject"].map(label =>
                        <Field key={label} label={label} editable={false} value={data[label].value} className='font-bold text-lg' />
                    )
                }
                <Viewer value={data["Content"].value} />
            </Card>
        </article>
    )
}
