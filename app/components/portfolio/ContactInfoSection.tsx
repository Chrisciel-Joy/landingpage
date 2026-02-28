export const ContactInfoSection = (): JSX.Element => {
  const contactInfo = {
    location: "Iloilo, Philippines",
    email: "gelcabalfin@gmail.com",
    copyright: "© John Angelo Cabalfin 2026",
  };

  const socialLinks = [
    {
      id: 1,
      icon: "/github.svg",
      alt: "GitHub",
      href: "https://github.com",
      width: "91.67%",
      height: "91.67%",
      top: "8.33%",
      left: "8.33%",
    },
    {
      id: 2,
      icon: "/linkedin.svg",
      alt: "LinkedIn",
      href: "https://linkedin.com",
      width: "87.50%",
      height: "87.50%",
      top: "12.50%",
      left: "12.50%",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch px-[200px] py-12"
    >
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-end gap-5 self-stretch">
        <header className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-3 self-stretch">
          <h2 className="relative mt-[-1.00px] self-stretch text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Cormorant_Garamond-SemiBold',Helvetica] text-5xl leading-[normal]">
            Let&apos;s Work Together
          </h2>

          <img
            className="relative h-px w-[229px] object-cover"
            alt=""
            src="/line-1-2.svg"
            role="presentation"
          />
        </header>

        <address className="relative w-[368px] text-center font-semibold not-italic tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] text-base leading-[18px]">
          {contactInfo.location}
        </address>

        <a
          href={`mailto:${contactInfo.email}`}
          className="relative w-[368px] text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] text-base leading-[18px] no-underline hover:underline focus:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#1e2a38]"
        >
          {contactInfo.email}
        </a>
      </div>

      <div className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-end gap-3 self-stretch">
        <p className="relative mt-[-1.00px] w-[368px] text-center font-normal tracking-[0] text-[#1e2a38] [font-family:'Manrope-Regular',Helvetica] text-[10px] leading-[18px]">
          {contactInfo.copyright}
        </p>
      </div>

      <nav
        className="relative inline-flex flex-[0_0_auto] items-start gap-2"
        aria-label="Social media links"
      >
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="relative h-8 w-8 aspect-[1] transition-opacity hover:opacity-70 focus:opacity-70 focus:outline-2 focus:outline-offset-2 focus:outline-[#1e2a38]"
            aria-label={social.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="absolute"
              style={{
                width: social.width,
                height: social.height,
                top: social.top,
                left: social.left,
              }}
              alt=""
              src={social.icon}
              role="presentation"
            />
          </a>
        ))}
      </nav>
    </footer>
  );
};
