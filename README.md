<div align="center">
  <br />
      <img src="https://strapi.dhiwise.com/uploads/nextjs_14_Main_Image_075e7f4fdc.webp" style="background-color:#fff" alt="Project Banner">
  <br />



  <h3 align="center">Learn NextJS 14</h3>
</div>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Example of codes
<details>
<summary><code>Dynamic routing</code></summary>

# Dynamic  routing 

```bash
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
```

</details>



<details>
<summary><code>Nested Dynamic  routing</code></summary>


# Dynamic Nested routing 

## Structure folders
```bash
app
|___products
|___|_______page.tsx
|___________[id]
|___________|___reviews
|_______________|______[reviewid]
|______________________|_________page.tsx


```
## Sample code 

```bash
import React from 'react'

export default function ReviewDetail({ params }: {
    params: {
        id: string;
        reviewid: string;
    }
}) {
    return (
        <h1>
            Review {params.reviewid} for product {params.id}
        </h1>
    )
}

```
</details>

<details>
<summary><code>Catch all Segments</code></summary>

    
# Catch all Segments

## Structure folders

```bash
app
|___docs
|___|____[[...slug]]
|________|__________page.tsx
```
## Sample code 

```bash

import React from 'react'

export default function Docs({
    params,
}: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length === 2) {
        return <div>Docs for feature {params.slug[0]} and consept of {params.slug[1]}</div>
    }
    else if (params.slug?.length === 1) {
        return <>Docs for feature {params.slug[0]}</>
    }
    return (
        <div>Docs</div>
    )
}


```
</details>

<details>
<summary><code>Custom Not Found 404 page</code></summary>

# Custom Not Found 404 page

## Structure folders

```bash
app
|___not-found.tsx
```
## Sample code 

```bash
import React from 'react'

export default function NotFound() {
  return (
    <div>NotFound 404 </div>
  )
}
```
</details>





<details>
<summary><code>Custom Not Found 404 page for dynamic pages (Optional)</code></summary>

# Custom Not Found 404 page for dynamic pages 

## Structure folders

```bash
app
|___products
|___|_______page.tsx
|___________[id]
|___________|___reviews
|_______________|______[reviewid]
|______________________|_________page.tsx
|______________________|_________not-found.tsx
```
## Sample code 

<summary><code>not-found.tsx</code></summary>



```bash
import React from 'react'

export default function NotFound() {
  return (
    <div>NotFound review</div>
  )
}

```
<summary><code>page.tsx</code></summary>



```bash
import { notFound } from 'next/navigation';
import React from 'react'

export default function ReviewDetail({ params }: {
    params: {
        id: string;
        reviewid: string;
    }
}) {
    if (parseInt(params.reviewid)>1000) {
        notFound();
    }
    return (
        <h1>
            Review {params.reviewid} for product {params.id}
        </h1>
    )
}


```

</details>



<details>
  
<summary><code>Route Groups</code></summary>

# Route Groups

## Structure folders

```bash
app
|___(auth)
|___|_____login
|______________page.tsx
|___|_____register
|______________page.tsx
```
## The result

```bash
http://localhost:3000/login
```
</details>


<details>
<summary><code>The use of Metadata</code></summary>

# Metadata in website pages

## Structure folders

```bash
app
|___products
|___________page.tsx
```
## Sample code 

```bash
export const metadata = {
  title: 'Product Page of NextJS',
  description: 'Generated by create next app',
}

export default function Products() {
  return (
    <div>Products</div>
  )
}

```
</details>

<details>
<summary><code>The use of Metadata in Dynamic pages</code></summary>

# Metadata in dynamic routes

## Structure folders

```bash
app
|___products
|___________[id]
|_______________page.tsx
```
## Sample code 

```bash
import { Metadata } from "next"
type Props = {
    params: {
        id: string
    }
}
export const generateMetadata = async ({params}:Props): Promise<Metadata>=>{
    const title =await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.id}`)
        },100)
    })
    return {
        title: `Product: ${title} `
    }
}

export default function Detail({ params }: Props) {
    return (
        <div>Product Details page {params.id}</div>
    )
}
```
</details>


