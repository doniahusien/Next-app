import Link from "next/link";
import Image from "next/image";
import img from "../../public/favicon.ico"

const nav = () => {
    return (
        <nav className="flex items-center flex-wrap justify-between bg-gray-800 py-6 px-9">
            <div className="flex items-center flex-grow-250">
                <Image className="h-9" src={img} alt="Logo" width={50} height={20} />
            </div>
            <div className=" flex  ">
                <div className="text-lg ">
                    <Link href="/" className="text-gray-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link href="/blog" className=" text-gray-200 hover:text-white mr-4">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-gray-200 hover:text-white mr-4">
                        Contact
                    </Link>
                    <Link href="/products" className="text-gray-200 hover:text-white mr-4">
                        Products
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default nav;