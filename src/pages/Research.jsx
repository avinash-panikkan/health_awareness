import React from "react";

function Research() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
        <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/11.jpg"
              alt="beauty of oceans"
            />
          </div>
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://www.sciencedirect.com/science/article/pii/S2468502X19300440">
              <p className="font-bold text-4xl text-primary">
              Technology and Healthcare Awareness
              </p>
              <p className="text-lg pt-4 pr-6">
              Technology plays a pivotal role in advancing healthcare awareness by providing accessible platforms for 
              information dissemination. Mobile apps, tele-medicine, and online resources enhance outreach, educating 
              individuals on preventive measures, disease management, and healthy lifestyles. Digital health tools facilitate 
              real-time communication, empowering users to stay informed, make informed healthcare decisions, and engage with 
              health information, contributing to heightened awareness and proactive health behaviors.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
          <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/44.jpg"
                alt="beauty of oceans"
              />
            </div>
            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.oceanconservation.org/research/">
                <p className="font-bold text-4xl text-primary">
                Health Disparities Research
                </p>
                <p className="text-lg pt-4 pr-6">
                Health disparities research investigates inequalities in health outcomes among different demographics, 
                focusing on factors such as race, socioeconomic status, and geographic location. By identifying disparities 
                in healthcare access and outcomes, researchers aim to develop targeted interventions, policies, and education 
                programs to address these inequities and promote health equity for all populations, ultimately reducing gaps in 
                health outcomes and improving overall community well-being.
                </p>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
