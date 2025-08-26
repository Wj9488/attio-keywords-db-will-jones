
import Link from "next/link"

const SecondaryCta = () => {
  return (
    <Link href="/#keywords" className="">
        <button className="hover:cursor-pointer hover:opacity-90 transition-all duration-200 bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm tracking-tight">
            Pipeline Impact
        </button>
    </Link>
  )
}

export default SecondaryCta