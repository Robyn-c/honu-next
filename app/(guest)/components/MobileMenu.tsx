import { Menu } from 'lucide-react';

import { 
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
 } from '@/components/ui/sheet'

const MobileMenu = () => {
  return ( 
    <Sheet>
    <SheetTrigger>
      <Menu />
    </SheetTrigger>
    <SheetContent side='left'>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
   );
}
 
export default MobileMenu;