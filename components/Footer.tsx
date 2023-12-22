import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Link href={'https://arslanstack.com'} target='_blank'>
            <Image src='/logo.png' alt='logo' width={234} height={48} className='object-contain' />
          </Link>

          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy; <Link className='ml-1 text-blue-500 hover:text-blue-900' href={'https://arslanstack.com'}  target='_blank'>Arslan Stack</Link>
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 CarHub. All rights reserved </p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer