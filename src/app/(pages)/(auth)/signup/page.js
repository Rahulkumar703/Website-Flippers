import SignupForm from "@/components/auth/SignupForm"
import PageWrapper from "@/components/PageWrapper"

export const metadata = {
    title: "Signup",
    description: "Signup to Domain Flipper",
}

const SignupPage = () => {
    return (
        <PageWrapper className={'items-center justify-center min-h-[calc(100svh-72px)]'}>
            <SignupForm />
        </PageWrapper>
    )
}

export default SignupPage