import Navbar from "@/app/(home)/components/Navbar";

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
    </>
  );
}
// TODO: Find a better name 

export default HomeLayout;