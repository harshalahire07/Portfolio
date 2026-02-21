export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  role: string;
  highlights: string[];
  github: string | null;
  live?: string;
  badge?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "dr-precaution",
    title: "Dr. Precaution",
    subtitle: "Disease Prediction System",
    description:
      "A machine learning-powered web app that predicts diseases from symptoms using trained classification models and provides actionable precautions.",
    longDescription:
      "Dr. Precaution is a Django-based full-stack web application that predicts diseases based on user-reported symptoms using trained ML classification models (Decision Tree, Naive Bayes). The system analyzes symptom input, applies feature engineering, and returns the most probable disease with recommended precautions, diet suggestions, and medication information sourced from curated medical datasets.",
    tech: [
      "Python",
      "Django",
      "Scikit-learn",
      "Pandas",
      "SQLite",
      "HTML/CSS",
      "Bootstrap",
    ],
    role: "Full Stack Developer & ML Engineer",
    highlights: [
      "Trained multiple ML classifiers (Decision Tree, Naive Bayes) with 90%+ accuracy on symptom-disease dataset",
      "Integrated disease precaution engine mapping predicted diseases to curated medical recommendations",
      "Built RESTful Django views with symptom autocomplete and multi-step symptom input UX",
      "Implemented secure user authentication with session-based access control",
      "Processed and cleaned medical CSV datasets using Pandas for model training pipeline",
    ],
    github: "https://github.com/harshalahire07/My_First_Project",
    featured: true,
  },
  {
    slug: "edgemakers-facility",
    title: "EdgeMakers Multisolutions",
    subtitle: "Facility Management System",
    description:
      "Enterprise-grade facility management platform — handling asset tracking, maintenance scheduling, staff coordination, and work order management with a REST API backend.",
    longDescription:
      "A production-deployed facility management system built for EdgeMakers Multisolutions. The system provides a centralized platform for managing assets, scheduled maintenance, work orders, and facility staff. Built with Django REST Framework for APIs consumed by a modern frontend, with PostgreSQL as the production database.",
    tech: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Python",
      "REST API",
      "JavaScript",
      "Bootstrap",
    ],
    role: "Full Stack Web Developer",
    highlights: [
      "Architected RESTful API layer with DRF serializers, ViewSets, and custom permission classes",
      "Designed normalized PostgreSQL schema for assets, work orders, and maintenance schedules",
      "Implemented JWT-based authentication with role-based access control (Admin, Staff, Viewer)",
      "Built dynamic dashboards for asset status tracking and maintenance KPIs",
      "Integrated email notification system for work order assignments using Django signals",
    ],
    github: "https://github.com/harshalahire07/EDGEMAKERS-Multisolutions",
    featured: true,
  },
  {
    slug: "django-internship-projects",
    title: "Django Internship Projects",
    subtitle: "Backend Fundamentals & Clean Architecture",
    description:
      "A curated collection of production-style Django projects built during internship — covering task management, employee records, authentication, and RESTful APIs with clean backend architecture.",
    longDescription:
      "A centralized repository of Django projects developed to demonstrate strong backend fundamentals and full-stack web development skills. The collection includes a multi-tenant Task & Workflow Management System with role-based dashboards and an Employee Management System with RESTful APIs. Each project emphasizes clean code architecture, proper Django ORM usage, authentication flows, and API design patterns learned and applied during internship experience.",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "REST API",
      "JavaScript",
      "Bootstrap",
    ],
    role: "Backend Developer",
    highlights: [
      "Built multi-tenant Task & Workflow Management System with team workspaces and role-based access",
      "Developed Employee Management System with full CRUD REST APIs and JWT authentication",
      "Applied clean Django architecture patterns — separation of concerns, modular apps, DRY principles",
      "Implemented secure authentication flows including login, registration, and token refresh",
      "Projects deployed and live at django-projects-lime.vercel.app",
    ],
    github: "https://github.com/harshalahire07/Django-Projects",
    featured: true,
    badge: "Internship Projects",
  },
  {
    slug: "smart-hydroponics",
    title: "Smart Hydroponics IoT System",
    subtitle: "Award-Winning Automated Growing System",
    description:
      "1st Prize winner at IoT Tech Fest — A fully automated hydroponics monitoring and control system using IoT sensors, real-time data streaming, and a web dashboard.",
    longDescription:
      "An end-to-end IoT solution for automated hydroponics management. The system uses Arduino/ESP32 microcontrollers to read sensor data (pH, temperature, humidity, water level, EC) and streams it to a Django backend via MQTT/HTTP. The web dashboard provides real-time charts, threshold-based automated relay control, and historical analytics.",
    tech: [
      "Arduino",
      "ESP32",
      "Python",
      "Django",
      "MQTT",
      "SQLite",
      "Chart.js",
      "REST API",
    ],
    role: "IoT Engineer & Backend Developer",
    highlights: [
      "Won 1st Prize at college IoT Tech Fest — selected from 40+ competing teams",
      "Implemented MQTT messaging between ESP32 sensors and Django consumer service",
      "Designed automated relay control logic based on configurable pH/EC sensor thresholds",
      "Built real-time WebSocket dashboard with Chart.js for live sensor data visualization",
      "Engineered fail-safe alert system with email/SMS notifications on anomalous readings",
    ],
    github: null,
    featured: true,
    badge: "🏆 1st Prize",
  },
];
