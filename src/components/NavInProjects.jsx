export default function NavInProjects() {
    return (
      <div
        id="ProjectButtonGroup"
        className="flex flex-row w-full self-center bottom-6 border rounded-xl bg-reseda-green p-1 justify-evenly divide-x font-sans font-medium text-xl text-black" 
      >
        <p className="flex-1 text-center text-base lg:text-xl">Link</p>
        <p className="flex-1 text-center text-base lg:text-xl">Github</p>
        <p className="flex-1 text-center text-base lg:text-xl">More</p>
      </div>
    );
  }