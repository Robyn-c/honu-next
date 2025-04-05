import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";

export const metadata : Metadata = {
  title: "Entrar"
}

const SignInPage = () => {
  return ( 
    <section className="max-w-sm w-full">
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Ingresa a tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsSignInForm/>
        </CardContent>
      </Card>
    </section>
   );
}
 
export default SignInPage;