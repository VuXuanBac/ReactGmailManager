import React, { useState } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'


export const Header = () => {
    const isSignedIn = true;
    const [isCollapse, setIsCollapse] = useState(false);
    // const { isSignedIn } = useAuthContext();
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
                        {
                            (isSignedIn) ?
                                (<button className='btn'>Sign out</button>)
                                :
                                (<>
                                    <button className='btn'>Sign in</button>
                                    <fieldset className="ml-4 text-xs lg:text-base">
                                        <label className='flex items-center'>
                                            <input type="checkbox" name="rememberMe" className='mr-1' />
                                            Remember Me
                                        </label>
                                    </fieldset>
                                </>)
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
