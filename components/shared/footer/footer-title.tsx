
const FooterTitle = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return ( 
    <h3 className="text-xl font-bold">
      {children}
    </h3>
   );
}
 
export default FooterTitle;