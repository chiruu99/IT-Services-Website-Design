import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3, 
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Database,
  Smartphone,
  Monitor,
  Settings
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
// Updated to work without React Router

export function Services() {
  const [activeTab, setActiveTab] = useState("overview");

  const services = [
    {
      id: "ai-ml",
      icon: Brain,
      title: "AI & Machine Learning",
      shortDesc: "Harness the power of artificial intelligence to automate processes and gain insights.",
      detailedDesc: "Transform your business operations with cutting-edge artificial intelligence and machine learning solutions. Our AI experts help you implement intelligent automation, predictive analytics, natural language processing, and computer vision technologies that drive efficiency and innovation.",
      image: "https://images.unsplash.com/photo-1752614671052-92e18f534db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTY2NTkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Process Automation & RPA",
        "Chatbots & Virtual Assistants",
        "Recommendation Systems"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Azure ML", "Google AI"],
      caseStudy: {
        client: "Manufacturing Corp",
        challenge: "Manual quality control processes causing delays",
        solution: "AI-powered visual inspection system",
        results: "40% reduction in defects, 60% faster inspection"
      },
      pricing: {
        starter: "$5,000/month",
        professional: "$15,000/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-purple-500 to-blue-600"
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data Analytics & BI",
      shortDesc: "Transform raw data into actionable insights with advanced analytics solutions.",
      detailedDesc: "Unlock the hidden value in your data with comprehensive business intelligence and analytics solutions. We help you build robust data pipelines, create interactive dashboards, and implement advanced analytics that empower data-driven decision making across your organization.",
      image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTY2MDk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Real-time Interactive Dashboards",
        "Custom Reporting Solutions",
        "KPI Tracking & Monitoring",
        "Data Visualization & Storytelling",
        "ETL Pipeline Development",
        "Self-Service Analytics"
      ],
      technologies: ["Power BI", "Tableau", "Apache Spark", "Snowflake", "dbt", "Looker"],
      caseStudy: {
        client: "Retail Chain",
        challenge: "Disconnected data sources limiting insights",
        solution: "Unified analytics platform with real-time dashboards",
        results: "25% increase in sales through data-driven decisions"
      },
      pricing: {
        starter: "$3,000/month",
        professional: "$8,000/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-green-500 to-cyan-600"
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Solutions",
      shortDesc: "Migrate to the cloud seamlessly with comprehensive cloud services.",
      detailedDesc: "Accelerate your digital transformation with our comprehensive cloud solutions. From migration strategy to implementation and optimization, we help you leverage the full potential of cloud platforms to reduce costs, improve scalability, and enhance business agility.",
      image: "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NTY3MDI2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Cloud Migration Strategy & Planning",
        "Multi-Cloud Architecture Design",
        "DevOps & CI/CD Implementation",
        "Container Orchestration",
        "Serverless Computing",
        "Cloud Cost Optimization"
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      caseStudy: {
        client: "Financial Services",
        challenge: "Legacy infrastructure limiting scalability",
        solution: "Complete cloud migration with microservices architecture",
        results: "50% cost reduction, 10x improved scalability"
      },
      pricing: {
        starter: "$4,000/month",
        professional: "$12,000/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      shortDesc: "Protect your digital assets with comprehensive security solutions.",
      detailedDesc: "Safeguard your business with enterprise-grade cybersecurity solutions designed to protect against evolving threats. Our comprehensive security services include threat assessment, incident response, compliance management, and 24/7 monitoring to ensure your digital assets remain secure.",
      image: "https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHNoaWVsZCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzU2Njk2MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Compliance Management",
        "Penetration Testing",
        "Security Awareness Training",
        "24/7 SOC Monitoring"
      ],
      technologies: ["Splunk", "CrowdStrike", "Palo Alto", "Microsoft Sentinel", "Okta", "Qualys"],
      caseStudy: {
        client: "Healthcare Provider",
        challenge: "HIPAA compliance and data protection requirements",
        solution: "Comprehensive security framework with continuous monitoring",
        results: "100% compliance achieved, zero security incidents"
      },
      pricing: {
        starter: "$6,000/month",
        professional: "$18,000/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-red-500 to-pink-600"
    },
    {
      id: "software-dev",
      icon: Code,
      title: "Custom Software Development",
      shortDesc: "Build tailored software solutions that perfectly align with your business needs.",
      detailedDesc: "Create powerful, scalable software solutions tailored to your unique business requirements. Our experienced development team builds everything from web applications and mobile apps to enterprise systems and API integrations, using modern technologies and agile methodologies.",
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc1NjY4MTEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ],
      technologies: ["React", "Node.js", "Python", "Java", "React Native", "PostgreSQL"],
      caseStudy: {
        client: "E-commerce Startup",
        challenge: "Need for scalable platform to handle rapid growth",
        solution: "Custom e-commerce platform with AI-powered recommendations",
        results: "300% increase in user engagement, 200% sales growth"
      },
      pricing: {
        starter: "$8,000/month",
        professional: "$20,000/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "consulting",
      icon: Users,
      title: "IT Consulting",
      shortDesc: "Strategic IT consulting to align technology with your business goals.",
      detailedDesc: "Get expert guidance on your technology strategy and digital transformation journey. Our seasoned consultants help you navigate complex technology decisions, optimize IT operations, and develop roadmaps that align technology investments with business objectives.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2NzA2OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Digital Transformation Strategy",
        "Technology Roadmap Development",
        "IT Infrastructure Assessment",
        "Process Optimization",
        "Change Management",
        "Vendor Selection & Management"
      ],
      technologies: ["TOGAF", "ITIL", "Agile", "Lean", "Six Sigma", "PMI"],
      caseStudy: {
        client: "Traditional Bank",
        challenge: "Digital transformation to compete with fintech",
        solution: "Comprehensive digital strategy and implementation roadmap",
        results: "60% faster time-to-market for new products"
      },
      pricing: {
        starter: "$2,500/month",
        professional: "$7,500/month",
        enterprise: "Custom pricing"
      },
      gradient: "from-teal-500 to-green-600"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic implementation",
        "Email support",
        "Monthly reporting",
        "Standard SLA"
      ],
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      features: [
        "Advanced features",
        "Priority support",
        "Weekly reporting",
        "Enhanced SLA",
        "Dedicated account manager"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      features: [
        "Full customization",
        "24/7 premium support",
        "Real-time reporting",
        "Premium SLA",
        "Dedicated team",
        "On-site consultation"
      ],
      highlight: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current state and understand your objectives",
      icon: Monitor
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive plan tailored to your needs",
      icon: Settings
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution with our expert team",
      icon: Code
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to cloud migrations, we provide end-to-end technology solutions 
              that transform businesses and drive growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="hidden lg:flex">
                  {service.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer"
                            onClick={() => setActiveTab(service.id)}>
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                          <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {service.shortDesc}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-blue-600">
                              Starting at {service.pricing.starter}
                            </span>
                            <Button variant="ghost" size="sm" className="group-hover:bg-blue-50">
                              Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Individual Service Tabs */}
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Service Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-8">{service.detailedDesc}</p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3">Pricing Options:</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(service.pricing).map(([tier, price]) => (
                            <div key={tier} className="text-center">
                              <div className="font-medium text-gray-900 capitalize">{tier}</div>
                              <div className="text-lg font-bold text-blue-600">{price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image and Case Study */}
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}></div>
                    </div>

                    {/* Case Study */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          Success Story
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-900">{service.caseStudy.client}</div>
                          <div className="text-sm text-gray-600">Client</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-1">Challenge:</div>
                          <div className="text-sm text-gray-600">{service.caseStudy.challenge}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-1">Solution:</div>
                          <div className="text-sm text-gray-600">{service.caseStudy.solution}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-1">Results:</div>
                          <div className="text-sm text-green-600 font-medium">{service.caseStudy.results}</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started with {service.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Plan for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${tier.highlight ? 'border-2 border-blue-600 shadow-xl' : 'border-0 shadow-lg'} hover:shadow-xl transition-shadow`}>
                  <CardHeader className="text-center">
                    {tier.highlight && (
                      <Badge className="mx-auto mb-4 bg-blue-600">Most Popular</Badge>
                    )}
                    <CardTitle className="text-xl font-semibold">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${tier.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your specific needs and create a customized solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}