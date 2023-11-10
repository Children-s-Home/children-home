'use client'
import ContentSection from "./ContentSection";
import { content } from "./ChiData";

export default function ChiContent() {
  const contentSection = content.map((section) => {
    return <ContentSection key={section.id} {...section} />;
  });
  return <div className="chiContent-container">{contentSection}</div>;
}

