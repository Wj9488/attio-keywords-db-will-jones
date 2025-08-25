import Link from "next/link"

const PotentialLimitationsPage = () => {
  return (
    <main className="custom-container border-l border-r border-gray-200 pt-[3rem] min-h-[calc(80vh-3rem)]">
      <section className="px-5 py-12 lg:py-16 xl:py-20 lg:px-8 xl:px-12">
        <div className="text-darker-gray">
          <h1 className="text-xl lg:text-2xl text-heading-black font-semibold mb-4">Potential Limitations</h1>
          <ol className="list-decimal ml-6 space-y-3">
            <li>
              <strong>I don’t have access to internal marketing documentation like specific ICP profiles.</strong> I may be wrong or slightly off base with the Key Buyer Personas I laid out in the <Link href="/#ai-prompt" className="underline">AI prompt</Link>, which reduces its immediate benefit to the GTM team.
            </li>
            <li>
              <strong>I do not know Attio’s current internal reach statistics.</strong> For example, I know that Attio’s website gets 610,962 visits per month and social traffic is 64.71% from LinkedIn. Therefore, gaining top positions for these keywords may not drive a meaningful enough amount of leads as compared to other marketing efforts.<br />
              <span className="block mt-2 ml-2">
                <strong>Counter point:</strong> A lot of these visits may be people going straight to the web app rather than being potential new customers, meaning ranking might still be worthwhile to catch more organic search traffic. This is supported by there being 59% direct traffic, 74.7% desktop traffic, high average visit duration, and a very low bounce rate.
              </span>
            </li>
          </ol>
        </div>
      </section>
    </main>
  )
}

export default PotentialLimitationsPage