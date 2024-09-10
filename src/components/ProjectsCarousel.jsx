import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { project } from "../pages/ProjectsPage";
import Card from "../components/Card";

const Example = () => {
  return (
    <div>
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

// Color sets
const colorSets = [
    { bgColor: '#FFFFFF', buttonColor: '#798E7B', buttonTextColor: '#000000' }, // Set 1 - white bkg
    { bgColor: '#BFCCD8', buttonColor: '#143642', buttonTextColor: '#FFFFFF' }, // Set 2 - blue bkg
    { bgColor: '#8EA791', buttonColor: '#143642', buttonTextColor: '#FFFFFF' }, // Set 3 - green bkg
    ];

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {project.map((item, index) => {
            // Select color set using modulo to cycle through colorSets
            const colorSetIndex = index % colorSets.length;
            const colors = colorSets[colorSetIndex];

            return (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                bgColor={colors.bgColor}
                buttonColor={colors.buttonColor}
                buttonTextColor={colors.buttonTextColor}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };


// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];
