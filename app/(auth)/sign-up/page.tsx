import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import CredentialsSignUpForm from './credentials-signup-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SignUpPage = async(props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) => {
  const session = await auth();
  const { callbackUrl } = await props.searchParams;

  if (session) {
    return redirect(callbackUrl || '/');
  
    }
  return ( 
    <section className="max-w-sm w-full">
      <Card>
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
          <CardDescription>Crea tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsSignUpForm/>
        </CardContent>
      </Card>
    </section>
   );
}
 
export default SignUpPage;