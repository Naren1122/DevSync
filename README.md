# DevSync 🚀

A real-time, multi-tenant Agile Project Management & Collaboration SaaS tailored for remote product teams. HuddleBoard isolates company workspaces while enabling instant multiplayer team updates like live board migrations, active presence indicators, and seamless local subscription logic.

---

## 🏗️ Architecture Design

HuddleBoard utilizes a decoupled dual-repository layout to maximize client-side responsiveness while providing persistent state orchestration:

*   **Frontend:** Next.js (App Router), Tailwind CSS, Shadcn UI, Formik, Yup, and `socket.io-client`.
*   **Backend:** Node.js, Express.js, `socket.io` server.
*   **Database & Auth:** PostgreSQL paired with Prisma ORM, managed multi-tenancy verified via Clerk Organizations.

---

## ⚡ Core Features

*   **Isolated Multi-Tenancy:** Automated data boundaries ensuring complete separation between organizational workspaces using Clerk Organizations middleware.
*   **Multiplayer Kanban Board:** Drag-and-drop workflow task management synchronization powered by `@hello-pangea/dnd`.
*   **Active Presence Tracking:** Live workspace participant row displaying glowing user profiles upon board initialization.
*   **Fintech Subscription Gates:** Secured local Sandbox payment handling using the Khalti ePayment Verification Lookup API.
*   **AI Standup Summarizer:** Instant manager tracking summaries aggregating past-24-hour database operations via the Gemini API.

---

## 🗺️ Phased Development Roadmap

This project was engineered systematically across five distinct development milestones:

### 📍 Phase 1: Foundation & Data Isolation
- [x] Created decoupled directory architecture: `/frontend` (Next) and `/backend` (Express).
- [x] Scaled PostgreSQL relation layout (Organizations, Users, Boards, Tasks) via Prisma ORM.
- [x] Configured Clerk authentication routing and enabled corporate workspace features.
- [x] Wrote Express validation middleware tracking request cross-header identities (`Organization-ID`).

### 📍 Phase 2: Static Board Logic & Validations
- [x] Implemented responsive dashboard sidebar and top bar primitives with Shadcn UI.
- [x] Engineered 4-stage column layouts utilizing smooth `@hello-pangea/dnd` state flows.
- [x] Tied board task updates to client-side Formik validation rules and schema hooks.
- [x] Connected components to fundamental REST API routing contexts.

### 📍 Phase 3: The WebSocket Real-Time Engine
- [x] Established stateful handshakes coupling the frontend runtime directly to Express HTTP server instances.
- [x] Implemented Socket rooms targeting specific view layers (`socket.join(boardId)`).
- [x] Intercepted drag mutations to fire `task:moved` payloads, updating structural coordinates instantly.
- [x] Created socket presence intervals transmitting connected participant rosters.

### 📍 Phase 4: Local Monetization & Verification
- [x] Registered sandbox keys inside backend profiles to handle local wallet integrations.
- [x] Connected user purchase operations directly to secure server redirect paths.
- [x] Developed server-side Axios callback routes listening for confirmation tokens.
- [x] Integrated automated PostgreSQL tenant configuration switches from `FREE` to `PRO`.

### 📍 Phase 5: UI Optimization & AI Modules
- [x] Added Optimistic UI states to eliminate perceived operational latency on card drops.
- [x] Designed background cron controllers checking closed tasks within 24-hour buckets.
- [x] Incorporated generative summaries formatting processed text updates into high-level dashboard feeds.
- [x] Successfully pushed decoupled applications to Vercel and Railway platforms.

---

## 🚀 Local Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database instance (local or hosted)
- Free Clerk and Khalti Developer accounts

### 1. Backend Configuration
 ```bash
cd huddleboard-backend
npm install

### 2.Frontend Configuration

cd huddleboard-frontend
npm install

