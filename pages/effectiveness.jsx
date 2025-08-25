import Image from "next/image"
import AttioUsingUtm from "@/public/attio-using-utm.webp"

const Effectiveness = () => {
  return (
    <main className="custom-container border-l border-r border-gray-200 pt-[3rem] min-h-[calc(80vh-3rem)] tracking-tight">
      <section className="px-5 py-12 lg:py-16 xl:py-20 lg:px-8 xl:px-12">
        <div className="text-darker-gray">
          <h1 className="text-xl lg:text-2xl text-heading-black font-semibold mb-4">How I would track effectiveness</h1>
          <p className="mb-6">Each article would be tagged with appropriate UTM parameters which I know is something that Attio likely uses:</p>
          <Image src={AttioUsingUtm} alt="Attio UTM Example" width={1000} height={1000} className="w-full h-auto rounded-lg mb-6" />
          <p>
            Each page I’d create would include a clear CTA to free trial/signup, with UTM parameters embedded so we can attribute conversions directly back to the keyword that drove the visit. This means we can see not just how many trials a keyword brings in, but whether that traffic actually converts into users. Over time, this creates a closed feedback loop: we know which keywords both rank and generate revenue and what product pillars make people spend ££, and can refine focus accordingly.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Effectiveness