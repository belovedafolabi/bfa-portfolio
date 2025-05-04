"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Update the contactInfo array to include unique IDs
const contactInfo = [
  { 
    id: 1, // Add unique ID
    type: "email",
    label: "Email",
    value: "belovedafolabi@gmail.com",
    icon: Mail,
    href: "mailto:belovedafolabi@gmail.com"
  },
  {
    id: 2, // Add unique ID
    type: "phone",
    label: "Phone",
    value: "+234 816-7531-362",
    icon: Phone,
    href: "tel:+2348167531362"
  },
  {
    id: 3, // Add unique ID
    type: "location",
    label: "Location",
    value: "Abuja, Nigeria",
    icon: MapPin,
    href: null
  }
];

// Updated socialLinks array with IDs
const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/beloved-afolabi-53111322a/",
    icon: Linkedin
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/belovedafolabi",
    icon: Github
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/our_uncle?s=21",
    icon: Twitter
  }
];

const personalDetails = {
  name: "Afolabi F. Beloved",
  jobTitle: "Web Developer",
  image: {
    mobile: "/images/memoji.png?height=48&width=48",
    desktop: "/images/memoji.png?height=128&width=128",
    alt: "Profile avatar"
  },
  onlineStatus: true
}

export default function ProfileSidebar() {
  const [expanded, setExpanded] = useState(false)

  // Updated renderContactItem with key prop
  const renderContactItem = (item: typeof contactInfo[number]) => (
    item.href ? (
      <a
        key={item.id} // Add key here
        href={item.href}
        className="flex items-center p-3 bg-zinc-800/50 rounded-xl hover:shadow-amber transition-shadow duration-300"
      >
        <item.icon className="w-5 h-5 mr-3 text-amber-400" />
        <span className="text-sm">{item.value}</span>
      </a>
    ) : (
      <div 
        key={item.id} // Add key here
        className="flex items-center p-3 bg-zinc-800/50 rounded-xl hover:shadow-amber transition-shadow duration-300"
      >
        <item.icon className="w-5 h-5 mr-3 text-amber-400" />
        <span className="text-sm">{item.value}</span>
      </div>
    )
  );

  // Updated renderSocialLinks with keys
  const renderSocialLinks = () => (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.id} // Add key here
          href={link.url}
          className="text-zinc-400 hover:text-amber-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );

  // Updated VoxelModel to use the new model path

  const VoxelModel = ({ isMobile }: { isMobile: boolean }) => {
    const { scene } = useGLTF("/model/voxelize.glb");
    // Adjust the orientation of the model by -90 degrees on the Y-axis
    scene.rotation.y = -Math.PI / 2;
    return (
      <Canvas
        className={`relative ${isMobile ? "w-20 h-20" : "w-44 h-44"} rounded-xl bg-amber-gradient/20`}
        camera={{ position: [0, 0, 1.47], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <primitive object={scene} scale={isMobile ? 1 : 1} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={true}
          enablePan={false}
        />
      </Canvas>
    );
  };
  /* Track mouse and orient model to match */
/*   const VoxelModel = ({ isMobile }: { isMobile: boolean }) => {
    const { scene } = useGLTF("/model/voxelize.glb");
    scene.rotation.y = -Math.PI / 2;

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [autoRotation, setAutoRotation] = useState(0);

    useEffect(() => {
      if (!isMobile) {
        const handleMouseMove = (event: MouseEvent) => {
          const { clientX, clientY } = event;
          const modelX = 88; // Half of 176px (model width)
          const modelY = 88; // Half of 176px (model height)
          const x = ((clientX - modelX) / modelX) * 2 - 1;
          const y = -((clientY - modelY) / modelY) * 2 + 1;
          setMousePosition({
            x: x * Math.PI * 0.25, // Scale to rotate smoothly
            y: y * Math.PI * 0.25, // Scale to rotate smoothly
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      } else {
        const interval = setInterval(() => {
          setAutoRotation((prev) => prev + 0.01); // Auto-rotate increment
        }, 16); // ~60fps
        return () => clearInterval(interval);
      }
    }, [isMobile]);

    return (
      <Canvas
        className={`relative ${isMobile ? "w-20 h-20" : "w-44 h-44"} rounded-xl bg-amber-gradient/20`}
        camera={{ position: [0, 0, 1.47], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <primitive
          object={scene}
          scale={isMobile ? 1 : 1}
          rotation={
            isMobile
              ? [0, autoRotation - Math.PI / 2, 0] // Auto-rotation for mobile
              : [mousePosition.y, mousePosition.x - Math.PI / 2, 0] // Mouse tracking for desktop
          }
        />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    );
  }; */

  const renderProfileImage = (isMobile: boolean) => (
    <div className={`relative ${isMobile ? "w-20 h-20" : "w-44 h-44"} rounded-xl bg-amber-gradient/20`}>
      <VoxelModel isMobile={isMobile} />
      {personalDetails.onlineStatus && (
        <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 bg-green-500/80 rounded-full animate-[pulse_2s_ease-in-out_infinite]">
          <div className="absolute inset-0 rounded-full bg-green-500 animate-[ping_2s_ease-in-out_infinite]" />
        </div>
      )}
    </div>
  );

  return (
    <Card className="bg-zinc-900 backdrop-blur-sm border-rounded overflow-hidden lg:sticky lg:top-20 rounded-2xl shadow-lg hover:shadow-amber transition-shadow duration-300 max-w-xs mx-auto">
      <CardContent className="p-0">
        {/* Mobile View */}
        <div className="lg:hidden">
          <div
            className="flex items-center justify-between p-3 cursor-pointer bg-zinc-900 rounded-lg"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-x-4">
              {renderProfileImage(true)}
              <div>
                <h1 className="text-lg font-bold text-white">{personalDetails.name}</h1>
                <div className="bg-zinc-800 px-3 w-fit py-0.5 rounded-full text-xs text-amber-400">
                  {personalDetails.jobTitle}
                </div>
              </div>
            </div>
            {expanded ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
          </div>

          <div className={cn(
            "overflow-hidden transition-all text-white duration-300 ease-in-out",
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="p-4 border-t mx-6 border-zinc-800">
              <div className="w-full space-y-4 mb-4">
                {contactInfo.map((item) => renderContactItem(item))}
              </div>
              {renderSocialLinks()}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex flex-col items-center p-6 relative text-white">
            {renderProfileImage(false)}
            <h1 className="text-2xl py-4 font-bold mb-1">{personalDetails.name}</h1>
            <div className="bg-zinc-800 px-3 py-1 rounded-full text-sm mb-4 text-amber-400">
              {personalDetails.jobTitle}
            </div>

            <div className="w-full h-px bg-zinc-800 my-3"></div>

            <div className="w-full space-y-4 mt-2">
              {contactInfo.map((item) => renderContactItem(item))}
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              {renderSocialLinks()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}