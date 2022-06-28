import React from 'react'

export default function HeroSection() {
  return (
    <div className='font-scp bg-zinc-100 dark:bg-zinc-700 transition-colors duration-300 flex flex-col md:grid md:grid-cols-6 py-20 items-center md:items-end'>
      <div id="image" className='md:col-start-1 lg:col-start-1 lg:col-span-3 md:col-span-3 md:place-self-auto'>  
        <img src='/src/refs/pfp.png' alt='profile' className=' w-56 m-auto sm:w-80 md:w-96 lg:w-96 transition ease-in-out duration-300 rounded-full border-4 md:border-8 border-emerald-400 dark:border-green-400 hover:scale-105' />
      </div>
      <div id="text" className='col-start-4 col-span-3 md:pr-20'>
        <h1 className='text-center md:text-right transition ease-in-out duration-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 pt-5 md:pt-0 md:mb-3 text-green-400 dark:text-emerald-400 font-bold hover:scale-110'>john</h1>
        <h1 className='text-center md:text-right transition ease-in-out duration-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 md:mb-3 text-emerald-400 dark:text-green-400 font-bold hover:scale-110'>lorenzini</h1>
        <div id="icons" class='pb-5 md:pb-10 flex flex-row justify-center md:justify-end'>
          <a href='https://www.linkedin.com/in/jlorenzi/' target='_blank' rel='noopener noreferrer' className=''>
            <img src="/src/refs/LI-In-Bug.png" alt="connect on linkedin" class="transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert mr-1 mx-1 w-6 pt-2 sm:w-12"></img>
          </a>
          <a href='https://github.com/johnlorenzini' target='_blank' rel='noopener noreferrer' className=''>
            <img src="/src/refs/gh.png" alt="connect on linkedin" class="transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert mx-2 w-5 pt-2 sm:w-10"></img>
          </a>
          <a href='https://www.instagram.com/johnloren99/' target='_blank' rel='noopener noreferrer' className=''>
            <img src="/src/refs/ig.png" alt="connect on linkedin" class="transition duration-300 ease-in-out saturate-0 dark:brightness-200 hover:scale-110 dark:invert-0 dark:hover:brightness-100 hover:invert-0 hover:cursor-pointer hover:saturate-100 invert  w-5 mx-2 pt-2 sm:w-10"></img>
          </a>
        </div>
        <p className='font-medium text-center md:text-right text-zinc-700 dark:text-zinc-50 text-xs px-10 md:px-0 md:text-lg md:pl-20'>Developer</p>
        <p className='font-medium text-center md:text-right text-zinc-700 dark:text-zinc-50 text-xs px-10 md:px-0 md:text-lg md:pl-20'>Computer Science Student at <a href="https://www.uci.edu" alt="UC Irvine" target="_blank" class="transition ease-in-out duration-300 underline decoration-2 underline-offset-2 md:underline-offset-4 md:decoration-4 decoration-emerald-400 hover:decoration-yellow-500">UC Irvine</a></p>
      </div>
    </div>
  )
}