import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' width={40} height={40} priority alt='' className='bg-logo_light dark:bg-logo_dark bg-center bg-no-repeat bg-cover w-[48px] h-[50px] rounded-[10px] '></Link>
  )
}

export default Logo;