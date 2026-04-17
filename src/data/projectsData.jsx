import { Cpu, Database, Shield, Server, Smartphone, Globe, Bell, Terminal, Code2 } from 'lucide-react';
import React from 'react';

export const projectsData = {
    "hr-payroll": {
        title: "Multi-Tenant HR & Payroll System",
        subtitle: "Enterprise SaaS | Spring Boot • PostgreSQL • Azure • Docker",
        description: "A comprehensive cloud-based payroll automation platform designed for handling multiple organizations with strict data isolation. The system automates monthly payroll submissions, casual attendance tracking, and historical record management.",
        images: [
            { src: "/assets/projects/payroll-login.png", title: "Secure Portal", desc: "Premium multi-tenant login gate with end-to-end encryption." },
            { src: "/assets/projects/payroll-reports.png", title: "Compliance Hub", desc: "Automated monthly payroll submission and period management." },
            { src: "/assets/projects/payroll-dashboard.png", title: "Executive Dashboard", desc: "High-level overview of annual and monthly payroll statistics." }
        ],
        features: [
            "Dynamic Datasource Routing for strict tenant isolation.",
            "OAuth2.0/OIDC & JWT authentication with RBAC.",
            "Azure Document Intelligence for automated data extraction.",
            "Redis-based caching for high-performance API responses.",
            "Automated PDF report generation and history tracking.",
            "Casual attendance management for labor workforces."
        ],
        techStack: [
            { icon: <Cpu className="w-5 h-5 text-primary" />, name: "Java Spring Boot", desc: "Backend Microservices" },
            { icon: <Database className="w-5 h-5 text-green-500" />, name: "PostgreSQL", desc: "Enterprise Database" },
            { icon: <Shield className="w-5 h-5 text-accent" />, name: "Spring Security", desc: "OAuth2.0 & JWT" },
            { icon: <Server className="w-5 h-5 text-secondary" />, name: "Azure Cloud", desc: "AI & Infrastructure" }
        ],
        links: {
            github: "https://github.com/mhdnaseeel/Payroll_Automation",
            live: "https://workflowautomation.vercel.app/"
        }
    },
    "pinbridge": {
        title: "PinBridge: Device Connectivity Bridge",
        subtitle: "Real-time SMS Mirroring | Kotlin • Manifest V3 • Node.js",
        description: "Get OTPs from your Android phone on your computer instantly and securely. PinBridge mirrors one-time passwords (OTPs) received via SMS on your Android device to your Chrome browser in real-time, eliminating device switching during authentication.",
        images: [
            { src: "/assets/projects/pinbridge-web-1.jpg", title: "Web: Secure Entry", desc: "Universal web dashboard locked behind encrypted cloud authentication." },
            { src: "/assets/projects/pinbridge-web-2.png", title: "Web: Control Center", desc: "Live terminal displaying active verification codes and device health (Privacy Secured)." },
            { src: "/assets/projects/pinbridge-extension-1.png", title: "Extension: Interface", desc: "Lightweight browser side-panel for instant access to bridged data." },
            { src: "/assets/projects/pinbridge-extension-2.png", title: "Extension: Bridge", desc: "QR-based pairing portal linking browser to encrypted Android signals (Privacy Secured)." },
            { src: "/assets/projects/pinbridge-extension-3.png", title: "Extension: Mirroring", desc: "Real-time OTP interception with one-click copy and sync functionality." },
            { src: "/assets/projects/pinbridge-mobile-1.jpg", title: "Mobile: Identity", desc: "Android-native Google Sign-In to establish secure multi-device ownership." },
            { src: "/assets/projects/pinbridge-mobile-2.png", title: "Mobile: Encryption", desc: "AES-256-GCM key generation and pairing status (Privacy Secured)." },
            { src: "/assets/projects/pinbridge-mobile-3.jpg", title: "Mobile: Heartbeat", desc: "Background service monitoring SMS and transmitting encrypted payloads." }
        ],
        features: [
            "End-to-End Encryption using AES-256-GCM architecture.",
            "Real-Time Sync via Socket.IO and Firebase Cloud Messaging.",
            "Auto-Fill support for seamless web authentication.",
            "Background Sync resilient to system reboots and outages.",
            "Live Presence monitoring (Online/Offline/Charging status).",
            "Desktop Notifications for instant OTP awareness."
        ],
        techStack: [
            { icon: <Smartphone className="w-5 h-5 text-primary" />, name: "Kotlin (Android)", desc: "Compose & Hilt" },
            { icon: <Terminal className="w-5 h-5 text-green-500" />, name: "Node.js (Server)", desc: "Socket.IO & Redis" },
            { icon: <Code2 className="w-5 h-5 text-accent" />, name: "Chrome Extension", desc: "Manifest V3 & Webpack" },
            { icon: <Shield className="w-5 h-5 text-secondary" />, name: "Firebase", desc: "Firestore & Cloud Functions" }
        ],
        links: {
            github: "https://github.com/mhdnaseeel/PinBridge",
            live: "https://pin-bridge.vercel.app"
        }
    }
};
