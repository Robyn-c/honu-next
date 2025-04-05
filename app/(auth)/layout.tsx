const AuthLayout = ({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) => {
  return ( 
    <main className="bg-indigo-100 min-h-svh flex items-center justify-center">
      {children}
    </main>
   );
}
 
export default AuthLayout;