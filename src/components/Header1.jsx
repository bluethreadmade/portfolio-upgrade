export default function Header1() {
  return (
    <header className="relative items-center font-sans color-gunmetal text-base lg:text-xl flex py-2 px-4 lg:px-24 h-16">
      <ul className="absolute left-0 flex items-center space-x-4">
        <li className="hidden lg:block">MeganMcNeill.dev</li>
      </ul>
      {/* default center (absolute?) at small become left */}
      <div className="inset-0 flex items-center justify-center absolute lg:absolute sm:relative md:relative">
        <span>Megan McNeill</span>
      </div>
      <ul className="absolute right-0 flex items-center space-x-4">
        <li className="hidden sm:block">Megan.E.McNeill@gmail.com</li>
      </ul>
    </header>
  );
}
