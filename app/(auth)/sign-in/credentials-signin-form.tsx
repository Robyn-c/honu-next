'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const CredentialsSignInForm = () => {
  return ( 
      <form>
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
            <Button className="w-full" variant='default'>Entrar</Button>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            <Link href='/sign-up' target="_self" className="link">¿No tienes una cuenta? Regístrate</Link>
          </div>
        </div>
      </form>
   );
}
 
export default CredentialsSignInForm;