import React from 'react'
import { Container, Logo, Logoutbtn } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.login); //useSelector is a React-Redux hook that lets you read values from the Redux store state inside your React components.
  

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {


      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="glass-header">
      <Container>
        <nav className='flex items-center h-16'>
          <div className='mr-6'>
            <Link to='/' className="inline-flex items-center gap-2 transition duration-200 ease-in-out hover:opacity-90">
              <Logo width='72px' />
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-2'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <RouterLink to={item.slug} className="nav-link">
                    {item.name}
                  </RouterLink>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <Logoutbtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header




//. Link Component from react-router-dom

// Purpose: Create a client-side link without page refresh.

// to="/": Clicking the logo will navigate to the home page.

// Advantage: Fast SPA navigation.