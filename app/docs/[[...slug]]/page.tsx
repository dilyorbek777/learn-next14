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
