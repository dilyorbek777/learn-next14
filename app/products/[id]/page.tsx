import { Metadata } from "next"
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
            absolute: `Product: ${title} `
        }
    }
}



export default function Detail({ params }: Props) {
    return (
        <div>Product Details page {params.id}</div>
    )
}
