import React from "react";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../components/ui/section-header";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "lucide:mail",
      title: "Email",
      value: "hello@devportfolio.com",
      link: "mailto:hello@devportfolio.com"
    },
    {
      icon: "lucide:map-pin",
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      link: "https://maps.google.com"
    },
    {
      icon: "logos:upwork",
      title: "Upwork",
      value: "Hire me on Upwork",
      link: "https://www.upwork.com"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Contact Me"
          subtitle="Have a project in mind? Let's discuss how I can help you achieve your goals."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-success-100 text-success-700 p-4 rounded-md flex items-center gap-2">
                    <Icon icon="lucide:check-circle" width={20} height={20} />
                    <span>Thank you for your message! I'll get back to you soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isRequired
                      />
                      <Input
                        label="Email"
                        placeholder="your.email@example.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                      />
                    </div>
                    
                    <Input
                      label="Subject"
                      placeholder="What is this regarding?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isRequired
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Tell me about your project..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      minRows={5}
                      isRequired
                    />
                    
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        isLoading={isSubmitting}
                        startContent={!isSubmitting && <Icon icon="lucide:send" width={20} height={20} />}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Icon icon={method.icon} className="text-primary" width={20} height={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <a 
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-500 hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="logos:github-icon" width={20} height={20} />
                    </a>
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="logos:linkedin-icon" width={20} height={20} />
                    </a>
                    <a 
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="logos:twitter" width={20} height={20} />
                    </a>
                    <a 
                      href="https://upwork.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon icon="logos:upwork" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="mt-6">
              <CardBody className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Availability</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-success" width={20} height={20} />
                    <span>Currently available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:clock" className="text-primary" width={20} height={20} />
                    <span>Response time: within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:calendar" className="text-primary" width={20} height={20} />
                    <span>Typical project start: 1-2 weeks</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}