import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='https://arslanstack.com'  target='_blank' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={224}
          height={48}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] max-h-[40px] text-sm font-medium'
      />
    </nav>
  </header>
);

export default NavBar;