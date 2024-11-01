import { cn } from "@/lib/utils"

const PageWrapper = ({ children, className }) => {
    return (
        <main className={cn("flex flex-col sm:p-2 md:p-4 p-2 py-6", className)}>
            {children}
        </main>
    )
}

export default PageWrapper