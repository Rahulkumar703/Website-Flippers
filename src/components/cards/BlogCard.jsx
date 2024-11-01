import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Link } from 'nextjs13-progress'
import { encodeUrl, formatDate } from '@/lib/utils'
import { Muted } from '../ui/typography'

const BlogCard = ({ title, description, image, date }) => {
    return (
        <Link href={`/blog/${encodeUrl(title)}`} >
            <Card>
                <CardContent className="pt-6 w-full h-60">
                    <Image src={image} width={300} height={300} alt={title} className='w-full h-full bg-cover rounded-md' />
                </CardContent>
                <CardHeader className="py-0">
                    <CardTitle className="capitalize sm:text-2xl text-xl">{title}</CardTitle>
                    <CardDescription className="w-full line-clamp-3 overflow-hidden text-ellipsis">
                        {description}
                    </CardDescription>

                </CardHeader>
                <CardFooter className="p-6">
                    <Muted className={'ml-auto text-muted-foreground/50'}>{formatDate(date)}</Muted>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogCard