import Description from '@/components/description';
import Heading from '@/components/heading';
import ProjectCard from '@/components/project-card';

import { projectList } from '@/app/data/projects';

export const metadata = {
    title: 'Projects',
    description:
        'A showcase of David Cohen’s engineering work, demonstrating expertise in building robust, user-focused software using Python, Java, React, Next.js, and cloud-native architectures.'
};

export default function Projects() {
    return (
        <section>
            <Heading text={'Featured Projects'} />
            <Description text="Discover a collection of projects highlighting my journey" />

            <div className="space-y-10">
                {projectList.map((project, idx) => (
                    <ProjectCard key={project.id} leftAlign={(idx + 1) % 2 === 0} {...project} />
                ))}
            </div>
        </section>
    );
}
