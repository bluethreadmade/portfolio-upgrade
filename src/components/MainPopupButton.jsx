export default function MainPopupButton() {
  return (
    <div
      id="buttonGroup"
      className="flex flex-row w-full self-center max-w-sm border rounded-xl bg-bright p-1 justify-evenly divide-x font-sans color-gunmetal text-xl " 
    >
      <p className="flex-1 text-center text-base lg:text-xl">Resume</p>
      <p className="flex-1 text-center text-base lg:text-xl">Contact</p>
    </div>
  );
}
