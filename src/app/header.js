import Image from "next/image"
import See from '/public/see.png'

export default function Header() {
  return (
    <header className="grid grid-cols-3 h-36 px-48 py-10">
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
          <ul className="flex flex-row col-span-1 items-center justify-center">
          <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light px-7" href="/">
                home
              </a>
          </li> 
          <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light px-7" href="/">
                stores
              </a>
          </li>
          <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light px-7" href="/">
              categories
              </a>
          </li>
          <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light px-7" href="/">
                contact
              </a>
          </li> 
          </ul>

          <ul className="flex flex-row col-span-1 justify-end items-center">
            <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light" href="/">
                login
              </a>
            </li>
            <p className="px-1 text-neutral-600"> / </p>
            <li>
              <a className="text-neutral-600 hover:text-neutral-500 font-light" href="/">
                signin
              </a>
            </li>
            <li className="pl-5">
              <a href="/">
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
