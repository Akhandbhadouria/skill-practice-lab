import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Baba from './baba.jsx'

import React from 'react'

// .....................................................................creating elements using {react }  .....................................................................
const rect_element=React.createElement( //...inthis type of creation tags . we need to maintaint he order of decleration..
  'a', // tag name
  {href:'https://www.google.com/',target:'_blank'}, // give the properties to the tag
   'click me please' //..inner text of the tag...
)




createRoot(document.getElementById('rooti')).render(
 
    
    rect_element
  
)
 