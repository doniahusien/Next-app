import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
export default function productItem({ item }) {
    return (
        <>
            <Head>
                <title>{item.name}</title>
            </Head>
            <div className="w-1/2 mx-auto rounded overflow-hidden shadow-lg bg-gray-800 my-5">
                <Image src={item.imageSrc} alt="img" width={780} height={500} className="object-center object-cover" />
                <div className="px-8 py-4">
                    <div className="font-bold text-xl mb-5 text-white">{item.name}</div>
                    <p className="text-gray-300 text-base">{item.des}</p>
                </div>

                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-8 py-2 text-m font-semibold text-gray-700 mr-2">{item.price}</span>
                </div>
            </div>
        </>
    )
}




export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/product`)
    const data = await res.json()
    const path = data.map(item => {
        return {
            params: { id: `${item.id}` }
        }

    })
    return {
        paths: path,
        fallback: false,

    }
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/product/${context.params.id}`)
    const item = await res.json()
    return {
        props:{ item }
    }
}