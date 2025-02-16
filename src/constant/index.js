import BarChartIcon from "@mui/icons-material/BarChart";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShareIcon from "@mui/icons-material/Share";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import DescriptionIcon from "@mui/icons-material/Description";
import Hemotology from "../assets/images/hematology.png";
import BioChemistry from "../assets/images/biochemistry.png";
import rapidCard from "../assets/images/rapid-card.png";
import microBiology from "../assets/images/microbiology.png";
import consumable from "../assets/images/consumables.png";
import chromatogram from "../assets/images/chromatogram.png";
import histopathology from "../assets/images/histopathology.png";
import microscope from "../assets/images/olympus-compound.png";

export const servicesData = [
  {
    icon: <DescriptionIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Hematology",
    url: "/category/hematology",
    backgroundImage: Hemotology,
    subheading:
      "Advanced hematology equipment for precise blood analysis, enhancing diagnostics and streamlining lab operations for care.",
  },
  {
    icon: <ShareIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Biochemistry",
    url: "/category/biochemistry",
    backgroundImage: BioChemistry,
    subheading:
      "Discover top-tier biochemistry equipment for precise analysis, enhancing diagnostics and laboratory efficiency with advanced technology.",
  },
  {
    icon: <FolderCopyIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Rapid Card",
    url: "/category/rapidcard",
    backgroundImage: rapidCard,
    subheading:
      "Discover advanced rapid test solutions for quick, accurate diagnostics, enhancing efficiency and patient care with cutting-edge technology.",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Microbiology",
    url: "/category/microbiology",
    backgroundImage: microBiology,
    subheading:
      "Explore cutting-edge microbiology equipment for accurate microbial testing, enhancing lab performance and diagnostic reliability.",
  },
  {
    icon: <PictureAsPdfIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Consumables",
    url: "/category/consumables",
    backgroundImage: consumable,
    subheading:
      "Discover high-quality laboratory consumables for reliable, efficient experiments, ensuring precision, durability, and seamless lab operations.",
  },
  {
    icon: <PictureAsPdfIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Chromatography",
    url: "/category/chromatography",
    backgroundImage: chromatogram,
    subheading:
      "Chromatography is a laboratory technique used to separate, identify, and analyze components in a mixture. It works by distributing substances between a stationary phase and a mobile phase for separation.",
  },
  {
    icon: <PictureAsPdfIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Histopathology",
    url: "/category/histopathology",
    backgroundImage: histopathology,
    subheading:
      "Histopathology is the microscopic examination of tissues to study diseases. It helps diagnose conditions like cancer by analyzing tissue structure, abnormalities, and cellular changes after biopsy or surgery.",
  },
  {
    icon: <PictureAsPdfIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Microscope",
    url: "/category/microscope",
    backgroundImage: microscope,
    subheading:
      "A microscope is an optical instrument used to magnify small objects, allowing detailed observation of microorganisms, cells, and tissues. It is essential in biology, medicine, and scientific research for analysis and diagnostics.",
  },
];

export const footerLinksGeneral = [
  { path: "/", label: "Home" },
  { path: "/category", label: "Category" },
  { path: "/aboutus", label: "About sanchitHealthcare" },
  { path: "/contact", label: "Contact with us" },
];
export const footerLinksLegal = [
  { path: "/legal/terms-and-conditions", label: "Terms & Conditions" },
  { path: "/legal/privacy-policy", label: "Privacy Policy" },
];

export const testimonialData = [
  {
    name: "Dr. Ayesha Patel",
    testimonial:
      "Sanchit Healthcare LLP's laboratory equipment is outstanding! It’s intuitive and efficient, significantly improving our testing accuracy and workflow.",
    position: "Lead Research Scientist",
  },
  {
    name: "Dr. Rajesh Kumar",
    testimonial:
      "Using Sanchit Healthcare LLP's lab tools has streamlined our processes. It’s easy to integrate and allows us to focus more on our research.",
    position: "Laboratory Director",
  },
  {
    name: "Dr. Neha Sharma",
    testimonial:
      "Sanchit Healthcare LLP's equipment has transformed our lab’s capabilities. The accuracy and ease of use have enhanced our collaborative research efforts.",
    position: "Clinical Research Coordinator",
  },
  {
    name: "Dr. Arjun Mehta",
    testimonial:
      "As a busy lab technician, Sanchit Healthcare LLP's equipment has been a game-changer. It simplifies complex tasks and boosts our productivity.",
    position: "Senior Lab Technician",
  },
  {
    name: "Dr. Priya Gupta",
    testimonial:
      "Sanchit Healthcare LLP provides reliable and user-friendly lab equipment. It helps us manage our experiments efficiently and maintain high standards.",
    position: "Biochemist",
  },
  {
    name: "Dr. Vikram Singh",
    testimonial:
      "I highly recommend Sanchit Healthcare LLP for their top-notch lab equipment. It’s crucial for our research and always delivers exceptional performance.",
    position: "Research Scientist",
  },
  {
    name: "Dr. Sunita Reddy",
    testimonial:
      "Sanchit Healthcare LLP's equipment has revolutionized our lab processes, allowing us to conduct more precise and effective experiments with ease.",
    position: "Project Lead",
  },
  {
    name: "Dr. Amit Shah",
    testimonial:
      "The efficiency and accuracy of Sanchit Healthcare LLP's laboratory tools have greatly improved our research outcomes and streamlined our operations.",
    position: "Clinical Laboratory Manager",
  },
  {
    name: "Dr. Anjali Verma",
    testimonial:
      "Sanchit Healthcare LLP offers excellent lab equipment that is both reliable and effective, helping us maintain professional standards and achieve accurate results.",
    position: "Independent Research Consultant",
  },
  {
    name: "Dr. Kiran Joshi",
    testimonial:
      "The advanced features of Sanchit Healthcare LLP's lab equipment enhance our research capabilities and facilitate seamless collaboration within our team.",
    position: "Laboratory Supervisor",
  },
];
