import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { featuredProject } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// ARTIFACTS_AND_TOOLS"
          title="Featured Project"
          subtitle="Applied practical cryptography, algorithm implementation, and secure data handling."
        />

        <div className="mt-12">
          <ProjectCard project={featuredProject} />
        </div>
      </div>
    </section>
  );
}
