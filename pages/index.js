import CtaButton from "@/components/CtaButton";
import RadarSVG from "@/components/RadarSVG";
import Link from "next/link";
import Line from "@/components/Line";
import { useState, useMemo } from "react";

export default function Home() {
  // Filter state management
  const [filters, setFilters] = useState({
    search: "",
    competition: [],
    icpAlignment: [],
    easeOfWin: [],
    rankingStatus: "all", // all, ranking, not-ranking
    showQuickWins: false
  });
  
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

 // Style constants for consistent colouring
const COMPETITION_STYLES = {
  Low: "bg-green-100 text-green-800 border border-green-200",
  Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  High: "bg-red-100 text-red-800 border border-red-200"
};

const ICP_ALIGNMENT_STYLES = {
  Low: "bg-gray-100 text-gray-800 border border-gray-200",
  Medium: "bg-blue-100 text-blue-800 border border-blue-200",
  High: "bg-purple-100 text-purple-800 border border-purple-200"
};

const EASE_OF_WIN_STYLES = {
  Easy: "bg-green-100 text-green-800 border border-green-200",
  Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  Harder: "bg-red-100 text-red-800 border border-red-200"
};

const noFP = "Not on 1st page";

// Keyword data structure
const keywordData = [
  // --- Top Keywords ---
    // --- Customisable / Custom CRM ---
    {
      keyword: "customisable crm",
      traffic: "100 - 1k",
      competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
      icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
      attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
      contentOpportunity: "Potential for category ownership (no clear winner right now). Potential for long form sales page with Attio's customisability at the forefront (hit all sub keywords containing 'custom', 'flexible').",
      keywordNotes: "Attio's configurability is a very strong product match and a clear differentiator.",
      easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
    },
  {
    keyword: "crm for startups",
    traffic: "100 - 1k",
    competition: { level: "High", color: COMPETITION_STYLES.High },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Not on 1st page", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Landing page aimed at startup founders + comparison guide vs general CRMs.",
    keywordNotes: "Very commercial intent from early-stage teams. High-volume & competitive but tightly aligned to Attio's ICP.",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  // {
  //   keyword: "best crm for startups",
  //   traffic: "10 - 100",
  //   competition: { level: "High", color: COMPETITION_STYLES.High },
  //   icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
  //   attioRank: { status: "Not ranking (needs content & reviews)", color: "text-red-600 border-red-500", icon: "warning" },
  //   contentOpportunity: "Definitive buyer's guide with benchmark table, case studies, and 'why choose Attio' section.",
  //   keywordNotes: "High buyer intent; good place for product comparisons and customer quotes to convert.",
  //   easeOfWin: { level: "Harder", color: EASE_OF_WIN_STYLES.Harder }
  // },
  {
    keyword: "crm software for startups",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Informational blog post + product features spotlight (startups use-cases).",
    keywordNotes: "Less competitive than 'best crm' but still product-focused audiences searching for software options.",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },

  // --- B2B Keywords ---
  {
    keyword: "b2b crm",
    traffic: "100 - 1k",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Thought leadership pieces showing Attio's approach to B2B workflows + product demos.",
    keywordNotes: "Large commercial audience; excellent fit for case studies focused on B2B customers.",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  {
    keyword: "b2b crm software",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Feature-led pages describing B2B-specific automations and integrations and use of keyword in body copy.",
    keywordNotes: "Searchers expect robust workflow & reporting capabilities—areas to highlight in these feature pages.",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  {
    keyword: "custom crm software",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Sales page with heavy focus on customisation and flexibility features.",
    keywordNotes: "Users searching this are often ready to switch or build; emphasise migration ease & API as well as flexibility.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },

  // --- Automation Keywords ---
  {
    keyword: "crm automation",
    traffic: "100 - 1k",
    competition: { level: "High", color: COMPETITION_STYLES.High },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Long-form content and video demos showing Attio automations in real workflows.",
    keywordNotes: "Core functionality to emphasise—automation reduces manual work for teams (big ROI).",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  {
    keyword: "crm with email automation",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Product feature page around email inside Attio. Might be able to use this Attio YouTube video in the page: https://www.youtube.com/watch?v=SXybVmcSfPA.",
    keywordNotes: "Attio has email sending and custom email list creation built-in.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "crm with workflow automation",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Focussed sales page around workflow automation in Attio.",
    keywordNotes: "Workflow automation is a direct match to Attio's offering and can be paired well with Attio's AI features.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },

  // --- AI CRM Keywords ---
  {
    keyword: "ai crm",
    traffic: "100 - 1k",
    competition: { level: "High", color: COMPETITION_STYLES.High },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Homepage Ranking #1-3 organic", color: "text-green-600 border-green-500", icon: "check" },
    contentOpportunity: "Attio's core home page ranks here. More use of long tail keywords might cement position.",
    keywordNotes: "Attio ranks well (varies between organic position 1 & 3).",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "ai powered CRM",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Not ranking for long-tail", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Enhancing https://attio.com/platform/ai with case studies.",
    keywordNotes: "Opportunity to strengthen current ranking position. More keyword use in body copy might solve this - true to say leads could also be finding Attio through 'ai crm' keyword.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "ai driven CRM",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "Medium", color: ICP_ALIGNMENT_STYLES.Medium },
    attioRank: { status: "Not ranking", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Enhancing https://attio.com/platform/ai with case studies.",
    keywordNotes: "Audience may include more enterprise buyers seeking security & compliance details. True to say leads could also be finding Attio through 'ai crm' keyword.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },

  // --- Sector / Niche Keywords ---
  {
    keyword: "best crm for b2b saas",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP + " (opportunity for niche content)", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Niche buyer guides for B2B SaaS operators with concrete GTM automation examples. Explainer blog post + case studies.",
    keywordNotes: "High intent buyers looking to be educated (competitor has not won lead yet).",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  {
    keyword: "vc crm",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Ranking #5", color: "text-yellow-600 border-yellow-500", icon: "star" },
    contentOpportunity: "Opportunity to rank page higher: https://attio.com/solution/venture-capital-crm-software or to rank: https://attio.com/p/crm-for-vc",
    keywordNotes: "Strong product fit. Attio has strong customer base in this sector giving it credibility. More keyword usage in body copy should help this.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "venture capital CRM",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Ranking #3", color: "text-green-600 border-green-500", icon: "check" },
    contentOpportunity: "https://attio.com/solution/venture-capital-crm-software page is ranking well.",
    keywordNotes: "Opportunity to reinforce top position with more keyword usage in body copy.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },

  // --- Strong contender keywords ---
  {
    keyword: "flexible CRM",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Ranking #3", color: "text-green-600 border-green-500", icon: "check" },
    contentOpportunity: "Home page is ranking well.",
    keywordNotes: "Opportunity to reinforce top position with focussed landing page around flexibility 'Attio let's us mirror the way we actually work' type testimonials (David - Railway).",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "fully customizable crm",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Sales page focused on customisation and flexibility. Or add exact keyword matching copy to the home page .",
    keywordNotes: "Very problem-aware lead potential. Attio is a strong solution match.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "saas CRM",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: noFP, color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "SaaS playbook landing page showing product-market fit for software companies.",
    keywordNotes: "Competition surprisingly low & high potential for ICP leads. Leverage Attio's existing authority with Attio for SaaS landing page.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "modern CRM",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Ranking #1", color: "text-green-600 border-green-500", icon: "star" },
    contentOpportunity: "Home page ranking very well.",
    keywordNotes: "Strong branding play, catches leads that are likely design-sensitive. Own the 'modern CRM' narrative (which links well with flexibility narrative).",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "deal flow crm",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Ranking #2 (against niche competitor)", color: "text-yellow-600 border-yellow-500", icon: "star" },
    contentOpportunity: "Further keyword matching on deal flow page: https://attio.com/solution/deal-flow-management-software.",
    keywordNotes: "Attio's product is a great fit with strong customer logos to leverage; double down on vertical case studies (VCs, PE, angel groups).",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  // --- Wild cards ---
  {
    keyword: "relationship intelligence software",
    traffic: "10 - 100",
    competition: { level: "Medium", color: COMPETITION_STYLES.Medium },
    icpAlignment: { level: "High", color: ICP_ALIGNMENT_STYLES.High },
    attioRank: { status: "Not ranking (niche positioning needed)", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Thought leadership on relationship intelligence + product tie-ins on signals & context.",
    keywordNotes: "Bit of a wild card - niche but highly problem-aware — useful to frame Attio as relationship-first CRM potentially.",
    easeOfWin: { level: "Medium", color: EASE_OF_WIN_STYLES.Medium }
  },
  {
    keyword: "build your own crm",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "Medium", color: ICP_ALIGNMENT_STYLES.Medium },
    attioRank: { status: "Not ranking (intent split between DIY & no-code)", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Content targeting 'tired of off-the-shelf' audiences — migration guides and no-code examples.",
    keywordNotes: "Audience either technically-minded builders or frustrated users; good mid-funnel play & strong product fit.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  },
  {
    keyword: "create own crm",
    traffic: "10 - 100",
    competition: { level: "Low", color: COMPETITION_STYLES.Low },
    icpAlignment: { level: "Medium", color: ICP_ALIGNMENT_STYLES.Medium },
    attioRank: { status: "Not ranking", color: "text-red-600 border-red-500", icon: "warning" },
    contentOpportunity: "Content targeting 'tired of off-the-shelf' audiences — migration guides and no-code examples.",
    keywordNotes: "Similar to 'build your own crm' — emphasise templates, API and low-code building blocks.",
    easeOfWin: { level: "Easy", color: EASE_OF_WIN_STYLES.Easy }
  }
];

  // Filter and sort logic
  const filteredAndSortedData = useMemo(() => {
    let filtered = keywordData.filter(item => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesKeyword = item.keyword.toLowerCase().includes(searchLower);
        const matchesContent = item.contentOpportunity.toLowerCase().includes(searchLower);
        const matchesNotes = item.keywordNotes.toLowerCase().includes(searchLower);
        if (!matchesKeyword && !matchesContent && !matchesNotes) return false;
      }

      // Competition filter
      if (filters.competition.length > 0 && !filters.competition.includes(item.competition.level)) {
        return false;
      }

      // ICP Alignment filter
      if (filters.icpAlignment.length > 0 && !filters.icpAlignment.includes(item.icpAlignment.level)) {
        return false;
      }

      // Ease of Win filter
      if (filters.easeOfWin.length > 0 && !filters.easeOfWin.includes(item.easeOfWin.level)) {
        return false;
      }

      // Ranking status filter
      if (filters.rankingStatus === "ranking") {
        if (item.attioRank.status.includes("Not")) return false;
      } else if (filters.rankingStatus === "not-ranking") {
        if (!item.attioRank.status.includes("Not")) return false;
      }

      // Quick wins filter
      if (filters.showQuickWins) {
        if (item.easeOfWin.level !== "Easy" || 
            item.competition.level !== "Low" || 
            item.icpAlignment.level !== "High") {
          return false;
        }
      }

      return true;
    });

    // Sort data
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aVal, bVal;
        
        switch (sortConfig.key) {
          case 'keyword':
            aVal = a.keyword;
            bVal = b.keyword;
            break;
          case 'traffic':
            aVal = a.traffic.includes('1k') ? 1000 : parseInt(a.traffic);
            bVal = b.traffic.includes('1k') ? 1000 : parseInt(b.traffic);
            break;
          case 'competition':
            const compOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
            aVal = compOrder[a.competition.level];
            bVal = compOrder[b.competition.level];
            break;
          case 'icpAlignment':
            const icpOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
            aVal = icpOrder[a.icpAlignment.level];
            bVal = icpOrder[b.icpAlignment.level];
            break;
          case 'easeOfWin':
            const easeOrder = { 'Easy': 1, 'Medium': 2, 'Harder': 3 };
            aVal = easeOrder[a.easeOfWin.level];
            bVal = easeOrder[b.easeOfWin.level];
            break;
          case 'attioRank':
            const getRankValue = (status) => {
              if (status.includes('#1')) return 1;
              if (status.includes('#2')) return 2;
              if (status.includes('#3')) return 3;
              if (status.includes('#5')) return 5;
              if (status.includes('Not')) return 100;
              return 50;
            };
            aVal = getRankValue(a.attioRank.status);
            bVal = getRankValue(b.attioRank.status);
            break;
          default:
            aVal = a[sortConfig.key];
            bVal = b[sortConfig.key];
        }

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [filters, sortConfig]);

  // Handle sorting
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleMultiFilterChange = (filterType, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(v => v !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      search: "",
      competition: [],
      icpAlignment: [],
      easeOfWin: [],
      rankingStatus: "all",
      showQuickWins: false
    });
    setSortConfig({ key: null, direction: 'asc' });
  };

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
      <header className="custom-container border-l-1 border-r-1 border-gray-200 min-h-[75dvh] lg:min-h-[70dvh] xl:min-h-[95dvh] 3xl:min-h-[60dvh] relative overflow-hidden">
        {/* RadarSVG as background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <RadarSVG />
        </div>
        <div className="flex items-center justify-center min-h-[75dvh] lg:min-h-[70dvh] xl:min-h-[95dvh] 3xl:min-h-[60dvh] relative z-10 mx-3 lg:mx-0">
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
            <h1 className="font-semibold text-4xl lg:text-5xl tracking-tighter text-center leading-[1.15] xl:w-[40%]">
              Attio SEO keyword opportunity database
            </h1>
            <p className="text-lg text-center tracking-tight xl:w-[45%]">Out of over 1,780 relevant keywords considered from Google Keyword Planner - here is a list of the top keyword opportunities I found that Attio could capitalise on.</p>
            <CtaButton />
          </div>
        </div>
        <div className="absolute bottom-5 px-5 w-full flex items-center justify-between text-xs text-gray">
          <p>[WJ] <span className="font-medium uppercase">INTERNAL RESOURCE</span></p>
          <p>/ <span className="font-medium uppercase">GTM TOP OF FUNNEL</span></p>
        </div>
      </header>
      <Line />
      <section className="custom-container border-l-1 border-r-1 border-gray-200">
        <div className="flex lg:flex-row flex-col items-start justify-between px-5 py-12 lg:px-8 lg:py-16 xl:px-12 xl:py-20">
          <p className="text-xl lg:text-2xl text-body-black tracking-tighter font-semibold lg:w-2/3">These keywords balance high product relevance with comparatively low competition. <span className="text-darker-gray">  For a high-authority site like Attio, that makes ranking very achievable while ensuring searchers are qualified potential users. Targeting them also strengthens Attio’s visibility in LLM-based search (GEO).</span></p>
          <p className="lg:text-lg text-body-black tracking-tight pt-8 lg:pt-0">See the AI prompt I used <Link href="#ai-prompt" className="font-medium underline hover:opacity-75">here</Link></p>
        </div>
        <p className="px-5 lg:px-8 xl:px-12 pb-3 text-gray text-sm">• Showing {filteredAndSortedData.length} of {keywordData.length} keywords</p>
        
        {/* Filter Controls */}
        <div className="px-5 lg:px-8 xl:px-12 pb-6 tracking-tight" id="keywords">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Search Input */}
              <div className="flex-1 min-w-[300px]">
                <input
                  type="text"
                  placeholder="Search keywords e.g. 'SaaS', 'ai', 'custom', content opportunities, or notes..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Quick Wins Toggle */}
              <button
                onClick={() => handleFilterChange('showQuickWins', !filters.showQuickWins)}
                className={`px-4 py-2 rounded-md text-body-black text-sm font-medium transition-colors hover:cursor-pointer ${
                  filters.showQuickWins 
                    ? 'bg-gray-50 border border-gray-200' 
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Best Keywords {filters.showQuickWins ? 'On' : 'Off'}
              </button>

              {/* Clear All Filters */}
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 rounded-md text-sm font-medium text-body-black border border-gray-300 hover:bg-gray-50"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Competition Filter */}
              <div>
                <label className="block text-xs font-medium text-darker-gray mb-2">Competition Level</label>
                <div className="space-y-1 max-w-[fit-content]">
                  {['Low', 'Medium', 'High'].map(level => (
                    <label key={level} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={filters.competition.includes(level)}
                        onChange={(e) => handleMultiFilterChange('competition', level, e.target.checked)}
                        className="mr-2 rounded"
                      />
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${COMPETITION_STYLES[level]}`}>
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* ICP Alignment Filter */}
              <div>
                <label className="block text-xs font-medium text-darker-gray mb-2">ICP Alignment</label>
                <div className="space-y-1 max-w-[fit-content]">
                  {['Medium', 'High'].map(level => (
                    <label key={level} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={filters.icpAlignment.includes(level)}
                        onChange={(e) => handleMultiFilterChange('icpAlignment', level, e.target.checked)}
                        className="mr-2 rounded"
                      />
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${ICP_ALIGNMENT_STYLES[level]}`}>
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ease of Win Filter */}
              <div>
                <label className="block text-xs font-medium text-darker-gray mb-2">Ease of Win</label>
                <div className="space-y-1 max-w-[fit-content]">
                  {['Easy', 'Medium'].map(level => (
                    <label key={level} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={filters.easeOfWin.includes(level)}
                        onChange={(e) => handleMultiFilterChange('easeOfWin', level, e.target.checked)}
                        className="mr-2 rounded"
                      />
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${EASE_OF_WIN_STYLES[level]}`}>
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ranking Status Filter */}
              <div>
                <label className="block text-xs font-medium text-darker-gray mb-2">Current Ranking</label>
                <select
                  value={filters.rankingStatus}
                  onChange={(e) => handleFilterChange('rankingStatus', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Keywords</option>
                  <option value="ranking">Already Ranking</option>
                  <option value="not-ranking">Not Ranking</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-8 xl:px-12 lg:py-3 pb-12 lg:pb-16 xl:pb-20">
          <p className="text-sm mb-3 lg:hidden">Scroll &#8594;</p>
          <div className="overflow-x-auto max-w-full">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="">
                <tr className="border border-gray-200">
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[200px] border-r border-gray-200 align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('keyword')}
                  >
                    <div className="flex items-center justify-between">
                      Keyword
                      {sortConfig.key === 'keyword' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[120px] border-r border-gray-200 align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('traffic')}
                  >
                    <div className="flex items-center justify-between">
                      Traffic Per Month
                      {sortConfig.key === 'traffic' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[100px] border-r border-gray-200 align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('competition')}
                  >
                    <div className="flex items-center justify-between">
                      Competition
                      {sortConfig.key === 'competition' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[120px] border-r border-gray-200 align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('icpAlignment')}
                  >
                    <div className="flex items-center justify-between">
                      ICP Alignment
                      {sortConfig.key === 'icpAlignment' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[140px] border-r border-gray-200 align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('attioRank')}
                  >
                    <div className="flex items-center justify-between">
                      Attio Rank (Current)
                      {sortConfig.key === 'attioRank' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[160px] border-r border-gray-200 align-top items-start">Content opportunity</th>
                  <th className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[200px] border-r border-gray-200 align-top items-start">Notes</th>
                  <th 
                    className="text-left py-2 px-2 font-medium text-base text-heading-black tracking-tight min-w-[100px] align-top items-start cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('easeOfWin')}
                  >
                    <div className="flex items-center justify-between">
                      Ease of win
                      {sortConfig.key === 'easeOfWin' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="border-l border-r border-gray-200">
                {filteredAndSortedData.map((row, index) => (
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
                        <div className={`flex items-center ${row.attioRank.color}`}>
                          {renderIcon(row.attioRank.icon)}
                        </div>
                        <span className={`inline-flex items-center text-xs ${row.attioRank.color}`}>
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
      <Line />
      <section className="px-5 py-12 lg:py-16 xl:py-20 lg:px-8 xl:px-12 custom-container border-l border-r border-gray-200" id="ai-prompt">
      <p className="text-xl lg:text-2xl text-body-black tracking-tighter font-semibold lg:w-2/3 pb-12 lg:pb-16 xl:pb-20">AI System Prompt. <span className="text-darker-gray"> I used Claude Sonnet 4 to create the prompt (used 'meta prompting' to improve it), and used GPT-5 to find keywords since its got reasoning capability, is great at instruction following and has a large token context window. </span></p>

<section className="mb-8">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Context & Product Positioning</h3>
  <p className="text-lg text-body-black mb-2">You are analyzing keyword data for Attio to find low competition, high ICP fit opportunities to capitalize on. Attio is a modern, flexible CRM that specializes in:</p>
  <ul className="list-disc pl-6 mb-2 text-body-black">
    <li><span className="font-semibold">Core Differentiators:</span> Extreme customization without technical complexity, modern Notion-like UX/design, automatic data enrichment, AI built into the platform</li>
    <li><span className="font-semibold">Primary ICP:</span> Tech companies (AI, SaaS, Web3 infrastructure, data migration) with complex and evolving workflows</li>
    <li><span className="font-semibold">Company Stages:</span> Early to growth stages (Series A/B startups) that are scaling quickly and need CRMs that grow with them</li>
  </ul>
  <div className="mb-2">
    <span className="font-semibold">Key Buyer Personas:</span>
    <ul className="list-disc pl-8 mt-1 text-body-black">
      <li>Venture Capital Firms: Managing deal flow and creating "single source of truth" for investment data</li>
      <li>Growing Startups: Need quick implementation with adaptable systems for specific workflows</li>
      <li>Sales Teams: Require customizable pipelines with drag-and-drop functionality for deal tracking</li>
      <li>Recruiting Teams: Leverage custom workflows for managing recruiting processes</li>
      <li>Founders: Outgrown spreadsheets but want flexibility without Salesforce complexity</li>
      <li>RevOps Leaders: Seeking scalable solutions that adapt to unique business models</li>
    </ul>
  </div>
  <p className="mb-2 text-body-black"><span className="font-semibold">Core Pain Points:</span> Rigidity of traditional CRMs, speed of implementation, desire for beautiful/intuitive UX, requirement for custom objects and workflows, data enrichment needs</p>
</section>

<section className="mb-8">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Analysis Framework</h3>
  <div className="mb-4">
    <h4 className="text-xl font-semibold text-heading-black mb-1">Step 1: Keyword Filtering Criteria</h4>
    <ul className="list-disc pl-6 mb-2 text-body-black">
      <li><span className="font-semibold">INCLUDE</span> keywords that meet <span className="font-semibold">ALL</span> of the following:</li>
      <ul className="list-disc pl-8 mb-2">
        <li>Monthly search volume: 10-2,000 (sweet spot: 50-500)</li>
        <li>Competition level: Low or Medium only</li>
        <li>Competition indexed value: ≤50</li>
        <li>Clear commercial intent (people actively seeking solutions)</li>
      </ul>
      <li><span className="font-semibold">PRIORITIZE</span> keywords that indicate:</li>
      <ul className="list-disc pl-8 mb-2">
        <li>Dissatisfaction with current tools ("alternative to...", "better than...", "modern...")</li>
        <li>Specific feature needs that Attio excels at ("customizable CRM", "flexible CRM", "data enrichment", "automatic data capture")</li>
        <li>Tech company/startup context ("CRM for AI companies", "SaaS CRM", "Web3 CRM", "startup deal flow")</li>
        <li>Specific use case alignment ("venture capital CRM", "recruiting CRM", "partnership management", "deal flow software")</li>
        <li>UI/UX focus ("intuitive CRM", "Notion-like CRM", "beautiful CRM interface")</li>
        <li>Custom workflow needs ("custom objects CRM", "pipeline customization", "flexible sales process")</li>
      </ul>
    </ul>
  </div>
  <div className="mb-4">
    <h4 className="text-xl font-semibold text-heading-black mb-1">Step 2: ICP Fit Scoring (Rate low to high)</h4>
    <ul className="list-disc pl-6 mb-2 text-body-black">
      <li><span className="font-semibold">Score High (Perfect Match):</span> Keywords indicating exact product-market fit (e.g., "flexible CRM", "customizable relationship management"), Tech/startup-specific CRM needs (e.g., "CRM for AI companies", "SaaS CRM", "venture capital deal flow"), Use case-specific searches (e.g., "recruiting CRM", "partnership management software", "deal flow tool"), UI/data focused searches (e.g., "CRM with data enrichment", "Notion-like CRM", "intuitive sales software")</li>
      <li><span className="font-semibold">Score High (Strong Match):</span> General CRM needs from target company types (Series A/B, tech companies), Feature-specific searches where Attio has clear advantages (custom objects, pipeline flexibility), Industry-specific needs (SaaS, AI, Web3, data/infrastructure companies), Growth-stage company CRM requirements</li>
      <li><span className="font-semibold">Score Medium (Good Match):</span> Broader CRM category searches with tech/startup qualifying context, Workflow/process improvement keywords relevant to scaling teams</li>
      <li><span className="font-semibold">Score Low (Poor Match):</span> Enterprise-focused keywords, Highly technical/admin-heavy requirements, Industries outside core ICP</li>
    </ul>
  </div>
  <div className="mb-4">
    <h4 className="text-xl font-semibold text-heading-black mb-1">Step 3: Content Opportunity Assessment</h4>
    <p className="mb-1 text-body-black">For each high-scoring keyword, identify the optimal content approach:</p>
    <ul className="list-disc pl-6 mb-2 text-body-black">
      <li><span className="font-semibold">Content Types:</span></li>
      <ul className="list-disc pl-8 mb-2">
        <li>Comparison/Alternative pages ("Attio vs [Competitor]", "Best [Traditional Tool] Alternative")</li>
        <li>Solution-focused landing pages (targeting specific use cases/industries)</li>
        <li>Educational/thought leadership (addressing pain points and modern approaches)</li>
        <li>Use case studies (showing Attio's flexibility in action)</li>
        <li>Feature-focused content (deep dives into relationship intelligence, customization, etc.)</li>
      </ul>
    </ul>
  </div>
</section>

<section className="mb-8">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Output Format</h3>
  <p className="mb-2 text-body-black">Present findings in this exact table structure:</p>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm mb-2">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="px-2 py-1 font-semibold text-heading-black">Keyword</th>
          <th className="px-2 py-1 font-semibold text-heading-black">Monthly Searches</th>
          <th className="px-2 py-1 font-semibold text-heading-black">Competition Level</th>
          <th className="px-2 py-1 font-semibold text-heading-black">ICP Fit</th>
          <th className="px-2 py-1 font-semibold text-heading-black">Content Opportunity</th>
          <th className="px-2 py-1 font-semibold text-heading-black">Notes</th>
          <th className="px-2 py-1 font-semibold text-heading-black">Ease of Win</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-1 text-darker-gray">[keyword]</td>
          <td className="px-2 py-1 text-darker-gray">[number]</td>
          <td className="px-2 py-1 text-darker-gray">[Low/Medium/High]</td>
          <td className="px-2 py-1 text-darker-gray">[Low/Medium/High]</td>
          <td className="px-2 py-1 text-darker-gray">Why this keyword indicates strong product-market fit and commercial intent</td>
          <td className="px-2 py-1 text-darker-gray">Specific content type and angle that would rank well and convert</td>
          <td className="px-2 py-1 text-darker-gray">[Easy/Medium/Harder]</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section className="mb-8">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Quality Filters - <span className="text-red-600">EXCLUDE These:</span></h3>
  <ul className="list-disc pl-6 mb-2 text-body-black">
    <li><span className="text-red-600 font-bold">❌</span> Generic terms with 5,000+ monthly searches ("CRM", "sales software")</li>
    <li><span className="text-red-600 font-bold">❌</span> Enterprise-focused keywords ("enterprise CRM", "Salesforce administrator")</li>
    <li><span className="text-red-600 font-bold">❌</span> High competition (indexed value &gt;50) unless exceptionally relevant</li>
    <li><span className="text-red-600 font-bold">❌</span> Pure informational queries with no commercial intent ("what is CRM", "CRM definition")</li>
    <li><span className="text-red-600 font-bold">❌</span> Highly technical integration/API keywords (unless startup-specific)</li>
    <li><span className="text-red-600 font-bold">❌</span> Industry verticals outside core ICP (healthcare CRM, real estate CRM, etc.)</li>
  </ul>
</section>

<section className="mb-8">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Success Examples to Emulate:</h3>
  <ul className="list-disc pl-6 mb-2 text-body-black">
    <li><span className="font-semibold">"flexible CRM"</span> - Perfect because flexibility is Attio's core differentiator</li>
    <li><span className="font-semibold">"modern CRM"</span> - Excellent because it indicates dissatisfaction with legacy tools</li>
    <li><span className="font-semibold">"CRM with data enrichment"</span> - Great because automatic data enrichment is a key Attio feature</li>
    <li><span className="font-semibold">"venture capital deal flow software"</span> - Ideal specific use case where Attio excels</li>
    <li><span className="font-semibold">"recruiting CRM"</span> - Strong use case alignment with proven customer success</li>
    <li><span className="font-semibold">"Notion-like CRM"</span> - Perfect UX positioning that resonates with target audience</li>
    <li><span className="font-semibold">"CRM for AI companies"</span> - Excellent industry-specific targeting within core ICP</li>
  </ul>
</section>

<section className="mb-4">
  <h3 className="text-2xl font-bold text-heading-black mb-2">Final Instructions:</h3>
  <ul className="list-disc pl-6 text-body-black">
    <li>Be ruthlessly selective - only surface keywords with genuine commercial potential</li>
    <li>Focus on intent - prioritize buyers actively seeking solutions over researchers</li>
    <li>Think strategically - consider how each keyword fits into Attio's broader content and SEO strategy</li>
    <li>Limit output to top 15-25 opportunities - quality over quantity</li>
  </ul>
</section>
      </section>
    </main>
  );
}
