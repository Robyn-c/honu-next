'use client'


import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";


import { signUpUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CredentialsSignUpForm = () => {

  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: ''
  })  
  
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant='default'>
        { pending ? 'Registrando...' : 'Registrarse' }
      </Button>
    )
  }

  return ( 
    <form action={action}>
    <input type="hidden" name="callbackUrl" value={callbackUrl}/>
    <div className="space-y-6">
    <div className="space-y-2">
        <Label htmlFor='name'>Nombre</Label>
        <Input id="name" name="name" type="text" required autoComplete='name'/>
      </div>
      <div className="space-y-2">
        <Label htmlFor='email'>Email</Label>
        <Input id="email" name="email" type="email" required autoComplete='email'/>
      </div>
      <div className="space-y-2">
        <Label htmlFor='password'>Contraseña</Label>
        <Input id="password" name="password" type="password" required autoComplete='password'/>
      </div>
      <div className="space-y-2">
        <Label htmlFor='confirmPassword'>Confirmar contraseña</Label>
        <Input id="confirmPassword" name="confirmPassword" type="password" required />
      </div>
      <div>
        <SignUpButton />
      </div>
      { data && !data.success && (
        <p className="text-sm text-center text-destructive">{data.message}</p>
      )}
      <div className="text-sm text-center text-muted-foreground">
        <Link href='/sign-up' target="_self" className="link">¿Ya tienes una cuenta?</Link>
      </div>
    </div>
  </form>
   );
}
 
export default CredentialsSignUpForm;