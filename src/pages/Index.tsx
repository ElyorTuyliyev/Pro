
import { Mail, Github, Linkedin, Code, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'HTML/CSS',
    'Git',
    'RESTful APIs',
    'Responsive Design'
  ];

  const experiences = [
    {
      company: 'Alitech',
      location: 'Uzbekistan',
      duration: '1.5+ years',
      description: 'Worked on several different products and software solutions, contributing to various aspects of development and gaining comprehensive experience in the software development lifecycle.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Tuyliyev Elyor</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Tuyliyev <span className="text-blue-400">Elyor</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Software Engineer specializing in JavaScript and React with 1.5+ years of experience
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and eager to learn new technologies. 
              Building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <User className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I'm a dedicated software engineer with a strong foundation in JavaScript and React. 
                    With over 1.5 years of professional experience, I've developed a passion for creating 
                    efficient, scalable solutions and staying at the forefront of web development technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">What I Do</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I specialize in front-end development with React and JavaScript, building responsive 
                    and user-friendly web applications. I'm always eager to learn new technologies and 
                    expand my skill set to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill} className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Briefcase className="h-8 w-8 text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-slate-400">{exp.location} • {exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Tuyliyev Elyor. Built with React and passion for great design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
