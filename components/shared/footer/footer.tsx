import FooterLink from "./footer-link";
import FooterTitle from "./footer-title";
import FooterList from "./footer-list";
import FooterContainer from "./footer-container";


const Footer = () => {
  const currentYear = new Date().getFullYear().toString()
  return ( 
    <footer className="bg-purple-900 text-white px-6 py-12">
      <section className="grid grid-cols-2 gap-y-6 gap-x-8">
        <FooterContainer>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <FooterList>
            {/* TODO: MAKE LINKS */}
            <FooterLink>Términos y Condiciones</FooterLink>
            <FooterLink>Política de reembolso</FooterLink>
            <FooterLink>Política de privacidad</FooterLink>
          </FooterList>
        </FooterContainer>
        <FooterContainer>
          <FooterTitle>Menú</FooterTitle>
          <FooterList>
            {/* TODO: MAKE LINKS */}
            <FooterLink>Contacto</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Productos</FooterLink>
            <FooterLink>Cuenta</FooterLink>
          </FooterList>
        </FooterContainer>
        <FooterContainer className='col-span-full'>
          <FooterTitle>Contáctanos</FooterTitle>
          <FooterList>
            {/* TODO: MAKE LINKS */}
            <FooterLink>Hugo Montes Valdebenito, La Serena, Chile</FooterLink>
            <FooterLink>Envíos todos los días - IV Región</FooterLink>
            <FooterLink>+56 9 9319 1106</FooterLink>
            {/* TODO: SOCIAL MEDIA ICONS LINK LIST */}
          </FooterList>
        </FooterContainer>
      </section>
      <p className="py-8">&copy; {currentYear} Honu Mística - Tienda Online de Artesanía Espiritual. Todos los derechos reservados</p>
      {/* TODO: Payment methods icon list */}
    </footer>
   );
}
 
export default Footer;