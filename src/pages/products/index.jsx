import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function product({ products }) {

    return (

        <>
            <Head>
                <title>products</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div >
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-9 ">
                        {products.map((product) => (
                            <div key={product.id} className="shadow-lg pb-5  hover:scale-110 hover:transition-all hover:duration-500">

                                <Link href={`/products/${product.id}`} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={product.imageSrc}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm px-5 text-gray-700">{product.name}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export function getStaticProps() {
    return fetch('http://localhost:3000/api/product')
        .then(res => res.json())
        .then(products => ({ props: { products } }))
        .catch(error => ({ props: { products: [], message: error.message } }))
}