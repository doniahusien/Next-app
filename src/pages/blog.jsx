import React from 'react'
import { ReUse } from '@/components/reuseData'

const blog = () => {
    const { data, isLoading, isError } = ReUse()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching data</div>
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className="shadow-lg pb-5 ">
                    <h3 className="mt-4 px-5 text-gray-500">{item.name}</h3>
                </div>
            ))}
        </div>
    )
}


export default blog

function Spinner() {
    return <div className="spinner">Loading...</div>
}

async function fetcher(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}