import { Circle, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  achievements?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  role,
  description,
  achievements,
  techStack,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow ${
        featured ? 'border-primary border-2' : ''
      }`}
    >
      {featured && (
        <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Featured Project
        </span>
      )}

      <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-primary font-medium mb-4">{role}</p>
      <p className="text-gray-700 mb-4">{description}</p>

      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-secondary mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <h4 className="font-semibold text-secondary mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {liveUrl && (
          
        <a  href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
        >
            <ExternalLink className="h-4 w-4" />
            <span>View Live Site</span>
        </a>
        )}
        {githubUrl && (
          
        <a  href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
        >
            <Circle className="h-4 w-4" />
            <span>View Code</span>
        </a>
        )}
      </div>
    </div>
  );
}