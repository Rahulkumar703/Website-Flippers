import ServiceCard from '@/components/cards/ServiceCard'
import PageWrapper from '@/components/PageWrapper'
import { H1 } from '@/components/ui/typography'

const ServicesPage = () => {
    const services = [
        {
            title: 'Domain Flipping',
            description: 'Buy and sell domains',
            price: '₹999',
            discountedPrice: '₹799',
            features: {
                'Buy Domains': true,
                'Sell Domains': true,
                'Transfer Domains': true,
                'Get Sponsor Banner in Front Page': false,
                'Sponsor Email to Buyers': false,
            },
        },
        {
            title: 'Domain Flipping',
            description: 'Buy and sell domains',
            price: '₹999',
            discountedPrice: '₹799',
            features: {
                'Buy Domains': true,
                'Sell Domains': true,
                'Transfer Domains': true,
                'Get Sponsor Banner in Front Page': false,
                'Sponsor Email to Buyers': false,
            },
        },
        {
            title: 'Domain Flipping',
            description: 'Buy and sell domains',
            price: '₹999',
            discountedPrice: '₹799',
            features: {
                'Buy Domains': true,
                'Sell Domains': true,
                'Transfer Domains': true,
                'Get Sponsor Banner in Front Page': false,
                'Sponsor Email to Buyers': false,
            },
        },
    ]
    return (
        <PageWrapper className={'items-center min-h-[calc(100svh-72px)] gap-10'}>
            <H1 className={'text-primary'}>Services</H1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-16 lg:gap-10">
                {
                    services.map((service, index) => {
                        return (
                            <ServiceCard key={index} {...service} className="max-w-sm" />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default ServicesPage