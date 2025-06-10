import Head from 'next/head';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: 'SaaS Development',
      description:
        'Custom Software-as-a-Service solutions tailored to your business needs. Scalable, secure, and built for growth.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        'Custom SaaS architecture',
        'Subscription management',
        'API integrations',
        'Cloud deployment',
      ],
    },
    {
      title: 'Landing Page Development',
      description:
        'High-converting landing pages designed to showcase your product and capture leads effectively.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      features: [
        'Mobile-optimized design',
        'A/B testing setup',
        'SEO optimized',
        'Fast loading times',
      ],
    },
    {
      title: 'IT Consultation',
      description:
        'Expert advice to align your technology with business goals and optimize your digital infrastructure.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      features: [
        'Technology stack evaluation',
        'Digital transformation strategy',
        'Cost optimization',
        'Security assessment',
      ],
    },
    {
      title: 'Web Application Development',
      description:
        'Custom web applications built with modern technologies to solve your unique business challenges.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        'Responsive design',
        'User authentication',
        'Database integration',
        'Progressive Web App options',
      ],
    },
    {
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        'iOS & Android development',
        'Native or cross-platform',
        'App store optimization',
        'Push notifications',
      ],
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      features: [
        'User research & testing',
        'Wireframing & prototyping',
        'Design systems',
        'Accessibility compliance',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Easy Way Digital</title>
        <meta
          name="description"
          content="Discover our professional digital services including SaaS development, web applications, mobile apps, and IT consulting."
        />
      </Head>

      <div className="min-h-screen bg-color-light">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/service.jpg')" }}
          ></div>

          {/* Color Overlay - Now using your primary green */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 z-1"></div>

          {/* Content */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Digital Solutions Tailored for Your Success
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              We deliver cutting-edge technology services to help your business
              thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-color-dark mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-color-gray max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital
              solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-color-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-color-gray mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-color-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-primary font-medium hover:text-primary-light transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Now matches footer style */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve your business goals with
              our technology expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-primary hover:bg-opacity-90 rounded-lg font-medium transition-colors shadow-lg">
                Get a Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary rounded-lg font-medium transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Stats & Portfolio Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Achievement Metrics */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-color-dark mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-color-gray max-w-2xl mx-auto mb-12">
                We measure our success by the success of our clients
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '50+', label: 'Clients Worldwide' },
                  { value: '100+', label: 'Projects Completed' },
                  { value: '24/7', label: 'Support Availability' },
                  { value: '95%', label: 'Client Retention' },
                ].map((stat, index) => (
                  <div key={index} className="p-6">
                    <p className="text-4xl font-heading font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-color-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Highlights */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-color-dark mb-4">
                Our Featured Work
              </h2>
              <p className="text-color-gray max-w-2xl mx-auto mb-12">
                See how we've helped businesses transform digitally
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'SaaS Platform',
                    category: 'CRM Solution',
                    image: '/crm-universa.png',
                  },
                  {
                    title: 'E-Commerce App',
                    category: 'Retail Innovation',
                    image: '/tb-yakesma.png',
                  },
                  {
                    title: 'Corporate App',
                    category: 'Enterprise Solution',
                    image: '/finance.png',
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all h-full"
                  >
                    <div className="relative aspect-square w-full h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        height={330}
                        width={552}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                        <div className="w-full">
                          <h4 className="text-xl font-heading font-bold text-white">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
