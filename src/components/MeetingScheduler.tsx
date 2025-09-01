import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';
import { Clock, User, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    meetingType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const meetingTypes = [
    { value: 'consultation', label: 'Free Consultation (30 min)' },
    { value: 'technical', label: 'Technical Discussion (45 min)' },
    { value: 'strategy', label: 'Strategy Session (60 min)' },
    { value: 'demo', label: 'Product Demo (30 min)' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.meetingType) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success('Meeting request submitted successfully!');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Meeting Request Submitted!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for scheduling a meeting with our CEO. You'll receive a confirmation email shortly with the meeting details and calendar invite.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mr-4"
        >
          Schedule Another Meeting
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Return to Homepage
        </Button>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Executive Meeting
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule a Meeting with Our CEO
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get personalized insights and strategic guidance directly from our leadership team. 
            Book a one-on-one session to discuss your business needs and technology goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar and Time Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-blue-600" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Calendar */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Choose a Date
                  </Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border"
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Available Time Slots
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className={`text-sm ${
                            selectedTime === time 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Meeting Details Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Meeting Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Meeting Type *</Label>
                    <Select 
                      value={formData.meetingType} 
                      onValueChange={(value) => handleInputChange('meetingType', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        {meetingTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message / Agenda</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe what you'd like to discuss..."
                      className="mt-1"
                    />
                  </div>

                  {/* Meeting Summary */}
                  {selectedDate && selectedTime && formData.meetingType && (
                    <div className="bg-blue-50 p-4 rounded-lg mt-6">
                      <h4 className="font-medium text-blue-900 mb-2">Meeting Summary</h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {selectedTime}</p>
                        <p><strong>Type:</strong> {meetingTypes.find(t => t.value === formData.meetingType)?.label}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.meetingType}
                  >
                    Schedule Meeting
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}