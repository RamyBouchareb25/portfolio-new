import svgPaths from "./svg-hzoknxf071";
import imgArchitectureDiagram from "./a233f853c9ab7822d6a88b66f93a25c675b77d8d.png";

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p18c14180} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand">
      <Container1 />
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[48px]">K8S_EXPERT_v1.0</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">About</p>
      </div>
    </div>
  );
}

function LinkActiveState() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[8px] px-[12px] relative shrink-0" data-name="Link - Active State">
      <div aria-hidden="true" className="absolute border-[#e1fdff] border-b-2 border-solid inset-0 pointer-events-none shadow-[0px_0px_8px_0px_rgba(0,242,255,0.8)]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Projects</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Skills</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Blog</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Contact</p>
      </div>
    </div>
  );
}

function NavigationLinksDesktop() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation Links (Desktop)">
      <Link />
      <Link1 />
      <LinkActiveState />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.708px] relative shrink-0 w-[11.694px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6939 11.7078">
        <g id="Container">
          <path d={svgPaths.p17f78f00} fill="var(--fill-0, #002022)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTrailingAction() {
  return (
    <div className="bg-[#00f2ff] content-stretch flex gap-[7.99px] items-center justify-center px-[25px] py-[9px] relative rounded-[2px] shrink-0" data-name="Button - Trailing Action">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#002022] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Deploy CV</p>
      </div>
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[64px] pr-[63.99px] py-[16px] relative size-full">
          <Brand />
          <NavigationLinksDesktop />
          <ButtonTrailingAction />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px] z-[3]" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(0,242,255,0.1)]" />
      <Container />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[14.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.6667">
        <g id="Container">
          <path d={svgPaths.p36b4ef00} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">/SYS/VAR/PROJECTS</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[0] relative shrink-0 text-[80px] tracking-[-3.2px] w-full whitespace-nowrap" data-name="Heading 1">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#e1fdff]">
        <p className="leading-[88px]">{`Architecture & Deployments `}</p>
      </div>
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] justify-center not-italic opacity-0 relative shrink-0 text-[#00f2ff]">
        <p className="leading-[88px]">█</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.3)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pl-[18px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[16px] whitespace-nowrap">
          <p className="leading-[25.6px] mb-0">A highly curated registry of cloud-native infrastructure builds, demonstrating</p>
          <p className="leading-[25.6px] mb-0">expertise in high availability, automated scaling, and robust security posture across</p>
          <p className="leading-[25.6px]">distributed environments.</p>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[16px] relative shrink-0 w-[672px]" data-name="Margin">
      <VerticalBorder />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Margin />
      <Heading />
      <Margin1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">PROD-US-EAST</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="bg-[#74f5ff] relative rounded-[12px] shadow-[0px_0px_8px_0px_#00dbe7] shrink-0 size-[8px]" data-name="Background+Shadow" />
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
          <p className="leading-[21px]">UPTIME: 99.999%</p>
        </div>
      </div>
    </div>
  );
}

function TerminalStatusBar() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="Terminal Status Bar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container8 />
    </div>
  );
}

function TerminalStatusBarMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Terminal Status Bar:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <TerminalStatusBar />
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px mix-blend-screen opacity-60 relative" data-name="Architecture Diagram">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.62%] left-0 max-w-none top-[-39.31%] w-full" src={imgArchitectureDiagram} />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(14,14,14,0.8)] bottom-[9px] right-[9px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">SYS_DIAGRAM_V2.PDF</p>
        </div>
      </div>
    </div>
  );
}

function ImageDiagramPlaceholder() {
  return (
    <div className="aspect-video bg-[#1c1b1b] relative rounded-[2px] shrink-0" data-name="Image/Diagram Placeholder">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="absolute inset-px" style={{ backgroundImage: "linear-gradient(29.2426deg, rgba(0, 242, 255, 0.05) 0%, rgba(0, 242, 255, 0) 100%)" }} data-name="Gradient" />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <ArchitectureDiagram />
        </div>
        <OverlayBorderOverlayBlur />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[48px] mb-0">Zero-Downtime</p>
        <p className="leading-[48px] mb-0">Multi-Region</p>
        <p className="leading-[48px]">Migration</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.78px] right-0 top-[159.19px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px] mb-0">Architected and executed a seamless</p>
        <p className="leading-[25.6px] mb-0">transition of legacy monolithic services to a</p>
        <p className="leading-[25.6px] mb-0">globally distributed Kubernetes cluster,</p>
        <p className="leading-[25.6px] mb-0">ensuring absolutely zero disruption to active</p>
        <p className="leading-[25.6px]">user sessions during DNS cutover.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[21px]">COST_REDUCTION</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[24px] w-full">
          <p className="leading-[38.4px]">42%</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[13px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[21px]">DEPLOY_VELOCITY</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[24px] w-full">
          <p className="leading-[38.4px]">12x</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[13px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_59.39px] relative shrink-0 w-full" data-name="Metrics">
      <VerticalBorder1 />
      <VerticalBorder2 />
    </div>
  );
}

function MetricsMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] right-0 top-[303.97px]" data-name="Metrics:margin">
      <Metrics />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-[5.19px] pt-[4px] px-[13px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] uppercase whitespace-nowrap">
          <p className="leading-[19.2px]">KUBERNETES</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-[5.19px] pt-[4px] px-[13px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] uppercase whitespace-nowrap">
          <p className="leading-[19.2px]">TERRAFORM</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-[5.19px] pt-[4px] px-[13px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] uppercase whitespace-nowrap">
          <p className="leading-[19.2px]">AWS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-[5.19px] pt-[4px] px-[13px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] uppercase whitespace-nowrap">
          <p className="leading-[19.2px]">ISTIO</p>
        </div>
      </div>
    </div>
  );
}

function StackChips() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] h-[45.19px] items-start left-0 pt-[16px] right-0" data-name="Stack Chips">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[432.55px] relative shrink-0 w-[338.95px]" data-name="Content">
      <Heading1 />
      <Container10 />
      <MetricsMargin />
      <StackChips />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <ImageDiagramPlaceholder />
        <Content />
      </div>
    </div>
  );
}

function ArticleProjectCard1LargeSpan() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] col-[1/span_8] justify-self-stretch relative rounded-[2px] row-1 self-start shrink-0" data-name="Article - Project Card 1: Large Span">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
          <TerminalStatusBarMargin />
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STAGING</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="bg-[#00dbe7] relative rounded-[12px] shadow-[0px_0px_8px_0px_#00dbe7] shrink-0 size-[8px]" data-name="Background+Shadow" />
        <Container16 />
      </div>
    </div>
  );
}

function TerminalStatusBar1() {
  return (
    <div className="content-stretch flex items-center pb-[13px] relative shrink-0 w-full" data-name="Terminal Status Bar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container15 />
    </div>
  );
}

function TerminalStatusBarMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Terminal Status Bar:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <TerminalStatusBar1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[28px] w-full">
        <p className="leading-[35px] mb-0">Automated GitOps</p>
        <p className="leading-[35px]">Pipeline</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Implementation of ArgoCD for declarative,</p>
        <p className="leading-[20px] mb-0">continuous delivery. Eradicated configuration</p>
        <p className="leading-[20px]">drift across 40+ microservices.</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0e0e0e] opacity-80 relative rounded-[2px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00dbe7] text-[12px] whitespace-nowrap">
          <p className="leading-[19.2px] mb-0">{`> kubectl apply -f argo-cd.yaml`}</p>
          <p className="leading-[19.2px] mb-0">namespace/argocd created</p>
          <p className="leading-[19.2px] mb-0">customresourcedefinition... created</p>
          <p className="leading-[19.2px] mb-0">deployment.apps/argocd-server created</p>
          <p className="leading-[19.2px]">[SUCCESS] Sync OK</p>
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[41.61px] relative size-full">
        <Heading2 />
        <Container18 />
        <Margin2 />
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">ARGOCD</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">GITHUB ACTIONS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">HELM</p>
        </div>
      </div>
    </div>
  );
}

function StackChips1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43px] items-start pt-[17px] relative shrink-0 w-full" data-name="Stack Chips">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function StackChipsMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stack Chips:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <StackChips1 />
      </div>
    </div>
  );
}

function ArticleProjectCard2Square() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] col-[9/span_4] justify-self-stretch relative rounded-[2px] row-1 self-start shrink-0" data-name="Article - Project Card 2: Square">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
          <TerminalStatusBarMargin1 />
          <Container17 />
          <StackChipsMargin />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">EU-CENTRAL</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="bg-[#74f5ff] relative rounded-[12px] shadow-[0px_0px_8px_0px_#00dbe7] shrink-0 size-[8px]" data-name="Background+Shadow" />
        <Container20 />
      </div>
    </div>
  );
}

function TerminalStatusBar2() {
  return (
    <div className="content-stretch flex items-center pb-[13px] relative shrink-0 w-full" data-name="Terminal Status Bar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function TerminalStatusBarMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Terminal Status Bar:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <TerminalStatusBar2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[28px] w-full">
        <p className="leading-[35px] mb-0">Elastic Observability</p>
        <p className="leading-[35px]">Stack</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Centralized logging and metrics cluster</p>
        <p className="leading-[20px] mb-0">handling 5TB/day of telemetry data, providing</p>
        <p className="leading-[20px] mb-0">sub-second query responses for incident</p>
        <p className="leading-[20px]">triage.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute h-[20px] left-[65.48px] top-[13px] w-[19.977px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9767 20">
        <g id="Margin">
          <path d={svgPaths.p25d5bd2c} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[calc(50%+1.21px)]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">P99 LATENCY</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[0.59px] top-[calc(50%+21.5px)]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e1fdff] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">12ms</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1c1b1b] col-1 h-[95.59px] justify-self-stretch relative rounded-[2px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Margin4 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute h-[22px] left-[65.48px] top-[13px] w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p31289500} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[calc(50%+1.21px)]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">INGEST RATE</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] pb-[0.59px] top-[calc(50%+21.5px)]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e1fdff] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">5TB/d</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1c1b1b] col-2 h-[95.59px] justify-self-stretch relative rounded-[2px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Margin5 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_95.59px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading3 />
        <Container22 />
        <Margin3 />
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">PROMETHEUS</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">GRAFANA</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">ELK STACK</p>
        </div>
      </div>
    </div>
  );
}

function StackChips2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43px] items-start pt-[17px] relative shrink-0 w-full" data-name="Stack Chips">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <OverlayBorder7 />
      <OverlayBorder8 />
      <OverlayBorder9 />
    </div>
  );
}

function StackChipsMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stack Chips:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <StackChips2 />
      </div>
    </div>
  );
}

function ArticleProjectCard3Square() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] col-[1/span_4] justify-self-stretch relative rounded-[2px] row-2 self-start shrink-0" data-name="Article - Project Card 3: Square">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
          <TerminalStatusBarMargin2 />
          <Container21 />
          <StackChipsMargin1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[100.76px] relative size-full">
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[32px] whitespace-nowrap">
          <p className="leading-[51.2px] mb-0">Serverless Event-Driven</p>
          <p className="leading-[51.2px]">Architecture</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#74f5ff] relative rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
          <p className="leading-[21px]">ACTIVE</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
          <p className="leading-[21px]">|</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
          <p className="leading-[21px]">LAMBDA_V4</p>
        </div>
      </div>
    </div>
  );
}

function TerminalStatusBarMini() {
  return (
    <div className="bg-[#201f1f] relative rounded-[2px] shrink-0" data-name="Terminal Status Bar Mini">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[13px] py-[5px] relative size-full">
        <Container28 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Heading4 />
      <TerminalStatusBarMini />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[179.16px] min-w-px relative" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b9cacb] text-[16px] top-[88.78px] w-[333.9px]">
        <p className="leading-[25.6px] mb-0">Designed a highly resilient, event-driven</p>
        <p className="leading-[25.6px] mb-0">data processing pipeline utilizing ephemeral</p>
        <p className="leading-[25.6px] mb-0">compute resources. The system scales</p>
        <p className="leading-[25.6px] mb-0">automatically from 0 to 10k concurrent</p>
        <p className="leading-[25.6px] mb-0">executions based on message queue depth,</p>
        <p className="leading-[25.6px] mb-0">optimizing operational costs heavily during</p>
        <p className="leading-[25.6px]">off-peak hours.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[79.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#e1fdff] text-[12px] top-[9px] whitespace-nowrap">
          <p className="leading-[19.2px]">API Gateway</p>
        </div>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="bg-gradient-to-r from-[#0266ff] h-px opacity-50 relative shrink-0 to-[#e1fdff] w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p2a221800} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="bg-[rgba(225,253,255,0.05)] relative rounded-[2px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container34 />
          <Margin7 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[64.81px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#e1fdff] text-[12px] top-[9px] whitespace-nowrap">
          <p className="leading-[19.2px]">SQS Queue</p>
        </div>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="bg-gradient-to-r from-[#0266ff] h-px opacity-50 relative shrink-0 to-[#e1fdff] w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p2a26db00} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="bg-[rgba(225,253,255,0.05)] relative rounded-[2px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container36 />
          <Margin9 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative size-full">
        <OverlayBorder11 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[122.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#e1fdff] text-[12px] top-[9px] whitespace-nowrap">
          <p className="leading-[19.2px]">Lambda Processors</p>
        </div>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="bg-gradient-to-r from-[#0266ff] h-px opacity-50 relative shrink-0 to-[#e1fdff] w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pd490b00} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(225,253,255,0.05)] relative rounded-[2px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_10px_0px_rgba(0,242,255,0.2)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container38 />
          <Margin11 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[64px] relative size-full">
        <OverlayBorderShadow />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Container">
      <OverlayBorder10 />
      <Margin8 />
      <Margin10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center py-[30.53px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">AWS LAMBDA</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">DYNAMODB</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">EVENTBRIDGE</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="bg-[rgba(225,253,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">SERVERLESS FRAMEWORK</p>
        </div>
      </div>
    </div>
  );
}

function StackChips3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43px] items-start pt-[17px] relative shrink-0 w-full" data-name="Stack Chips">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <OverlayBorder12 />
      <OverlayBorder13 />
      <OverlayBorder14 />
      <OverlayBorder15 />
    </div>
  );
}

function StackChipsMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stack Chips:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <StackChips3 />
      </div>
    </div>
  );
}

function ArticleProjectCard4HorizontalSpan() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] col-[5/span_8] justify-self-stretch relative rounded-[2px] row-2 self-start shrink-0" data-name="Article - Project Card 4: Horizontal Span">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
          <Margin6 />
          <Container31 />
          <StackChipsMargin2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function SectionProjectsGridBentoStyle() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__548.55px_492.59px] relative shrink-0 w-full" data-name="Section - Projects Grid - Bento Style">
      <ArticleProjectCard1LargeSpan />
      <ArticleProjectCard2Square />
      <ArticleProjectCard3Square />
      <ArticleProjectCard4HorizontalSpan />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">user@recruit:~$</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">{`./initiate_contact.sh --subject="Project Inquiry"`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">█</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0e0e0e] relative rounded-[2px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Container40 />
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function SectionCallToActionTerminalInput() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] max-w-[768px] relative rounded-[2px] shrink-0 w-full" data-name="Section - Call to Action / Terminal Input">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start max-w-[inherit] p-[5px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function SectionCallToActionTerminalInputMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Call to Action / Terminal Input:margin">
      <div className="content-stretch flex flex-col items-start pt-[48px] px-[192px] relative size-full">
        <SectionCallToActionTerminalInput />
      </div>
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full z-[2]" data-name="Main Canvas">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] pb-[96px] pt-[128px] px-[64px] relative size-full">
        <HeaderSection />
        <SectionProjectsGridBentoStyle />
        <SectionCallToActionTerminalInputMargin />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.pb326a00} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BrandCopyright() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand/Copyright">
      <Container44 />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">{`© 2024 DEVOPS_ENGINEER // K8S_MASTER`}</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITHUB</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">LINKEDIN</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">X</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STATUS</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">UPTIME</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Links">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container43() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] relative size-full">
          <BrandCopyright />
          <Links />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0e0e0e] content-stretch flex flex-col items-start pt-px relative shrink-0 w-full z-[1]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

export default function ProjectsInfraLogs() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(90deg, rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Projects // INFRA_LOGS">
      <TopNavBar />
      <MainCanvas />
      <Footer />
    </div>
  );
}