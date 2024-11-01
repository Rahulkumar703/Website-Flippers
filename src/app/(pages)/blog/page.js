import BlogCard from "@/components/cards/BlogCard"
import PageWrapper from "@/components/PageWrapper"
import { H1 } from "@/components/ui/typography"

export const metadata = {
    title: "Blog",
    description: "Read our blog posts",
}

const BlogPage = () => {

    const blogs = [
        {
            title: "How to buy a domain",
            description: "Visit domainflipper.com and search for the domain you want to buy. If it is available, you can buy it right away. If it is not available, you can make an offer to the owner.",
            image: "https://via.placeholder.com/300",
            date: new Date()
        },
        {
            title: "How to sell a domain",
            description: "Visit domainflipper.com and list your domain for sale. You can set a price or accept offers. Once a buyer is found, the sale will be completed through escrow.",
            image: "https://via.placeholder.com/300",
            date: new Date()
        },
        {
            title: "How to flip a domain",
            description: "Buy a domain at a low price and sell it at a higher price. You can also develop the domain into a website to increase its value.",
            image: "https://via.placeholder.com/300",
            date: new Date()
        },
    ]

    return (
        <PageWrapper className={'items-center min-h-[calc(100svh-72px)] gap-10'}>
            <H1 className={'text-primary'}>Blogs</H1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-10">
                {
                    blogs.map((blog, index) => {
                        return (
                            <BlogCard key={index} {...blog} className="" />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default BlogPage