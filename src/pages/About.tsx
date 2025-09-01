import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  Quote,
  MapPin,
  Calendar,
  Shield,
  Zap,
  Brain,
  Network,
  Database
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Users, label: "AI Specialists", value: "75+", color: "text-blue-600" },
    { icon: Award, label: "AI Projects Delivered", value: "1500+", color: "text-green-600" },
    { icon: Clock, label: "Years in AI/ML", value: "12+", color: "text-purple-600" },
    { icon: Globe, label: "Countries Served", value: "30+", color: "text-orange-600" },
    { icon: Star, label: "Client Satisfaction", value: "99.5%", color: "text-yellow-600" },
    { icon: CheckCircle, label: "AI Success Rate", value: "98.2%", color: "text-emerald-600" },
  ];

  const timeline = [
    {
      year: "2014",
      title: "SMI Tsolution Founded",
      description: "Started with a vision to democratize AI and machine learning technologies for businesses of all sizes"
    },
    {
      year: "2016",
      title: "First Enterprise AI Deployment",
      description: "Successfully implemented our first neural network solution for Fortune 500 client, achieving 45% efficiency improvement"
    },
    {
      year: "2018",
      title: "Global AI Expansion",
      description: "Expanded AI operations internationally, establishing AI centers of excellence in North America and Europe"
    },
    {
      year: "2020",
      title: "Multi-Cloud AI Platform",
      description: "Launched comprehensive AI-as-a-Service platform across AWS, Azure, and Google Cloud ecosystems"
    },
    {
      year: "2022",
      title: "Advanced AI Research Lab",
      description: "Established dedicated research facility for next-generation AI, machine learning, and quantum computing solutions"
    },
    {
      year: "2024",
      title: "AI Innovation Awards",
      description: "Named 'AI Solutions Provider of the Year' and recognized as leader in enterprise artificial intelligence transformation"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & AI Visionary",
      image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjMyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Former Google AI executive with 18+ years pioneering artificial intelligence in enterprise environments",
      certifications: ["PhD AI/ML Stanford", "Google AI Leadership", "Microsoft AI MVP"]
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Chief AI Architect",
      image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjMyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "AI researcher and technology innovator specializing in deep learning and neural network architectures",
      certifications: ["PhD Computer Science MIT", "TensorFlow Certified Expert", "AWS ML Specialist"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Security",
      image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjMyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "AI security expert focusing on secure AI implementations and adversarial attack prevention",
      certifications: ["CISSP AI Security", "Certified AI Safety", "Ethical AI Specialist"]
    },
    {
      name: "David Kim",
      role: "Head of Cloud AI Solutions",
      image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjMyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Multi-cloud AI architect specializing in scalable machine learning infrastructure and MLOps",
      certifications: ["AWS ML Solutions Architect", "Azure AI Engineer", "GCP ML Engineer"]
    }
  ];

  const testimonials = [
    {
      name: "John Martinez",
      company: "TechCorp Industries",
      role: "CTO",
      content: "SMI Tsolution transformed our entire technology infrastructure with their cutting-edge AI solutions. Their machine learning implementation increased our operational efficiency by 40% within the first quarter.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Global Finance Ltd",
      role: "VP of Operations",
      content: "The AI-powered cybersecurity solutions they implemented have revolutionized our threat detection. Their predictive security models give us unprecedented protection and peace of mind.",
      rating: 5
    },
    {
      name: "Robert Chang",
      company: "Healthcare Plus",
      role: "CEO",
      content: "Their AI-driven cloud migration was seamless and transformative. We've achieved 30% cost reduction while improving performance through intelligent resource optimization.",
      rating: 5
    }
  ];

  const aiServices = [
    { name: "Machine Learning", icon: Brain, description: "Custom ML models and algorithms" },
    { name: "Neural Networks", icon: Network, description: "Deep learning and AI architectures" },
    { name: "Data Analytics", icon: Database, description: "Intelligent data processing and insights" },
    { name: "AI Security", icon: Shield, description: "Secure AI implementations" },
    { name: "Cloud AI", icon: Zap, description: "Scalable AI infrastructure" },
    { name: "AI Consulting", icon: Award, description: "Strategic AI transformation guidance" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* AI Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4" />
              <span>About SMI Tsolution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading the AI Revolution in Enterprise Technology
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For over a decade, SMI Tsolution has been at the forefront of artificial intelligence innovation, 
              helping businesses worldwide harness the transformative power of AI, machine learning, and advanced analytics.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission: Democratizing Artificial Intelligence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014 with a bold vision: to make advanced artificial intelligence and machine learning 
                  technologies accessible to businesses of all sizes. We believe that every organization should have 
                  the opportunity to leverage AI's transformative potential.
                </p>
                <p>
                  Our journey began when our founders, seasoned AI researchers and technology executives, recognized 
                  that small to medium businesses were being excluded from the AI revolution due to complex, 
                  expensive solutions designed only for tech giants.
                </p>
                <p>
                  Today, SMI Tsolution proudly serves over 750 companies across 30 countries, delivering customized 
                  AI solutions that drive measurable business outcomes. From intelligent automation to predictive 
                  analytics, we're transforming industries one algorithm at a time.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {aiServices.map((service, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1 hover:bg-blue-100 transition-colors">
                    <service.icon className="w-3 h-3" />
                    {service.name}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU2NjI5NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology Lab"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Research Center</div>
                    <div className="text-sm text-gray-600">Silicon Valley Campus</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our AI Innovation Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From startup to AI leader, discover the key milestones that shaped our artificial intelligence expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-lg font-bold text-blue-600">{event.year}</div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet Our AI Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              World-class AI researchers and technology visionaries leading the charge in artificial intelligence innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs mr-1 mb-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our AI Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders who've transformed their businesses with our AI solutions and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              AI Excellence Recognition
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF3YXJkcyUyMGNlcmVtb255fGVufDF8fHx8MTc1NjcwNzcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Awards ceremony"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-xl font-semibold mb-2">2024 AI Solutions Provider of the Year</h3>
                  <p className="text-white/90">Recognized for excellence in artificial intelligence implementation and enterprise AI transformation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}