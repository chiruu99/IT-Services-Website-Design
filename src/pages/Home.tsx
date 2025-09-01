import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Brain,
  Cpu,
  Network,
  Database,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BlogSection } from "../components/BlogSection";
// Updated to work without React Router

export function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description:
        "Leverage machine learning and neural networks to automate complex business processes and decision-making",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced cybersecurity solutions with AI-driven threat detection and real-time monitoring",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cpu,
      title: "Cloud Computing",
      description:
        "Scalable cloud infrastructure with intelligent resource optimization and cost management",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Network,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights using advanced analytics and visualization tools",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Digital Transformation",
      description:
        "Complete business transformation with AI integration and process optimization",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Forecast trends and make data-driven decisions with our predictive modeling solutions",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    {
      number: "1000+",
      label: "Projects Completed",
      icon: CheckCircle,
    },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Shield },
  ];

  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2Njc1MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Team collaboration",
      title: "Collaborative Innovation",
    },
    {
      src: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NjU0NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern office workspace",
      title: "Modern Workplace",
    },
    {
      src: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzU2NzA3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Digital transformation",
      title: "Digital Innovation",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NTY2OTI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Data center servers",
      title: "Infrastructure Excellence",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0 z-0">
          {/* Primary Background Image */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1515018993613-681b765562d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NTY3MTA2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Futuristic Technology Cityscape"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Secondary overlay image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1NjcxMDYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Neural Network Technology"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
          </div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-purple-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-cyan-500/20"></div>

          {/* Enhanced Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Data Points */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                animate={{
                  x: [0, 150, 0],
                  y: [0, -120, 0],
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${15 + (i % 3) * 30}%`,
                }}
              />
            ))}

            {/* Network Connection Lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                animate={{
                  width: [0, 200, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + i * 8}%`,
                  transform: `rotate(${i * 15}deg)`,
                }}
              />
            ))}

            {/* Pulsing AI Nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${25 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered IT Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Revolutionize Your Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                {" "}
                Next-Gen AI Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Harness the transformative power of artificial
              intelligence, machine learning, and advanced
              analytics. SM- ITsolution delivers
              enterprise-grade AI solutions, cloud computing,
              cybersecurity, and digital transformation services
              that propel businesses into the future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 group shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  (window.location.href = "/services")
                }
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 backdrop-blur-sm transition-all duration-300"
                onClick={() =>
                  (window.location.href = "/contact")
                }
              >
                Get Free Consultation
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-cyan-600" />
                    <div className="text-xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert
              knowledge to deliver solutions that transform
              businesses and drive growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
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
              Experience the Future of Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we're transforming businesses across
              industries with innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-medium">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies We Master
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to build
              future-ready solutions that drive innovation and
              growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Artificial Intelligence",
                icon: "🤖",
                desc: "Machine Learning & Deep Learning",
              },
              {
                name: "Cloud Computing",
                icon: "☁️",
                desc: "AWS, Azure, Google Cloud",
              },
              {
                name: "Blockchain",
                icon: "⛓️",
                desc: "Web3 & Smart Contracts",
              },
              {
                name: "IoT Solutions",
                icon: "📡",
                desc: "Connected Device Networks",
              },
              {
                name: "Cybersecurity",
                icon: "🛡️",
                desc: "Advanced Threat Protection",
              },
              {
                name: "Data Analytics",
                icon: "📊",
                desc: "Big Data & Business Intelligence",
              },
              {
                name: "DevOps",
                icon: "⚙️",
                desc: "CI/CD & Infrastructure",
              },
              {
                name: "Mobile Apps",
                icon: "📱",
                desc: "iOS & Android Development",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="text-center"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {tech.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses transform their
              operations and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                label: "Revenue Growth",
                company: "TechCorp Inc.",
                description:
                  "AI-powered analytics increased sales efficiency and customer targeting accuracy.",
              },
              {
                metric: "85%",
                label: "Cost Reduction",
                company: "Manufacturing Co.",
                description:
                  "Cloud migration and automation streamlined operations and reduced overhead.",
              },
              {
                metric: "99.9%",
                label: "Uptime Achievement",
                company: "FinanceFirst",
                description:
                  "Robust cybersecurity and infrastructure ensure continuous business operations.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      {story.metric}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {story.label}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {story.company}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Embrace the AI Revolution?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join industry leaders who are already leveraging
              AI and advanced technology solutions to stay ahead
              of the competition and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 group"
                onClick={() =>
                  (window.location.href = "/contact")
                }
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() =>
                  (window.location.href = "/about")
                }
              >
                Discover Our Expertise
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}