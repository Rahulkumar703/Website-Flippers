import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'
import { P } from '../ui/typography'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

const PricingCard = ({ title, price, discountedPrice, features, className }) => {
  return (
    <Card className={cn('w-full max-w-full overflow-hidden', className)}>
      <CardHeader className={`relative border border-b ${title.toLowerCase() === 'bronze' ? 'bg-[#dfb386]' : title.toLowerCase() === 'silver' ? 'bg-[#e6e6e6]' : title.toLowerCase() === 'gold' ? 'bg-[#ffe44d]' : ''}`}>
        <span className="absolute w-full h-full bg-no-repeat bg-cover bg-[url('/images/line.png')] left-0 top-0 opacity-20"></span>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {
          Object.entries(features).map((feature, index) => {
            return (
              <div key={index} className="flex gap-2 items-center py-2">
                {
                  feature[1] ?
                    <span className="select-none text-green-500 bg-green-100 p-2 rounded-full w-8 h-8 grid place-content-center">✓</span>
                    :
                    <span className="select-none text-red-500 bg-red-100 p-2 rounded-full w-8 h-8 grid place-content-center">✗</span>
                }
                <P className={'[&:not(:first-child)]:mt-0'}>{feature[0]}</P>
              </div>
            )
          })
        }
      </CardContent>
      <CardFooter className="flex justify-between border border-t items-center pt-6 sm:flex-row flex-col gap-2">
        <P className="text-center">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-sm line-through text-gray-500 ml-2">{discountedPrice}</span>
        </P>
        <Button className="w-full sm:w-auto">
          <ShoppingCart className="mr-2" />
          Buy Now</Button>
      </CardFooter>
    </Card>
  )
}

export default PricingCard