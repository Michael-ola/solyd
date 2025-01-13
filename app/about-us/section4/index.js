import React from "react";

const activities = [
  {
    id: 1,
    image: "/images/about_us/image4.jpeg", // Replace with the actual image path or URL
    alt: "Activity 1",
  },
  {
    id: 2,
    image: "/images/about_us/image5.jpeg",
    alt: "Activity 2",
  },
  {
    id: 3,
    image: "/images/about_us/image6.jpeg",
    alt: "Activity 3",
  },
  {
    id: 4,
    image: "/images/about_us/image7.jpeg",
    alt: "Activity 4",
  },
  {
    id: 5,
    image: "/images/about_us/image8.jpeg",
    alt: "Activity 5",
  },
];

const ActivityGallery = () => {
  return (
    <section className="py-[7%] px-[5%] md:px-[10%] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto md:px-4 text-center">
        <h2 className="text-xl mb-[5%] md:text-[2.5rem] font-axiforma font-bold text-left text-white">
          A Glimpse Into Our Activities
        </h2>
        {/* Custom grid for staggered layout */}
        <div className="flex flex-col gap-[25px] md:px-[5%]">
          <div className="flex flex-col gap-[25px] md:flex-row">
            <img
              src={activities[0].image}
              alt={activities[0].alt}
              className="w-full md:w-[50%] block h-full self-center md:aspect-[5/3] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src={activities[1].image}
              alt={activities[1].alt}
              className="w-full md:w-[40%] block md:ml-auto h-full md:aspect-[3/3.5] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:mt-[5%]">
            <img
              src={activities[2].image}
              alt={activities[2].alt}
              className="w-full md:w-[50%] h-full mx-auto block md:aspect-[4/2] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-[25px] md:mt-[5%]">
            <img
              src={activities[4].image}
              alt={activities[4].alt}
              className="w-full md:w-[50%] md:ml-auto block h-full self-center md:aspect-[5/3] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src={activities[3].image}
              alt={activities[3].alt}
              className="w-full md:w-[40%] block h-full md:aspect-[3/3.5] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityGallery;
