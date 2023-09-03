import React, { useState } from 'react'

const data = [
    {
        name: "helloworld.txt",
        mime: "text/plain",
    },
    {
        name: "verylong-long-long-long-name.jpeg",
        mime: "images/jpeg",
    },
    {
        name: "video.mp4",
        mime: "video/mp4",
    },
    {
        name: "a.x",
        mime: "text/plain",
    },
    {
        name: "verylong-long-long-long-name.jpeg",
        mime: "other/plain",
    },
    {
        name: "video.mp4",
        mime: "application/pdf",
    },
    {
        name: "a.x",
        mime: "text/plain",
    },
    {
        name: "video.mp4",
        mime: "text/plain",
    },
]

export const FileItem = ({ filename }) => {
    return (
        <button className='btn-secondary'>
            {filename}
        </button>
    )
}

export const FileList = ({ files, onItemClick, className }) => {
    // const [files, setFiles] = useState(data);
    const value = files ? files : data;
    return (
        <ul className={`flex items-center flex-wrap gap-2 ${className}`}>
            {
                value.map((file, index) =>
                    <li key={index} onClick={onItemClick} className='btn-secondary'>
                        {file.name}
                        {/* <FileItem filename={file.name} /> */}
                    </li>
                )
            }
        </ul>
    )
}
