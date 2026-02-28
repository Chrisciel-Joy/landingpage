export const AboutMeSection = () => {
  const aboutContent = {
    title: "About Me",
    paragraphs: [
      "I'm currently staying in Iloilo city with the dream of breaking into tech. I'm drawn to building structured, reliable systems designed with long-term clarity in mind.",
      "Outside of tech, I volunteer at local animal shelters — an experience that has shaped my sense of responsibility and patience.",
      "I'm also inspired by fantasy literature, where thoughtful world-building and strong systems bring stories to life.",
      "To me, good software — like good stories — is built with care and meant to endure.",
    ],
    imageUrl: "/base.svg",
    imageAlt: "Profile picture",
  };

  return (
    <section
      id="about"
      className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-9 self-stretch px-[200px] py-12"
      aria-labelledby="about-me-heading"
    >
      <article className="relative flex w-full flex-[0_0_auto] items-start gap-44 self-stretch overflow-hidden rounded-[14px] border-4 border-solid border-[#f4b942] bg-[#fef8e2] px-[60px] py-10">
        <div className="relative flex h-full flex-1 grow flex-col items-start gap-6 self-stretch">
          <h2
            id="about-me-heading"
            className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] text-[40px] leading-[normal]"
          >
            {aboutContent.title}
          </h2>

          <div className="relative h-[307px] self-stretch text-xl font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] leading-[27.3px]">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index < aboutContent.paragraphs.length - 1 ? "mb-[27.3px]" : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div
          className="relative aspect-[1] h-[386px] w-[386px] bg-[url('/base.svg')] bg-[100%_100%]"
          role="img"
          aria-label={aboutContent.imageAlt}
        />
      </article>
    </section>
  );
};
