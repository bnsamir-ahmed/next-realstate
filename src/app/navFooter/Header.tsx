
'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import Image from 'next/image';
import Logo from "../../../public/assets/logo/elakar_logo.svg";
import Egypt from '../../../public/assets/logo/logo_egypt.svg';
import { usePathname } from 'next/navigation';
import Classes from './baseweb.module.css';
const   Header = () => {
  const countries = [{name:"Egypt" , id:1} , {name: "USA" , id:2} , {name :"UK"  , id:3 }] ;
  const path = usePathname()
  const [country , setCountry] = useState("Egypt");
  const handleCountry = (event:any) =>{
    setCountry(event.target.value)
  }
  interface Countries {
    ctr:string;
    index:Number;

  }

  return (
    <>
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
         <ul className='flex items-center'>
            <Link className={`mx-2 capitalize text-base black-262 ${path === '/' ? Classes.active_link :''}`} href={'/bye'}>bye</Link>
            <Link className={`mx-2 capitalize text-base black-262 ${path === '/rent' ?  Classes.active_link :''}`}href={'/rent'}>rent</Link>
            <Link className={`mx-2 capitalize text-base black-262 ${path === '/mortgage' ?  Classes.active_link :''}`} href={'/mortgage'}>mortgage</Link>
            <Link className={`mx-2 capitalize text-base black-262 ${path === '/auction' ?  Classes.active_link :''}`} href={'/auction'}>auction</Link>
            <Link className={`mx-2 capitalize text-base black-262 ${path === '/more' ?  Classes.active_link :''}`} href={'/more'}>more</Link>
            <Link href={'#'} className='mx-2 capitalize text-base black-262 '>
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17Z"
                      fill="#AAAAAA"
                    />
                    <path
                      d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z"
                      fill="#AAAAAA"
                    />
                    <path
                      opacity="0.5"
                      d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                      fill="#AAAAAA"
                    />
              </svg>
            </Link>
         </ul>
         <Image src={Logo} alt='realState' priority />
        <div className="">
         <ul className="flex items-center ">
            <li className=" mx-2 items-center">
              <Link href="" className={Classes.btn_developer}>I’m a developer?</ Link>
            </li>
            <li className="flex mx-2 items-center ">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="10" r="6.66667" fill="#FD5664" />
                  <ellipse
                    opacity="0.5"
                    cx="20"
                    cy="28.3333"
                    rx="11.6667"
                    ry="6.66667"
                    fill="#FD5664"
                  />
                </svg>
              </Link>
              <Link className="mx-2 capitalize text-base black-262" href="#">Log in</Link>
            </li>
            <li className="flex mx-2 items-center ">
              <Link className="mx-2 capitalize text-base black-262" href="#">عربي</Link>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="29"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M26.2734 0H6.27344C2.95973 0 0.273438 2.68629 0.273438 6V26C0.273438 29.3137 2.95973 32 6.27344 32H26.2734C29.5871 32 32.2734 29.3137 32.2734 26V6C32.2734 2.68629 29.5871 0 26.2734 0Z"
                    fill="#174D46"
                  />
                  <path
                    d="M21.0304 20.257C20.1419 21.0238 19.1114 21.6085 17.9974 21.978C17.2565 22.1892 16.4898 22.2962 15.7194 22.296C14.6618 22.3324 13.6248 21.9973 12.7884 21.349C12.3678 20.9623 12.0422 20.4837 11.837 19.9505C11.6318 19.4173 11.5525 18.8439 11.6054 18.275C11.6044 17.6936 11.6972 17.1158 11.8804 16.564C12.1002 15.9491 12.4341 15.3812 12.8644 14.89C13.0911 14.6393 13.2611 14.4523 13.3744 14.329C13.4622 14.2277 13.5631 14.1386 13.6744 14.064C13.4151 13.8832 13.1976 13.6488 13.0367 13.3768C12.8757 13.1047 12.775 12.8013 12.7414 12.487C12.8845 11.505 13.3177 10.5881 13.9854 9.85398C14.2135 9.54998 14.5066 9.30067 14.8432 9.12422C15.1799 8.94777 15.5516 8.84862 15.9314 8.83398C16.3112 8.84068 16.6822 8.94949 17.0054 9.14898C17.2822 9.30288 17.5458 9.47949 17.7934 9.67698C17.9534 9.81196 18.0946 9.96767 18.2134 10.14C18.3175 10.2794 18.3768 10.4471 18.3834 10.621C18.3787 10.645 18.3667 10.657 18.3474 10.657C17.8076 10.4414 17.2352 10.319 16.6544 10.295C16.4147 10.3048 16.1775 10.3475 15.9494 10.422C15.6281 10.5237 15.3262 10.6789 15.0564 10.881C14.9313 10.9483 14.8241 11.0445 14.7435 11.1615C14.663 11.2785 14.6116 11.4131 14.5934 11.554C14.5934 11.7807 14.8081 12.0217 15.2374 12.277C15.6667 12.5323 15.9247 12.677 16.0114 12.711C16.1947 12.687 16.8697 12.528 18.0364 12.234L18.8794 12.071C19.0647 12.035 19.3167 11.9783 19.6354 11.901L18.9624 13.991H18.9114C18.4739 14.0265 18.0394 14.0934 17.6114 14.191C14.3447 14.953 12.7114 16.2117 12.7114 17.967C12.7537 18.3713 12.9413 18.7466 13.2394 19.023C14.0914 19.6198 15.0838 19.985 16.1194 20.083C16.4446 20.1457 16.7731 20.1891 17.1034 20.213C17.3974 20.2323 17.9037 20.254 18.6224 20.278C19.6397 20.2593 20.4424 20.2523 21.0304 20.257Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </Link>
            </li>
            <li className="flex mx-2 items-center ">
              <Link href=""><Image src={Egypt} alt="egypt" priority/></Link>
              <select className="mx-2 capitalize text-base black-262" value={country} onChange={handleCountry} >
                <option value="">Egypt</option>
                {countries.map(( ctr   =>{
                  return(<>
                  <option  key={ctr.id} value={ctr.name}>{ctr.name}</option>
                  </>) 
                }))}
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
      </>
  )
}
export default Header ;
