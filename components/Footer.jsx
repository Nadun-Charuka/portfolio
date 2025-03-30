import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt=20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
            <div className='flex w-max items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                nadun.charuka2016@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@ Nadun Charuka. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/Nadun-Charuka" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/nadun-charuka-383b90228/" target='_blank'>Linkedin</a></li>
                <li><a href="https://web.facebook.com/nadun.charuka.520/" target='_blank'>FaceBook</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer