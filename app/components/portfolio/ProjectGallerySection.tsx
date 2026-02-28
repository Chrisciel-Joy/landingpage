export const ProjectGallerySection = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: "The Green Knight",
      image: "/project-1.svg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 2,
      title: "The Green Knight",
      image: "/project-2.svg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 3,
      title: "The Green Knight",
      image: "/project-3.svg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
      githubIcon: "/github.svg",
      openIcon: "/open.svg",
    },
    {
      id: 4,
      title: "The Green Knight",
      image: "/project-4.svg",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
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
          Projects
        </h2>

        <img className="relative h-px w-[202px] object-cover" alt="" src="/line-2.svg" />
      </header>

      <div className="relative flex h-[1050px] w-full max-w-[1520px] flex-wrap items-center justify-center gap-[20px_20px]">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative flex w-[748px] self-stretch flex-col items-center overflow-hidden rounded-2xl border-[3px] border-solid border-[#1e2a38] bg-white"
          >
            <img
              className="relative h-[235px] w-full self-stretch"
              alt={`${project.title} project screenshot`}
              src={project.image}
            />

            <div className="relative ml-[-3.00px] mr-[-3.00px] flex w-full flex-[0_0_auto] flex-col items-end gap-[55px] rounded-[0px_0px_8px_0px] border-l-[3px] border-[#1e2a38] bg-[#f1efe8] p-7 [border-left-style:solid]">
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
                        className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 rounded-md bg-[#f4b94299] px-3 py-2"
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
                    className="relative box-border flex w-[140px] items-center justify-center gap-2.5 rounded-md border border-solid border-[#4e6a57] p-3"
                    aria-label="View Github repository"
                  >
                    <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-[#4e6a57] [font-family:'Manrope-SemiBold',Helvetica] text-xs leading-[normal]">
                      Github Repo
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
                    className="relative box-border flex w-[140px] items-center justify-center gap-2.5 rounded-md bg-[#4e6a57] p-3"
                    aria-label="Open project"
                  >
                    <span className="relative mt-[-1.00px] w-fit text-center font-semibold tracking-[0] text-white [font-family:'Manrope-SemiBold',Helvetica] text-xs leading-[normal]">
                      Open Project
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
                    href="#"
                    className="relative w-fit text-base font-semibold tracking-[0] text-[#1e2a38] [font-family:'Manrope-SemiBold',Helvetica] leading-[normal] underline"
                  >
                    Read More
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
