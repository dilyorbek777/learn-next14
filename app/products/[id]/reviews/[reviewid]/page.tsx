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
