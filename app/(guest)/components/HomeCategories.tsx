import Image, { StaticImageData } from 'next/image';

import decoracionImg from '@/public/home/decoracion.png'
import esenciasImg from '@/public/home/esencias.png'
import joyeriaImg from '@/public/home/joyeria.png'
import accesoriosImg from '@/public/home/accesorios.png'
import misticoImg from '@/public/home/mistico.png'
import sahumadorImg from '@/public/home/sahumadores.png'
import velasImg from '@/public/home/velas.png'
import regalosImg from '@/public/home/ideas.png'
 
const HomeCategories = () => {

  interface Category {
    name: string;
    src: StaticImageData;
    alt: string
  }

  // TODO: Write better alt messages
  const categories: readonly Category[]= [
    { name: "Decoración", src: decoracionImg, alt: 'Atrapasueños' },
    { name: "Esencias", src: esenciasImg, alt: 'Botella de esencias'},
    { name: "Joyería", src: joyeriaImg, alt: 'Collar' },
    { name: "Accesorios", src: accesoriosImg, alt: 'Aros'},
    { name: "Místico & Espiritual", src: misticoImg, alt: 'Mistico & Espiritual'},
    { name: "Sahumadores & Copaleras", src: sahumadorImg, alt: 'Sahumadores & Copaleras'},
    { name: "Velas", src: velasImg, alt: 'Velas'},
    { name: "Ideas para Regalar", src: regalosImg, alt: 'Caja de Regalo'},
  ]
  return ( 
    // TODO: ADD MOBILE VERSION
    <section className="py-9 px-6 space-y-4">
      <h2 className="text-xl text-center font-semibold">Categorías</h2>
      <nav>
        <ul className='grid grid-cols-2 gap-y-4 justify-between place-items-center text-center'>
          { categories.map((category) => (
            <li key={category.name} className='flex flex-col items-center gap-y-3 h-full'>
              <Image src={category.src} width={125} alt={category.alt} />
              <p>{ category.name }</p>
            </li>
          ))}
        </ul>
      </nav>
    </section>
   );
}
 
export default HomeCategories;