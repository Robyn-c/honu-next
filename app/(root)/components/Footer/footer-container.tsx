import { cn } from "@/lib/utils"; 

const FooterContainer = (
  {
    children, 
    className,
  
  }: Readonly<{
    children: React.ReactNode, 
    className?: string
  }>
  ) => {
  return ( 
    <div className={cn("space-y-3", className)}>
      {children}
    </div>
   );
}
 
export default FooterContainer;