import Navbar from "@/app/(home)/components/Navbar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  );
}
// TODO: Find a better name 

export default HomeLayout;