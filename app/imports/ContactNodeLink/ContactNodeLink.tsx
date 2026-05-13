import svgPaths from "./svg-38vexcwvf6";

function Heading() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_5px_rgba(0,242,255,0.3)] flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[80px] tracking-[-3.2px] whitespace-nowrap">
        <p className="leading-[88px]">Establish Connection</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px] mb-0">Initialize handshake protocols to establish secure comms. Systems are online</p>
        <p className="leading-[21px]">and awaiting input.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Heading />
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
        <g id="Container">
          <path d={svgPaths.p1ba12d80} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">COMMS_LINK</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[10px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[15px]">SYS_HEALTH: OK</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[10px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[15px]">REGION: EU-WEST</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function TerminalHeader() {
  return (
    <div className="bg-[#1c1b1b] relative shrink-0 w-full" data-name="Terminal Header">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pl-[16px] pr-[15.99px] pt-[8px] relative size-full">
          <Container2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">root@user:~#</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <Container9 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">identify --name</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">{`>`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] tracking-[0.28px] w-full">
          <p className="leading-[normal]">Enter identification string...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[9px] px-[12px] relative size-full">
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b7280] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Input />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container10 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">root@user:~#</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <Container13 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">set_route --email</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">{`>`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] tracking-[0.28px] w-full">
          <p className="leading-[normal]">Enter return address...</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[9px] px-[12px] relative size-full">
          <Container15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b7280] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Input1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">root@user:~#</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <Container17 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">echo --payload</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">{`>`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] tracking-[0.28px] w-full">
          <p className="leading-[24px]">Input payload data...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Textarea">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start pb-[81px] pt-[8px] px-[12px] relative size-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,242,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Margin2 />
      <Textarea />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[14.25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 12">
        <g id="Container">
          <path d={svgPaths.p17041b00} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00dbe7] content-stretch drop-shadow-[0px_0px_7.5px_rgba(0,242,255,0.4)] flex gap-[8px] items-center px-[32px] py-[12px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container21 />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Transmit Message</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <div className="bg-[#00dbe7] h-[16px] relative shrink-0 w-[8px]" data-name="Background" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function FormContentForm() {
  return (
    <div className="relative shrink-0 w-[588px]" data-name="Form Content → Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container8 />
        <Container12 />
        <Container16 />
        <Margin3 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[201px] pt-[5px] px-[5px] relative size-full">
          <TerminalHeader />
          <FormContentForm />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LeftColumnContactForm() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Left Column: Contact Form">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[12px]">System Status</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_4px_rgba(0,242,255,0.6)] flex flex-col items-start relative shrink-0 w-full" data-name="Shadow">
      <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">100%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">Global Availability</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164.92px]" data-name="Container">
      <Shadow />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Container">
      <div className="absolute bg-[#e1fdff] inset-0 opacity-75 rounded-[12px]" data-name="Background" />
      <div className="bg-[#e1fdff] relative rounded-[12px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">Operational</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function FakeUptimeGraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Fake Uptime Graph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center relative size-full">
        <div className="bg-[rgba(225,253,255,0.2)] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.4)] flex-[1_0_0] h-[43.19px] min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.3)] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.5)] flex-[1_0_0] h-[45.59px] min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.6)] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.4)] flex-[1_0_0] h-[40.8px] min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.7)] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.5)] flex-[1_0_0] h-[47.03px] min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[rgba(225,253,255,0.8)] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="Overlay" />
        <div className="bg-[#e1fdff] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px] shadow-[0px_0px_8px_0px_rgba(0,242,255,0.5)]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function UptimeMonitorWidget() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] relative rounded-[4px] shrink-0 w-full" data-name="Uptime Monitor Widget">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Margin4 />
        <Margin5 />
        <FakeUptimeGraph />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 20">
        <g id="Container">
          <path d={svgPaths.p499c980} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[12px] tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[12px]">GitHub</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Link">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[25px] relative size-full">
          <div className="absolute bg-[rgba(225,253,255,0.05)] inset-px opacity-0" data-name="Overlay" />
          <Container28 />
          <Container29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[31.667px] relative shrink-0 w-[33.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667">
        <g id="Container">
          <path d={svgPaths.p2cdb7370} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[12px] tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[12px]">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-2 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Link">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[25px] relative size-full">
          <div className="absolute bg-[rgba(225,253,255,0.05)] inset-[1px_1px_0.67px_1px] opacity-0" data-name="Overlay" />
          <Container30 />
          <Container31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[33.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g id="Container">
          <path d={svgPaths.p30cb8000} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[12px] tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[12px]">X Network</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] col-[1/span_2] justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" data-name="Link">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[25px] relative size-full">
          <div className="absolute bg-[rgba(225,253,255,0.05)] inset-[1px_1px_1.33px_1px] opacity-0" data-name="Overlay" />
          <Container32 />
          <Container33 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SocialLinksGrid() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__118px_118px] relative shrink-0 w-full" data-name="Social Links Grid">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[8px] relative shrink-0 w-[15.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 8">
        <g id="Container">
          <path d={svgPaths.p1dc2c6c0} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container35 />
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[12px]">Public Key (PGP)</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0e0e0e] relative rounded-[2px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#353534] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#849495] text-[10px] whitespace-nowrap">
          <p className="leading-[16px] mb-0">-----BEGIN PGP PUBLIC KEY BLOCK----- mQINBGEy7XwBEAC8uX... (TRUNC</p>
          <p className="leading-[16px]">ATED FOR DISPLAY) -----END PGP PUBLIC KEY BLOCK-----</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p21f4d300} fill="var(--fill-0, #E1FDFF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container36 />
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[21px]">Download Full Key</p>
        </div>
      </div>
    </div>
  );
}

function PgpKeyBlock() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.7)] relative rounded-[4px] shrink-0 w-full" data-name="PGP Key Block">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,75,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[15.5px] items-start p-[25px] relative size-full">
        <Container34 />
        <BackgroundBorder />
        <Button1 />
      </div>
    </div>
  );
}

function RightColumnInfoSocials() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Column: Info & Socials">
      <UptimeMonitorWidget />
      <SocialLinksGrid />
      <PgpKeyBlock />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_712px] relative shrink-0 w-full" data-name="Container">
      <LeftColumnContactForm />
      <RightColumnInfoSocials />
    </div>
  );
}

function MainContent() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] pb-[96px] pt-[128px] px-[64px] relative size-full">
        <HeaderSection />
        <Container1 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">{`© 2024 DEVOPS_ENGINEER // K8S_MASTER`}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITHUB</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">LINKEDIN</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">X</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STATUS</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">UPTIME</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] relative size-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0e0e0e] content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container37 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[48px]">K8S_EXPERT_v1.0</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">About</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Projects</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Skills</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Blog</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[8px] px-[12px] relative rounded-[2px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e1fdff] border-b-2 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_8px_0px_rgba(0,242,255,0.8)]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Contact</p>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start justify-center pl-[2.07px] py-[1.65px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[24.7px] items-center justify-center relative shrink-0 w-[78.67px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link13 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pr-[2.07px] relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
      <LinkCssTransform />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00dbe7] content-stretch drop-shadow-[0px_0px_5px_rgba(0,242,255,0.5)] flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Deploy CV</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
          <Container41 />
          <Container42 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px]" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(0,242,255,0.1)]" />
      <Container40 />
    </div>
  );
}

export default function ContactNodeLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 219, 231, 0.05) 3.125%, rgba(0, 219, 231, 0) 3.125%), linear-gradient(rgba(0, 219, 231, 0.05) 3.125%, rgba(0, 219, 231, 0) 3.125%), linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Contact // NODE_LINK">
      <MainContent />
      <Footer />
      <TopNavBar />
    </div>
  );
}