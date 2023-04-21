import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg2 from './img2.jpg'
function Hero() {
  return (
    <>
      <main className='w-full h-screen'
        style={{
          backgroundImage: `url(${HeroImg2})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className='h-screen bg-black bg-opacity-70 text-white font-semibold flex justify-center flex-col items-center px-10' >
          <h1 className='text-3xl md:text-7xl mb-5 text-center'>Saving Our Planet Together ,<br /> One Challenge at a time</h1>
          <button className='px-5 py-3 md:px-10 md:py-5 rounded-md bg-green-500 hover:bg-green-900'>
            <Link to='/donate'>Donate</Link>
          </button>

        </div>




      </main>
    </>
  )
}

export default Hero
