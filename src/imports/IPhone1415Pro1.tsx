import svgPaths from "./svg-c11c1us74x";
import imgRectangle1 from "figma:asset/e91723de1e3ba6fca83348972964ac2a02e1a355.png";
import imgRectangle2 from "figma:asset/193db75f3bfd98f4b44eb64a16915bd260698b4f.png";
import imgRectangle3 from "figma:asset/340e4b1679306a53cc6296b25e15dd607eb36009.png";

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
    <div className="-translate-x-1/2 absolute h-[44px] left-[calc(50%-0.5px)] overflow-clip top-0 w-[328px]" data-name="iOS/Status Bar/Black">
      <RightSide />
      <LeftSide />
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

function MaterialSymbolsIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Symbols Icon (7) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Material Symbols Icon (7) 1">
          <path d={svgPaths.p17da0b00} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[18px] h-[50px] items-center justify-center left-[20px] px-[13px] rounded-[40px] top-[124px]">
      <MaterialSymbolsIcon />
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[1.25] not-italic overflow-hidden relative shrink-0 text-[#8c8c8c] text-[18px] text-center text-ellipsis w-[242px] whitespace-nowrap">Search by name, speciality, tags</p>
      <MaterialSymbolsIcon1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 whitespace-pre-wrap">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.25] relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#000723] text-[16px] w-full">Fernando Wilurado</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[12px] text-black text-center w-full">
        <span className="font-['Inter:Light',sans-serif] font-light leading-[1.25]">Work experience:</span>
        <span className="leading-[1.25]">{` 5 years`}</span>
      </p>
    </div>
  );
}

function MaterialSymbolsStarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <MaterialSymbolsStarIcon />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.1</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-end relative shrink-0">
      <Frame7 />
      <div className="relative rounded-[20px] shrink-0 size-[60px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
          <div className="absolute bg-white inset-0 rounded-[20px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center p-[8px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Mon</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">30</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Tue</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">31</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Wed</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">01</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Thu</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">02</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Fri</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">03</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sat</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">04</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sun</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">05</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-center w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.25] not-italic relative shrink-0 text-[#000723] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full whitespace-pre-wrap">Slots</p>
      <Frame17 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-[20px] p-[20px] rounded-[40px] top-[634px] w-[353px]">
      <Frame21 />
      <Frame18 />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home Icon (2) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Home Icon (2) 1">
          <path d={svgPaths.p37c65500} fill="var(--fill-0, #000723)" id="Vector" />
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
    <div className="relative shrink-0 size-[24px]" data-name="Recent Patient Icon (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Recent Patient Icon (1) 1">
          <path d={svgPaths.p3e77b580} fill="var(--fill-0, #5C85D9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[50px]">
      <RecentPatientIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#5c85d9] text-[12px] text-center w-[min-content] whitespace-pre-wrap">Doctors</p>
    </div>
  );
}

function CalendarClockIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Calendar Clock Icon (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Calendar Clock Icon (1) 1">
          <path d={svgPaths.p128cc900} fill="var(--fill-0, #000723)" id="Vector" />
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
    <div className="relative shrink-0 size-[24px]" data-name="Account Circle Icon (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Account Circle Icon (1) 1">
          <path d={svgPaths.p30d1de80} fill="var(--fill-0, #000723)" id="Vector" />
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

function Frame36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[78px] items-start left-0 py-[18px] rounded-tl-[40px] rounded-tr-[40px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] top-[774px] w-[393px]">
      <Frame5 />
    </div>
  );
}

function LeftArrowIcon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Left Arrow Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Left Arrow Icon 1">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path d={svgPaths.p1687fb00} fill="var(--fill-0, #000723)" id="Vector" />
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-[143px] whitespace-pre-wrap">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.25] relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#000723] text-[16px] w-full">Lisa Vertum</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[12px] text-black text-center w-full">
        <span className="font-['Inter:Light',sans-serif] font-light leading-[1.25]">Work experience:</span>
        <span className="leading-[1.25]">{` 5 years`}</span>
      </p>
    </div>
  );
}

function MaterialSymbolsStarIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <MaterialSymbolsStarIcon1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.5</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-end relative shrink-0">
      <Frame8 />
      <div className="relative rounded-[20px] shrink-0 size-[60px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
          <div className="absolute bg-white inset-0 rounded-[20px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center p-[8px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Mon</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">30</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Tue</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">31</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Wed</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">01</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Thu</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">02</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Fri</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">03</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sat</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">04</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sun</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">05</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-center w-full">
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.25] not-italic relative shrink-0 text-[#000723] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full whitespace-pre-wrap">Slots</p>
      <Frame29 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-[20px] p-[20px] rounded-[40px] top-[194px] w-[353px]">
      <Frame23 />
      <Frame28 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-[143px] whitespace-pre-wrap">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.25] relative shrink-0 text-[#8c8c8c] text-[12px] w-full">Paediatrician</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#000723] text-[16px] w-full">Alberto Toladi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[12px] text-black text-center w-full">
        <span className="font-['Inter:Light',sans-serif] font-light leading-[1.25]">Work experience:</span>
        <span className="leading-[1.25]">{` 5 years`}</span>
      </p>
    </div>
  );
}

function MaterialSymbolsStarIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Material Symbols Star Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Material Symbols Star Icon 1">
          <path d={svgPaths.pfd27c00} fill="var(--fill-0, #000723)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <MaterialSymbolsStarIcon2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center">4.8</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-end relative shrink-0">
      <Frame9 />
      <div className="relative rounded-[20px] shrink-0 size-[60px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[190.05%] left-[-23.22%] max-w-none top-[-0.65%] w-[126.67%]" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center p-[8px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Mon</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">30</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Tue</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">31</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Wed</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">01</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Thu</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">02</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Fri</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">03</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sat</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">04</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#ecf1fd] content-stretch flex flex-col gap-[2px] h-[50px] items-center justify-center px-[8px] py-[12px] relative rounded-[25px] shrink-0 w-[40px]">
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px]">Sun</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px]">05</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-center w-full">
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.25] not-italic relative shrink-0 text-[#000723] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full whitespace-pre-wrap">Slots</p>
      <Frame43 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-[20px] p-[20px] rounded-[40px] top-[414px] w-[353px]">
      <Frame39 />
      <Frame42 />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#ebf0fc] relative size-full" data-name="iPhone 14 & 15 Pro - 1">
      <IOsStatusBarBlack />
      <Frame24 />
      <Frame25 />
      <Frame36 />
      <Frame6 />
      <Frame22 />
      <Frame38 />
    </div>
  );
}