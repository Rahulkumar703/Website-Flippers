import SetPassworForm from "@/components/auth/SetPassworForm"
import PageWrapper from "@/components/PageWrapper"

export const metadata = {
    title: "Set New Password",
    description: "Set a new password for your account",
}

const SetPasswordPage = () => {
    return (
        <PageWrapper className={'items-center justify-center min-h-[calc(100svh-72px)]'}>
            <SetPassworForm />
        </PageWrapper>
    )
}

export default SetPasswordPage