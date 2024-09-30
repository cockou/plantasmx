import Link from "next/link"
import Image from "/public/logoname.svg"

interface FooterItemProps {
    id: number;
    text: string;
    link: string;
}

const FooterItem = ({ text, link }: FooterItemProps) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-green-600 dark:hover:text-green-500">
            {text}
        </Link>
    </li>
)
}
 
interface FooterBlockItemProps {
    title: string;
    items: FooterItemProps[];
}

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
        </h1>
        <ul className="space-y-3">
            {
                items.map(item => (
                    <FooterItem key={item.id} {...item} />
                ))
            }
        </ul>
    </div>
)
}
 
const footerBlocks = [
{
    id: 1,
    title: "Productos",
    items: [
        {
            id: 1,
            text: "Plantas de Luz",
            link: "#"
        },
    ]
},
{
    id: 2,
    title: "Nosotros",
    items: [
        {
            id: 1,
            text: "Acerca",
            link: "#"
        },
        {
            id: 2,
            text: "Servicios",
            link: "#"
        },
    ]
},
{
    id: 3,
    title: "Redes Sociales",
    items: [
        {
            id: 1,
            text: "Facebook",
            link: "#"
        },
        {
            id: 2,
            text: "Linkedin",
            link: "#"
        },
    ]
},
{
    id: 4,
    title: "Recursos",
    items: [
        {
            id: 1,
            text: "Blog",
            link: "#"
        },
        {
            id: 2,
            text: "Terminos y Privacidad",
            link: "#"
        },
    ]
},
]
 
 
const FooterBlock = () => {
return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="border-t border-t-gray-200 dark:border-t-gray-800 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
                <div className="w-full lg:w-96 space-y-6">
                    <Link href="#">
                    <img src="/public/logoname.svg" alt="logo" className="w-40" />
                    Plantas de Luz Mexico
                    </Link>
                    <p className="max-w-lg">
                    "Energía ininterrumpida para un mundo en movimiento."
                    </p>
                </div>
                <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        footerBlocks.map(
                            footerBlock => (
                                <FooterBlockItem key={footerBlock.id} {...footerBlock} />
                            )
                        )
                    }
                </nav>
            </div>
        </div>
        <div className="py-3 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
                <p> © 2024 Plantas de Luz México - All Rights Reserved </p>
            </div>
        </div>
    </footer>
 
)
}
 
export default FooterBlock