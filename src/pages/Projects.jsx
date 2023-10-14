import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
        <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/77.jpg"
              alt="health"
            />
          </div>
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://oceanfdn.org/projects/">
              <p className="font-bold text-4xl text-primary">
              Community Health Workshops
              </p>
              <p className="text-lg pt-4 pr-6">
              Community health workshops aim to educate and empower residents on various health topics. 
              Led by healthcare professionals, these workshops cover nutrition, preventive care, mental health, 
              and lifestyle choices. Through expert presentations, interactive sessions, and hands-on activities, 
              participants gain practical knowledge. The workshops, often hosted in community centers or online, 
              aim to create a culture of health consciousness, encouraging informed decisions for improved well-being 
              within diverse community demographics.
              </p>
            </a>
          </div>
          
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.unep.org/news-and-stories/story/7-conservation-projects-win-grants-underwater-innovation">
                <p className="font-bold text-4xl text-primary">
                Collaboration with NGOs
                </p>
                <p className="text-lg pt-4 pr-6">
                Collaborating with NGOs (Non-Governmental Organizations) enhances community health initiatives by leveraging their expertise, 
                resources, and outreach networks. These partnerships bring diverse perspectives, amplify awareness campaigns, and facilitate 
                the implementation of healthcare projects. NGOs often contribute grassroots knowledge, aiding in tailoring interventions to 
                specific community needs. This collaborative approach strengthens the impact of health programs, fostering sustainable solutions 
                and addressing health disparities within communities.
                </p>
              </a>
            </div>
            <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/22.jpg"
                alt="beauty of oceans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
