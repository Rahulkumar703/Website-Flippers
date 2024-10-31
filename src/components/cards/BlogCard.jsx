import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const BlogCard = ({ title, description, image, date }) => {
    const dateString = new Date(date).toLocaleString()
    return (
        <Card>
            <CardContent>
                <Image src={image} width={400} height={400} alt={title} />
            </CardContent>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>{dateString}</CardFooter>
        </Card>
    )
}

export default BlogCard