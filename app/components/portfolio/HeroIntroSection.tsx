export const HeroIntroSection = () => {
  const randomBits = [
    "Current vibe: capybara calm and zero stress.",
    "Random quest: find the warmest sunny rock by the pond.",
    "Fun mode: snack, splash, repeat.",
    "Side mission: make friends with every creature nearby.",
    "Bonus thought: great UX should feel as chill as a capybara.",
  ];

  const randomBit = randomBits[Math.floor(Math.random() * randomBits.length)];

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
          I build calm, cozy digital experiences inspired by capybara energy.
        </h1>

        <img
          className="relative h-px w-[457px] object-cover"
          alt=""
          src="/line-1.svg"
          role="presentation"
        />

        <p className="relative self-stretch text-center font-normal tracking-[0] text-[#1e2a38] [font-family:'Manrope-Regular',Helvetica] text-2xl leading-[41px]">
          Welcome to my capybara-themed portfolio, where everything is designed to
          feel friendly, playful, and easy to explore. From cozy UI choices to clear
          structure, I want each project to feel like a peaceful afternoon by the
          water with the internet&apos;s favorite giant rodent.
        </p>

        <p className="relative inline-flex w-fit items-center justify-center self-center rounded-full border border-solid border-[#4e6a57] bg-[#fef8e2] px-5 py-2 text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] text-sm leading-[normal]">
          ✨ Random Mode: {randomBit}
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
