import React from 'react'
import ok from '../assets/react.svg'
const Footer = () => {
    return (
        <>

            <footer className="bg-gradient-to-l from-green-700 to-lime-500 h-[25h]  text-white shadow dark:bg-gray-700 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src={ok} className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SoilBuddy</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-white sm:mb-0 dark:text-white0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>                    <span className="block text-base pt-4 text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">SoilBuddy™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer