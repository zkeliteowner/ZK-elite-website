import React from 'react'
import { cn } from '../../lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full transition-all duration-300 font-bold uppercase tracking-widest",
    {
        variants: {
            variant: {
                default: "bg-gold/5 hover:bg-gold/10 border-gold/20 text-gold",
                solid: "bg-gold hover:bg-amber-gold text-black border-transparent transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-gold/30 hover:bg-white/5 text-white/80 hover:text-white",
                outline: "border-gold/50 bg-transparent hover:bg-gold/5 text-gold",
            },
            size: {
                default: "px-7 py-2.5 text-xs",
                sm: "px-4 py-1.5 text-[10px]",
                lg: "px-10 py-4 text-sm",
                xl: "px-14 py-6 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Top glow line */}
                <span className={cn(
                    "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-gold to-transparent hidden", 
                    neon && "block"
                )} />
                
                {children}

                {/* Bottom glow line */}
                <span className={cn(
                    "absolute group-hover:opacity-100 opacity-40 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gold to-transparent hidden", 
                    neon && "block"
                )} />
                
                {/* Glow effect background */}
                {neon && (
                    <span className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 -z-10" />
                )}
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
