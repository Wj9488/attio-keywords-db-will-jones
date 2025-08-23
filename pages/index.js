import CtaButton from "@/components/CtaButton";
import RadarSVG from "@/components/RadarSVG";
import Link from "next/link";
import Line from "@/components/Line";

export default function Home() {
  // Keyword data structure
  const keywordData = [
    {
      keyword: "relationship intelligence software",
      traffic: "10 - 100",
      competition: { level: "Medium", color: "bg-yellow-100 text-yellow-800" },
      icpAlignment: { level: "High", color: "bg-purple-100 text-purple-800" },
      attioRank: { status: "Not ranking", color: "text-red-600", icon: "warning" },
      contentOpportunity: "Sales page with keyword as H1, or informational blog post.",
      keywordNotes: "Niche but strongly problem-aware. Perfect for founders/ VCs/BD leaders searching for category framing.",
      easeOfWin: { level: "Easy", color: "bg-green-100 text-green-800" }
    },
    {
      keyword: "crm for startups",
      traffic: "100 - 1K",
      competition: { level: "High", color: "bg-red-100 text-red-800" },
      icpAlignment: { level: "High", color: "bg-purple-100 text-purple-800" },
      attioRank: { status: "Position 15", color: "text-orange-600", icon: "check" },
      contentOpportunity: "Dedicated landing page targeting startup founders and early-stage companies.",
      keywordNotes: "High intent keyword with strong commercial value. Competitive but winnable with targeted content.",
      easeOfWin: { level: "Medium", color: "bg-yellow-100 text-yellow-800" }
    },
    {
      keyword: "customer data platform",
      traffic: "1K - 10K",
      competition: { level: "High", color: "bg-red-100 text-red-800" },
      icpAlignment: { level: "Medium", color: "bg-blue-100 text-blue-800" },
      attioRank: { status: "Not ranking", color: "text-red-600", icon: "warning" },
      contentOpportunity: "Comprehensive guide comparing CDP solutions with Attio positioned as modern alternative.",
      keywordNotes: "Broader category term with high search volume. Requires strong content strategy to compete.",
      easeOfWin: { level: "Hard", color: "bg-red-100 text-red-800" }
    },
    {
      keyword: "sales pipeline management",
      traffic: "100 - 1K",
      competition: { level: "Medium", color: "bg-yellow-100 text-yellow-800" },
      icpAlignment: { level: "High", color: "bg-purple-100 text-purple-800" },
      attioRank: { status: "Position 8", color: "text-green-600", icon: "check" },
      contentOpportunity: "Feature-focused landing page showcasing pipeline visualization capabilities.",
      keywordNotes: "Core CRM functionality with good search volume. Opportunity to showcase unique pipeline features.",
      easeOfWin: { level: "Easy", color: "bg-green-100 text-green-800" }
    },
    {
      keyword: "modern crm",
      traffic: "10 - 100",
      competition: { level: "Low", color: "bg-green-100 text-green-800" },
      icpAlignment: { level: "High", color: "bg-purple-100 text-purple-800" },
      attioRank: { status: "Not ranking", color: "text-red-600", icon: "warning" },
      contentOpportunity: "Brand-focused content highlighting Attio's modern approach vs legacy CRMs.",
      keywordNotes: "Perfect brand positioning keyword. Low competition makes this an easy win for brand awareness.",
      easeOfWin: { level: "Easy", color: "bg-green-100 text-green-800" }
    }
  ];

  const renderIcon = (iconType) => {
    if (iconType === "warning") {
      return (
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      );
    }
    return (
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <main>
      <header className="custom-container border-l-1 border-r-1 border-gray-200 min-h-[50dvh] relative overflow-hidden">
        {/* RadarSVG as background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <RadarSVG />
        </div>
        <div className="flex items-center justify-center min-h-[50dvh] relative z-10">
          <div className="flex flex-col items-center gap-5">
            <div className="rounded-full border border-gray-200 bg-white px-4 py-2 tracking-tight text-xs">
              <p>
                Built by{" "}
                <Link
                  href="https://linkedin.com/in/william-thibaut-jones"
                  target="_blank"
                  className="font-medium underline hover:opacity-75"
                >
                  Will Jones
                </Link>
              </p>
            </div>
            <h1 className="font-semibold text-5xl tracking-tighter text-center leading-[1.15] xl:w-[40%]">
              Attio SEO keyword opportunity database
            </h1>
            <p className="text-lg text-center tracking-tight xl:w-[45%]">Out of over 1,780 relevant keywords considered from Google Keyword Planner - here is a list of the top keyword opportunities I found that Attio could capitalise on.</p>
            <CtaButton />
          </div>
        </div>
        <div className="absolute bottom-5 px-5 w-full flex items-center justify-between text-xs text-gray">
          <p>[WJ] <span className="font-medium uppercase">INTERNAL RESOURCE</span></p>
          <p>/ <span className="font-medium uppercase">GTM</span></p>
        </div>
      </header>
      <Line />
      <section className="custom-container border-l-1 border-r-1 border-gray-200">
        <div className="flex lg:flex-row flex-col items-start justify-between px-12 py-14">
          <p className="text-2xl text-body-black tracking-tighter font-semibold lg:w-2/3">Keywords prioritise both high product relevance and low competition.<span className="text-darker-gray">  Which means not only that ranking is usually not hard, but also that the people searching these terms are very likely to be qualified leads interested in Attio.</span></p>
          <p className="text-lg text-body-black tracking-tight">See the AI prompt I used <Link href="/ai-prompt" className="font-medium underline hover:opacity-75">here</Link></p>
        </div>
        <div id="keywords" className="px-12 pb-14">
          <div className="overflow-x-auto max-w-full">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="">
                <tr className="border border-gray-200">
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[200px] border-r border-gray-200 align-top items-start">Keyword</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[120px] border-r border-gray-200 align-top items-start">Traffic Per Month</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[100px] border-r border-gray-200 align-top items-start">Competition</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[120px] border-r border-gray-200 align-top items-start">ICP Alignment</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[140px] border-r border-gray-200 align-top items-start">Attio Rank (Current)</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[160px] border-r border-gray-200 align-top items-start">Content opportunity</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[200px] border-r border-gray-200 align-top items-start">Keyword Notes</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[100px] align-top items-start">Ease of win</th>
                </tr>
              </thead>
              <tbody className="border-l border-r border-gray-200">
                {keywordData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className="text-sm text-darker-gray font-medium tracking-tight">"{row.keyword}"</span>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className="text-sm">{row.traffic}</span>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium tracking-tight ${row.competition.color}`}>
                        {row.competition.level}
                      </span>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium tracking-tight ${row.icpAlignment.color}`}>
                        {row.icpAlignment.level}
                      </span>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <div className="flex items-start gap-2">
                        <span className={`inline-flex items-center text-xs ${row.attioRank.color}`}>
                          {renderIcon(row.attioRank.icon)}
                          {row.attioRank.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className="text-sm text-darker-gray tracking-tight">{row.contentOpportunity}</span>
                    </td>
                    <td className="py-2 px-2 border-r border-gray-100 align-top">
                      <span className="text-sm text-darker-gray tracking-tight">{row.keywordNotes}</span>
                    </td>
                    <td className="py-2 px-2 align-top">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${row.easeOfWin.color}`}>
                        {row.easeOfWin.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
