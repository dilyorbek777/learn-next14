import React from 'react'

export default function Detail({ params }:{
    params:{
        id:string
    }
}) {
    return (
        <div>Product Details page {params.id}</div>
    )
}
