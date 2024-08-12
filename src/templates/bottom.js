import React from 'react'

import LogoWhite from '../assets/logo white.png'
import { Footer } from 'flowbite-react'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Bottom() {
  return (
    <>
      {/* FOOTER */}
      <Footer className='rounded-none footer'>
        <div className="w-full">
          <div className="w-full bg-primary px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Jagad Alit™" className='text-white' year={2019} />
            <img src={LogoWhite} alt="Flowbite React" className="h-6" />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
              <Footer.Icon href="#" className='text-white' icon={BsFacebook} />
              <Footer.Icon href="#" className='text-white' icon={BsInstagram} />
              <Footer.Icon href="#" className='text-white' icon={BsTwitter} />
              <Footer.Icon href="#" className='text-white' icon={BsGithub} />
              <Footer.Icon href="#" className='text-white' icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
      {/* END FOOTER */}
    </>
  )
}
