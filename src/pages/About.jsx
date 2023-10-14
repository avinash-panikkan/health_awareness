import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-3/3 pl-10 flex flex-col gap-5 pt-5 pr-8">
        <p className="font-bold text-primary justify-center text-6xl">About Us</p>
        <p className="text-lg">
          Welcome to{" "}
          <span className="text-primary font-semibold">Healthcare</span>, where our unwavering commitment to health and well-being 
          shapes our mission. At the heart of our endeavor is a deep understanding of the profound impact healthcare has on individuals 
          and communities. We believe in the power of compassionate, patient-centered care and strive to provide accessible, high-quality 
          services that address the diverse needs of our community.Our journey in healthcare is guided by a dedication to preventive care, 
          early intervention, and fostering a culture of wellness. We recognize the evolving landscape of healthcare and embrace innovation 
          to ensure that our patients receive the best possible outcomes. From cutting-edge medical technologies to personalized treatment 
          plans, we are at the forefront of delivering comprehensive and holistic healthcare solutions.  we value the trust our patients place in us. 
          Our team of dedicated healthcare professionals, including experienced doctors, nurses, and support staff, is committed to providing not just 
          treatment but also education, support, and empowerment. Together, we are building a healthier community where everyone can thrive. 
          Join us in this journey towards a future where healthcare is not just a service but a foundation for a vibrant and fulfilling life.
        </p>
        <div className="h-20  flex items-center justify-center gap-6">
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <LinkedInIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <EmailIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
          <Link>
            <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <PhoneIcon
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </div>
          </Link>
        </div>
        <div className="h-20 flex justify-center items-center gap-8">
          <Link to={"/contact"}>
            <button className="bg-secondary hover:bg-primary px-4 py-2 rounded-lg text-white font-semibold">
              Contact Us
            </button>
          </Link>
          <Link>
            <button className="bg-secondary hover:bg-primary px-4 py-2 rounded-lg text-white font-semibold">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
