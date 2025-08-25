
import Link from "next/link"

const CtaButton = () => {
  return (
    <Link href="/#keywords" className="">
        <button className="hover:cursor-pointer hover:opacity-90 transition-all duration-200 button-black text-white px-4 py-2 rounded-lg text-sm tracking-tight">
            <span className="hidden md:inline-block">See</span> Keywords
        </button>
    </Link>
  )
}

export default CtaButton