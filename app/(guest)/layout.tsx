import Navbar from "@/app/(guest)/components/Navbar/Navbar";
import Footer from "@/app/(guest)/components/Footer/Footer";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <Navbar/>
    <main className="bg-purple-100">
      {children}
    </main>
    <Footer/>
    </>
  );
}
// TODO: Find a better name 

export default HomeLayout;