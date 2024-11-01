import { Link } from 'nextjs13-progress';
import Navbar from './Navbar'
const Header = () => {

    const navLinks = [
        {
            title: "Blog",
            href: "/blog",
            description: "Read our latest blog posts.",
        },
        {
            title: "Pricing",
            href: "/pricing",
            description: "Pricing for all plans and services.",
        },
        {
            title: "Services",
            href: "/services",
            description: "Services we offer.",
        },
    ]

    return (
        <header className="flex gap-6 justify-between items-center w-full sticky top-0 left-0 sm:p-4 p-2 border-b border bg-background z-30">
            <div className="">
                <Link href="/">
                    <h1 className='whitespace-nowrap text-xl font-bold text-primary uppercase'>Domain Flipper</h1>
                </Link>
            </div>
            <Navbar navLinks={navLinks} />
        </header>
    )
}

export default Header