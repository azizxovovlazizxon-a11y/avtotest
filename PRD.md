# Product Requirements Document (PRD)

## Project: Avtotest Mock

### Purpose
Avtotest Mock is a web application designed to help users prepare for driving exams by providing mock tests, exam simulations, statistics, and administrative tools. The platform uses Telegram-based authentication for a seamless and secure user experience.

### Features

#### 1. User Features
- **Public Access:** All pages accessible without authentication
- **Free Trial:** 1 free exam attempt for non-authenticated users
- **Telegram Authentication:** Simple phone-based authentication via Telegram bot (@yol_qoidasi_uz_bot)
- **Unlimited Access:** Authenticated users get unlimited exam attempts
- **Home Page (BoshSahifa):** Overview and navigation to main sections
- **Exam Simulation (Exam, RealImtihon, StandartImtihon):** Users can take simulated exams with real questions
- **Biletlar & BiletTest:** Access to ticket-based question sets and individual ticket tests
- **Statistics (TarixStatistika):** Users can view their test history and performance statistics
- **Exam Results (ExamResults):** Display results after completing an exam
- **Pro Version (ProVersiya):** Premium features for subscribed users (requires Telegram authentication)

#### 2. Authentication System
- **Telegram Bot Integration:** Real Telegram bot (@yol_qoidasi_uz_bot) for OTP-based authentication
- **OTP Verification:** 6-digit OTP codes sent via Telegram bot
- **Phone Number Verification:** Users share phone number with bot for identity verification
- **Session Management:** Secure token-based session management
- **No Email/Password:** Completely passwordless authentication system

#### 3. Admin Features
- **Password Protection:** Admin panel protected with password (default: admin123)
- **Dashboard (AdminDashboard):** Overview of system statistics and quick actions
- **Manage Tickets (AdminBilets):** CRUD operations for exam tickets
- **Manage Questions (AdminQuestions):** CRUD operations for exam questions with image upload support
- **Image Upload:** Support for both URL links and direct file upload from device (converted to base64)
- **Manage Data (AdminData):** Data management tools for admins
- **Settings (AdminSettings):** Admin configuration options
- **Admin Layout (AdminLayout):** Consistent UI for admin pages with logout functionality

#### 4. Core Components
- **Cards, Layout, Sidebar:** Reusable UI components for navigation and content display
- **State Management:** Uses store modules (`adminStore`, `authStore`, `examStore`) for global state
- **Data Layer:** Questions and tickets are managed in the `data` directory

#### 5. Technology Stack
- **Frontend:** React (TypeScript), Vite, Tailwind CSS for styling
- **Backend:** Node.js, Express, CORS
- **Telegram Integration:** node-telegram-bot-api
- **State Management:** Zustand with persistence
- **HTTP Client:** Axios
- **Build Tools:** Vite, PostCSS, Tailwind
- **Type Definitions:** Centralized in `types/index.ts`

### User Stories

1. As a visitor, I want to browse all pages without authentication
2. As a visitor, I want to take 1 free exam without registration
3. As a user, I want to authenticate via Telegram for unlimited access
4. As a user, I want to receive OTP codes via Telegram bot
5. As a user, I want to take unlimited mock exams after authentication
6. As a user, I want to see my exam history and statistics
7. As an admin, I want to upload images for questions from my device
8. As an admin, I want to manage tickets and questions
9. As an admin, I want to view system statistics and configure settings

### Authentication Flow

1. User visits website → Can access all pages
2. User tries second exam → Prompted to authenticate
3. User clicks "Kirish" → Redirected to Telegram auth page
4. User clicks "Open Bot" → Opens @yol_qoidasi_uz_bot in Telegram
5. User sends /start → Bot requests phone number
6. User shares phone → Bot sends 6-digit OTP
7. User enters OTP on website → Backend verifies
8. User authenticated → Unlimited access granted

### Acceptance Criteria

- Visitors can access all pages and take 1 free exam
- Users can authenticate via Telegram OTP system
- Authenticated users get unlimited exam attempts
- Exams simulate real test conditions and display results
- Admins can upload images from device or URL
- Admins can add, edit, and delete tickets and questions
- Admin panel is password-protected
- UI is responsive and user-friendly
- State is managed efficiently across pages
- Telegram bot responds within 1 second
- OTP codes expire after 5 minutes

### Out of Scope (Current Version)

- Payment integration for Pro version
- Real payment processing (manual for now)
- Mobile app (current scope is web only)
- Email notifications
- Multiple language support beyond Uzbek/Russian

### Technical Requirements

- Node.js 18+ required
- Telegram Bot Token needed
- Backend server runs on port 5000
- Frontend runs on port 3000
- Environment variables configured in server/.env
