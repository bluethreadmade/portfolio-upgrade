import PropTypes from "prop-types";


export default function NavInProjects({ buttonColor, buttonTextColor }) {
    return (
      <div
        id="ProjectButtonGroup"
        className="flex flex-row w-full self-center bottom-6 rounded-xl bg-reseda-green p-1 justify-evenly divide-x font-sans font-medium text-xl text-black"
        style={{ backgroundColor: buttonColor }} 
      >
        <p className="flex-1 text-center text-base lg:text-xl" style={{ color: buttonTextColor }}>Link</p>
        <p className="flex-1 text-center text-base lg:text-xl" style={{ color: buttonTextColor }}>Github</p>
        <p className="flex-1 text-center text-base lg:text-xl" style={{ color: buttonTextColor }}>More</p>
      </div>
    );
  }

  NavInProjects.propTypes = {
    buttonColor: PropTypes.string.isRequired,
    buttonTextColor: PropTypes.string.isRequired
  };