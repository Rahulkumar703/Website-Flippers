import ResetPassworForm from '@/components/auth/ResetPassworForm'
import PageWrapper from '@/components/PageWrapper'

export const metadata = {
    title: "Reset Password",
    description: "Forgot your password? Reset it here",
}

const ResetPasswordPage = () => {
    return (
        <PageWrapper className={'items-center justify-center min-h-[calc(100svh-72px)]'}>
            <ResetPassworForm />
        </PageWrapper>
    )
}

export default ResetPasswordPage