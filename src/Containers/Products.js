import React from 'react'

export default function Products({data}) {
    return (
        <div>
          {data.map(prod=><div >{prod.name}</div>)}
        </div>
    )
}
