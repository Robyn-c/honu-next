import Navbar from "@/app/(root)/components/navbar/navbar";
import Footer from "@/app/(root)/components/footer/footer";

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