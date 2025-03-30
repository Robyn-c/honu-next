const FooterList = ({children}: Readonly<{children: React.ReactNode}>) => {
  return ( 
    <ul className="space-y-1.5">
      {children}
    </ul>
   );
}
 
export default FooterList;