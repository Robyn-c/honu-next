import Link from "next/link";

import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { User } from "lucide-react";

const UserButton = async () => {

  const session = await auth();

  if (!session) {
    return (
      <Link href='/sign-in'>
        <User/>
      </Link>
    )
  }
  return (
    <>
      <div className="md:hidden flex gap-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <User/>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            Hi
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex">
        <Sheet>
          <SheetTrigger>
            <User/>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
                <form action={signOutUser} className="w-full">
                  <Button variant='outline'>Sign Out</Button>
                </form>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
      </div>
    </>

  )
}

export default UserButton;