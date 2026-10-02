import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// ACADEMIC_CREDENTIALS"
          title="Education"
          subtitle="Formal academic degrees, specialized cybersecurity diploma, and foundational education."
        />

        <div className="mt-12">
          {educationData.map((item, index) => (
            <TimelineItem
              key={item.degree + item.institution}
              title={item.degree}
              subtitle={item.institution}
              period={item.year}
              location={item.location}
              highlights={item.highlights}
              featured={item.featured}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
