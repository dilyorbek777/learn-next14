import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      Home
      <Link href={'/products'}>
        Products List
        
      </Link>
    </>
  )
}
