import svgPaths from "./svg-s64dxi2rpo";
import imgRectangle1 from "figma:asset/193db75f3bfd98f4b44eb64a16915bd260698b4f.png";
import imgRectangle2 from "figma:asset/340e4b1679306a53cc6296b25e15dd607eb36009.png";
import imgRectangle3 from "figma:asset/e91723de1e3ba6fca83348972964ac2a02e1a355.png";

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[11.46px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6612 11.3362">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p1621dd00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p32203f00} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p19aa01c0} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.pd065a00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p28292000} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute h-[11.089px] left-[6.45px] top-[17.17px] w-[28.426px]" data-name="Left Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
        <g id="Left Side">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IOsStatusBarBlack() {
  return (
    <div className="-translate-x-1/2 absolute h-[44px] left-1/2 overflow-clip top-0 w-[328px]" data-name="iOS/Status Bar/Black">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f3edff] content-stretch flex h-[20px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#504491] text-[12px]">Available</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="relative rounded-[30px] shrink-0 size-[40px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle1} />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.25] not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#000723] text-[16px] w-full">Lisa Vertum</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
    </div>
  );
}

function MaterialSymbolsStarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #F8AF1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsStarIcon />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function MaterialSymbolsWorkHistoryIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Work History Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Work History Icon 1">
          <path d={svgPaths.p2b606d00} fill="var(--fill-0, #6F5AEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsWorkHistoryIcon />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">5 years</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame8 />
      <Frame15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[20px] p-[14px] rounded-[20px] top-[194px] w-[352px]">
      <Frame17 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f3edff] content-stretch flex h-[20px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#504491] text-[12px]">Available</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="relative rounded-[30px] shrink-0 size-[40px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[190.05%] left-[-23.22%] max-w-none top-[-0.65%] w-[126.67%]" src={imgRectangle2} />
        </div>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.25] not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#000723] text-[16px] w-full">Alberto Toladi</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
    </div>
  );
}

function MaterialSymbolsStarIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #F8AF1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsStarIcon1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function MaterialSymbolsWorkHistoryIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Work History Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Work History Icon 1">
          <path d={svgPaths.p2b606d00} fill="var(--fill-0, #6F5AEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsWorkHistoryIcon1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">5 years</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame9 />
      <Frame26 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[20px] p-[14px] rounded-[20px] top-[327px] w-[352px]">
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f3edff] content-stretch flex h-[20px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#504491] text-[12px]">Available</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="relative rounded-[30px] shrink-0 size-[40px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle3} />
      </div>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.25] not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#000723] text-[16px] w-full">Fernando Wilurado</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
    </div>
  );
}

function MaterialSymbolsStarIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #F8AF1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsStarIcon2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function MaterialSymbolsWorkHistoryIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Work History Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Work History Icon 1">
          <path d={svgPaths.p2b606d00} fill="var(--fill-0, #6F5AEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsWorkHistoryIcon2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">5 years</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame10 />
      <Frame33 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[20px] p-[14px] rounded-[20px] top-[460px] w-[352px]">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#f3edff] content-stretch flex h-[20px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#504491] text-[12px]">Available</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="relative rounded-[30px] shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgRectangle3} />
          <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgRectangle1} />
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.25] not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#000723] text-[16px] w-full">Albina Mortadeto</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
    </div>
  );
}

function MaterialSymbolsStarIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #F8AF1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsStarIcon3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function MaterialSymbolsWorkHistoryIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Work History Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Work History Icon 1">
          <path d={svgPaths.p2b606d00} fill="var(--fill-0, #6F5AEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsWorkHistoryIcon3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">5 years</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame11 />
      <Frame40 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[20px] p-[14px] rounded-[20px] top-[593px] w-[352px]">
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#f3edff] content-stretch flex h-[20px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#504491] text-[12px]">Available</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="relative rounded-[30px] shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgRectangle3} />
          <div className="absolute inset-0 overflow-hidden rounded-[30px]">
            <img alt="" className="absolute h-[190.05%] left-[-23.22%] max-w-none top-[-0.65%] w-[126.67%]" src={imgRectangle2} />
          </div>
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.25] not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#000723] text-[16px] w-full">Fernando Wilurado</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
    </div>
  );
}

function MaterialSymbolsStarIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #F8AF1E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsStarIcon4 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function MaterialSymbolsWorkHistoryIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Work History Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Work History Icon 1">
          <path d={svgPaths.p2b606d00} fill="var(--fill-0, #6F5AEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[4px] relative rounded-[12px] shrink-0">
      <MaterialSymbolsWorkHistoryIcon4 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">5 years</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame12 />
      <Frame47 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[20px] p-[14px] rounded-[20px] top-[726px] w-[352px]">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home Icon (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Home Icon (1) 1">
          <path d={svgPaths.p13572800} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <HomeIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#000723] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Home</p>
    </div>
  );
}

function RecentPatientIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Recent Patient Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Recent Patient Icon 1">
          <path d={svgPaths.p2b3fbc00} fill="var(--fill-0, #7159EE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <RecentPatientIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#7159ee] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Doctors</p>
    </div>
  );
}

function CalendarClockIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Calendar Clock Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Calendar Clock Icon 1">
          <path d={svgPaths.p3ebf3780} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <CalendarClockIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#000723] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Visits</p>
    </div>
  );
}

function EmergencyIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Emergency Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Emergency Icon 1">
          <path d={svgPaths.p3f3e7080} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <EmergencyIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#000723] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Clinic</p>
    </div>
  );
}

function AccountCircleIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Account Circle Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Account Circle Icon 1">
          <path d={svgPaths.p8ea680} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <AccountCircleIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#000723] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Profile</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between px-[20px] relative shrink-0 w-[393px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[78px] items-start left-0 py-[18px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] top-[774px] w-[393px]">
      <Frame5 />
    </div>
  );
}

function LeftArrowIcon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Left Arrow Icon (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Left Arrow Icon (1) 1">
          <path d={svgPaths.p334b2980} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[64px] w-[231px]">
      <LeftArrowIcon />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#000723] text-[20px] text-center">Doctors list</p>
    </div>
  );
}

function MaterialSymbolsIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Symbols Icon (6) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Material Symbols Icon (6) 1">
          <path d={svgPaths.p11fee800} fill="var(--fill-0, #8C8C8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Icon (7) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Icon (7) 1">
          <path d={svgPaths.pe1cad00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsIcon1() {
  return (
    <div className="bg-[#6f5aec] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="Material Symbols Icon (7) 1">
      <MaterialSymbolsIcon2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[18px] h-[50px] items-center left-[20px] px-[13px] rounded-[40px] top-[124px] w-[352px]">
      <MaterialSymbolsIcon />
      <p className="flex-[1_0_0] font-['Inter:Extra_Light',sans-serif] font-extralight leading-[1.25] min-h-px min-w-px not-italic overflow-hidden relative text-[#8c8c8c] text-[18px] text-center text-ellipsis whitespace-nowrap">Search by name, speciality, tags</p>
      <MaterialSymbolsIcon1 />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="iPhone 14 & 15 Pro - 2">
      <IOsStatusBarBlack />
      <Frame18 />
      <Frame19 />
      <Frame27 />
      <Frame34 />
      <Frame41 />
      <Frame48 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}