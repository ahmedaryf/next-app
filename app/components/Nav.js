import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div>
        <div className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' href={'/'}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' href={'/'}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href={'/about'}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href={'/product'}>Product</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Nav