import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/quill.css';

const CUSTOM_QUILL = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'align': [] }],


        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction



        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        ['link', 'image', 'video'],

        // ['clean'],
    ],
    history: {
        delay: 5000, // Undo/Redo changes within `delay` ms
        maxStack: 50, // Max change records stored in Undo/Redo Stack
        userOnly: true // Record change from User only (not from Program)
    }
}

export const Editor = ({ className, placeholder }) => {
    // const [value, setValue] = useState('');
    return (
        <ReactQuill theme='snow' placeholder={placeholder} className={className} modules={CUSTOM_QUILL} />
    );
}
