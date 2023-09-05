/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
// import { useFetcher } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

export const Header = () => {
    console.log("Render Header")
    // const [isSignedIn, setIsSignedIn] = useState(false)
    const [isCollapse, setIsCollapse] = useState(false)
    const rememberRef = useRef(null)

    const { isSignedIn, authorizator } = useAuthContext()

    const handleButtonClick = () => {
        if (!isSignedIn) {
            // Sign in
            authorizator.init(rememberRef.current.checked)
        }
        else {
            if (confirm("Do you want to sign out from Google")) {
                authorizator.revoke()
            }
        }
    }

    // const fetcher = useFetcher()

    const message = isSignedIn ? "OK! You have already signed in." : "You need to sign in with Google";
    return (
        <header>
            <div className={`border-b-2 border-tertiary-500 ${isCollapse ? "hidden" : ""}`}>
                <p className='w-full md:w-1/2 mt-3 text-center border-b-2 font-handscript text-3xl mx-auto'>
                    Xin chào! This is a simple program for reading and composing email with Gmail
                </p>
                <section className='w-full md:w-3/4 lg:w-2/3 flex py-3 items-center justify-evenly mx-auto'>
                    <p className={`w-1/2 overflow-hidden font-bold ${isSignedIn ? "text-tertiary-400" : "text-primary-600"}`}>
                        {message}
                    </p>
                    <div className='flex items-center justify-center'>
                        {/* <fetcher.Form method='post' action='/'> */}
                        <button className='btn' type="submit" name='auth' value={isSignedIn ? 'signout' : 'signin'}
                            onClick={handleButtonClick}>
                            {isSignedIn ? "Sign out" : "Sign in"}
                        </button>
                        {/* </fetcher.Form> */}
                        {
                            !isSignedIn && (
                                <label className='flex items-center ml-4 text-xs lg:text-base'>
                                    <input type="checkbox" name="rememberMe" className='mr-1' ref={rememberRef} />
                                    Remember Me
                                </label>
                            )
                        }

                    </div>
                </section>
            </div>
            {
                isSignedIn && <button onClick={() => setIsCollapse(prev => !prev)} className='float-right text-primary-600 text-xl mr-5 mt-3'>
                    {
                        isCollapse ? <BiSolidDownArrow /> : <BiSolidUpArrow />
                    }
                </button>
            }
        </header>
    )
}
