import Link from 'next/link'
import Navbar from './Navbar'
const Header = () => {
    return (
        <header className="flex gap-6 justify-between items-center w-full sticky top-0 left-0 sm:p-4 p-2 border-b border bg-background z-30">
            <div className="">
                <Link href="/">
                    <h1 className='whitespace-nowrap text-xl font-bold text-primary uppercase'>Domain Flipper</h1>
                </Link>
            </div>
            <Navbar />
        </header>
    )
}

export default Header