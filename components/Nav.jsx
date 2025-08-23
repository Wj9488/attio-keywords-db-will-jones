import Image from "next/image"

import AttioLogo from '@/public/attio-logo.png'
import Link from "next/link"

import CtaButton from "@/components/CtaButton"
import Line from "@/components/Line"

const Nav = () => {
  return (
    <>
        <nav className="flex justify-between items-center py-5 custom-container">
            <div className="flex items-end gap-2">
                <Image src={AttioLogo} alt="Logo" width={100} height={100} />
                <p className="text-sm font-bold tracking-tighter text-darker-gray">Keywords</p>
            </div>
            <div className="flex items-center gap-6">
            <ul className="flex items-center gap-4 tracking-tight text-nav-gray text-[15px]">
                <li>
                    <Link href="/effectiveness">How I’d track effectiveness</Link>
                </li>
                <li>
                    <Link href="/how-i-would-rank">How I'd rank for a keyword</Link>
                </li>
            </ul>
            <CtaButton />
        </div>
        </nav>
        <Line />
    </>
  )
}

export default Nav