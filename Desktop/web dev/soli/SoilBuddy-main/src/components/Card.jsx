import React from 'react'
import ok from '../assets/react.svg'

const Card = () => {
  return (
    <>
    <div>
        <div className="flex flex-col md:max-w-6xl md:h-96 items-center bg-white border border-green-100 rounded-lg shadow md:flex-row  hover:bg-green-100 dark:border-green-500 dark:bg-green-800 dark:hover:bg-green-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ok} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-green-700 dark:text-green-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Card