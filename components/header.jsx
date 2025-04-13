import { SignedIn, SignedOut, SignInButton,  UserButton } from '@clerk/nextjs';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from '@/lib/checkuser';

const Header = async() => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
  <nav className="flex items-center justify-between px-6 md:px-12 h-16">
    {/* Logo on the left */}
    <Link href="/">
      <Image 
        src="/nextleap.png"
        alt="ai-coach" 
        width={200} 
        height={60} 
        className="h-18 py-1 w-auto object-contain"
      />
    </Link>

    {/* Buttons on the right */}
    <div className="flex items-center space-x-2 md:space-x-4">
      <SignedIn>
        <Link href="/dashboard">
          <Button variant="outline">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden md:block">Industry Insights</span>
          </Button>
        </Link>
      

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <StarsIcon className="h-4 w-4" />
            <span className="hidden md:block">Growth Tools</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={"/resume"} className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Build Resume</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
              <PenBox className="h-4 w-4" />
              Cover Letter
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/interview"} className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Interview Prep
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SignedIn>

      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
             avatarBox: "h-10 w-10",
             userButtonPopoverCard: "shadow-xl",
             userPreviewMainIdentifier: "font-semibold",
          },
        }}
        afterSignOutUrl='/'
        />
      </SignedIn>
    </div>
  </nav>
</header>
  

  
);
};

export default Header;