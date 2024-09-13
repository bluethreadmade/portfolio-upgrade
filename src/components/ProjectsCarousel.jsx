import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { project } from "../pages/ProjectsPage";
import Card from "../components/Card";

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

// Color sets
const colorSets = [
    { bgColor: '#FFFFFF', buttonColor: '#798E7B', buttonTextColor: '#000000' }, // Set 1 - white bkg
    { bgColor: '#BFCCD8', buttonColor: '#143642', buttonTextColor: '#FFFFFF' }, // Set 2 - blue bkg
    { bgColor: '#8EA791', buttonColor: '#143642', buttonTextColor: '#FFFFFF' }, // Set 3 - green bkg
    ];

// Rotations for larger screens
const rotationValues = [
    { rotation: '-6deg' },
    { rotation: '-1.5deg' },
    { rotation: '6deg' },
    { rotation: '1.5deg' },
];

// Default rotation
const [rotation, setRotation] = useState(rotationValues);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      // For small screens, set rotation to 0deg
      setRotation([{ rotation: '0deg' }]);
    } else {
      // For larger screens, use existing rotation values
      setRotation(rotationValues);
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Call on mount

  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <section ref={targetRef} className="relative min-h-[150vh]">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {project.map((item, index) => {
            // Select color set using modulo to cycle through colorSets
            const colorSetIndex = index % colorSets.length;
            const colors = colorSets[colorSetIndex];

            // Select rotation using modulo to cycle through rotations and by screen size
            const rotationIndex = index % rotation.length;
            const rotationValue = rotation[rotationIndex].rotation;


            return (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                bgColor={colors.bgColor}
                buttonColor={colors.buttonColor}
                buttonTextColor={colors.buttonTextColor}
                rotation={rotationValue}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
