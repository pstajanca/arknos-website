# Overview

This is a modern full-stack web application for Arknos Technologies, a data analytics consulting company. The application serves as a corporate website with a contact form system that handles client inquiries. It features a clean, professional design with a focus on data analytics services and includes email functionality to notify the company of new contact form submissions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 and TypeScript, utilizing a modern component-based architecture:
- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS styling
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
The server-side follows a RESTful API pattern using Express.js:
- **Runtime**: Node.js with TypeScript using ESM modules
- **Web Framework**: Express.js with middleware for JSON parsing, URL encoding, and request logging
- **Data Storage**: In-memory storage implementation with interfaces designed for future database integration
- **Email Service**: Nodemailer for SMTP-based email notifications
- **API Design**: RESTful endpoints with structured error handling and response logging

## Data Layer
Currently implements an in-memory storage system with a clean interface pattern:
- **Storage Interface**: Abstract IStorage interface allowing for easy database integration
- **Schema Definition**: Drizzle ORM with PostgreSQL schema definitions and Zod validation
- **Data Models**: User management and contact submission entities with proper TypeScript typing

## Development Environment
- **Hot Reload**: Vite development server with HMR for rapid development
- **TypeScript**: Strict type checking across the entire stack
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/)
- **Error Handling**: Runtime error overlay for development debugging

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Backend**: Express.js, Node.js with TypeScript support
- **Database**: Drizzle ORM configured for PostgreSQL (currently using in-memory storage)
- **Build Tools**: Vite, esbuild, PostCSS with Tailwind CSS

## UI and Styling
- **Component Library**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React icon library
- **Typography**: Google Fonts (Inter, Geist Mono, Architects Daughter, DM Sans, Fira Code)

## Third-Party Services
- **Email Service**: Nodemailer with SMTP configuration (defaults to Gmail)
- **Database Provider**: Neon Database (serverless PostgreSQL) - configured but not actively used
- **Development Tools**: Replit-specific development plugins and error handling

## Validation and Utilities
- **Schema Validation**: Zod for runtime type validation
- **Date Handling**: date-fns for date manipulation
- **Styling Utilities**: clsx and class-variance-authority for dynamic class management
- **Session Management**: connect-pg-simple for PostgreSQL session storage (prepared for future use)