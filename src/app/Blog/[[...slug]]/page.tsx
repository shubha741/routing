import React from 'react'

const Blog = ({params}:any) => {
  // console.log( params?.slug[0], )

  if(params?.slug?.length == 2){
    return <div>  Viewing Page for {params.slug[0]} {params.slug[1]}  </div>
  }else if(params?.slug?.length == 3){
    return (
      <div style={{height:"60vh"}}> Viewing Page for {params.slug[1]} {params.slug[2]} </div>
    )
  }else{
    return (
      <div style={{height:"60vh"}}> Blog </div>
    )
  }
  
}

export default Blog