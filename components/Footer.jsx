import Image from "next/image"
import AttioImage from "@/public/attio_objects.png"
import Link from "next/link"

import AttioLogo from "@/public/attio-logo-white.png"

const Footer = () => {
  return (
    <>
        <div className="bg-attio-blue">
            <section className="flex lg:flex-row flex-col items-center justify-between custom-container border-l border-r border-[#5691ff]">
                <div className="px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
                    <p className="text-attio-blue-light text-4xl tracking-tighter font-semibold xl:w-2/3">Have a Question? <span className="text-white">Feel free to contact me.</span></p>
                    <Link href="https://linkedin.com/in/william-thibaut-jones" target="_blank">
                    <button className="mt-6 button-attio-blue border border-[#7da9fc] hover:cursor-pointer hover:opacity-90 transition-all duration-200 button-black text-white px-4 py-2 rounded-lg text-sm tracking-tight">Contact Me</button>
                    </Link>
                </div>
                <div className="pb-12 lg:pb-0">
                    <Image src={AttioImage} alt="Logo" width={500} height={500} />
                </div>
            </section>
        </div>
        <footer className="bg-[#212026]">
            <section className="custom-container">
                <div className="flex items-center justify-between py-5">
                    <div className="flex items-center gap-2">
                        <Image src={AttioLogo} alt="Logo" width={100} height={100} />
                        <p className="text-sm font-bold tracking-tighter text-white">Keywords</p>
                    </div>
                    <p className="text-sm tracking-tighter text-white">Built by <Link href="https://linkedin.com/in/william-thibaut-jones" className="underline" target="_blank">Will Jones</Link></p>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer