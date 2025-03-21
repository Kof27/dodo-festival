'use client'
import { usePathname } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiMenu3Fill } from "react-icons/ri";
import { nunito400, nunito600, nunito800 } from "@/lib/fonts"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import { WHATSAPP_PHONE } from '@/lib/constants';

export default function Dropdown(){
    const pathname = usePathname()
    
    return (
    <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <RiMenu3Fill color="white" size={35}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`${nunito600.className} bg-dodoBlack-100 text-dodoWhite-100  mr-4  p-4  rounded-xl flex flex-col justify-center items-center`}>
                <div className="h-[90%] w-full flex flex-col justify-center items-center  divide-y">
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5"><Link className={`link ${pathname === '/equipo' ? nunito800.className : ''}`} href='/equipo'>EQUIPO</Link></DropdownMenuLabel>

                    {/* 
                    Se comenta esta linea de codigo hasta que se logre resolver la cuestion de Resend
                    <DropdownMenuLabel className="tracking-wider w-full text-center py-5"><Link className={`link ${pathname === '/contacto' ? nunito800.className : ''}`} href="/contacto">CONTACTO</Link></DropdownMenuLabel> 
                    */}
                    
                </div>

                <DropdownMenuItem className="h-[10%] items-end gap-x-4 mt-5">
                    <a href="https://www.instagram.com/grupododo/" target="_blank">
                        <AiOutlineInstagram color="white" size={25}/>
                    </a>
                    
                    <a href="https://www.facebook.com/corporacionartisticadodo/" target="_blank">
                        <AiOutlineFacebook color="white" size={25}/>
                    </a>
                    <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank">
                        <AiOutlineWhatsApp color="white" size={25}/>
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}