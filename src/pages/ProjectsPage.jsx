import Card from "../components/Card";


const project = [
    {
      title: "Craft Corner",
      description: `This application was created for new crafters looking for a way in and for passionate hobbyists looking to learn, grow and connect.`,
      image: "/assets/images/projects/craftcorner.PNG",
      githubLink: "https://github.com/kaitlynmooney/craft-corner",
      deployedLink: "http://craft-corner.onrender.com/",
    },
    {
      title: "AppTrack",
      description: `This application was created for busy job-hunters who want a centralized place to track what jobs they've applied to, the ongoing status of those applications, and when any interviews are scheduled.`,
      image: "/assets/images/projects/apptrack.png",
      githubLink: "https://github.com/bluethreadmade/job-app-tracker",
      deployedLink: "https://job-app-tracker-boic.onrender.com/",
    },
    {
      title: "Weather Dashboard",
      description:
        "This is a simple application using javascript, jquery, html, css and bootstrap to pull from the openweather api and display the current weather and the 5 day forecast for a city. The search history is also displayed.",
      image: "/assets/images/projects/weather.png",
      githubLink: "https://github.com/bluethreadmade/weather-dashboard",
      deployedLink: "https://bluethreadmade.github.io/weather-dashboard/",
    },
    {
      title: "README Generator",
      description:
        "This is a command-line application that prompts the user for input using the inquirer package. The user input is used to fill a markdown file template.",
      image: "/assets/images/projects/readme.PNG",
      githubLink: "https://github.com/bluethreadmade/README-generator",
      deployedLink:
        "https://drive.google.com/file/d/19bVGJE_fgBrTlYVI0GxK5dFw36oWCkke/preview",
    },
    {
      title: "Dad Dinner",
      description: `We've created an application that enhances the lives of busy parents everywhere and takes the stress out of the long asked question "What's for dinner?". Just search for your main ingredient on the homepage and choose to randomize it if you're feeling like an adventure.`,
      image: "/assets/images/projects/dinner.PNG",
      githubLink: "https://github.com/adammathis05/dad-dinner?tab=readme-ov-file",
      deployedLink: "https://adammathis05.github.io/dad-dinner/",
    },
    {
      title: "Tech Blog",
      description: `My Tech Blog follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. I also use the dotenv package for environment variables, the bcrypt package to hash passwords, and the express-sessionand connect-session-sequelize packages to add authentication.`,
      image: "/assets/images/projects/techblog.PNG",
      githubLink: "https://github.com/bluethreadmade/tech-blog",
      deployedLink: "https://tech-blog-275r.onrender.com/",
    },
  ];

// This is a page that will be filled with project card components
export default function ProjectsPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {project.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}
