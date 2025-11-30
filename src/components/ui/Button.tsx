import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-sage text-white hover:bg-sage-dark shadow-lg shadow-sage/20",
                destructive: "bg-alert text-white hover:bg-alert/90",
                outline: "border border-sage/20 bg-white/50 hover:bg-white hover:text-sage-dark backdrop-blur-sm",
                secondary: "bg-cream-dark text-sage-dark hover:bg-cream-dark/80",
                ghost: "hover:bg-sage/10 hover:text-sage-dark",
                link: "text-sage underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-sage to-sage-light text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-lg px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
