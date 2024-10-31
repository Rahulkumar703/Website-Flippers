import LoginForm from "@/components/auth/LoginForm"
import PageWrapper from "@/components/PageWrapper"

export const metadata = {
    title: "Login",
    description: "Login to Domain Flipper",
}
const LoginPage = () => {
    return (
        <PageWrapper className={'items-center justify-center min-h-[calc(100svh-72px)]'}>
            <LoginForm />
        </PageWrapper>
    )
}

export default LoginPage