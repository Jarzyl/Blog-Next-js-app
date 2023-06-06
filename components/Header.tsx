import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/travel.jpeg';

function Header() {
  return (
    <header className='flex items-center justify-between font-bold px-3 md:px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href='/'>
                <Image className='rounded-full object-cover h-16 w-16'
                src={logo}
                alt='logo'
                width={70}
                height={70}
                />
            </Link>
        <h1><span className='text-green-500'>Alex</span> the Adventurer</h1>
        </div>
        <div>
            <Link href='/' className='px-1 md:px-3 py-3 text-sm w-32 md:w-full md:text-base bg-black text-green-500 flex items-center text-center rounded-full'>
            Sign up to the Newsletter!
            </Link>
        </div>
    </header>
  );
};

export default Header;