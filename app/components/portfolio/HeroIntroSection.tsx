export const HeroIntroSection = (): JSX.Element => {
  const buttons = [
    {
      id: "projects",
      label: "Projects",
      variant: "primary",
      href: "#projects",
    },
    {
      id: "contact",
      label: "Contact",
      variant: "secondary",
      href: "#contact",
    },
  ] as const;

  return (
    <section className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 self-stretch px-[200px] py-12">
      <div className="relative flex w-[1072px] flex-[0_0_auto] flex-col items-center justify-center gap-7">
        <h1 className="relative mt-[-1.00px] w-[870px] text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Cormorant_Garamond-SemiBold',Helvetica] text-5xl leading-[normal]">
          I design and develop reliable systems with a human-centered approach.
        </h1>

        <img
          className="relative h-px w-[457px] object-cover"
          alt=""
          src="/line-1.svg"
          role="presentation"
        />

        <p className="relative self-stretch text-center font-normal tracking-[0] text-[#1e2a38] [font-family:'Manrope-Regular',Helvetica] text-2xl leading-[41px]">
          I&apos;m a Computer Science graduate from Iloilo who enjoys building
          structured, maintainable systems that solve real-world problems. With a
          foundation in software development and a growing interest in UX, I focus on
          clarity, usability, and long-term thinking.
        </p>
      </div>

      <nav
        className="relative inline-flex flex-[0_0_auto] items-start justify-center gap-9"
        aria-label="Primary navigation"
      >
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.href}
            className={`relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-[20px] px-[60px] py-3 ${
              button.variant === "primary"
                ? "bg-[#4e6a57]"
                : "border border-solid border-[#4e6a57]"
            }`}
            aria-label={`Navigate to ${button.label}`}
          >
            <span
              className={`relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] [font-family:'Manrope-SemiBold',Helvetica] text-2xl leading-[normal] ${
                button.variant === "primary" ? "text-white" : "text-[#4e6a57]"
              }`}
            >
              {button.label}
            </span>
          </a>
        ))}
      </nav>
    </section>
  );
};
