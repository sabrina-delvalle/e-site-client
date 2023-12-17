import Image from "next/image"
import See from '/public/see.png'

export default function Header() {
  return (
    <header className="grid grid-cols-3 h-36 px-6 py-10 sm:px-48">
        <a href="/" className="hover:cursor-default">
          <Image
              src={See}
              alt="css_profile"
              width={100}
              height={100}
              className={
              "col-span-1 hover:cursor-pointer"}
          />
        </a>
        <nav className="grid col-span-2 grid-cols-2 hover:cursor-default">
          <ul className="flex-row col-span-1 items-center justify-center hidden sm:flex">
          <li>
              <a href="/" className="text-neutral-600 hover:text-neutral-500 font-light px-7">
                home
              </a>
          </li> 
          <li>
              <a href="/stores" className="text-neutral-600 hover:text-neutral-500 font-light px-7">
                stores
              </a>
          </li>
          <li>
              <a href="/categories" className="text-neutral-600 hover:text-neutral-500 font-light px-7">
              categories
              </a>
          </li>
          <li>
              <a href="/contact" className="text-neutral-600 hover:text-neutral-500 font-light px-7">
                contact
              </a>
          </li> 
          </ul>

          <ul className="flex flex-row col-span-2 sm:col-span-1 justify-end items-center">
            <li className="flex justify-end">
              <input placeholder="search" className="w-3/4 px-2 m-3 sm:w-3/5 focus:w-4/5 h-9 rounded-xl placeholder:text-neutral-500 placeholder:font-light border-[1px] text-neutral-700" />
            </li>
            <li>
              <a href="/login" className="text-neutral-600 hover:text-neutral-500 font-light">
                login
              </a>
            </li>
            <p className="px-1 text-neutral-600"> / </p>
            <li>
              <a href="/signin" className="text-neutral-600 hover:text-neutral-500 font-light">
                signin
              </a>
            </li>
            <li className="pl-2 sm:pl-5">
              <a href="/shopping-car">
                <svg className="w-6 h-6 text-gray-800 dark:text-white hover:cursor-pointer hover:opacity-80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
    </header>
  )
}
