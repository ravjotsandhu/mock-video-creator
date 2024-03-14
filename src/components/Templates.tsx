import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TemplateItemProps {
  src: string;
  alt: string;
  title: string;
}

const TemplateItem = ({ src, alt, title }: TemplateItemProps) => (
  <div className="w-full">
    <img
      alt={alt}
      src={src}
      style={{
        width: "100%",
        objectFit: "cover",
      }}
    />
    <div className="text-left text-sm font-semibold p-2">{title}</div>
  </div>
);

const templateData = [
  { src: "/pic1.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic2.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic3.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic4.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic5.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic6.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic7.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic8.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic9.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic10.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic11.png", alt: "Presentation", title: "Presentation" },
  { src: "/pic12.png", alt: "Presentation", title: "Presentation" },
];

// The Templates component now maps over the templateData to render TemplateItem components
export default function Templates() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Image src="/template.svg" alt="template" width="20" height="20" />
          Templates
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">All</Button>
          <Button variant="outline">Landscape Video (16:9)</Button>
          <Button variant="outline">Portrait Video (1:1)</Button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {templateData.map((template, index) => (
          <TemplateItem
            key={index}
            src={template.src}
            alt={template.alt}
            title={template.title}
          />
        ))}
      </div>
    </div>
  );
}
