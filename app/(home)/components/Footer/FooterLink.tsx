
const FooterLink = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {
  return ( 
    <li className="text-sm font-light">
      {/* TODO: MAKE LINK */}
      {children}
    </li>
   );
}
 
export default FooterLink;