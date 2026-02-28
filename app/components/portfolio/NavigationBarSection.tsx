export const NavigationBarSection = () => {
  return (
    <header className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch border border-solid border-[#463e2e33] bg-[#fef8e2] px-[200px] py-6">
      <h1 className="relative w-fit text-2xl font-bold tracking-[0] text-[#1e2a38] [font-family:'Cormorant_Garamond-Bold',Helvetica] leading-[normal]">
        John Angelo Cabalfin
      </h1>

      <a
        href="/resume.pdf"
        className="relative inline-flex flex-[0_0_auto] cursor-pointer items-center justify-center gap-2.5 rounded-[20px] bg-[#4e6a57] p-3 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4e6a57] focus:ring-offset-2"
        aria-label="Download Resume"
        download
      >
        <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-white [font-family:'Manrope-SemiBold',Helvetica] text-base leading-[normal]">
          Download Resume
        </span>
      </a>
    </header>
  );
};
