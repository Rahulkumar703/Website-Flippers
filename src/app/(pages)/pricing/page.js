import PricingCard from "@/components/cards/PricingCard"
import PageWrapper from "@/components/PageWrapper"
import { H1 } from "@/components/ui/typography"

export const metadata = {
    title: "Pricing",
    description: "Choose a plan that works for you",
}

const PricingPage = () => {

    const pricings = [
        {
            title: "Bronze",
            price: "₹999",
            discountedPrice: "₹799",
            features: {
                "1x Reach": true,
                "For 365 days": true,
                "15% Success Fees": true,
                "Once in a Month Shared in Whatsapp Groups": true,
                "Get Sponsor Banner in Front Page": false,
                "Sponsor Email to Buyers": false,
            }
        },
        {
            title: "Silver",
            price: "₹1699",
            discountedPrice: "₹1299",
            features: {
                "1x Reach": true,
                "For 365 days": true,
                "15% Success Fees": true,
                "Once in a Month Shared in Whatsapp Groups": true,
                "Get Sponsor Banner in Front Page": true,
                "Sponsor Email to Buyers": true,
            }
        },
        {
            title: "Gold",
            price: "₹1699",
            discountedPrice: "₹1299",
            features: {
                "1x Reach": true,
                "For 365 days": true,
                "15% Success Fees": true,
                "Once in a Month Shared in Whatsapp Groups": true,
                "Get Sponsor Banner in Front Page": true,
                "Sponsor Email to Buyers": true,
            }
        },
    ]

    return (
        <PageWrapper className={'items-center min-h-[calc(100svh-72px)] gap-10'}>
            <H1 className={'text-primary'}>Pricing</H1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-16 lg:gap-10">
                {
                    pricings.map((pricing, index) => {
                        return (
                            <PricingCard key={index} {...pricing} className="max-w-sm" />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default PricingPage