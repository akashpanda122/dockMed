'use client';
import { useAccount, useLogout } from '@account-kit/react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaPowerOff } from 'react-icons/fa6';
import { RxAvatar, RxExternalLink } from 'react-icons/rx';
//import alchemyLogo from '../../../public/assets/alchemy.png';
import logo from '../../../public/assets/logo.png';
import { shortenAddress } from '../lib';
import WordId from './wordId';
import { usePathname } from 'next/navigation';
import eacLogo from '@/../../public/assets/EasLogo.png';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const { address } = useAccount({
        type: 'LightAccount',
    });
    const { logout } = useLogout();
    const pathname = usePathname();
    const { setTheme } = useTheme();

    return (
        <>
            <div className="border-b-2 h-fit px-10">
                <div className="container mx-auto w-full  flex justify-between py-5 ">
                    <div className="flex items-center gap-10">
                        {/*<Image
                            src={logo}
                            alt="logo"
                            width={200}
                        />*/}
                        <Link
                            href={'/home'}
                            className="bg-themelinear text-[#0A6EFF] bg-clip-text text-4xl font-extrabold"
                        >
                            <Image
                                src={logo}
                                alt="logo"
                                width={200}
                            />
                        </Link>

                        {pathname === '/home' ? (
                            <ul className='md:flex gap-8 hidden'>
                                <Link
                                    href={'/view-records'}
                                    className="capitalize text-sm text-[#157D7A]"
                                >
                                    <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                        View records
                                    </li>
                                </Link>
                            </ul>
                        ) : pathname === '/verified-doctor' ||
                          pathname === '/healthcare-provider' ? (
                            <Image src={eacLogo} alt="EacLogo" width={80} />
                        ) : null}
                    </div>
                    {address ? (
                        <div className="flex items-center gap-x-3">
                            {pathname === '/home' && (
                                <span className="cursor-pointer text-[#157D7A] hover:underline ">
                                    <WordId />
                                </span>
                            )}
                            <RxAvatar size={30} />
                            <div
                                className="cursor-pointer hover:underline"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        address as string
                                    );
                                    toast.success(
                                        'Address copied to clipboard'
                                    );
                                }}
                            >
                                {shortenAddress(address)}
                            </div>
                            <FaPowerOff
                                className="cursor-pointer"
                                onClick={() => logout()}
                            />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <div className='flex items-center gap-x-3'>
                            <Button className='bg-[#0A6EFF] gap-2 rounded-lg'>
                                <Link
                                    href={'/home'}
                                >
                                    Book Appointment
                                </Link>
                                <RxExternalLink /> 
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Navbar;