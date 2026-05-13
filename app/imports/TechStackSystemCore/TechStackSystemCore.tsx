import svgPaths from "./svg-mrwco6ipsm";

function Container1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Container">
          <path d={svgPaths.p1aebff60} fill="var(--fill-0, #00F2FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">./system/capabilities.sh</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container1 />
      <Margin />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[80px] tracking-[-3.2px] w-full">
        <p className="leading-[88px]">System Stack</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[6.795px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px] mb-0">Comprehensive overview of deployed competencies, architectural frameworks, and</p>
        <p className="leading-[25.6px]">operational tooling. Data reflects production-ready expertise levels.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Container />
      <Heading />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.0833">
        <g id="Container">
          <path d={svgPaths.p20854500} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">NODE_01: INFRASTRUCTURE</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container4 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">STATUS: ONLINE</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">UPTIME: 99.99%</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[0.01px] items-start relative size-full">
        <Container6 />
        <Margin2 />
      </div>
    </div>
  );
}

function TerminalHeader() {
  return (
    <div className="bg-[rgba(0,242,255,0.05)] relative shrink-0 w-full" data-name="Terminal Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pl-[16px] pr-[16.01px] pt-[8px] relative size-full">
          <Container3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">KUBERNETES</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[36.02px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">Lvl 9</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading1 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] inset-[0_10%_0_0]" data-name="Background" />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">EKS</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">GKE</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">Helm</p>
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">ArgoCD</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
      <Overlay4 />
    </div>
  );
}

function SkillItem() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Skill Item">
      <Container9 />
      <Overlay />
      <Container11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">TERRAFORM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[36.02px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">Lvl 8</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container13 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] inset-[0_15%_0_0]" data-name="Background" />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">HCL</p>
        </div>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">Modules</p>
        </div>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] relative rounded-[2px] self-stretch shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[10px] whitespace-nowrap">
          <p className="leading-[16px]">Terragrunt</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Overlay6 />
      <Overlay7 />
      <Overlay8 />
    </div>
  );
}

function SkillItem1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Skill Item">
      <Container12 />
      <Overlay5 />
      <Container14 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[800.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_73px] relative size-full">
        <SkillItem />
        <SkillItem1 />
      </div>
    </div>
  );
}

function InfrastructureNode() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-[1/span_8] justify-self-stretch relative rounded-[2px] row-1 self-start shrink-0" data-name="Infrastructure Node">
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[101px] pt-px px-px relative rounded-[inherit] size-full">
        <TerminalHeader />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[9.333px] mr-[-0.01px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p3af7d000} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">NODE_02: CLOUD</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container16 />
        <Margin3 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(0,242,255,0.05)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[9px] pt-[8px] px-[16px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">AWS</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[86.41px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">[||||||||| ]</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading3 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider">
      <div className="absolute bg-[#00f2ff] inset-[0_10%_0_0]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <HorizontalDivider />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GCP</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[72.02px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">[||||||| ]</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading4 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function HorizontalDivider1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider">
      <div className="absolute bg-[#00f2ff] inset-[0_30%_0_0]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <HorizontalDivider1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">AZURE</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[50.41px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">[|||| ]</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading5 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function HorizontalDivider2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider">
      <div className="absolute bg-[#00f2ff] inset-[0_60%_0_0]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <HorizontalDivider2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[32px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function CloudProvidersNode() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-[9/span_4] justify-self-stretch relative rounded-[2px] row-1 self-start shrink-0" data-name="Cloud Providers Node">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[3px] pt-px px-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.5">
        <g id="Container">
          <path d={svgPaths.p3638df98} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">NODE_03: PIPELINES</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container29 />
        <Margin4 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder1() {
  return (
    <div className="bg-[rgba(0,242,255,0.05)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[9px] pt-[8px] px-[16px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITHUB ACTIONS</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[43.2px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">Expert</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[0.01px] relative size-full">
          <Heading6 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-[90.13px]" data-name="Background" />
      <Margin5 />
      <Margin6 />
      <Margin7 />
      <Margin8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">JENKINS</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[57.61px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">Advanced</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading7 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-[90.13px]" data-name="Background" />
      <Margin9 />
      <Margin10 />
      <Margin11 />
      <Margin12 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITLAB CI</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[72.02px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b9cacb] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[19.2px]">Proficient</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container41 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pl-[4px] relative shrink-0 w-[94.13px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0.1)] h-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Overlay" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#00f2ff] h-[8px] relative rounded-[2px] shrink-0 w-[90.13px]" data-name="Background" />
      <Margin13 />
      <Margin14 />
      <Margin15 />
      <Margin16 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-[466.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container31 />
        <Container35 />
        <Container39 />
      </div>
    </div>
  );
}

function CiCdNode() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-[1/span_5] justify-self-stretch relative rounded-[2px] row-2 self-start shrink-0" data-name="CI/CD Node">
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[42.38px] pt-px px-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder1 />
        <Container30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="mr-[-0.01px] relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3c511d80} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">NODE_04: OBSERVABILITY</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container44 />
        <Margin17 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#00f2ff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">METRICS: OK</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder2() {
  return (
    <div className="bg-[rgba(0,242,255,0.05)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pt-[8px] px-[16px] relative size-full">
          <Container43 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase w-full">
        <p className="leading-[21px]">PROMETHEUS</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Heading9 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] w-full">
        <p className="leading-[19.2px]">PromQL • Alertmanager • Exporters</p>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] inset-[0_15%_0_0]" data-name="Background" />
    </div>
  );
}

function SkillItem2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[7px] items-start justify-self-stretch pb-[8px] relative row-1 self-start shrink-0" data-name="Skill Item">
      <Container48 />
      <Container49 />
      <Overlay9 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase w-full">
        <p className="leading-[21px]">GRAFANA</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Heading10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] w-full">
        <p className="leading-[19.2px]">Dashboards • Loki • Tempo</p>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] inset-[0_10%_0_0]" data-name="Background" />
    </div>
  );
}

function SkillItem3() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[7px] items-start justify-self-stretch pb-[8px] relative row-1 self-start shrink-0" data-name="Skill Item">
      <Container50 />
      <Container51 />
      <Overlay10 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase w-full">
        <p className="leading-[21px]">DATADOG</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Heading11 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] w-full">
        <p className="leading-[19.2px]">APM • Logs • Synthetics</p>
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] bottom-0 left-0 right-1/4 top-0" data-name="Background" />
    </div>
  );
}

function SkillItem4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[7px] items-start justify-self-stretch pb-[8.01px] relative row-2 self-start shrink-0" data-name="Skill Item">
      <Container52 />
      <Container53 />
      <Overlay11 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase w-full">
        <p className="leading-[21px]">ELK STACK</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Heading12 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] w-full">
        <p className="leading-[19.2px]">Elasticsearch • Logstash • Kibana</p>
      </div>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#00f2ff] inset-[0_30%_0_0]" data-name="Background" />
    </div>
  );
}

function SkillItem5() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[7px] items-start justify-self-stretch pb-[8.01px] relative row-2 self-start shrink-0" data-name="Skill Item">
      <Container54 />
      <Container55 />
      <Overlay12 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[689.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__76.19px_76.19px] relative size-full">
        <SkillItem2 />
        <SkillItem3 />
        <SkillItem4 />
        <SkillItem5 />
      </div>
    </div>
  );
}

function ObservabilityNode() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-[6/span_7] justify-self-stretch relative rounded-[2px] row-2 self-start shrink-0" data-name="Observability Node">
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[33px] pt-px px-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder2 />
        <Container47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__245px_288.38px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <InfrastructureNode />
      <CloudProvidersNode />
      <CiCdNode />
      <ObservabilityNode />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1440px] pb-[96px] pt-[128px] px-[64px] relative shrink-0 w-[1440px]" data-name="Main Content">
      <Header />
      <BentoGridLayout />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[48px]">K8S_EXPERT_v1.0</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">About</p>
      </div>
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Projects</p>
      </div>
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item2 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start pb-[8px] pt-[2px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e1fdff] border-b-2 border-solid inset-0 pointer-events-none shadow-[0px_0px_8px_0px_rgba(0,242,255,0.8)]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Skills</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute bottom-[-8px] content-stretch flex flex-col items-start left-[32px] top-[-2px]" data-name="Item">
      <Link />
    </div>
  );
}

function ItemMargin2() {
  return (
    <div className="relative self-stretch shrink-0 w-[82.41px]" data-name="Item:margin">
      <Item3 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Blog</p>
      </div>
    </div>
  );
}

function ItemMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item4 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Contact</p>
      </div>
    </div>
  );
}

function ItemMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0" data-name="List">
      <Item />
      <ItemMargin />
      <ItemMargin1 />
      <ItemMargin2 />
      <ItemMargin3 />
      <ItemMargin4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00f2ff] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#050505] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">DEPLOY CV</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
          <Container57 />
          <List />
          <Button />
        </div>
      </div>
    </div>
  );
}

function TopNavBarComponent() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.8)] content-stretch flex flex-col items-start left-0 pb-px px-[560px] right-0 top-0" data-name="TopNavBar Component">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(0,242,255,0.1)]" />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[12px]">{`© 2024 DEVOPS_ENGINEER // K8S_MASTER`}</p>
        </div>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITHUB</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">LINKEDIN</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">X</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STATUS</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">UPTIME</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start justify-center relative size-full">
        <Item6 />
        <Item7 />
        <Item8 />
        <Item9 />
        <Item10 />
      </div>
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="bg-[#0e0e0e] relative shrink-0 w-full" data-name="Footer Component">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[64px] relative size-full">
          <Container58 />
          <List1 />
        </div>
      </div>
    </div>
  );
}

export default function TechStackSystemCore() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center pb-[1132.44px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Tech Stack // SYSTEM_CORE">
      <MainContent />
      <TopNavBarComponent />
      <FooterComponent />
    </div>
  );
}