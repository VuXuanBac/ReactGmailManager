import React from 'react'
import DOMPurify from 'dompurify'

export const Viewer = ({ value }) => {
    return (
        <div className='border p-2'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}>
        </div>
    )
}
