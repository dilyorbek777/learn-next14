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
