import React from 'react'
import { ImAttachment } from 'react-icons/im'

// import { CollapsibleField } from '../components/CollapsibleField'
import { Field } from '../components/custom/Field'
import { FileUploader } from '../components/custom/FileUploader'
import { Card } from '../components/custom/Card'

import { FileList } from '../components/FileList'
import { Editor } from '../components/Editor'
import { usePermissionChecker } from '../hooks/usePermissionChecker'
import { Navigate, useLocation } from 'react-router-dom'

const fields = [
    {
        label: "To",
        collapsible: false,
    },
    {
        label: "Cc",
        collapsible: true,

    },
    {
        label: "Bcc",
        collapsible: true,
    },
]

export const Compose = () => {
    console.log("Render Compose")
    return (
        <>
            {/* Fields: To, Cc, Bcc */}
            <Card className='flex flex-wrap justify-end'>
                {
                    fields.map(item =>
                        <Field collapsible={item.collapsible} key={item.label} label={item.label} />)
                }
            </Card>

            {/* Buttons: Send, Attachments */}
            <Card className='flex flex-wrap items-center justify-start'>
                <button className='btn mx-5'>Send</button>
                <FileUploader multiple onChange={(e) => { console.log(e) }} className="flex-1">
                    <ImAttachment className='btn-icon' />
                </FileUploader>
            </Card>

            {/* Attachments */}
            <Card header='Attachments' headerClassName='bg-yellow-300' headerTitle="Click on attachment to remove">
                <FileList className='justify-end' />
            </Card>

            {/* Main: Subject, Editor */}
            <Card className='flex flex-wrap flex-col'>
                {
                    ["Subject"].map(label =>
                        <Field key={label} label={label} className='font-bold text-lg' />
                    )
                }
                <Editor placeholder="Enter your message here ..." />
            </Card>
        </>
    )
}
