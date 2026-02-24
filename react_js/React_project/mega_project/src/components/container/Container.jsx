import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container




// Purpose:

// Acts as a layout wrapper component.

// Ensures consistent width (maximum width max-w-7xl) and horizontal padding (px-4).

// Any child passed into <Container> will be rendered inside this styled <div>, giving consistent spacing across your app.