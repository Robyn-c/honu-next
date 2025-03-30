import HomeCarousel from "@/app/(guest)/components/HomeCarousel";


const Homepage = () => {
  return ( 
    <section className="mx-auto my-0 w-full px-6 py-9 space-y-6">
      <h1 className="text-2xl font-bold">
        Bienvenido a <span className="text-purple-800">Honu Mística</span> 🔮.
      </h1>
      {/* Carousel Implementation */}
      <HomeCarousel/>
      <HomeCategories/>
    </section>
  );
}
 
export default Homepage;