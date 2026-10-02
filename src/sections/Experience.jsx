import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// CAREER_TRAJECTORY"
          title="Experience"
          subtitle="Hands-on professional cybersecurity engagement, penetration testing, and vulnerability assessment."
        />

        <div className="mt-12">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.company + item.duration}
              title={item.role}
              subtitle={item.company}
              period={item.duration}
              location={item.location}
              responsibilities={item.responsibilities}
              tags={item.toolsUsed}
              featured={true}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
