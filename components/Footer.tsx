import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-7' id="contact">
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:abdulsamikhan396@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 flex-col justify-between items-center md:flex-row'>
            <p className='md:text-base text-sm font-light md:font-normal'>
                Copyright © 2024 Abdul Sami
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer justify-center items-center flex backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 '>
                        <img src={profile.img} alt="social profiles" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer