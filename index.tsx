import React, { useState, useEffect, useRef, FC, PropsWithChildren } from 'react';
import { createRoot } from 'react-dom/client';

// --- DATA FROM RESUME ---
const portfolioData = {
  name: 'Siddharth Raj Dash',
  contact: {
    phone: '(323) 220-3804',
    email: 'srdash@usc.edu',
    linkedin: 'linkedin.com/in/siddharth-raj-dash-636499189',
    github: 'github.com/SiDdHaRtHrAjDaSh',
  },
  education: [
    {
      institution: 'University of Southern California',
      degree: 'Master of Science in Computer Science',
      dates: 'Aug 2024 - May 2026',
      location: 'Los Angeles, CA, USA',
    },
    {
      institution: 'Vellore Institute of Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering (Honors)',
      dates: 'Jul 2018 - May 2022',
      location: 'Vellore, India',
    },
  ],
  experience: [
    {
      company: 'GBCS Group',
      title: 'Summer Intern - Backend development',
      dates: 'Jun 2025 - Aug 2025',
      location: 'Los Angeles, CA, USA',
      description: [
        'Developed a greenhouse gas emission tracker covering 5 continents and 60+ region-specific calculations across marine, aviation, rail, and road transport sectors',
        'Implemented VIN decoding to manage an inventory of 6,000+ vehicles across various classes and types',
        'Programmed an interactive dashboard with React to visualize emission data, reducing individual API and query calls by 50% through optimized data handling and component design',
      ],
    },
    {
      company: 'Athenahealth Technologies',
      title: 'Member of Technical Staff',
      dates: 'Dec 203 - Jul 2024',
      location: 'Chennai, India',
      description: [
        'Led the development of a scalable application built on React and spring-boot, allowing external clients to store and validate FHIR resources in compliance with HIPAA implementation guides, ensuring data accuracy and regulatory adherence',
        'Optimised internal services to shorten client turnaround time and boost data handling capacity by 20% with existing infrastructure, elevating overall efficiency of services',
        'Improved code release process by introducing standardized practices, drafting Python helper scripts, and automating end-to-end testing with Selenium, decreasing release time from 1 week to 3 days',
      ],
    },
    {
      company: 'Athenahealth Technologies',
      title: 'Associate Member of Technical Staff',
      dates: 'Jul 2022 - Nov 2023',
      location: 'Chennai, India',
      description: [
        'Built and launched scalable and optimized java Spring boot microservices on AWS, for data management in healthcare industry, processing over 3.5 million data transactions per day',
        'Collaborated on enhancing client onboarding process by designing standardized adapters and infrastructure within services, reducing onboarding time from 30 to 12 days, and integrated 3 new clients with the upgraded system',
        'Created intricate data views, dashboards, and metrics on Snowflake, ensuring reliable and efficient data access for services, minimizing metrics collection time by 80%',
      ],
    },
    {
      company: 'Athenahealth Technologies',
      title: 'Internship',
      dates: 'Jan 2022 - Jun 2022',
      location: 'Chennai, India',
      description: [
        'Devised a customizable online connectivity testing tool powered by React and Node.js, enabling non-technical users in healthcare industry to test external APIs while supporting 50+ concurrent users for seamless performance',
        'Leveraged AWS API Gateway, AWS Amplify and Load Balancers, to handle over 1000 API calls per hour, facilitating seamless communication between external client APIs and private cloud services, while ensuring robust security',
        'Created deployment pipelines with Jenkins and Terraform to automate code deployment to test and production servers on demand, trimming deployment and testing time by over 60%',
      ],
    },
     {
      company: 'Glickmet IT Solutions',
      title: 'Internship',
      dates: 'Jun 2021 - July 2022',
      location: 'Remote',
      description: [
        'Designed UI mockups tailored to client requirements using tools like Figma and Adobe XD',
        'Translated design mockups into fully functional web application modules using Vue.js and Bootstrap',
      ],
    },
  ],
  projects: [
      {
        name: 'Forensics Sketch Generation with Generative AI',
        tech: ['Diffusion Models', 'Fine-tuning', 'Llama 3'],
        description: 'Designed and fine-tuned a multimodal text-to-image generation system with Stable Diffusion and LoRA on 100,000+ image-caption pairs, leveraging LLAMA 3-enhanced captions to refine facial feature accuracy for forensic sketching applications'
      },
      {
        name: 'Weather Application',
        tech: ['React', 'Node.js', 'Android', 'Highcharts', 'GCP'],
        description: 'Developed a weather website and Android application integrated with Google Maps API to deliver 10-day forecasts and interactive charts for detailed weather analysis and location-based insights.'
      },
      {
        name: 'Skin Cancer Prediction',
        tech: ['Python', 'Django', 'Keras'],
        description: 'Innovated a custom deep learning algorithm integrating two MobileNet models to enhance feature extraction and improves performance, achieving a triple prediction accuracy of 98.41%'
      },
  ],
  volunteerAndLeadership: [
    {
      organization: 'USC Rossier School of education',
      title: 'Graduate Student Assistant',
      dates: 'Mar 2025 - Present',
      location: 'Los Angeles, USA',
      description: [
        'Designed engaging mathematical visuals and videos for educational content, ensuring consistency across Word documents and JSON formats',
        'Created, structured, and maintained JSON files to support accurate and organized data representation',
        'Supported departmental operations by managing office inventory, proofreading content, and assisting in event planning and coordination',
      ],
    },
    {
      organization: 'USC Hindu Student Organization',
      title: 'Treasurer',
      dates: 'Sep 2024 - Present',
      location: 'Los Angeles, CA',
      description: [
        'Coordinated large-scale cultural events to celebrate significant Indian festivals, such as Dusshera, Ganesh Chaturthi, and the flagship Diwali event, bringing together over 800 participants',
        'Managed event logistics, stage decorations, vendor coordination for refreshments, and crafted promotional and media coverage content to ensure seamless execution and engagement for large-scale cultural events.',
      ],
    },
    {
      organization: 'The Fine Arts Club VIT',
      title: 'Editorial Head',
      dates: 'Mar 2021 - Mar 2022',
      location: 'Vellore, India',
      description: [
        'Compiled event reports, financial statements, sponsorship agreements, and audit logs to ensure smooth operations and accurate documentation for future planning and auditing',
        'Led youth outreach programs to promote artistic creativity and secured $1,700 in event sponsorships by engaging sponsors and delivering on partnership commitments',
      ],
    },
    {
      organization: 'Student Technical Community VIT',
      title: 'Tech team member',
      dates: 'Jan 2019 - Mar 2022',
      location: 'Vellore, India',
      description: [
        'Collaborated with cross-functional teams to develop applications for university students, including a peer-based online education platform and a calendar organizer app integrated with the VIT academic schedule.',
        'Facilitated "Tech Talks VIT," a platform that enabled students to share knowledge through interactive tech demos and knowledge transfer sessions, fostering peer learning and collaboration.',
      ],
    },
    {
      organization: 'Riviera Fest',
      title: 'Design and Media Coordinator',
      dates: 'Feb 2019 - Feb 2020',
      location: 'Vellore, India',
      description: [
        "Organized and coordinated diverse arts and crafts competitions and exhibitions at Riviera, Vellore Institute of Technology's annual college fest, ensuring smooth execution and participant engagement.",
        'Ensured seamless event operations and high participant satisfaction by effectively managing resources and adhering to budget constraints.',
      ],
    },
  ],
  skills: {
    'Languages': ['Java', 'Python', 'C/C++', 'SQL', 'JavaScript', 'Kotlin'],
    'Web Frameworks': ['Spring-boot', 'React.js', 'Node.js', 'Django'],
    'Cloud & DevOps': ['Amazon Web Services', 'Git', 'Docker', 'Jenkins', 'Terraform'],
    'AI/ML': ['Tensorflow', 'Scikit', 'Pytorch', 'Nltk'],
    'Databases': ['Postgres', 'MySQL', 'MongoDB'],
    'Visualization': ['Tableau', 'Highcharts', 'Grafana'],
  }
};

// --- THREE.JS BACKGROUND COMPONENT ---
const ThreeCanvas: FC = () => {
  useEffect(() => {
    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new (window as any).THREE.WebGLRenderer({
      canvas: document.querySelector('#bg-canvas'),
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new (window as any).THREE.BoxGeometry(2.5, 2.5, 2.5);
    const material = new (window as any).THREE.MeshStandardMaterial({
      color: 0x3fb950,
      wireframe: true,
    });
    const cube = new (window as any).THREE.Mesh(geometry, material);
    scene.add(cube);
    
    const ambientLight = new (window as any).THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const pointLight = new (window as any).THREE.PointLight(0x58a6ff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
};

// --- ACCORDION COMPONENT ---
interface AccordionItemProps {
  title: string;
  isOpenDefault?: boolean;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({ children, title, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
      >
        <span>{title}</span>
        <span className="arrow">{'>'}</span>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0' }}
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App: FC = () => {
  return (
    <>
      <ThreeCanvas />
      <div className="portfolio-container">
        <header className="header">
          <h1>
            {portfolioData.name}
            <span className="cursor"></span>
          </h1>
          <div className="contact-info">
            <a href={`tel:${portfolioData.contact.phone}`}>{portfolioData.contact.phone}</a>
            <span>|</span>
            <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
            <span>|</span>
            <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>|</span>
            <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </header>

        <div className="summary">
          <p>Artist, software developer, and professional bug creator (and fixer). Fascinated by AI and the magic of backend development. Trying to teach machines to be creative so I can have more coffee breaks.</p>
        </div>

        <main>
          <AccordionItem title="> cat ./Experience" isOpenDefault={true}>
            {portfolioData.experience.map((job, index) => (
              <div className="content-entry" key={index}>
                <div className="entry-header">
                  <h3>{job.title} <span className="company">@ {job.company}</span></h3>
                  <span className="date">{job.dates}</span>
                </div>
                <div className="entry-location">{job.location}</div>
                <div className="entry-description">
                  <ul>
                    {job.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </AccordionItem>

          <AccordionItem title="> ./volunteer_leadership.sh">
            {portfolioData.volunteerAndLeadership.map((item, index) => (
              <div className="content-entry" key={index}>
                <div className="entry-header">
                  <h3>{item.title} <span className="company">@ {item.organization}</span></h3>
                  <span className="date">{item.dates}</span>
                </div>
                <div className="entry-location">{item.location}</div>
                <div className="entry-description">
                  <ul>
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </AccordionItem>
          
          <AccordionItem title="> ls ./Projects">
            {portfolioData.projects.map((project, index) => (
              <div className="content-entry" key={index}>
                <div className="entry-header">
                   <h3>{project.name}</h3>
                </div>
                <div className="entry-description">
                  <p>{project.description}</p>
                   <div className="project-tech">
                    {project.tech.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                   </div>
                </div>
              </div>
            ))}
          </AccordionItem>

          <AccordionItem title="> get-skills">
            <div className="skills-container">
                {Object.entries(portfolioData.skills).map(([category, skills]) => (
                    <div className="skills-category" key={category}>
                        <h4>{category}</h4>
                        <div className="skills-grid">
                            {skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                        </div>
                    </div>
                ))}
            </div>
          </AccordionItem>

          <AccordionItem title="> open Education.log">
             {portfolioData.education.map((edu, index) => (
              <div className="content-entry" key={index}>
                <div className="entry-header">
                  <h3>{edu.institution}</h3>
                   <span className="date">{edu.dates}</span>
                </div>
                <p>{edu.degree}</p>
                 <div className="entry-location">{edu.location}</div>
              </div>
            ))}
          </AccordionItem>
        </main>
        
        <footer className="footer">
          <p>Created with AI</p>
        </footer>
      </div>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}