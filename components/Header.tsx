import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/favicon.ico';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href='/'>
                <Image className='rounded-full object-cover'
                height={50}
                width={50}
                src={logo}
                alt='logo'
                />
            </Link>
        <h1>THE BARTBLOG</h1>
        </div>
        <div>
            <Link href='/' className='px-5 py-3 text-sm md:text-base bg-green-700 text-blue-200 flex items-center text-center rounded-full'>
            Sign up to the UNI!
            </Link>
        </div>
    </header>
  );
};

export default Header;