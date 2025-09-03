import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-wide border-4 border-foreground transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))] active:translate-x-2 active:translate-y-2 active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))]",
        outline:
          "border-4 border-foreground bg-background text-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))]",
        accent:
          "bg-accent text-accent-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))]",
        warning:
          "bg-warning text-warning-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_hsl(var(--foreground))]",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-16 px-8 py-4",
        icon: "h-12 w-12",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }