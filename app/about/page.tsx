import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Andrea Frazier',
  description: 'Learn about Andrea Frazier - Full-Stack Developer and Technical Consultant with 20+ years of experience.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600">
          Bridging strategy and execution through technical expertise
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            I&apos;m Andrea Frazier—a Technical Project Manager and Full-Stack Developer who bridges
            the gap between strategic planning and hands-on execution. With 15++ years of experience,
            I don&apos;t just manage projects—I build them.
          </p>
          <p className="text-gray-700 mb-4">
            What makes me different? I can lead a sprint planning session in the morning and write
            comprehensive test suites in the afternoon. I understand stakeholder expectations because I&apos;ve
            advised C-suite executives, and I understand technical constraints because I write production
            code daily.
          </p>
          <p className="text-gray-700">
            Currently, I serve as Technical Project Manager and Lead Developer for A Safe Space
            For Men, a Detroit-based nonprofit. In this role, I built a full-stack mental health platform
            from the ground up while managing a distributed team and balancing a limited budget.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Background & Approach</h2>
          <p className="text-gray-700 mb-4">
            My career has been defined by solving complex problems at the intersection of technology
            and impact. I&apos;ve learned that the best software comes from understanding both the &quot;what&quot;
            and the &quot;why&quot;—and having the technical skills to execute on both.
          </p>
          <p className="text-gray-700 mb-4">
            Whether I&apos;m architecting a Next.js application, implementing a comprehensive testing
            strategy, or presenting project roadmaps to leadership, my approach remains consistent:
            ship quality software that solves real problems, document the process, and iterate based
            on feedback.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-secondary mb-3">I believe in:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Testing as non-negotiable (70%+ coverage is my baseline)</li>
              <li>• Accessibility as a requirement, not a feature (WCAG 2.1 AA minimum)</li>
              <li>• Communication as the foundation of successful projects</li>
              <li>• &quot;Finished&quot; over &quot;perfect&quot;—ship, measure, improve</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-secondary mb-3">Leadership & Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Agile/Sprint Planning & Execution</li>
                <li>• Stakeholder Communication & Alignment</li>
                <li>• Testing Strategy & Quality Assurance</li>
                <li>• Technical Documentation</li>
                <li>• Cross-Functional Team Leadership</li>
                <li>• Budget & Resource Management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-3">Development & Engineering</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Next.js, React, TypeScript, Node.js</li>
                <li>• Jest, React Testing Library (TDD)</li>
                <li>• Tailwind CSS, Responsive Design</li>
                <li>• Stripe API, Payment Integration</li>
                <li>• Git, CI/CD, Netlify/Vercel</li>
                <li>• WCAG Accessibility Compliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Education & Affiliations</h2>
          <div className="space-y-2 text-gray-700">
            <p>• MBA, University of Detroit Mercy</p>
            <p>• BBA, University of Michigan</p>
            <p>• Member, Alpha Kappa Alpha Sorority, Incorporated</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-secondary mb-4">Beyond the Code</h2>
          <p className="text-gray-700 mb-4">
            When I&apos;m not building software or managing projects, you&apos;ll find me advocating for mental
            health awareness, mentoring early-career professionals, or exploring how technology can drive social 
            impact. I&apos;m passionate about using my technical and leadership skills to solve problems that matter.
          </p>
          <p className="text-gray-700">
            Based in Detroit, I&apos;m open to local and remote opportunities where I can contribute both
            strategic thinking and hands-on technical expertise.
          </p>
        </section>
      </div>
    </div>
  );
}