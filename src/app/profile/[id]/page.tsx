import React from 'react'

const profileId = ({params}:any) => {
  return (
    <div>
        <h1>profileId</h1>
        <h1>{params.id}</h1>
    </div>

  )
}

export default profileId