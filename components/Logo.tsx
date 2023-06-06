import Image from 'next/image';
import logo from '../public/travel.jpeg';

function Logo(props: any) {
    const { renderDefault } = props;

    return (
      <div className='flex items-center space-x-2'>
          <Image className='rounded-full object-cover h-16 w-16'
          height={50}
          width={50}
          src={logo}
          alt='logo'/>
          <>{renderDefault(props)}</>
      </div>
  );
};

export default Logo;