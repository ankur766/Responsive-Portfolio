
import vendor from "../images/projectImg/vendor.png";
import shoes from "../images/projectImg/Shoes.png";
import nexus from "../images/projectImg/Nexus.png";
import codeEditor from "../images/projectImg/codeEdiior.png";



const portfolios = [
  {
    id: "01",
    webpage:"",
    imgUrl: vendor,
    category: "",
    title: "Vendor-Management-System",
    description: "A Vendor Management System (VMS) is a centralized platform that streamlines and automates the process of managing relationships with external suppliers, enhancing efficiency and collaboration in procurement. By providing real-time insights and control over vendor activities, VMS helps organizations optimize their supply chain and mitigate risks.",
    technologies: ["React", "Tailwind css", "Node.js","java","Sturs2", "MongoDB"],
    siteUrl: "#",
    rate: 4,
    url:"https://github.com/ankur766/Vendor-Management-System.git ",
    type:"frontend"
  },
  
  {
    id: "02",
    webpage:"https://nike-brand-pages.vercel.app/",
    imgUrl: shoes,
    category: "",
    title: "SHoes Store UI UX",
    description: "Shoes Store UI/UX: Seamlessly blending aesthetics with user-friendly design, our interface offers an immersive and intuitive shopping experience, enhancing customer satisfaction and engagement ",
    technologies: ["React", "Tailwind css"],
    siteUrl: "#",
    rate: 5,
    url:"https://github.com/ankur766/NikeBrandPages.git ",
    type:"uiux"
  },
  {
    id: "03",
    webpage:"https://nexus-meet-iota.vercel.app/",
    imgUrl: nexus,
    category: "Fullstack",
    title: "Nexus Meeting App",
    description: "Nexus Meeting: A collaborative forum where diverse ideas converge, fostering innovation and synergy among participants to drive collective progress.",
    technologies: ["React", "Tailwind css, Node.js, MongoDB"],
    siteUrl: "https://nexus-meet-iota.vercel.app/",
    rate: 5,
    url:"https://github.com/ankur766/NexusMeet ",
    type:"frontend"
  },
  {
    id: "04",
    webpage:"https://github.com/ankur766/CodeEditor.git",
    imgUrl: codeEditor,
    category: "Fullstack",
    title: "Code Editor Platform",
    description: "Code Editor Platform: Empowering developers with a sleek and efficient interface, our platform streamlines coding workflows, providing a feature-rich environment for seamless code creation, collaboration, and optimization.",
    technologies: ["React", "Bootstrap" ,"css", "Node.js", "MongoDB"],
    siteUrl: "",
    rate: 5,
    url:"https://github.com/ankur766/CodeEditor.git ",
    type:"frontend",
    type:"backend",
  },
  {
    id: "05",
    webpage:"https://github.com/ankur766/CRUD-Operation",
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
    category: "Backend",
    title: "JAVA Backend",
    description: "Java backend CRUD (Create, Read, Update, Delete) operations involve implementing functionality for creating, retrieving, updating, and deleting data in a database using Java programming language.",
    technologies: ["Java", "Spring Boot" ,"Hibernate", "Sturs2", "MongoDB"],
    siteUrl: "",
    rate: 3,
    url:"https://github.com/ankur766/CRUD-Operation ",
    type:"backend"
  },


]
export default portfolios;