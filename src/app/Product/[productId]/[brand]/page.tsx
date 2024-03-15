import React from 'react'

const Brand = ({params}:any) => {
    console.log(params.brand)
  return (
    <div style={{ height: "60vh" }}>{params.brand} Page</div>
  )
}

export default Brand