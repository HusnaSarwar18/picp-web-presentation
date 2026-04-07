import { FC, ReactNode, HTMLAttributes } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section = ({ id, className = '', children, title, subtitle, dark = false }: SectionProps) => {
  return (
    <section id={id} className={`relative overflow-hidden ${dark ? 'bg-primary text-white' : 'bg-white text-slate-900'} ${className}`}>
      <div className="section-container">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-24 max-w-3xl">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-block text-sm font-semibold tracking-widest uppercase mb-4 ${dark ? 'text-accent' : 'text-accent'}`}
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: FC<CardProps> = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`premium-card ${props.onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  href?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '', href }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-blue-600 shadow-lg shadow-accent/20",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border-2 border-slate-200 text-slate-900 hover:border-accent hover:text-accent",
    ghost: "text-slate-600 hover:text-accent hover:bg-accent-soft",
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
