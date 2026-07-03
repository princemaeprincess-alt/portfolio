import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card4,
    category: "DIGITAL ART",
    title: "Student Life",
    description:
      "A glimpse into student life, balancing academic responsibilities, creativity, and personal interests while continuously learning and developing new skills.",
    link: "https://drive.google.com/file/d/1J4Plios0Qeug4J2G3V3oICwRs6j-scnD/view?usp=sharing",
  },
  {
    id: 2,
    image: card5,
    category: "UI-UX DESIGN",
    title: "Trycicle Rental Management System ",
    description:
      "A mobile application prototype designed to simplify tricycle rental services through convenient booking, vehicle availability tracking, and user-friendly management features.",
    link: "https://www.figma.com/proto/nWMzr28nOzjErsAVBdrltt/Untitled?node-id=278-632&starting-point-node-id=278%3A618",
  },
  {
    id: 3,
    image: card6,
    category: "CERTIFICATE",
    title: "Public Research Colloquium 2026",
    description:
      "Recognized for presenting a research study on the influence of laptop utilization on programming skills during a Public Research Colloquium.",
    link: "https://drive.google.com/file/d/1J4Plios0Qeug4J2G3V3oICwRs6j-scnD/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
