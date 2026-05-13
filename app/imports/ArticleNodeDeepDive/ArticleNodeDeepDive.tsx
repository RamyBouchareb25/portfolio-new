import svgPaths from "./svg-7zt9vzioqe";
import imgAbstractVisualRepresentationOfDataNodesConnectingOverADarkBackgroundWithBlueGlowingLinesSymbolizingKubernetesInfrastructure from "./effe18e504183e602c5a355d8b6355f855f109c0.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[25.6px] mb-0">Deploying Kubernetes in production is often synonymous with high infrastructure costs. While managed services like</p>
        <p className="leading-[25.6px] mb-0">EKS, GKE, or AKS simplify operations, the compute costs can scale linearly. Leveraging AWS Spot Instances (or</p>
        <p className="leading-[25.6px] mb-0">equivalent preemptible VMs) offers massive savings, but requires architectural resilience to handle sudden node</p>
        <p className="leading-[25.6px]">termination.</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#e1fdff] text-[24px] top-[19.7px] whitespace-nowrap">
        <p className="leading-[38.4px]">1. The Architecture of Ephemeral Compute</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[25.6px] mb-0">The core challenge is that a spot instance can be reclaimed with only a 2-minute warning. Our architecture must be</p>
        <p className="leading-[25.6px]">designed assuming failure is not just possible, but imminent and frequent.</p>
      </div>
    </div>
  );
}

function TechnicalBlockquote() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] relative rounded-[2px] shrink-0 w-full" data-name="Technical Blockquote">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.5)] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start pb-[17.39px] pl-[20px] pr-[17px] pt-[16.99px] relative size-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[16px] whitespace-nowrap">
          <p className="leading-[25.6px] mb-0">{`"In a cloud-native world, infrastructure is ephemeral. Treat your servers like cattle, not pets. With spot instances,`}</p>
          <p className="leading-[25.6px]">{`your cattle are on a very strict, unpredictable timer."`}</p>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b3c5ff] text-[20px] w-full">
        <p className="leading-[32px]">Node Groups Strategy</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[51.19px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#b9cacb] top-[12.8px]">
        <p className="leading-[25.6px]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-0 text-[#e5e2e1] top-[24.79px]">
        <p className="mb-0">
          <span className="leading-[25.6px]">On-Demand Node Group:</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] not-italic text-[#b9cacb]">{` Minimum 3 nodes spread across AZs for critical control plane components (if self-`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] text-[#b9cacb]">hosted) and stateful workloads.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center mb-[-25.205px] relative shrink-0 text-[#e5e2e1] z-[2]">
        <p>
          <span className="leading-[25.6px]">Spot Node Group:</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] not-italic text-[#b9cacb]">{` Autoscaling group for stateless microservices, workers, and batch jobs.`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#b9cacb] z-[1]">
        <p className="leading-[25.6px]">{` `}</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center mb-[-25.205px] relative shrink-0 text-[#e5e2e1] z-[2]">
        <p>
          <span className="leading-[25.6px]">{`Taints & Tolerations:`}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] not-italic text-[#b9cacb]">{` Strictly taint spot nodes to prevent critical workloads from scheduling on them accidentally.`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#b9cacb] z-[1]">
        <p className="leading-[25.6px]">{` `}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[7px] items-start leading-[0] not-italic pl-[24px] pt-[1.2px] relative size-full text-[16px] whitespace-nowrap">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start pl-[8px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="bg-[#f5a623] relative rounded-[12px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start pl-[8px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="bg-[#00dbe7] relative rounded-[12px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="bg-[#ffb4ab] relative rounded-[12px] shrink-0 size-[12px]" data-name="Background" />
        <Margin />
        <Margin1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[108.02px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#849495] text-[12px] top-[9px] whitespace-nowrap">
          <p className="leading-[19.2px]">sys_config.yaml</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[122.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#849495] text-[12px] top-[9px] uppercase whitespace-nowrap">
          <p className="leading-[19.2px]">REGION: US-EAST-1</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#201f1f] mb-[-0.01px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pl-[16px] pr-[16.01px] pt-[8px] relative size-full">
          <Container2 />
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16.25px] pt-[38.25px] px-[16px] relative size-full">
          <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] w-full whitespace-pre-wrap">
            <p className="mb-0">
              <span className="leading-[22.75px]">1 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#e1fdff]">apiVersion:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` eksctl.io/v1alpha5`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">2 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#e1fdff]">kind:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` ClusterConfig`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">3 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#e1fdff]">metadata:</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">4 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">name:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` prod-cluster`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">5 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#e1fdff]">managedNodeGroups:</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">6 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{`   - `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">name:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` spot-workers`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">7 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">minSize:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` 3`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">8 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">maxSize:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` 10`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">9 |</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">instancesDistribution:</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">10|</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">instanceTypes:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` ["m5.large", "m5a.large"]`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">11|</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">onDemandBaseCapacity:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` 0`}</span>
            </p>
            <p className="mb-0">
              <span className="leading-[22.75px]">12|</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` `}</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b3c5ff]">spotInstancePools:</span>
              <span className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[22.75px] text-[#b9cacb]">{` 2`}</span>
            </p>
            <p className="leading-[22.75px] text-[#b9cacb]">{`                    `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalCodeBlock() {
  return (
    <div className="bg-[#050505] relative rounded-[4px] shrink-0 w-full" data-name="Terminal Code Block">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[2.2px] px-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_10px_0px_rgba(0,242,255,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[25.6px] mb-0">By diversifying instance types (e.g., m5.large, m5a.large), we reduce the risk of simultaneous reclamation if a specific</p>
        <p className="leading-[25.6px]">instance type spikes in price or drops in availability.</p>
      </div>
    </div>
  );
}

function BlogContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22.8px] items-start left-0 right-0 top-[400.89px]" data-name="Blog Content">
      <Container />
      <Heading1 />
      <Container1 />
      <TechnicalBlockquote />
      <Heading2 />
      <List />
      <TerminalCodeBlock />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p2286b600} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container7 />
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">PREVIOUS ARTICLE</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(225,253,255,0.05)] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">BACK TO BLOG</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, #B9CACB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">NEXT ARTICLE</p>
        </div>
        <Container8 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pt-[33px] right-0 top-[1494.39px]" data-name="Bottom Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function AbstractVisualRepresentationOfDataNodesConnectingOverADarkBackgroundWithBlueGlowingLinesSymbolizingKubernetesInfrastructure() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-60 relative w-full" data-name="Abstract visual representation of data nodes connecting over a dark background with blue glowing lines, symbolizing Kubernetes infrastructure.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[223.5%] left-0 max-w-none top-[-61.75%] w-full" src={imgAbstractVisualRepresentationOfDataNodesConnectingOverADarkBackgroundWithBlueGlowingLinesSymbolizingKubernetesInfrastructure} />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] content-stretch flex items-start px-[9px] py-[5px] relative rounded-[2px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">KUBERNETES • PRODUCTION</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-0.8px] w-full">
        <p className="leading-[48px] mb-0">Running High-Availability Kubernetes Clusters</p>
        <p className="leading-[48px]">on Spot Instances in Production</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[16px] w-full">
        <p className="leading-[25.6px]">A technical guide on cost-optimization without compromising resilience.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p217203e0} fill="var(--fill-0, #E1FDFF)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">K8S_MASTER</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">|</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #E1FDFF)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container17 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">Oct 28</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">|</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="var(--fill-0, #E1FDFF)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#849495] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">12 min read</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[8.5px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
      <Container16 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[7px] items-start left-0 right-0" data-name="Container">
      <OverlayBorder />
      <Heading />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <AbstractVisualRepresentationOfDataNodesConnectingOverADarkBackgroundWithBlueGlowingLinesSymbolizingKubernetesInfrastructure />
        <div className="absolute bg-gradient-to-t from-[#050505] inset-0 to-[rgba(5,5,5,0)]" data-name="Gradient" />
        <Container10 />
      </div>
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] left-0 right-0 rounded-[4px] top-0" data-name="Header - Hero Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ArticleCenterLeftColumnContent() {
  return (
    <div className="max-w-[896px] relative self-stretch shrink-0 w-[896px]" data-name="Article - Center/Left Column: Content">
      <BlogContent />
      <BottomNavigation />
      <HeaderHeroSection />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[6.667px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6.66667">
        <g id="Container">
          <path d={svgPaths.p3a523a00} fill="var(--fill-0, #E1FDFF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container21 />
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">INDEX</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[10px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">1. The Architecture of</p>
          <p className="leading-[21px]">Ephemeral Compute</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0 w-[254px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[21px]">Node Groups Strategy</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[10px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">2. Handling Interruption</p>
          <p className="leading-[21px]">Events</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[10px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[21px]">{`3. Cost Analysis & ROI`}</p>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-end relative size-full">
        <ItemLink />
        <ItemLink1 />
        <ItemLink2 />
        <ItemLink3 />
      </div>
    </div>
  );
}

function TableOfContents() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] relative rounded-[4px] shrink-0 w-full" data-name="Table of Contents">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading3 />
        <List1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#849495] text-[12px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[12px]">SHARE TRANSMISSION</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p2b729200} fill="var(--fill-0, #B9CACB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[38px] items-start justify-center min-w-px px-px py-[9px] relative rounded-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p24c05900} fill="var(--fill-0, #B9CACB)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[30px] items-start justify-center min-w-px px-px py-[9px] relative rounded-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(225,253,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function ShareButtons() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] relative rounded-[4px] shrink-0 w-full" data-name="Share Buttons">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading4 />
        <Container22 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#849495] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Lead DevOps Architect</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84.39px] pb-[16px] top-[132px]" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[23.14px] pr-[23.16px] top-[166px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b9cacb] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px] mb-0">Designing resilient, scalable</p>
        <p className="leading-[21px] mb-0">infrastructure for high-throughput</p>
        <p className="leading-[21px]">environments.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="h-[24px] relative shrink-0 w-[30px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
            <path d={svgPaths.p1cd6da20} fill="var(--fill-0, #E1FDFF)" fillOpacity="0.5" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#2a2a2a] relative rounded-[12px] shrink-0 size-[64px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[14px] py-[12px] relative rounded-[inherit] size-full">
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(225,253,255,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80px] items-start left-[128px] pb-[16px] top-[25px] w-[64px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function AuthorBio() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] h-[254px] relative rounded-[4px] shrink-0 w-full" data-name="Author Bio">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#e1fdff] text-[18px] text-center top-[118.5px] whitespace-nowrap">
        <p className="leading-[27px]">K8S_MASTER</p>
      </div>
      <Margin2 />
      <Container26 />
      <Margin3 />
    </div>
  );
}

function AsideRightSidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[320px]" data-name="Aside - Right Sidebar">
      <TableOfContents />
      <ShareButtons />
      <AuthorBio />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex gap-[24px] items-start max-w-[inherit] pb-[64px] pt-[100px] px-[64px] relative size-full">
        <ArticleCenterLeftColumnContent />
        <AsideRightSidebar />
      </div>
    </div>
  );
}

function MainContentCanvasMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Canvas:margin">
      <div className="content-stretch flex flex-col items-start px-[560px] relative size-full">
        <MainContentCanvas />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">{`© 2024 DEVOPS_ENGINEER // K8S_MASTER`}</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">GITHUB</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">LINKEDIN</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">X</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STATUS</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">UPTIME</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0e0e0e] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-px px-[64px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[40px] tracking-[-2px] whitespace-nowrap">
        <p className="leading-[48px]">K8S_EXPERT_v1.0</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">About</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Projects</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Skills</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e1fdff] border-b-2 border-solid inset-0 pointer-events-none shadow-[0px_0px_8px_0px_rgba(0,242,255,0.8)]" />
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e1fdff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Blog</p>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start justify-center px-[0.84px] py-[0.45px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[17.1px] items-center justify-center relative shrink-0 w-[31.93px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link9 />
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b9cacb] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[12px]">Contact</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <LinkCssTransform />
      <Link10 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#00dbe7] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#050505] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">DEPLOY CV</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
          <Container31 />
          <Container32 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.8)] content-stretch flex flex-col items-start left-0 pb-px px-[560px] right-0 top-0" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(225,253,255,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_0px_15px_0px_rgba(0,242,255,0.1)]" />
      <Container30 />
    </div>
  );
}

export default function ArticleNodeDeepDive() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative size-full" style={{ backgroundImage: "linear-gradient(rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(90deg, rgba(0, 242, 255, 0.03) 3.125%, rgba(0, 242, 255, 0) 3.125%), linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Article // NODE_DEEP_DIVE">
      <MainContentCanvasMargin />
      <Footer />
      <TopNavBar />
    </div>
  );
}