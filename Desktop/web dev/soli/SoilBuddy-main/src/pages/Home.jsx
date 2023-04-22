import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='App'>
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: 'url("../images/green-1117267.jpg")', height: 600 }}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl heading-main">SOILBUDDY</h2>
              <h4 className="mb-6 text-xl ">Sowing the seeds of sustainability</h4>
              <button type="button" className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light">
                <Link to='/form'> Predict Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>







      <div className='text-center px-40 py-50 text-3xl'>
        <h1 className='text-7xl p-10 pt-20'>Hi, We are soilbuddy</h1>
        <div className='p-10 px-10 mx-20'><p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis consequatur, ipsum quisquam facere, a aperiam libero vel aliquid odit dicta enim sequi voluptate tenetur saepe est similique eos dignissimos!</p>
        </div></div>
      <div className='grid p-10 py-10 space-y-7'>
        <section id='Test' className='grid col-1 justify-center space-y-12 w-auto'>
          <Link to="/form"><Card /></Link>
          <Card />
        </section>
      </div>
    </div>
  )
}

export default Home