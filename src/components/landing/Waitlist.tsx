import React from 'react'
import wtlist from '../../assets/waitlist.svg'
// @ts-ignore
import validator from 'validator'
import { firebaseRef } from '../../config/firebase'
import firebase from 'firebase'

const Waitlist: React.FC = () => {

    //users signup for the waitlist
    const addToWaitlist = async () => {
        const email = emailRef.current?.value
        if(validator.isEmail(email)){
            try {
                const res = await firebaseRef.collection(`waitlist`).add({
                    email,
                    registered_at: firebase.firestore.Timestamp.now()
                })
                alert(`Thank you for signing up, we'll contact you within 24 hours.`)
            }
            catch(err){
                console.error(err)
            }
        }
        else {
            console.error('Please enter a valid email id.')
        }
    }

    var emailRef = React.useRef<HTMLInputElement | null>(null)

    return(        
        <div style={{fontFamily:"'Krub', sans-serif"}} className=" px-6 py-6  md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className=" relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className="text-2xl font-semibold font-display text-gray-900 sm:text-3xl">
                    Join our exclusive waitlist!
                </h2>
                <p className="mt-2 max-w-xl text-base text-gray-700">
                    We'll get back to you within 24 hours to schedule a demo & custom integrations for your store.
                </p>
                <div>
                    <div className="sm:flex jusitfy-start mt-6">
                        <div className="flex w-full max-w-sm space-x-3">
                            <div className=" relative ">
                                <input ref={emailRef} type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                            </div>
                            <button onClick={() => addToWaitlist()} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:left-2/3 xl:left-1/2 right-0">
                <img src={wtlist} alt=""/>
            </div>
        </div>
    )
}

export default Waitlist