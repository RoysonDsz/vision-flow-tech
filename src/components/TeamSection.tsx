import React, { useState } from "react";


interface Profile {
  name: string;
  role: string;
  image: string;
}

const profiles: Profile[] = [
  {
    name: "Prinson Silvan Cardoza",
    role: "Technical Head",
    image: "/src/assets/partners/Prinson 2.png",
  },
  {
    name: "Ajay Glen D'Souza",
    role: "Marketing Head",
    image: "/src/assets/partners/Ajay 2.png",
  },
  {
    name: "Vijoy Ashwin Cardoza",
    role: "Human Resource",
    image: "/src/assets/partners/Vijoy.jpg",
  },
  {
    name: "Vimarsha R Shetty",
    role: "UI/UX Designer",
    image: "/src/assets/partners/Vimarsha.jpg",
  },
];

const TeamSection: React.FC = () => {
  const [hoveredProfile, setHoveredProfile] = useState<Profile | null>(null);

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-12 px-4 sm:px-8">
      <h1
        className="text-6xl sm:text-9xl text-white font-bold w-full text-center opacity-70 mt-7 mb-12"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Meet Our Team
      </h1>

      {/* Profile Grid */}
      <div className="flex flex-col sm:flex-wrap sm:flex-row items-center justify-center gap-10 sm:gap-20 mb-6 w-full">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="relative text-center cursor-pointer w-40 sm:w-48 flex flex-col items-center transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setHoveredProfile(profile)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            {/* Image */}
            <div className="w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-full overflow-hidden shadow-lg transition-all duration-300">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <div className="mt-3 text-white font-bold text-xl sm:text-xl">{profile.name}</div>

            {/* Mobile View Role */}
            <div className="md:hidden text-base text-white mt-1">
              <div className="font-semibold">{profile.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Hover Details */}
      <div className="hidden md:block mt-5 min-h-[50px] transition-opacity duration-300 max-w-2xl px-6 text-center">
        {hoveredProfile ? (
          <>
            <h2 className="text-3xl sm:text-5xl font-bold">{hoveredProfile.name}</h2>
            <p className="text-lg sm:text-2xl text-white mt-2 font-semibold">
              {hoveredProfile.role}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TeamSection;
