import React from 'react'
import { useParams } from 'react-router-dom'



function OneProject() {

  let head=useParams();

  return (
    <div>
      <h1>{head}</h1>
    </div>
  )
}

export default OneProject
