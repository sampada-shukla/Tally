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
  sectionTitle: '1: Admin Registration & License Setup',
  sectionDescription:
    'Initial system onboarding where the Admin registers, activates the license, and securely sets up credentials.',
  steps: [
    {
      number: 1,
      title: 'Admin Registration, License Activation & Credential Setup',
      description:'The Admin completes registration, license activation, and secure credential setup to access the dashboard.',
      icon: Shield,
      iconColor: '#1976D2',
      image: login_page,
    },
  ],
},
  {
  sectionId: 2,
  sectionTitle: '2: Agent Setup & Authentication',
  sectionDescription:
    'Agent installation and authentication for real-time synchronization.',
  steps: [
    {
      number: 2,
      title: 'Agent Download, Installation & Authentication',
      description:
        'The Admin downloads, installs, and authenticates the desktop agent to enable secure real-time data synchronization.',
      icon: Users,
      iconColor: '#673AB7',
      image: dashboard_page,
    },
  ],
},

  {
    sectionId: 3,
    sectionTitle: '3: Data Sync & Login Routing',
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
  sectionTitle: '4: Role-Based Access Control',
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

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 40%, #ffffff 100%)', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(224,247,250,0.3) 0%, rgba(255,255,255,0) 50%)', opacity: 0.6 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <section style={{ padding: '3rem 1.5rem', minHeight: '500px', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #ecfeff 100%)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 1.5rem' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.1fr 0.9fr', 
              gap: '3rem', 
              alignItems: 'center' 
            }}>
              {/* LEFT: Text Content */}
              <div style={{ maxWidth: '650px' }}>
                <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                  <span style={{ color: 'rgb(6, 182, 212)', fontWeight: 900 }}>Explore Tally Connect</span>{' '}
                  <span style={{ color: 'rgb(30, 41, 59)' }}>with Detailed Step-by-Step Tutorials</span>
                </h1>
                
                <p style={{ fontSize: '1.05rem', color: 'rgb(71, 85, 105)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                  Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials covering setup, configuration, and advanced features.
                </p>

                {/* Feature List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    'Quick start guides for instant setup',
                    'Advanced feature walkthroughs',
                    'How it works steps for smooth onboarding',
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'rgb(6, 182, 212)', flexShrink: 0 }} />
                      <span style={{ fontSize: '1rem', color: 'rgb(51, 65, 85)', fontWeight: 500 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Video Card */}
              <motion.div 
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '1.25rem',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  border: '1px solid rgb(226, 232, 240)',
                  width: '100%',
                  maxWidth: '480px',
                }}>
                  {/* VIDEO PREVIEW */}
                  <div style={{
                    position: 'relative',
                    height: '240px',
                    background: 'linear-gradient(to bottom right, rgb(219, 234, 254), rgb(207, 250, 254))',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <button style={{
                          width: '4.5rem',
                          height: '4.5rem',
                          background: 'rgb(6, 182, 212)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.35)',
                          border: 'none',
                          cursor: 'pointer',
                          margin: '0 auto 1rem',
                          transition: 'background 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(8, 145, 178)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(6, 182, 212)'}
                        >
                          <Play style={{ width: '2.25rem', height: '2.25rem', color: 'white', marginLeft: '0.25rem' }} fill="white" />
                        </button>

                        <p style={{ marginTop: '0.75rem', color: 'rgb(55, 65, 81)', fontWeight: 600, fontSize: '1rem' }}>
                          Getting Started with Tally Connect
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'rgb(107, 114, 128)', marginTop: '0.25rem' }}>
                          Duration: 5:32
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VIDEO INFO */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'rgb(30, 41, 59)', marginBottom: '0.65rem', fontWeight: 700 }}>
                      Welcome to Tally Connect Tutorial
                    </h3>

                    <p style={{ color: 'rgb(75, 85, 99)', marginBottom: '1.25rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                      Learn how to set up your account, configure tracking parameters, and start monitoring your assets in just a few minutes.
                    </p>

                    <button style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgb(30, 41, 59)',
                      color: 'white',
                      borderRadius: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.95rem',
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
                      <ExternalLink style={{ width: '1.125rem', height: '1.125rem' }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tutorial Section Header */}
        <section style={{ padding: '2rem 1.5rem 1.5rem', background: 'linear-gradient(to bottom, rgba(255,255,255,0), #f8fafc)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'rgb(8, 145, 178)', marginBottom: '0.65rem' }}>
              Complete Step-by-Step Tutorial
            </h2>

            <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
              Master Tally Connect with our comprehensive guide covering every feature from sign-up to advanced functionality
            </p>
          </div>
        </section>

        {/* Tutorial Cards Section */}
        <section style={{ padding: '1.5rem 1.5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            {tutorialSections.map((section) => (
              <div key={section.sectionId} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'rgb(8, 145, 178)' }}>
                  {section.sectionTitle}
                </h3>
                <p style={{ color: '#475569', marginBottom: '1rem' }}>
                  {section.sectionDescription}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  columnGap: '2rem',
                  rowGap: '2rem',
                  paddingTop: '1.5rem',
                  paddingInline: '0.5rem',
                  alignItems: 'start',
                }}>
                  {section.steps.map((step, stepIndex) => {
                    const boxStyle = screenshotBoxStyles[stepIndex % screenshotBoxStyles.length]
                    const Icon = step.icon;
                    const isHovered = hoveredCard === step.number;

                    return (
                      <div
                        key={step.number}
                        onMouseEnter={() => setHoveredCard(step.number)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                          position: 'relative',
                          width: '100%',
                          maxWidth: '600px',
                          margin: '0 auto',
                        }}
                      >
                        {/* Smooth Slide Animation */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: (stepIndex * 0.08),
                            ease: 'easeOut'
                          }}
                          viewport={{ once: true, margin: '-50px', amount: 0.2 }}
                          style={{ height: '100%' }}
                        >
                          <div
                            style={{
                              position: 'relative',
                              overflow: 'visible',
                              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                              transition: 'transform 0.3s ease',
                            }}
                          >
                            <div style={{ borderRadius: 0, overflow: 'visible', boxShadow: 'none' }}>
                              <div style={{
                                background: boxStyle.bg,
                                border: `2px solid ${boxStyle.border}`,
                                borderRadius: '1.75rem',
                                padding: '0.5rem',
                                boxShadow: `0 8px 20px ${boxStyle.shadow}`,
                              }}>
                                <div style={{
                                  borderRadius: '1.1rem',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                  <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                      width: '100%',          
                                      height: 'auto',
                                      display: 'block',
                                      objectFit: 'cover',
                                      background: 'transparent',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* POPUP DESCRIPTION */}
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                style={{
                                  position: 'fixed',
                                  top: '20%',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: '320px',
                                  background: 'rgba(15, 23, 42, 0.97)',
                                  backdropFilter: 'blur(12px)',
                                  borderRadius: '1.25rem',
                                  padding: '1.5rem',
                                  boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                                  color: 'white',
                                  zIndex: 999999,
                                  pointerEvents: 'none',
                                  whiteSpace: 'normal',
                                  wordWrap: 'break-word',
                                }}
                              >
                                {/* STEP NUMBER BADGE */}
                                <div style={{
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
                                }}>
                                  {step.number}
                                </div>

                                <div style={{
                                  width: '3rem',
                                  height: '3rem',
                                  borderRadius: '0.75rem',
                                  background: step.iconColor,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginBottom: '0.75rem',
                                }}>
                                  <Icon color="white" size={22} />
                                </div>

                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                  {step.title}
                                </h4>

                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                                  {step.description}
                                </p>
                              </motion.div>
                            )}
                          </div>
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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}>
          <button
            onClick={() => window.location.href = 'https://frontend-8x7e.onrender.com/'}
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
    </div>
  );
}
