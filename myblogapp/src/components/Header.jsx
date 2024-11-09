import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <>
    <Navbar className='border-b-2'>
<Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
<span>
Ps.dev's
</span>Blogs
</Link>

    </Navbar>
    </>
  )
}

export default Header