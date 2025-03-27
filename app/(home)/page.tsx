import HomeCarousel from "@/app/(home)/components/HomeCarousel";

const Homepage = () => {
  return ( 
  <div>
    <section className="mx-auto my-0 w-full">
      <h1 className="p-6 text-2xl font-bold">
        Bienvenido a <span className="text-purple-800">Honu Mística</span> 🔮.
      </h1>
      {/* Carousel Implementation */}
      <HomeCarousel/>
    </section>
  </div> );
}
 
export default Homepage;