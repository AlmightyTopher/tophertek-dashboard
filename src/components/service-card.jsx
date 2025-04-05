"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ 
  icon, 
  serviceName, 
  description, 
  link, 
  status = 'inactive' 
}) {
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-400',
    error: 'bg-red-500'
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:translate-y-[-5px] transition-transform duration-200 relative w-full"
    >
      <div className="relative mb-4">
        <div className={`w-3 h-3 rounded-full absolute top-0 right-0 ${statusColors[status]}`} />
        <img 
          src={icon} 
          alt={`${serviceName} icon`}
          className="w-16 h-16 rounded-[10px] object-cover"
        />
      </div>
      
      <div>
        <h3 className="font-poppins font-bold text-xl text-[rgb(109,67,0)] mb-2">
          {serviceName}
        </h3>
        <p className="font-poppins text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}

function StoryComponent() {
  const services = [
    {
      icon: '/service-icon-1.png',
      serviceName: 'Web Development',
      description: 'Full-stack web development services with modern technologies',
      link: 'https://example.com/web-dev',
      status: 'active'
    },
    {
      icon: '/service-icon-2.png',
      serviceName: 'UI/UX Design',
      description: 'User-centered design solutions for digital products',
      link: 'https://example.com/design',
      status: 'inactive'
    },
    {
      icon: '/service-icon-3.png',
      serviceName: 'Cloud Services',
      description: 'Cloud infrastructure and deployment solutions',
      link: 'https://example.com/cloud',
      status: 'error'
    }
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <MainComponent
            key={service.serviceName}
            {...service}
          />
        ))}
      </div>
    </div>
  );
});
}