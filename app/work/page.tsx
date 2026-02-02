import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Work | Andrea Frazier',
  description: 'Portfolio of full-stack development projects and professional IT services by Andrea Frazier.',
};

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          My Work
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A selection of full-stack development projects and professional IT services
          showcasing technical expertise, leadership, and commitment to quality.
        </p>
      </div>

      {/* Featured Project */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-primary font-semibold">Featured on Local News - January 2025</span>
          <h2 className="text-3xl font-bold text-secondary mt-2 mb-4">
            Featured Project
          </h2>
        </div>
        
        <ProjectCard
          title="A Safe Space For Men - Mental Health Platform"
          role="Lead Developer & Technical PM"
          description="Comprehensive mental health platform serving Detroit's community, featured on local news during SafetyZone's grand opening. Built end-to-end as Lead Developer while managing stakeholder relationships, testing strategy, and deployment. Part of partner organizations working to expand mental health resources."
          achievements={[
            '70%+ test coverage across critical user journeys using Jest and React Testing Library',
            'WCAG 2.1 AA accessibility compliance for inclusive user experience',
            'Stripe integration for one-time and recurring donation processing',
            '24/7 crisis resource accessibility with mobile-responsive design',
            'Comprehensive documentation and stakeholder communication protocols',
          ]}
          techStack={[
            'Next.js 14',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Jest',
            'React Testing Library',
            'Stripe API',
            'PostgreSQL',
            'Supabase',
            'Netlify',
          ]}
          liveUrl="https://asafeSpaceForMen.com"
          githubUrl="https://github.com/A-Safe-Space-For-Men/assfm-public"
          featured={true}
        />
      </section>

      {/* Additional Projects */}
      <section>
        <h2 className="text-3xl font-bold text-secondary mb-8">
          Additional Projects
        </h2>
        
        <div className="space-y-8">
          {/* Professional Services Project */}
          <ProjectCard
            title="Google Workspace Implementation - SafetyZone"
            role="Technical Consultant & Implementation Lead"
            description="Led complete Google Workspace migration for SafetyZone, a Detroit-based mental health nonprofit and partner organization of A Safe Space For Men. Delivered modernized collaboration infrastructure in time for their December 2025 grand opening, enabling the organization to launch with professional, scalable technical systems."
            achievements={[
              'Migrated 10 users from legacy email system to Google Workspace',
              'Designed organizational structure with consistent branding across all accounts',
              'Configured user aliases for streamlined contact and IT support workflows',
              'Delivered comprehensive staff training session for adoption and best practices',
              'Established ongoing technical support relationship for continued success',
            ]}
            techStack={[
              'Google Workspace',
              'Email Migration',
              'Change Management',
              'Staff Training',
              'Technical Documentation',
            ]}
          />

          {/* Automation Project */}
          <ProjectCard
            title="Job Search Automation Tool"
            role="Developer"
            description="Built Python-based automation system to streamline job search workflow, reducing manual application tracking time from 30+ minutes to under 5 minutes per application. Integrates with multiple job boards through APIs to provide comprehensive coverage and data-driven filtering."
            achievements={[
              'Automated job board scraping across multiple platforms for comprehensive coverage',
              'Implemented data quality filtering to surface relevant opportunities',
              'Created Excel-based tracking system with conditional formatting and automation',
              'Reduced manual tracking overhead by 85%+ through intelligent data processing',
            ]}
            techStack={[
              'Python',
              'RapidAPI',
              'JSearch API',
              'Excel Automation',
              'Data Processing',
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Interested in working together?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I&apos;m available for full-time software engineering roles, technical PM positions,
          and consulting projects in Detroit and remotely.
        </p>
        
        <a href="/contact"
           className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}