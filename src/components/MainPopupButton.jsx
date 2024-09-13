export default function MainPopupButton() {
  return (
    <div
      id="buttonGroup"
      className="fixed flex flex-row bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm border rounded-xl bg-bright p-2 justify-evenly divide-x font-sans color-gunmetal text-xl z-50"
      // className="flex flex-row w-full self-center absolute bottom-6 max-w-sm border rounded-xl bg-bright p-2 justify-evenly divide-x font-sans color-gunmetal text-xl " 
    >
      <p className="flex-1 text-center text-base lg:text-2xl">Resume</p>
      <p className="flex-1 text-center text-base lg:text-2xl">Contact</p>
    </div>
  );
}
