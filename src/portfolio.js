/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jatin Jangid",
  title: "Hi all, I'm Jatin",
  subTitle: emoji(
    "A passionate MLOps & Machine Learning Engineer 🚀 who builds reliable, scalable production ML systems that deliver real business impact"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jatinjangid369",
  linkedin: "https://www.linkedin.com/in/jatin-jangid-ml369/",
  gmail: "jatinjangid369@gmail.com",
  // gitlab: "https://github.com/jatinjangid369",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE MLOPS & ML ENGINEER WHO BUILDS RELIABLE PRODUCTION-GRADE ML SYSTEMS AT SCALE",
  skills: [
    emoji(
      "⚡ Design & deploy end-to-end MLOps pipelines from research to production"
    ),
    emoji("⚡ Build scalable model serving, monitoring & automated retraining systems"),
    emoji(
      "⚡ Optimize ML infrastructure for cost, latency & reliability at scale"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"   // Best free alternative (torch/flame feel)
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"   // Neural network / brain icon
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-robot"   // Robot / AI icon (HF doesn't have free FA icon)
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"   // Best match for K8s
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MLflow",
      fontAwesomeClassname: "fas fa-chart-line"   // Experiment tracking feel
    },
    {
      skillName: "Kubeflow",
      fontAwesomeClassname: "fas fa-cubes"        // Same as Kubernetes (pipeline feel)
    },
    // {
    //   skillName: "Prometheus",
    //   fontAwesomeClassname: "fas fa-chart-bar"    // Monitoring icon
    // },
    // {
    //   skillName: "Grafana",
    //   fontAwesomeClassname: "fas fa-tachometer-alt"  // Dashboard icon
    // },
    {
      skillName: "SQL Databse",
      fontAwesomeClassname: "fas fa-project-diagram" // Workflow / DAGs
    },
    // {
    //   skillName: "Terraform",
    //   fontAwesomeClassname: "fas fa-tools"           // Infrastructure as Code
    // },
    // {
    //   skillName: "vLLM",
    //   fontAwesomeClassname: "fas fa-bolt"            // Fast inference
    // },
    // {
    //   skillName: "Triton",
    //   fontAwesomeClassname: "fas fa-server"          // Inference server
    // },
    {
      skillName: "Feast",
      fontAwesomeClassname: "fas fa-database"        // Feature Store
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Acropolis Institute of Technology and Research",
      logo: require("./assets/images/acropolis_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2023 - April 2027",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "MLOps Pipelines & Orchestration",
      progressPercentage: "92%"
    },
    {
      Stack: "Model Serving & Inference Optimization",
      progressPercentage: "88%"
    },
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Kubernetes & Cloud Infrastructure",
      progressPercentage: "82%"
    },
    {
      Stack: "Observability & Model Monitoring",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Master",
      company: "AITR ACM Student Chapter",
      companylogo: require("./assets/images/acm_Logo.png"),
      date: "November 2025 – Present",
      desc: "Leading the Machine Learning vertical of AITR ACM, driving technical workshops, projects, and community initiatives in ML & MLOps.",
      descBullets: [
        "Selected as ML Master among ACM members for demonstrating strong expertise and leadership potential",
        "Responsible for organizing ML workshops, hackathons, and hands-on sessions for 100+ students",
        "Mentoring students on Machine Learning, MLOps, and production-grade ML systems",
        "Working closely with faculty advisers to elevate the technical impact of the AITR ACM chapter"
      ]
    },
    {
      role: "Machine Learning Team Member",
      company: "AITR ACM Student Chapter",
      companylogo: require("./assets/images/acm_Logo.png"),   // Use the same logo as your ML Master role
      date: "October 2024 – September 2025",
      desc: "Selected as a core member of the Machine Learning team in AITR's official ACM Student Chapter after clearing technical interview and task submission.",
      descBullets: [
        "Actively contributing to Machine Learning initiatives, workshops, and hands-on projects within the ACM community",
        "Collaborating with fellow members and faculty advisers to organize ML events and technical sessions",
        "Working on building practical ML skills and contributing to chapter-level ML projects",
        "Participating in orientation and onboarding activities to strengthen the ACM ML community"
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "MLOps Projects | Building Scalable & Reliable Machine Learning Systems",

  projects: [
    {
      image: require("./assets/images/resume_screening_api.webp"),
      projectName: "Resume Screening API",
      projectDesc: "End-to-End MLOps Project: Developed a production-grade Resume Screening System that automates candidate ranking using NLP and Machine Learning. Includes model training, versioning, API deployment, and monitoring.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/jatinjangid369/Resueme_Screening_processing_API.git"
        },
        // {
        //   name: "API Documentation",
        //   url: "#"        // Add Swagger / FastAPI docs link if available
        // },
        // {
        //   name: "Live Demo",
        //   url: "hii"        // Add if deployed
        // }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications, Leadership Roles & Milestones in Machine Learning & MLOps",

  achievementsCards: [
    {
      title: "Calculus for Machine Learning and Data Science",
      subtitle: "DeepLearning.AI • Rated 4.8/5 • Coursera",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/ZT2NMJUVX8AH"   // ← Replace with your actual link
        },
        {
          name: "Course Page",
          url: "https://www.coursera.org/learn/machine-learning-calculus"
        }
      ]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "DeepLearning.AI • Grade: 99.60% • June 2025",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/1BNNZBCAB8FB"   // ← Replace with your actual link
        },
        {
          name: "Course Link",
          url: "https://www.coursera.org/learn/machine-learning"
        }
      ]
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      subtitle: "DeepLearning.AI • Grade: 98.80% • February 2026",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/DNU9ZWWYI19Q"   // ← Replace with actual certificate link
        },
        {
          name: "Course Link",
          url: "https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning"
        }
      ]
    },

    {
      title: "ML Master",
      subtitle: "AITR ACM Student Chapter",
      image: require("./assets/images/acm_Logo.webp"),
      imageAlt: "AITR ACM Logo",
      footerLink: [
        {
          name: "Official Announcement",
          url: "https://drive.google.com/file/d/1NUhW40_W2AUEmeGrzdNu3gy3La-baOjX/view?usp=sharing"   // Add link if you have any
        }
      ]
    },
    {
      title: "Machine Learning Team Member",
      subtitle: "AITR ACM Student Chapter",
      image: require("./assets/images/acm_Logo.webp"),
      imageAlt: "AITR ACM Logo",
      footerLink: [
        {
          name: "Chapter Website",
          url: "https://drive.google.com/file/d/1gMf78wbaQ6jiM1xlkNSHKhPrgAOE-e5Q/view?usp=sharing"   // Optional: add ACM chapter link if available
        }
      ]
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "DeepLearning.AI • Grade: 99.80% • February 2026",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/XYKF4KHW9KOD"   // ← Replace with your actual link
        },
        {
          name: "Course Link",
          url: "https://www.coursera.org/learn/advanced-learning-algorithms"
        }
      ]
    },
    {
      title: "Linear Algebra for Machine Learning and Data Science",
      subtitle: "DeepLearning.AI • Grade: 94.87% • January 2025",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/3YGF8R57KNSS"   // ← Replace with your actual link
        },
        {
          name: "Course Link",
          url: "https://www.coursera.org/learn/machine-learning-linear-algebrae"
        }
      ]
    },
    {
      title: "Machine Learning Specialization",
      subtitle: "Stanford University & DeepLearning.AI • Completed February 2026",
      image: require("./assets/images/deeplearningai_logo.webp"),
      imageAlt: "Stanford & DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Specialization Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SOAKG3K8ZB8O"   // ← Put your Specialization certificate link here
        },
        {
          name: "View All Course Certificates",
          url: "https://www.coursera.org/specializations/machine-learning-introduction"   // Optional: link to individual courses if needed
        }
      ]
    },
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle: "Selected among 4000+ students globally",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     }
    //   ]
    // }
  ],
  display: true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),
//
//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
//
//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7648866654",
  email_address: "jatinjangid369@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
