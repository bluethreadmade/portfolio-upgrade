export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-row">
        <img src="/public/assets/images/portfolio image.png" className=""></img>
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-5xl">Megan McNeill</h1>
          {/* text and square wrapper */}
          <div className="relative">
            {/* square */}
            <div className="absolute inset-0 bg-french-gray transform rotate-2 -z-10 p-4"></div>
            {/* text wrapper*/}
            <div className="relative p-4">
              <p className="mb-4 indent-10">
                With 14 years of hands-on experience in product design and
                engineering, I’ve honed my ability to create impactful solutions
                that enhance user experiences and drive innovation.
              </p>

              <p className="mb-4 indent-10">
                Recently, I’ve expanded my skill set to include web development,
                where I’ve embraced the challenge of building dynamic and
                responsive web applications. My background in mechanical
                engineering and program management has instilled a deep
                understanding of design principles and a strategic mindset that
                I now apply to both digital and physical products.
              </p>

              <p className="mb-4 indent-10">
                I thrive on turning complex ideas into intuitive, user-centric
                designs and enjoy leveraging my technical expertise to build and
                refine systems, workflows, and digital interfaces. My passion
                for creating meaningful solutions and my commitment to
                continuous learning enable me to excel in crafting high-quality,
                innovative web solutions that align with user needs and business
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="/public/assets/images/Graph.png"
          alt="Graph Image"
          className=""
        />
      </div>
    </div>
  );
}
