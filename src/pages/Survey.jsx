import React from "react";
import { Link } from "react-router-dom";

function Survey() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">
        <div className=" w-1/3 flex justify-center h-2/3  ">
            <img
              className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
              src="../public/images/33.jpg"
              alt="Nutrition"
            />
          </div>
          <div className="w-2/3 pt-5 pl-6">
            <a href="https://www.nature.com/articles/s41559-020-1259-6">
              <p className="font-bold text-4xl text-primary">
              Nutrition and Healthy Lifestyle
              </p>
              <p className="text-lg pt-4 pr-6">
              Nutrition is the science of obtaining and utilizing nutrients from food, 
              vital for the growth, development, and maintenance of the body. This encompasses macronutrients 
              (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals), with water also being crucial. 
              A balanced diet, incorporating a variety of whole foods, portion control, and colorful fruits and vegetables, is key. 
              Proper nutrition supports energy production, growth, and disease prevention.
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
              <a href="https://www.livingoceansfoundation.org/science/scientific-surveys/">
                <p className="font-bold text-4xl text-primary">
                Healthcare Resources Awareness
                </p>
                <p className="text-lg pt-4 pr-6">
                Healthcare resources awareness refers to an individual's or community's understanding of the available healthcare facilities, 
                services, and support within their region. This awareness is crucial for effective healthcare utilization and ensuring that 
                individuals can access appropriate medical care when needed. Key components of healthcare resources awareness include 
                knowledge of nearby hospitals, clinics, specialized healthcare providers, emergency services, and community health programs. 
                </p>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="bg-gray-200 shadow-2xl h-[350px] w-[1300px] flex mt-10 mb-10 rounded-2xl">

          <div className=" w-1/3 flex justify-center h-2/3  ">
              <img
                className="w-5/6  transition-transform transform scale-100 group-hover:scale-250 rounded-lg"
                src="../public/images/55.jpg"
                alt="beauty of oceans"
              />
            </div>

            <div className="w-2/3 pt-5 pl-6">
              <a href="https://www.livingoceansfoundation.org/science/scientific-surveys/">
                <p className="font-bold text-4xl text-primary">
                Environmental Health Awareness
                </p>
                <p className="text-lg pt-4 pr-6">
                Environmental health awareness refers to an understanding of the impact that the environment has on human 
                health and well-being. It involves knowledge about how various environmental factors, such as air and water quality, 
                pollution, toxins, and the built environment, can influence health outcomes. This awareness extends to recognizing the 
                potential health risks associated with environmental exposures and understanding preventive measures to mitigate these 
                risks. Key components include knowledge about safe water sources, air pollution levels, waste disposal practices, and 
                the effects of climate change. Environmental health awareness is crucial for individuals, communities, and policymakers 
                to make informed decisions that promote a healthier living environment.
                </p>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="flex w-full h-[300px] mt-10">
        <div className="group relative w-1/3 flex items-center justify-center">
          <img
            className="w-5/6 h-5/6 transition-transform transform scale-100 group-hover:scale-180"
            src="../public/images/22.jpg"
            alt="health"
          />
        </div>
        <div className="w-2/3 pt-10 pl-6">
          <p className="font-bold text-6xl text-primary">
            Being Healthy
          </p>
          <p className="text-xl pt-4 pr-6">
            Prioritize your health by adopting a balanced lifestyle: nourish your body with nutritious food, 
            engage in regular physical activity, maintain sufficient sleep, and manage stress. Hydrate well, 
            avoid harmful habits, and schedule routine check-ups. A proactive approach to well-being empowers 
            you to enjoy life and fulfill your potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Survey;
