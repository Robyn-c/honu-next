import Navbar from "@/app/(home)/components/Navbar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="p-6">
      <Navbar/>
      {children}
    </main>
  );
}
// TODO: Find a better name 

export default HomeLayout;