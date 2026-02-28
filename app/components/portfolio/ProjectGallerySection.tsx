export const ProjectGallerySection = () => {
  const projects = [
    {
      id: 1,
      title: "Capybara Chill Tracker",
      sticker: "✨ Gentle Giant Pick",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capybara_portrait_2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Capybara_portrait_2.jpg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "A cozy dashboard that tracks capybara nap cycles, snack preferences, and pond-time routines. Built to feel calm, simple, and delightful for anyone who loves these chill legends.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 2,
      title: "Capybara Habitat Planner",
      sticker: "🎯 Pond Approved",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lone_capybara.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lone_capybara.jpg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "An interactive planner for designing capybara-friendly spaces with water zones, shade, and social corners. The experience focuses on clarity and playful visual feedback.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 3,
      title: "Capybara Mood Board",
      sticker: "🛠️ Wholesome Build",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capybara_male.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Capybara_male.jpg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "A visual gallery that matches capybara expressions to weather, snacks, and music vibes. Designed as a fun mini-app to practice dynamic UI states and polished interactions.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 4,
      title: "Capybara Quest Map",
      sticker: "🚀 Adventure Ready",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capybaras2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Capybaras2.jpg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "A playful map experience where users guide a capybara through cozy checkpoints, river paths, and snack stops. Built to balance clean architecture with cartoon energy.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-5 self-stretch px-[200px] py-12"
    >
      <header className="relative flex w-full flex-[0_0_auto] flex-col items-center justify-end gap-3 self-stretch">
        <h2 className="relative mt-[-1.00px] self-stretch text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Cormorant_Garamond-SemiBold',Helvetica] text-5xl leading-[normal]">
          Capybara Projects
        </h2>

        <p className="relative text-center font-semibold tracking-[0] text-[#4e6a57] [font-family:'Manrope-SemiBold',Helvetica] text-base leading-[normal]">
          A playful collection of capybara-inspired builds.
        </p>

        <img className="relative h-px w-[202px] object-cover" alt="" src="/line-2.svg" />
      </header>

      <div className="relative flex h-[1050px] w-full max-w-[1520px] flex-wrap items-center justify-center gap-[20px_20px]">
        {projects.map((project, projectIndex) => (
          <article
            key={project.id}
            className={`group relative flex w-[748px] self-stretch flex-col items-center overflow-hidden rounded-2xl border-[3px] border-solid border-[#1e2a38] bg-white shadow-[0_8px_0_0_#1e2a38] transition-all duration-300 hover:-translate-y-2 ${
              projectIndex % 2 === 0 ? "hover:-rotate-[1deg]" : "hover:rotate-[1deg]"
            }`}
          >
            <span className="absolute right-3 top-3 z-10 rounded-full bg-[#f4b942] px-3 py-1 text-xs font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica]">
              {project.sticker}
            </span>

            <img
              className="relative h-[235px] w-full self-stretch"
              alt={`${project.title} project screenshot`}
              src={project.image}
            />

            <div className="relative ml-[-3.00px] mr-[-3.00px] flex w-full flex-[0_0_auto] flex-col items-end gap-[55px] rounded-[0px_0px_8px_0px] border-l-[3px] border-[#1e2a38] bg-[#f1efe8] p-7 [border-left-style:solid]">
              <div className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#4e6a57]/20" />
              <div className="pointer-events-none absolute -bottom-8 right-8 h-16 w-16 rounded-full bg-[#f4b942]/30" />

              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-6 self-stretch">
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  <h3 className="relative mt-[-1.00px] w-fit text-[28px] font-semibold tracking-[0] text-[#1e2a38] [font-family:'Cormorant_Garamond-SemiBold',Helvetica] leading-[normal]">
                    {project.title}
                  </h3>

                  <div
                    className="relative inline-flex flex-[0_0_auto] items-start gap-2.5"
                    role="list"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-md border border-solid px-3 py-2 ${
                          index % 2 === 0
                            ? "border-[#4e6a57] bg-[#f4b94299]"
                            : "border-[#1e2a38] bg-[#fef8e2]"
                        }`}
                        role="listitem"
                      >
                        <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] text-xs leading-[normal]">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="relative h-[69px] self-stretch overflow-hidden text-ellipsis font-semibold tracking-[0] text-[#1e2a38] [display:-webkit-box] [font-family:'Manrope-SemiBold',Helvetica] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] text-base leading-[normal]">
                  {project.description}
                </p>
              </div>

              <div className="relative flex w-full flex-[0_0_auto] items-start self-stretch">
                <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-4">
                  <a
                    href="#"
                    className="relative box-border flex w-[140px] items-center justify-center gap-2.5 rounded-md border border-solid border-[#4e6a57] bg-[#fef8e2] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4b94299]"
                    aria-label="View Github repository"
                  >
                    <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-[#4e6a57] [font-family:'Manrope-SemiBold',Helvetica] text-xs leading-[normal]">
                      Capy Repo
                    </span>

                    <div className="relative h-4 w-4 aspect-[1]" aria-hidden="true">
                      <img
                        className="absolute left-[8.33%] top-[8.33%] h-[91.67%] w-[91.67%]"
                        alt=""
                        src={project.githubIcon}
                      />
                    </div>
                  </a>

                  <a
                    href="#"
                    className="relative box-border flex w-[140px] items-center justify-center gap-2.5 rounded-md bg-[#4e6a57] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                    aria-label="Open project"
                  >
                    <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-white [font-family:'Manrope-SemiBold',Helvetica] text-xs leading-[normal]">
                      Open Capy App
                    </span>

                    <div className="relative h-4 w-4 aspect-[1]" aria-hidden="true">
                      <img
                        className="absolute left-[12.50%] top-[12.50%] h-[87.50%] w-[87.50%]"
                        alt=""
                        src={project.openIcon}
                      />
                    </div>
                  </a>
                </div>

                <div className="relative flex h-10 flex-1 grow items-center justify-end gap-2.5">
                  <a
                    href={project.sourceUrl}
                    className="relative w-fit text-base font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] leading-[normal] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Capy Story
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
