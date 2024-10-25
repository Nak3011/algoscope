import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Annalhq Shaikh",
    description: "Added algorithms for SSSP.",
    github: "https://github.com/annalhq",
    linkedin: "https://linkedin.com/in/annalhq",
    image: "/images/annalhq.png", 
  },
  {
    name: "Atharva Kulkarni",
    description: "Added algorithms for hashing",
    github: "https://github.com/AtharvaKulkarni07",
    linkedin: "https://www.linkedin.com/in/atharva-kulkarni-824b7a2a5/",
    image: "/images/atharva.png",
  },
  {
    name: "Aarsh Vaidya",
    description: "Added algorithms for stacks",
    github: "https://github.com/Aarsh-37",
    linkedin: "https://www.linkedin.com/in/aarsh-vaidya-8734452b2/",
    image: "/images/aarsh.png",
  },
  {
    name: "Aryan Nakil",
    description: "Added algorithms for sorting",
    github: "https://github.com/Nak3011",
    linkedin: "https://linkedin.com/in/aryan",
    image: "/images/aryan.png",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="flex justify-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold text-black-800">ALGOSCOPE</h1>
      </div>

      {/* About Section */}
      <div className="flex flex-col py-2 bg-gray-100">
        <h2 className="text-2xl font-bold text-black-800 text-center mb-8">
          About Us
        </h2> 
        <p className="text-lg text-black-600">
        <b>Algoscope</b> is an educational platform designed to simplify the learning of data structures and algorithms. The project focuses on enhancing understanding through interactive visualizations, allowing users to see algorithms in action. To assess progress, we provide pre and post tests, along with comprehensive theory and resources.
        This project aims to create an engaging and effective learning experience for students and developers, ensuring mastery of fundamental computer science concepts.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="flex flex-col py-2 bg-gray-100">
        <h2 className="text-2xl font-bold text-black-800 text-center mb-8">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <Card className="m-4 w-64" key={member.name}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </CardHeader>
              <CardFooter className="flex justify-center space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-gray-600 hover:text-black" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 hover:text-black" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
