import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AtSymbolIcon, UserIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function ContactUs() {
  return (
    <div className="w-full max-w-2xl mx-auto py-16">
      {/* Upper Section */}
      <section className="bg-blue-600 text-white text-center py-12 rounded-lg mb-8">
        <h1 className="text-4xl font-bold">We'd Love to Hear from You!</h1>
        <p className="text-lg mt-4">
          Whether you have questions, feedback, or need assistance, reach out to us!
        </p>
      </section>

      {/* Contact Form Section */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center">
              <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              <AtSymbolIcon className="h-5 w-5 text-blue-500 mr-2" />
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="flex items-center">
            <ChatBubbleLeftIcon className="h-5 w-5 text-blue-500 mr-2" />
            Subject
          </Label>
          <Input id="subject" placeholder="Enter the subject" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center">
            <ChatBubbleLeftIcon className="h-5 w-5 text-blue-500 mr-2" />
            Message
          </Label>
          <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
        </div>
        <div className="flex justify-center">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}