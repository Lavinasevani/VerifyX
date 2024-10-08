import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Briefcase, GraduationCap, Award, Activity } from 'lucide-react'

export function ProfilePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      className="space-y-6 max-w-4xl min-h-screen mx-auto pt-24 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 bg-[#1C1C3B] p-6 rounded-lg">
        <Avatar className="h-24 w-24 md:h-32 md:w-32">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Dr. Jane Smith" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Dr. Jane Smith</h1>
          <p className="text-gray-400">Senior AI Researcher & Tech Evangelist</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Briefcase className="w-3 h-3" /> 15+ years exp
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> San Francisco, CA
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <GraduationCap className="w-3 h-3" /> Ph.D. in AI
            </Badge>
          </div>
        </div>
        <Button className="ml-auto hidden md:flex">Edit Profile</Button>
      </motion.div>

      <Tabs defaultValue="about" className="w-full ">
        <TabsList className="flex justify-between items-center w-full  ">
          <TabsTrigger value="about" className='w-full text-2xl bg-[#1C1C3B]'>About</TabsTrigger>
          <TabsTrigger value="expertise" className='w-full text-2xl bg-[#1C1C3B]'>Expertise</TabsTrigger>
          <TabsTrigger value="stats" className='w-full text-2xl bg-[#1C1C3B]'>Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <motion.div variants={itemVariants} className="bg-[#1C1C3B] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400">
              With over 15 years of experience in AI and machine learning, I specialize in developing 
              cutting-edge solutions for complex problems. As a tech evangelist, I'm passionate about 
              sharing knowledge and mentoring the next generation of tech leaders.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Recent Activity</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Endorsed John Doe for Machine Learning expertise
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Gave a keynote speech at AI Summit 2024
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Published a paper on "Ethical Considerations in AI Development"
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Mentored 5 junior developers in cloud computing technologies
              </li>
            </ul>
          </motion.div>
        </TabsContent>
        <TabsContent value="expertise">
          <motion.div variants={itemVariants} className="bg-[#1C1C3B] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Neural Networks",
                "Data Science",
                "Cloud Computing",
                "Tech Leadership",
                "Ethical AI",
                "Computer Vision",
                "Natural Language Processing"
              ].map((skill, index) => (
                <Card key={index} className="bg-[#2C2C4B]">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-medium">{skill}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={Math.random() * 40 + 60} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        <TabsContent value="stats">
          <motion.div variants={itemVariants} className="space-y-4">
            <Card className="bg-[#1C1C3B]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Endorsement Stats</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 mb-2 text-yellow-400" />
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-sm text-gray-400">Total Endorsements</p>
                </div>
                <div className="flex flex-col items-center">
                  <Activity className="w-8 h-8 mb-2 text-green-400" />
                  <p className="text-2xl font-bold">98.5%</p>
                  <p className="text-sm text-gray-400">Accuracy Rate</p>
                </div>
                <div className="flex flex-col items-center">
                  <CalendarDays className="w-8 h-8 mb-2 text-blue-400" />
                  <p className="text-2xl font-bold">1.2 days</p>
                  <p className="text-sm text-gray-400">Avg. Response Time</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1C1C3B]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Endorsement History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between">
                  {[30, 45, 25, 60, 75, 40, 50].map((height, index) => (
                    <div key={index} className="w-8 bg-primary rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div variants={itemVariants} className="flex justify-center md:hidden">
        <Button>Edit Profile</Button>
      </motion.div>
    </motion.div>
  )
}