type CardProps = {
    children: React.ReactNode;
    className?: string;
    variant?: 'white' | 'transparent';
  };

  const variantMap = {
    white: 'bg-white',
    transparent: 'bg-transparent border-8 border-[#A8AFCA] border-solid'
  };
  
  export default function Card({ children, className = '', variant = 'white' }: CardProps) {
    return (
      <div className={`${variantMap[variant]} flex flex-col w-full shadow-md rounded-[16px] p-6 gap-4 ${className}`}>
        {children}
      </div>
    );
  }
  