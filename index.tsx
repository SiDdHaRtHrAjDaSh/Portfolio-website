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
    {
      company: 'ATMSI Pvt Ltd',
      title: 'Internship',
      dates: 'Oct 2020 - Jan 2021',
      location: 'Remote',
      description: [
        'Designed and developed the ATMSI Website with various UI features and elements',
        'Set up the companies IT infrastructure from scratch including mail servers, web hosting, databases and product literatures',
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
        name: 'Workplus - The AI powered fitness app',
        tech: ['Tensorflow', 'Android', 'PoseNet'],
        description: 'Engineered a fitness application utilizing Flutter, integrating the POSENET model for real-time posture monitoring via camera, providing users with valuable insights such as workout accuracy, posture, and count, and achieving an average accuracy of 91% in tracking various exercises'
      },
      {
        name: 'Skin Cancer Prediction',
        tech: ['Python', 'Django', 'Keras'],
        description: 'Innovated a custom deep learning algorithm integrating two MobileNet models to enhance feature extraction and improves performance, achieving a triple prediction accuracy of 98.41%'
      },
      {
        name: 'The tronics store - E-Commerce Microservices',
        tech: ['Java', 'Spring-boot', 'AWS', 'Docker', 'PostgreSQL', 'Microservices'],
        description: 'Engineered a cloud-native e-commerce backend with a microservices architecture on AWS. Implemented core services for user authentication, product catalog, and order processing, containerized with Docker for seamless deployment and scalability.'
      },
      {
        name: 'Peer-to-Peer Learning Platform',
        tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO'],
        description: 'Developed a collaborative online education platform for university students, a key initiative during my time with the Student Technical Community VIT. The platform features real-time peer-to-peer knowledge sharing and a calendar organizer integrated with the academic schedule.'
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
  },
  publications: [
    {
      name: 'Exercise Tracking with Deep Learning',
      journal: 'International Journal of Research and Analytical Reviews (IJRAR)',
      link: 'https://www.ijrar.org/papers/IJRAR21C1276.pdf',
      tech: ['Deep Learning'],
      description: 'Work plus is basically an AI powered fitness app that predominantly focuses on improving the health and posture of its users distinctly during the time of Covid 19 pandemic. Essentially, most corporate companies have started adopting work from home for their employees, for most of the time they are bound to be stuck on a chair looking at a screen which causes bad posture and various other health problems. Our aim is just to remind people how important their health is and they can achieve a superior health without even having anyone near them even when they are quarantined with the use of our app. Using a highly efficient AI algorithm, we have made sure that the energy and time that any user invests in improving their lifestyle with our app, does not go in vain and they are served with a quality service.'
    },
    {
      name: 'Skin Cancer Analysis with Deep Learning',
      link: 'https://www.ijraset.com/fileserve.php?FID=36761',
      journal: 'International Journal for Research in Applied Science & Engineering Technology (IJRASET)',
      tech: ['Deep Learning'],
      description: 'Skin diseases are some of the most common diseases and are often difficult to diagnose than other diseases. Skin diseases may be caused by fungus, bacteria, allergic reaction, viruses, cancer etc. The technological advancement in laser diagnosis and Photonics based medical diagnosis has made it possible to diagnose the skin diseases much more quickly and accurately. But the cost of diagnostics is time-consuming and very expensive. Hence, we can use image processing techniques to help build automated preliminary detection system for such dermatological diagnostics'
    },
  ],
};

// --- THEME ICONS ---
const SunIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M12,2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1s1-0.45,1-1V3C13,2.45,12.55,2,12,2z M12,20c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2C13,20.45,12.55,20,12,20z M4.93,4.93c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L4.93,4.93z M17.66,17.66c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L17.66,17.66z M2,12c-0.55,0-1,0.45-1,1s0.45,1,1,1h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H2z M20,12c-0.55,0-1,0.45-1,1s0.45,1,1,1h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H20z M6.34,17.66c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L6.34,17.66z M19.07,4.93c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L19.07,4.93z"></path>
  </svg>
);

const MoonIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z"></path>
  </svg>
);

const PowerIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
    </svg>
);


// --- MATRIX BACKGROUND COMPONENT ---
const MatrixCanvas: FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1; // size between 1 and 3px
        this.maxLife = Math.random() * 100 + 80; // life between 80-180 frames for a slow effect
        this.life = this.maxLife;
      }

      updateAndDraw(ctx: CanvasRenderingContext2D, primaryColor: string) {
        this.life -= 1;

        // Use a sine wave for smooth fade in and out
        const progress = (this.maxLife - this.life) / this.maxLife;
        const opacity = Math.sin(progress * Math.PI);

        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = opacity;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        
        return this.life > 0;
      }
    }
    
    let particles: Particle[] = [];

    const setup = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
    };
    
    setup();

    const draw = () => {
      const primaryColor = theme === 'light' ? '#0969da' : '#3fb950';
      // Use a lower alpha for a subtle trail effect
      const backgroundColor = theme === 'light' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(13, 17, 23, 0.15)';

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles at a controlled, slow rate
      if (particles.length < 150 && Math.random() > 0.85) { 
          particles.push(new Particle(canvas.width, canvas.height));
      }

      // Update, draw, and remove dead particles
      particles = particles.filter(p => p.updateAndDraw(ctx, primaryColor));
      
      ctx.globalAlpha = 1; // Reset alpha for next frame

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      setup();
      draw();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
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

// --- LOADING SCREEN COMPONENT ---
const LoadingScreen: FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    'INITIALIZING BIOS...',
    'CHECKING MEMORY: 64KB OK',
    'LOADING OS FROM C:/DOS...',
    'SRD-DOS v1.0',
    'STARTING COMMAND.COM',
    'LOADING PORTFOLIO.EXE...',
    'BOOT SEQUENCE COMPLETE.',
  ];

  useEffect(() => {
    let isMounted = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach((line, index) => {
        const timeout = setTimeout(() => {
            if (isMounted) {
                setLines(prev => [...prev, line]);
            }
        }, 350 * (index + 1));
        timeouts.push(timeout);
    });

    return () => {
        isMounted = false;
        timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="loading-screen">
      {lines.map((line, i) => <p key={i}> {line}</p>)}
      <span className="cursor"></span>
    </div>
  );
};

// --- SHUTDOWN SCREEN COMPONENT ---
const ShutdownScreen: FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const shutdownSequence = [
    'CLOSING ALL APPLICATIONS...',
    'SAVING SESSION STATE...',
    'SYSTEM WILL NOW SHUT DOWN.',
    'GOODBYE.',
  ];

  useEffect(() => {
    let isMounted = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    shutdownSequence.forEach((line, index) => {
        const timeout = setTimeout(() => {
            if (isMounted) {
                setLines(prev => [...prev, line]);
            }
        }, 500 * (index + 1));
        timeouts.push(timeout);
    });

    return () => {
        isMounted = false;
        timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="shutdown-screen">
      {lines.map((line, i) => <p key={i}> {line}</p>)}
      {lines.length > 0 && <span className="cursor"></span>}
    </div>
  );
};


// --- MAIN APP COMPONENT ---
const App: FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [powerState, setPowerState] = useState<'off' | 'loading' | 'on' | 'shutting-down'>(
    window.innerWidth <= 768 ? 'loading' : 'off'
  );

  const themeToggleRef = useRef<HTMLButtonElement>(null);
  const dragInfo = useRef({
    isDragging: false,
    hasMoved: false,
    dragOffset: { x: 0, y: 0 },
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (themeToggleRef.current) {
        themeToggleRef.current.style.top = '';
        themeToggleRef.current.style.left = '';
        themeToggleRef.current.style.bottom = '';
        themeToggleRef.current.style.right = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!dragInfo.current.isDragging) return;

    dragInfo.current.hasMoved = true;
    const point = 'touches' in e ? e.touches[0] : e;
    const button = themeToggleRef.current;
    if (!button) return;

    let newX = point.clientX - dragInfo.current.dragOffset.x;
    let newY = point.clientY - dragInfo.current.dragOffset.y;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const { innerWidth: winWidth, innerHeight: winHeight } = window;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + buttonWidth > winWidth) newX = winWidth - buttonWidth;
    if (newY + buttonHeight > winHeight) newY = winHeight - buttonHeight;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    button.style.right = 'auto';
    button.style.bottom = 'auto';
  };

  const handleDragEnd = () => {
    dragInfo.current.isDragging = false;
    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('touchmove', handleDragMove);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMobile || !themeToggleRef.current) return;
    
    dragInfo.current.isDragging = true;
    dragInfo.current.hasMoved = false;

    const point = 'touches' in e ? e.touches[0] : e;
    const rect = themeToggleRef.current.getBoundingClientRect();

    dragInfo.current.dragOffset = {
      x: point.clientX - rect.left,
      y: point.clientY - rect.top,
    };
    
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('touchmove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };
  
  const handleThemeToggleClick = () => {
    if (dragInfo.current.hasMoved) return;
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (powerState === 'loading') {
      const timer = setTimeout(() => {
        setPowerState('on');
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (powerState === 'shutting-down') {
      const timer = setTimeout(() => {
        setPowerState('off');
      }, 3000); // Wait for shutdown animation to finish
      return () => clearTimeout(timer);
    }
  }, [powerState]);

  const handlePowerToggle = () => {
    if (powerState === 'off') {
        setPowerState('loading');
    } else if (powerState === 'on') {
        setPowerState('shutting-down');
    }
    // Do nothing if loading or shutting down to prevent interruption
  };


  return (
    <>
      <MatrixCanvas theme={theme} />
      <div className="monitor-wrapper">
        <div className={`portfolio-container ${powerState !== 'off' ? 'is-on' : 'is-off'}`}>
          {powerState === 'loading' && <LoadingScreen />}
          {powerState === 'shutting-down' && <ShutdownScreen />}
          {powerState === 'on' && (
            <>
              <button
                ref={themeToggleRef}
                className={`theme-toggle ${isMobile ? 'theme-toggle-floating' : ''}`}
                onClick={handleThemeToggleClick}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
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
                <AccordionItem title="> Experience" isOpenDefault={true}>
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

                <AccordionItem title="> Volunteer and Leadership">
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
                
                <AccordionItem title="> Projects">
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

                <AccordionItem title="> Publications">
                  {portfolioData.publications.map((publication, index) => (
                    <div className="content-entry" key={index}>
                      <div className="entry-header">
                        <h3>
                          <a href={publication.link} target="_blank" rel="noopener noreferrer">
                            {publication.name}
                          </a>
                        </h3>
                      </div>
                      <div className="entry-location">{publication.journal}</div>
                      <div className="entry-description">
                        <p>{publication.description}</p>
                        <div className="project-tech">
                          {publication.tech.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionItem>

                <AccordionItem title="> Skills">
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

                <AccordionItem title="> Education">
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
            </>
          )}
        </div>
        <button className="power-button" onClick={handlePowerToggle} aria-label="Toggle Power" title="Toggle Power">
            <PowerIcon />
        </button>
        <div className="monitor-stand"></div>
      </div>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
