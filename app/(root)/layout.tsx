import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

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