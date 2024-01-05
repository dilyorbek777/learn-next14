import { Metadata } from "next"
import Link from "next/link"
type Props = {
    params: {
        id: string
    }
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.id}`)
        }, 100)
    })
    return {
        title: {
            absolute: `Product: ${title} ` // absolute applies the only absolute title of page
        }
    }
}



export default function Detail({ params }: Props) {
    return (
        <div>Product Details page {params.id}
            <Link href={'/products/100/reviews/10'} replace>
                {/* 
                     'replace'  replaces the current page with link in href. 
                     if you click back you will back to previous page from that page you clicked
                      'replace'
                */}
                review of 100
            </Link>
        </div>
    )
}
