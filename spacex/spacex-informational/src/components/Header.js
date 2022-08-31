import React from 'react'
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"
 
export default function Header() {
  return (
    <header className="absolute flex items-center justify-between px-5 w-full">
      <div>
        <Link to="/">
          <SiSpacex className="text-8xl text-white"/>
       </Link>
      </div>

      <nav>
        <ul className='nav flex'>
          <li>
           <Link className="text-white text-sm lg:text-base px-7" to="/capsules">Capsules</Link>
          </li>
          <li>
           <Link className="text-white text-sm lg:text-base px-7" to="/cores">Cores</Link>
          </li>
          <li>
           <Link className="text-white text-sm lg:text-base px-7" to="/crew">Crew</Link>
          </li>
          <li>
           <Link className="text-white text-sm lg:text-base px-7" to="/dragons">Dragons</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
