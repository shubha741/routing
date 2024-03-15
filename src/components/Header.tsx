import React from 'react'
import Link from '../../node_modules/next/link'


const Header = () => {
  return (
    <div>
      <div style={{display:"flex", background:"#000", color:"#fff", padding:"20px", gap:"10px"}}>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
      </div>
    </div>
  )
}

export default Header

const array = ["react", "next", "html", "css", "javascript"]