import React from 'react'
import Head from 'next/head'
import Nav from '@/components/nav'

const layout = ({children}) => {
return (
    <div>
        
        <Nav/>
          {children}
    </div>
  )
}

export default layout