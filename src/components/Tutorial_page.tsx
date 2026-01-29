import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  CheckCircle,
  UserPlus,
  Settings,
  Shield,
  Users,
  HardDrive,
  UserCheck,
} from 'lucide-react'

import TutorialVideo from './TutorialVideo'
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
        description:
          'The Admin completes registration, license activation, and secure credential setup to access the dashboard.',
        icon: Shield,
        iconColor: '#1976D2',
        image: login_page,
      },
    ],
  },
  {
    sectionId: 2,
    sectionTitle: '2: Agent Setup & Authentication',
    sectionDescription: 'Agent installation and authentication for real-time synchronization.',
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
    sectionDescription: 'Data synchronization and login routing.',
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
  },
]

/* ======================
   TUTORIAL PAGE
====================== */

export default function TutorialPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  // Spacing variables
  const sectionSpacing = isMobile ? '2.5rem' : isTablet ? '3rem' : '4rem'
  const cardRowGap = isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem'
  const cardColumnGap = isMobile ? '0' : isTablet ? '2rem' : '3rem'

  // Import Google Fonts
  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  let colorIndex = 0

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 40%, #ffffff 100%)',
        fontFamily: '"Inter", sans-serif',
        position: 'relative',
      }}
    >
      {/* Background Gradient */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(224,247,250,0.3) 0%, rgba(255,255,255,0) 50%)',
            opacity: 0.6,
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* HERO SECTION */}
        <section
          style={{
            padding: isMobile ? '2rem 1rem' : isTablet ? '2.5rem 1.5rem' : '3rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #ecfeff 100%)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              width: '100%',
              padding: isMobile ? '0 1rem' : '0 1.5rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile || isTablet ? '1fr' : '1.1fr 0.9fr',
                gap: isMobile ? '2rem' : '3rem',
                alignItems: 'center',
              }}
            >
              {/* Left Text */}
              <div style={{ maxWidth: isMobile ? '100%' : '650px' }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    lineHeight: isMobile ? '40px' : isTablet ? '50px' : '58px',
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
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#475569',
                    marginBottom: '1.5rem',
                    lineHeight: isMobile ? '22px' : '26px',
                  }}
                >
                  Learn how to streamline operations, boost productivity, and scale faster with comprehensive
                  tutorials covering setup, configuration, and advanced features.
                </motion.p>

                {/* Feature List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                >
                  {[
                    'Quick start guides for instant setup',
                    'Advanced feature walkthroughs',
                    'How it works steps for smooth onboarding',
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                    >
                      <div
                        style={{
                          width: isMobile ? '1.75rem' : '2.25rem',
                          height: isMobile ? '1.75rem' : '2.25rem',
                          borderRadius: '0.5rem',
                          background: 'rgba(6, 182, 212, 0.15)',
                          border: '2px solid rgb(6, 182, 212)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <CheckCircle
                          style={{
                            width: isMobile ? '1rem' : '1.25rem',
                            height: isMobile ? '1rem' : '1.25rem',
                            color: 'rgb(6, 182, 212)',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: isMobile ? '14px' : '16px', color: '#475569' }}>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Video */}
              <motion.div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  order: isMobile || isTablet ? -1 : 0,
                }}
                animate={isMobile ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <TutorialVideo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================
            TUTORIAL SECTIONS
        ====================== */}
        <div style={{ padding: isMobile ? '1rem' : '1.5rem' }}>
          {tutorialSections.map((section) => (
            <div key={section.sectionId} style={{ marginBottom: sectionSpacing }}>
              {/* Section Header */}
              <h3
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                  fontWeight: 600,
                  color: 'rgb(20, 47, 83)',
                  marginBottom: '0.75rem',
                  lineHeight: isMobile ? '32px' : isTablet ? '38px' : '46px',
                }}
              >
                {section.sectionTitle}
              </h3>

              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#475569',
                  marginBottom: '1.5rem',
                  lineHeight: '26px',
                }}
              >
                {section.sectionDescription}
              </p>

              {/* Steps Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile
                    ? '1fr'
                    : isTablet
                    ? '1fr'
                    : 'repeat(2, minmax(0, 1fr))',
                  columnGap: cardColumnGap,
                  rowGap: cardRowGap,
                  alignItems: 'stretch',
                }}
              >
                {section.steps.map((step) => {
                  const boxStyle = getScreenshotStyle(colorIndex++)
                  const Icon = step.icon
                  const isHovered = hoveredCard === step.number

                  return (
                    <div
                      key={step.number}
                      onMouseEnter={() => !isMobile && setHoveredCard(step.number)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '600px',
                        margin: '0 auto',
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        style={{ height: '100%' }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            transform: isHovered && !isMobile ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          <div
                            style={{
                              background: boxStyle.bg,
                              border: `2px solid ${boxStyle.border}`,
                              borderRadius: isMobile ? '1.25rem' : '1.75rem',
                              padding: '0.5rem',
                              boxShadow: `0 4px 12px ${boxStyle.shadow}`,
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              src={step.image}
                              alt={step.title}
                              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                            />
                          </div>

                          {/* Hover Info Card */}
                          {isHovered && !isMobile && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                position: 'fixed',
                                top: '20%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: isTablet ? '280px' : '320px',
                                background: 'rgba(15,23,42,0.97)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '1.25rem',
                                padding: '1.5rem',
                                color: 'white',
                                zIndex: 999999,
                                pointerEvents: 'none',
                              }}
                            >
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
                                  fontWeight: 800,
                                  color: 'white',
                                  fontFamily: '"Poppins", sans-serif',
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

                              <h4 style={{ fontFamily: '"Poppins", sans-serif', fontSize: '18px', fontWeight: 600 }}>
                                {step.title}
                              </h4>
                              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '22px' }}>
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: sectionSpacing,
            marginBottom: sectionSpacing,
            padding: isMobile ? '1rem' : '1.5rem',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: isMobile ? '0.65rem 1.5rem' : '0.85rem 2rem',
              background: 'rgb(6,182,212)',
              borderRadius: '0.75rem',
              color: 'white',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Start Your Tutorial Journey
          </motion.button>
        </div>

        <Footer />
      </div>
    </div>
  )
}
