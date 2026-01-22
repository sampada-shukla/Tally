import { motion } from 'motion/react'
import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle,
  UserPlus,
  Settings,
  Shield,
  Users,
  UserCircle,
  CheckCircle2,
  CreditCard,
  HardDrive,
  Play,
  ExternalLink,
  UserCheck,
} from 'lucide-react'
import { useEffect } from 'react'

import { TutorialVideo } from './TutorialVideo'
import { Footer } from './Footer'


import login_page from './assets/login_page.png'
import dashboard_page from './assets/dashboard_page.png'
import user_management_page from './assets/user_management_page.png'
import permission_page from './assets/permission_page.png'
import add_user from './assets/add_user.png'
import user_created from './assets/user_created.png'
import save_changes from './assets/save_changes.png'

const screenshotBoxStyles = [
  {
    bg: '#e0ecff',     
    border: '#3b82f6',
    shadow: 'rgba(59,130,246,0.25)',
  },
  {
    bg: '#dcf7e6',     
    border: '#22c55e',
    shadow: 'rgba(34,197,94,0.25)',
  },
  {
    bg: '#ffedd5',     
    border: '#fb923c',
    shadow: 'rgba(251,146,60,0.25)',
  },
  {
    bg: '#ede9fe',     
    border: '#8b5cf6',
    shadow: 'rgba(139,92,246,0.25)',
  },
];



/* ======================
   TUTORIAL DATA
====================== */

const tutorialSections = [
  {
    sectionId: 1,
    sectionTitle: '🧑‍💼1: Admin Registration & License Setup',
    sectionDescription:
      'Initial system onboarding where the Admin registers, activates the license, and securely sets up credentials.',
    steps: [
      {
        number: 1,
        title: 'Admin Registration',
        description:
          'The Admin registers on the Tally Connector portal by providing basic credentials. This step initializes the organization’s account and enables access to the platform.',
        icon: UserPlus,
        iconColor: '#2196F3',
        image: login_page,
      },
      {
        number: 2,
        title: 'License Activation',
        description:
          'A valid subscription license is activated to unlock dashboard features and enable secure data connectivity between Tally Prime and the cloud system.',
        icon: CreditCard,
        iconColor: '#4CAF50',
        image: login_page,
      },
      {
        number: 3,
        title: 'Admin Credentials Creation',
        description:
          'The Admin finalizes a secure username and password, which will be used for both portal access and agent authentication.',
        icon: Shield,
        iconColor: '#1976D2',
        image: login_page,
      },
      {
        number: 4,
        title: 'Secure Credential Storage',
        description:
          'All credentials are securely encrypted and stored with role-based access control to prevent unauthorized usage',
        icon: HardDrive,
        iconColor: '#607D8B',
        image: login_page,
      },
    ],
  },
  {
    sectionId: 2,
    sectionTitle: '🖥️ 2: Agent Setup & Authentication',
    sectionDescription:
      'Agent installation and authentication for real-time sync.',
    steps: [
      {
        number: 5,
        title: 'Download Agent',
        description:
          'The Admin downloads the desktop agent from the dashboard. This agent acts as a secure bridge between Tally Prime and the cloud platform.',
        icon: Users,
        iconColor: '#673AB7',
        image: dashboard_page,
      },
      {
        number: 6,
        title: 'Install Agent',
        description:
          'The agent is installed on the system where Tally Prime is running, ensuring seamless access to accounting data.',
        icon: Settings,
        iconColor: '#009688',
        image: dashboard_page,
      },
      {
        number: 7,
        title: 'Agent Login',
        description:
          'The agent is authenticated using Admin credentials to establish a trusted connection with the cloud server.',
        icon: UserCircle,
        iconColor: '#3F51B5',
        image: login_page,
      },
      {
        number: 8,
        title: 'Credential Validation',
        description:
          'Once credentials are validated, the system confirms authentication and prepares the environment for data synchronization.',
        icon: CheckCircle2,
        iconColor: '#4CAF50',
        image: dashboard_page,
      },
    ],
  },
  {
    sectionId: 3,
    sectionTitle: '🔄 3: Data Sync & Login Routing',
    sectionDescription:
      'Data synchronization and login routing.',
    steps: [
      {
        number: 9,
        title: 'Data Synchronization',
        description:
          'Financial data including ledgers, vouchers, inventory, and reports are securely synchronized from Tally Prime to the cloud dashboard.',
        icon: HardDrive,
        iconColor: '#0288D1',
        image: dashboard_page,
      },
      {
        number: 10,
        title: 'Login Redirection',
        description:
          'After synchronization, users are redirected to the login screen, ensuring role-based access to dashboards and reports.',
        icon: ArrowRight,
        iconColor: '#455A64',
        image: login_page,
      },
    ],
  },
  
{
  sectionId: 4,
  sectionTitle: '🔐 4: Role-Based Access Control',
  sectionDescription:
    'Admins define and manage user roles, permissions, and dashboard access to ensure secure and controlled system usage.',
  steps: [
    {
      number: 11,
      title: 'User Management Dashboard',
      description:
        'Admins view all registered users, including their email IDs and access status. This dashboard serves as the central hub for managing users and permissions.',
      icon: Users,
      iconColor: '#6A1B9A',
      image: user_management_page, 
    },
    {
      number: 12,
      title: 'Create New User',
      description:
        'Admins add users by entering employee details such as name, email address, company name, and a temporary password through a secure modal.',
      icon: UserPlus,
      iconColor: '#1976D2',
      image: add_user, 
    },
    {
      number: 13,
      title: 'Assign User Access',
      description:
        'Once added, the user appears in the list, allowing Admins to proceed with permission configuration and role assignment.',
      icon: UserCheck,
      iconColor: '#2E7D32',
      image: user_created,
    },
    {
      number: 14,
      title: 'Dashboard Permissions Configuration',
      description:
        'Admins enable or disable dashboard widgets such as Receivables, Payables, Pending Bills, and Income vs Expense charts using simple toggle controls.',
      icon: Settings,
      iconColor: '#EF6C00',
      image: save_changes, 
    },
    {
      number: 15,
      title: 'Save Permission Changes',
      description:
        'After reviewing permissions, Admins save changes to instantly enforce role-based access. Users will only see authorized data and widgets.',
      icon: CheckCircle,
      iconColor: '#4CAF50',
      image: permission_page, 
    },
  ],
}
]


/* ======================
   PAGE
====================== */

export default function TutorialPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});
  const [popupSide, setPopupSide] = useState('right');


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const updated = { ...prev };
        tutorialSections.forEach((section) => {
          section.steps.forEach((step) => {
            if (step.multiImages && step.images) {
              const currentIndex = updated[step.number] ?? 0;
              updated[step.number] = (currentIndex + 1) % step.images.length;
            }
          });
        });
        return updated;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'white', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, white, rgb(236, 254, 255), white)', opacity: 0.8 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section with Left-Right Layout */}
        <section style={{ padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.2fr 1fr', 
              gap: '6rem', 
              alignItems: 'center' 
            }}>
              {/* LEFT: Text Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  {/*<img src={logoImage} alt="MeetHub Logo" style={{ width: '7.5rem', height: '7.5rem', objectFit: 'contain' }} />*/}
                </div>
                
                <h1 style={{ fontSize: '3.25rem', fontWeight: 800,marginBottom: '1.5rem',lineHeight: '1.1',letterSpacing: '-0.02em' }}>
                  <span style={{ color: 'rgb(6, 182, 212)',fontWeight: 900 }}>Explore Tally Connect</span>{' '}
                  <span style={{ color: 'rgb(30, 41, 59)' }}>with Detailed Step-by-Step Tutorials</span>
                </h1>
                
                <p style={{ fontSize: '1.25rem',color: 'rgb(75, 85, 99)',marginBottom: '2rem',lineHeight: '1.7',maxWidth: '42rem' }}>
                  Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials covering setup, configuration, and advanced features.
                </p>

                {/* Feature List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Quick start guides for instant setup',
                    'Advanced feature walkthroughs',
                    'How it works steps for smooth onboarding',
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'rgb(6, 182, 212)', flexShrink: 0 }} />
                      <span style={{ fontSize: '1.1rem', color: 'rgb(55, 65, 81)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Video Card */}
<motion.div
  style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }}
  animate={{ y: [0, -14, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <div
    style={{
      background: 'white',
      borderRadius: '1.75rem',
      boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      border: '1px solid rgb(243, 244, 246)',
      width: '100%',
      maxWidth: '640px', // 🔥 INCREASED SIZE
    }}
  >
    {/* VIDEO PREVIEW */}
    <div
      style={{
        position: 'relative',
        height: '300px', // 🔥 TALLER VIDEO AREA
        background:
          'linear-gradient(to bottom right, rgb(219, 234, 254), rgb(207, 250, 254))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              width: '5.5rem',
              height: '5.5rem',
              background: 'rgb(6, 182, 212)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              border: 'none',
              cursor: 'pointer',
              margin: '0 auto 1.75rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgb(8, 145, 178)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgb(6, 182, 212)')
            }
          >
            <Play
              style={{
                width: '2.75rem',
                height: '2.75rem',
                color: 'white',
                marginLeft: '0.25rem',
              }}
              fill="white"
            />
          </button>

          <p
            style={{
              marginTop: '1.25rem',
              color: 'rgb(55, 65, 81)',
              fontWeight: 600,
              fontSize: '1.15rem',
            }}
          >
            Getting Started with Tally Connect
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'rgb(107, 114, 128)',
              marginTop: '0.25rem',
            }}
          >
            Duration: 5:32
          </p>
        </div>
      </div>
    </div>

    {/* VIDEO INFO */}
    <div style={{ padding: '2.25rem' }}>
      <h3
        style={{
          fontSize: '1.5rem',
          color: 'rgb(30, 41, 59)',
          marginBottom: '0.75rem',
          fontWeight: 700,
        }}
      >
        Welcome to Tally Connect Tutorial
      </h3>

      <p
        style={{
          color: 'rgb(75, 85, 99)',
          marginBottom: '1.75rem',
          lineHeight: '1.65',
        }}
      >
        Learn how to set up your account, configure tracking parameters, and
        start monitoring your assets in just a few minutes.
      </p>

      <button
        style={{
          width: '100%',
          padding: '0.85rem 1rem',
          background: 'rgb(30, 41, 59)',
          color: 'white',
          borderRadius: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: '0 12px 18px -6px rgba(0, 0, 0, 0.15)',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgb(15, 23, 42)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgb(30, 41, 59)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Watch Full Tutorial Series
        <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>
    </div>
  </div>
</motion.div>
 </div>
          </div>
        </section>
        {/* Tutorial Section Header */}
<section
  style={{
    padding: '3rem 1rem 2.5rem',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), #f8fafc)',
  }}
>
  <div
    style={{
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    <h2
      style={{
        fontSize: '2.4rem',
        fontWeight: 800,
        color: '#0f172a',
        marginBottom: '0.75rem',
      }}
    >
      Complete Step-by-Step Tutorial
    </h2>

    <p
      style={{
        fontSize: '1rem',
        color: '#475569',
        maxWidth: '720px',
        margin: '0 auto',
        lineHeight: 1.6,
      }}
    >
      Master Tally Connect with our comprehensive guide covering every feature
      from sign-up to advanced functionality
    </p>
  </div>
</section>
<section style={{ padding: '3rem 1rem' }}>
  <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
    {tutorialSections.map((section) => (
      <div key={section.sectionId} style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e293b' }}>
          {section.sectionTitle}
        </h3>
        <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
          {section.sectionDescription}
        </p>

        <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // 🔥 2 per row
    columnGap: '4rem',
    rowGap: '5rem',
    paddingTop: '3rem',
    paddingInline: '2rem',
    alignItems: 'center',
  }}
>


  {section.steps.map((step, stepIndex) => {
    const boxStyle = screenshotBoxStyles[stepIndex % screenshotBoxStyles.length]

    const Icon = step.icon;
    const isHovered = hoveredCard === step.number;

    const images = step.multiImages ? step.images : [step.image];
    const isSingleImage = !step.multiImages;

    return (
      <div
        key={step.number}
        onMouseEnter={() => setHoveredCard(step.number)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: 'relative',
          width: 'auto',
          flex: '1 1 0',
          minWidth: '420px',
          perspective: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Staggered Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: (stepIndex * 0.12),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: false, margin: '-80px', amount: 0.3 }}
          style={{ height: '100%' }}
        >
          {/* 🔥 ADD THIS WRAPPER HERE */}
<div
  style={{
    position: 'relative',
    overflow: 'visible',
  }}
></div>

        <motion.div
  animate={{
    scale: isHovered ? 1.03 : 1,
  }}
  transition={{ type: 'spring', stiffness: 120, damping: 14 }}


          style={{
            borderRadius: 0,
            overflow: 'visible',
            boxShadow: 'none',
              //? '0 40px 80px rgba(0,0,0,0.55)'
              //: '0 25px 50px rgba(0,0,0,0.35)',
            //background: '#000',
            //border: '8px solid #000',
          }}
        >
 <div
  style={{
    background: boxStyle.bg,
    border: `2px solid ${boxStyle.border}`,
    borderRadius: '1.75rem',
    padding: '1.25rem',
    boxShadow: `0 8px 20px ${boxStyle.shadow}`,
  }}
>
  {/* ❌ REMOVE white background */}
  <div
    style={{
      borderRadius: '1.1rem',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <motion.img
      src={step.image}
      alt={step.title}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{
        width: '95%',          
        height: 'auto',
        display: 'block',
        objectFit: 'contain',
        background: 'transparent',
      }}
    />
  </div>
</div>


{/* Carousel Navigation Dots - Removed, now fully automatic */}
        </motion.div>


        {/* 🟨 POPUP DESCRIPTION */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '320px',
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              color: 'white',
              zIndex: 99999,
              pointerEvents: 'none',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
            }}
          >
            {/* 🔢 STEP NUMBER BADGE */}
    <div
      style={{
        position: 'absolute',
        top: '-14px',
        left: '-14px',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: step.iconColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.05rem',
        fontWeight: 800,
        color: 'white',
        boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
      }}
    >
      {step.number}
    </div>
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                background: step.iconColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <Icon color="white" size={22} />
            </div>

            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              {step.title}
            </h4>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </p>

            {step.details && (
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {step.details.map((d, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
        </motion.div>
      </div>
    );
  })}
</div>
 </div>    
))}
  </div>
</section>
           
{/* CTA SECTION */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.25rem',
    marginBottom: '2.5rem',
  }}
>
  <button
    onClick={() =>
      (window.location.href =
        'https://frontend-8x7e.onrender.com/')
    }
    style={{
      padding: '1.25rem 3.5rem',   
      background: 'rgb(30, 41, 59)',
      color: 'white',
      borderRadius: '1rem',        
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.3,             
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
      transition: 'all 0.3s',
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgb(15, 23, 42)';
      e.currentTarget.style.transform = 'scale(1.04)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgb(30, 41, 59)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    Go to Dashboard
    <ArrowRight style={{ width: '1.6rem', height: '1.6rem' }} />
  </button>
</div>
<Footer/>
</div>

<style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}