import React from "react";

function Home() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col text-[140px] items-end font-extrabold pl-6 bg-[url('../public/images/bg.jpg')] bg-cover bg-center text-white h-screen">
        <p className="mt-20 drop-shadow-lg">HEALTH</p>
        <p className="mt-[-90px] drop-shadow-lg">AWARENESS</p>
      </div>
      <div className="flex w-full h-[300px] mt-10 mb-10">
        <div className="w-2/3 pt-2 pl-10">
          <p className="font-bold text-6xl text-primary">
            Relavance of Healthcare
          </p>
          <p className="text-xl pt-4 pr-6">
          Healthcare is crucial for societal well-being, ensuring individuals access preventive measures,
           timely treatment, and disease management. It directly influences quality of life, economic productivity, 
           and social stability. A robust healthcare system promotes overall community resilience, addressing public health 
           challenges and contributing to a nation's prosperity. It reflects a commitment to human welfare, underlining the 
           importance of accessible, affordable, and high-quality medical services for everyone.
          </p>
        </div>
        <div className=" w-1/3 flex items-center justify-center pt-5">
          <img className="w-5/6" src="../public/images/11.jpg" alt="health" />
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
            TPrioritize your health by adopting a balanced lifestyle: nourish your body with nutritious food, 
            engage in regular physical activity, maintain sufficient sleep, and manage stress. Hydrate well, 
            avoid harmful habits, and schedule routine check-ups. A proactive approach to well-being empowers 
            you to enjoy life and fulfill your potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
