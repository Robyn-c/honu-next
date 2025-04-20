'use client';
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signInWithCredentials } from "@/lib/actions/user.actions";



const CredentialsSignInForm = () => {
  
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: ''
  })  
  
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant='default'>
        { pending ? 'Entrando...' : 'Entrar' }
      </Button>
    )


  }
  return ( 
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl}/>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor='email'>Email</Label>
            <Input id="email" name="email" type="email" required autoComplete='email'/>
          </div>
          <div className="space-y-2">
            <Label htmlFor='password'>Contraseña</Label>
            <Input id="password" name="password" type="password" required autoComplete='password'/>
          </div>
          <div>
            <SignInButton />
          </div>
          { data && !data.success && (
            <p className="text-sm text-center text-destructive">{data.message}</p>
          )}
          <div className="text-sm text-center text-muted-foreground">
            <Link href='/sign-up' target="_self" className="link">¿No tienes una cuenta? Registrate</Link>
          </div>
        </div>
      </form>
   );
}
 
export default CredentialsSignInForm;