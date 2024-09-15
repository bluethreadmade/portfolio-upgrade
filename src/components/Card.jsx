import PropTypes from "prop-types";
import NavInProjects from "./NavInProjects";

export default function Card({ title, description, image, bgColor, buttonColor, buttonTextColor, rotation }) {
  return (
    <div
      id="card"
      className="flex flex-col min-w-[280px] max-w-full h-auto p-2 lg:p-8 pb-4 my-4 bg-white border border-gray-200 rounded-2xl drop-shadow-xl"
      style={{ aspectRatio: ".75", backgroundColor: bgColor, rotate: rotation }}
    >
      <img
        id="projectImage"
        src={image}
        className="rounded-lg drop-shadow-md max-h-[333px]"
        style={{ aspectRatio: "1.5" }}
      ></img>
      <h2
        id="title"
        className="my-6 text-lg lg:text-5xl font-serif text-gunmetal"
      >
        {title}
      </h2>
      <p
        id="projectDescription"
        className="mb-6 ml-4 text-sm lg:text-xl font-sans text-gunmetal flex-grow overflow-hidden min-h-0"
        style={{ minHeight: 0}}
      >
        {description}
      </p>
      <div className="flex flex-col w-full mt-auto">
        <NavInProjects buttonColor={buttonColor} buttonTextColor={buttonTextColor}/>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  rotation: PropTypes.string.isRequired
};
