import PropTypes from 'prop-types';
import NavInProjects from "./NavInProjects";


export default function Card({ title, description, image }) {
  return (
    <div
      id="card"
      className="flex flex-col max-w-[400px] max-h-[530px] w-full h-auto p-8 pb-4 bg-white border border-gray-200 rounded-2xl drop-shadow-xl"
      style={{ aspectRatio: '389 / 521' }}
    >
          <img id="projectImage" src={image} className="rounded-lg drop-shadow-md"></img>
          <h2
            id="title"
            className="my-6 text-4xl font-serif tracking-tight text-gunmetal"
          >
            {title}
          </h2>
          <p
            id="projectDescription"
            className="mb-6 ml-4 text-lg font-sans text-gunmetal"
          >
            {description}
          </p>
          <div className="flex flex-col w-full">
            <NavInProjects />
          </div>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
