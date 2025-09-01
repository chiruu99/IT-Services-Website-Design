import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
  Globe,
  Headphones,
  ArrowRight,
  Star
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MeetingScheduler } from '../components/MeetingScheduler';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    urgency: '',
    message: '',
    hearAbout: '',
    contactPreference: '',
    newsletter: false,
    terms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Thank you! Your consultation request has been submitted successfully. We\'ll contact you within 4 hours.');
    
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '', companySize: '',
      service: '', projectType: '', budget: '', timeline: '', urgency: '', message: '', hearAbout: '',
      contactPreference: '', newsletter: false, terms: false
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@sm-itsolution.com',
      secondary: 'support@sm-itsolution.com',
      description: 'Send us an email anytime - we respond within 2 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 123-4568 (Emergency)',
      description: 'Mon-Fri: 8AM-6PM PST, 24/7 emergency support',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      primary: '123 Tech Street, Suite 100',
      secondary: 'Silicon Valley, CA 94000',
      description: 'Schedule an appointment for in-person consultation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Offices',
      primary: 'USA • Canada • UK • Australia',
      secondary: 'Remote teams worldwide',
      description: 'Local presence, global expertise',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Data Analytics & BI',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software Development',
    'IT Consulting',
    'Digital Transformation',
    'DevOps & Automation',
    'Other'
  ];

  const projectTypes = [
    'New Implementation',
    'System Upgrade',
    'Migration Project',
    'Consulting Only',
    'Emergency Support',
    'Training & Support'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Just exploring'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const hearAboutOptions = [
    'Google Search',
    'Social Media',
    'Referral',
    'Industry Event',
    'Partner Network',
    'Previous Client',
    'Other'
  ];

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.company;
      case 2:
        return formData.service && formData.projectType;
      case 3:
        return formData.message && formData.terms;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743796055664-3473eedab36e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU2NzEwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern AI Technology Workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-cyan-900/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Let's discuss how our AI-powered IT solutions can help you achieve your goals. 
              Get a free consultation and customized proposal for your business needs.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="text-center p-6 border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="text-sm font-medium text-gray-900 mb-1">{info.primary}</div>
                    <div className="text-sm text-gray-600 mb-2">{info.secondary}</div>
                    <div className="text-xs text-gray-500">{info.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    Schedule Your Free Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Complete this form to get a customized proposal and free consultation call.
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-8 h-0.5 mx-2 ${
                            step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleChange('firstName', e.target.value)}
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleChange('lastName', e.target.value)}
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              placeholder="john@company.com"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleChange('company', e.target.value)}
                              placeholder="Your Company Inc."
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="jobTitle">Job Title</Label>
                            <Input
                              id="jobTitle"
                              value={formData.jobTitle}
                              onChange={(e) => handleChange('jobTitle', e.target.value)}
                              placeholder="CEO, CTO, IT Manager..."
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select value={formData.companySize} onValueChange={(value) => handleChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>{size}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Project Information */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Project Information</h3>
                        
                        <div>
                          <Label htmlFor="service">Primary Service Needed *</Label>
                          <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>{service}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="budget">Budget Range</Label>
                            <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((budget) => (
                                  <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="timeline">Timeline</Label>
                            <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelines.map((timeline) => (
                                  <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label>Project Urgency</Label>
                          <RadioGroup value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)} className="mt-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="low" id="low" />
                              <Label htmlFor="low">Low - Planning phase</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="medium" id="medium" />
                              <Label htmlFor="medium">Medium - Need solution soon</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="high" id="high" />
                              <Label htmlFor="high">High - Urgent need</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Additional Information */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                        
                        <div>
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            placeholder="Please describe your project requirements, current challenges, and what you hope to achieve..."
                            rows={5}
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="hearAbout">How did you hear about us?</Label>
                            <Select value={formData.hearAbout} onValueChange={(value) => handleChange('hearAbout', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                {hearAboutOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                            <Select value={formData.contactPreference} onValueChange={(value) => handleChange('contactPreference', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preference" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone</SelectItem>
                                <SelectItem value="video">Video Call</SelectItem>
                                <SelectItem value="in-person">In-Person Meeting</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="newsletter"
                              checked={formData.newsletter}
                              onCheckedChange={(checked) => handleChange('newsletter', checked as boolean)}
                            />
                            <Label htmlFor="newsletter" className="text-sm">
                              Subscribe to our newsletter for technology insights and updates
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.terms}
                              onCheckedChange={(checked) => handleChange('terms', checked as boolean)}
                              required
                            />
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the terms of service and privacy policy *
                            </Label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? 'invisible' : ''}
                      >
                        Previous
                      </Button>

                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          Next Step
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting || !isStepValid()}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Schedule Consultation
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Why Choose Us */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Why Choose SM- ITsolution?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">500+ satisfied clients worldwide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">15+ years of industry experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">24/7 dedicated support team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Cutting-edge AI technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Free consultation & proposal</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Fast Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      We guarantee a response to your inquiry within 4 hours during business hours.
                    </p>
                    <div className="text-2xl font-bold text-blue-600">Under 4 Hours</div>
                    <div className="text-sm text-gray-500">Average Response Time</div>
                  </CardContent>
                </Card>

                {/* Support Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-green-600" />
                      Support Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Mon - Fri</span>
                      <span className="text-sm font-medium">8AM - 6PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Emergency</span>
                      <span className="text-sm font-medium">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Response</span>
                      <span className="text-sm font-medium">Within 4 Hours</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Scheduler Section */}
      <MeetingScheduler />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3Ccircle cx=\'27\' cy=\'7\' r=\'1\'/%3E%3Ccircle cx=\'47\' cy=\'7\' r=\'1\'/%3E%3Ccircle cx=\'7\' cy=\'27\' r=\'1\'/%3E%3Ccircle cx=\'27\' cy=\'27\' r=\'1\'/%3E%3Ccircle cx=\'47\' cy=\'27\' r=\'1\'/%3E%3Ccircle cx=\'7\' cy=\'47\' r=\'1\'/%3E%3Ccircle cx=\'27\' cy=\'47\' r=\'1\'/%3E%3Ccircle cx=\'47\' cy=\'47\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of companies that have already transformed their operations with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100 group shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}