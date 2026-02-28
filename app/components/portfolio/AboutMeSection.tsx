export const AboutMeSection = () => {
  const aboutContent = {
    title: "About Capybaras",
    paragraphs: [
      "Capybaras are the calmest icons of the animal world, known for their gentle vibe and surprisingly social nature.",
      "They spend their days lounging near water, making friends with almost every species, and reminding everyone to slow down.",
      "Their peaceful routines and steady behavior inspire the way I think about building soft, user-friendly digital experiences.",
      "To me, great software should feel like a capybara moment: warm, welcoming, and stress-free.",
    ],
    imageUrl: "/capy-meme.svg",
    imageAlt: "Meme capybara with sunglasses",
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
          className="relative aspect-[1] h-[386px] w-[386px] bg-[100%_100%]"
          style={{ backgroundImage: `url(${aboutContent.imageUrl})` }}
          role="img"
          aria-label={aboutContent.imageAlt}
        />
      </article>
    </section>
  );
};
