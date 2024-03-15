import React from 'react'
import Link from '../../../node_modules/next/link'

const Product = () => {

  const brand = ["vivo", "MI", "IPHONE"]
  return (
    <div  style={{height:"60vh"}}> All  Product List
  {
    brand.map((x, index) =><Link href={`Product/${x}`} key={index}>
      <div>{x}</div>
    </Link>)
  }
    </div>
  )
}

export default Product