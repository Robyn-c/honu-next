import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Metadata } from "next";
import { redirect } from "next/navigation";

import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";

export const metadata : Metadata = {
  title: "Entrar"
}

const SignInPage = async(props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  
  if (session) {
    return redirect(callbackUrl || '/');

  }

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