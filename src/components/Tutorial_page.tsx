import { motion } from 'motion/react'
import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle,
  UserPlus,
  Settings,
  Shield,
  Users,
  HardDrive,
  Play,
  ExternalLink,
  UserCheck,
} from 'lucide-react'
import { useEffect } from 'react'

import  TutorialVideo  from './TutorialVideo'
import { Footer } from './Footer'


import login_page from './assets/login_page.png'
import dashboard_page from './assets/dashboard_page.png'
import user_management_page from './assets/user_management_page.png'
import permission_page from './assets/permission_page.png'
import add_user from './assets/add_user.png'
import user_created from './assets/user_created.png'
import save_changes from './assets/save_changes.png'

type ScreenshotStyle = {
  bg: string
  border: string
  shadow: string
}

const getScreenshotStyle = (index: number) => {
  const GOLDEN_RATIO = 137.508
  const hue = (index * GOLDEN_RATIO) % 360

  return {
    bg: `hsl(${hue}, 85%, 96%)`,
    border: `hsl(${hue}, 70%, 55%)`,
    shadow: `hsla(${hue}, 70%, 55%, 0.25)`,
  }
}

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
        'Admins view all registered users, including their email IDs and access status. This dashboard serves as the central hub for managing users.',
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  let colorIndex = 0

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 40%, #ffffff 100%)',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: isMobile ? '2rem 1rem' : isTablet ? '2.5rem 1.5rem' : '3rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : '1.1fr 0.9fr',
          gap: isMobile ? '1rem' : '3rem',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #ecfeff 100%)',
        }}
      >
        {/* LEFT: Text */}
        <div style={{ maxWidth: '650px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: '58px',
            }}
          >
            <span style={{ color: 'rgb(6, 182, 212)', fontWeight: 900 }}>Explore Tally Connect</span>{' '}
            <span style={{ color: '#0F172A' }}>with Detailed Step-by-Step Tutorials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: '16px',
              color: '#475569',
              marginBottom: '1.5rem',
            }}
          >
            Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials
            covering setup, configuration, and advanced features.
          </motion.p>
        </div>

        {/* RIGHT: Video */}
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <TutorialVideo />
        </motion.div>
      </section>

      {/* Tutorial Cards */}
      <section style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {tutorialSections.map((section) => (
            <div key={section.sectionId} style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontFamily: '"Poppins", sans-serif', fontSize: '28px', fontWeight: 600, marginBottom: '0.75rem' }}>
                {section.sectionTitle}
              </h3>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#475569', marginBottom: '1.5rem' }}>
                {section.sectionDescription}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {section.steps.map((step, stepIndex) => {
                  const boxStyle = getScreenshotStyle(colorIndex++)
                  const Icon = step.icon
                  const isHovered = hoveredCard === step.number

                  return (
                    <div
                      key={step.number}
                      onMouseEnter={() => setHoveredCard(step.number)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ position: 'relative' }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: stepIndex * 0.08 }}
                      >
                        <div
                          style={{
                            background: boxStyle.bg,
                            border: `2px solid ${boxStyle.border}`,
                            borderRadius: '1.5rem',
                            padding: '0.5rem',
                            boxShadow: `0 4px 12px ${boxStyle.shadow}`,
                          }}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            style={{
                              width: '100%',
                              borderRadius: '1rem',
                            }}
                          />
                        </div>

                        {/* Description - always visible on mobile */}
                        {(isHovered || isMobile) && (
                          <div
                            style={{
                              marginTop: '1rem',
                              display: 'flex',
                              flexDirection: isMobile ? 'row' : 'column',
                              alignItems: isMobile ? 'flex-start' : 'center',
                              gap: '0.75rem',
                              background: isMobile ? 'rgba(15,23,42,0.95)' : 'rgba(15,23,42,0.97)',
                              padding: '1rem',
                              borderRadius: '1rem',
                              color: 'white',
                            }}
                          >
                            <div
                              style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '0.75rem',
                                background: step.iconColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon color="white" size={22} />
                            </div>
                            <div>
                              <h4 style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', fontWeight: 600 }}>
                                {step.title}
                              </h4>
                              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: '20px' }}>
                                {step.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
        <button
          onClick={() => (window.location.href = 'https://frontend-8x7e.onrender.com/')}
          style={{
            padding: '1rem 2rem',
            background: 'rgb(30,41,59)',
            color: 'white',
            borderRadius: '1rem',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          Go to Dashboard
          <ArrowRight />
        </button>
      </div>

      <Footer />
    </div>
  )
}
