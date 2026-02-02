import Link from 'next/link';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center bg-linear-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            Full-Stack Developer &<br />Technical Project Manager
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I build scalable platforms and provide professional IT services for
          nonprofits and small businesses. From custom web applications and workflow automations 
          to custom domain email implementations, I deliver technical solutions that drive impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/work"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg"
        >
          View My Work
          <ArrowRight className="h-6 w-6" />
        </Link>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:shadow-md"
        >
          Get In Touch
        </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-b border-gray-200">
        <div className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <div className="text-3xl font-bold text-primary mb-2">70%+</div>
          <div className="text-gray-600 text-sm">Test Coverage Achieved</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <div className="text-3xl font-bold text-primary mb-2">WCAG 2.1 AA</div>
          <div className="text-gray-600 text-sm">Accessibility Compliance</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <div className="text-3xl font-bold text-primary mb-2">15+ Years</div>
          <div className="text-gray-600 text-sm">Business Operations Experience</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <div className="text-3xl font-bold text-primary mb-2">Full-Stack</div>
          <div className="text-gray-600 text-sm">Development & Consulting</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Custom Development
            </h3>
            <p className="text-gray-600">
              Full-stack web applications built with Next.js, TypeScript, React,
              and modern web technologies. From MVP to production-ready platforms.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Professional Services
            </h3>
            <p className="text-gray-600">
              Custom domain email implementations, system migrations, staff training,
              and ongoing technical support for nonprofits and small businesses.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Technical Leadership
            </h3>
            <p className="text-gray-600">
              Project planning, testing strategy, stakeholder management, and
              agile execution. I balance strategic thinking with hands-on delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Teaser */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">Featured on ABC affiliate - WXYZ Detroit - January 2026 (1:52)</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4 leading-tight">
              Building Technical Infrastructure for Detroit&apos;s Mental Health Community
            </h2>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            {/* News Video */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <div className="scripps_iframe_embed" style={{position: 'relative'}}>
                <div style={{display: 'block', width: '100%', height: 'auto', paddingBottom: '56.25%'}}></div>
                <iframe 
                  id="da-iframe" 
                  allowFullScreen
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                  className="border-0"
                  src="https://assets.scrippsdigital.com/cms/video/player.html?video=https://content.uplynk.com/ffadb85746e54a41ba88aae64213000c.m3u8&mp4=https://cf.cdn.uplynk.com/ausw2/slices/ffa/be88c4e651db4a7dbe102614d7272948/ffadb85746e54a41ba88aae64213000c/ffadb85746e54a41ba88aae64213000c_e.mp4&autoplay=false&purl=/news/region/oakland-county/new-oak-park-urgent-care-center-offers-immediate-mental-health-crisis-support&ads.iu=/6088/ssp.wxyz/news/region/oakland-county/new-oak-park-urgent-care-center-offers-immediate-mental-health-crisis-support&ads.proxy=1&poster=https://cf.cdn.uplynk.com/ausw2/slices/ffa/be88c4e651db4a7dbe102614d7272948/ffadb85746e54a41ba88aae64213000c/poster_b5c281e4db8d496da9059c6d4a99047b.jpg&title=New%20Oak%20Park%20urgent%20care%20center%20offers%20immediate%20mental%20health%20crisis%20support&kw=&contplay=*recent&mute=0&tags=Oakland%20County%2CNews%2CLocal%20News%2CHomepage%20Showcase%2CVoices&section=Oakland%20County&cust_params=temp%3D%26weather%3D&host=wxyz.com&s=wxyz&env=production&ex=1" 
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              A Safe Space For Men - Mental Health Platform
            </h3>
            <p className="text-gray-700 mb-6">
              Comprehensive mental health platform built with Next.js 14, featuring 70%+ test
              coverage, WCAG 2.1 AA accessibility compliance, Stripe donation system, and
              24/7 crisis resource accessibility. Lead Developer and Technical PM managing a 3 person 
              development team and all aspects of development, testing, and deployment.
            </p>
            <Link
              href="/work"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
            >
              View Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Ready to work together?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          I&apos;m currently available for full-time roles and consulting projects in
          Detroit and remotely.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-block shadow-md hover:shadow-lg"
        >
          Let&apos;s Connect
        </Link>
      </section>
    </div>
  );
}