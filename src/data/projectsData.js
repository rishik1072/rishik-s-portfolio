export const projectsData = [
    {
        id: 'lapse',
        title: 'Lapse',
        shortDescription: 'AI-powered productivity and focus management application featuring habit tracking, focus sessions, reminders, analytics dashboards, and AI-generated insights.',
        fullDescription: 'Lapse is an AI-powered productivity and focus companion designed to help users establish sustainable habits, run optimized focus sessions, and leverage AI insights to improve daily workflows. Built using a reactive, responsive mobile-first architecture, the system provides real-time progress syncing, detailed activity analytics, and personalized growth recommendations.',
        tags: [
            'Kotlin',
            'Firebase',
            'Firestore',
            'AI Insights',
            'Productivity API'
        ],
        gradient: 'from-purple-500 via-violet-500 to-indigo-500',
        features: [
            'Habit tracking with dynamic streaks and completion status',
            'Focus session timer utilizing customized Pomodoro techniques',
            'Smart notifications and reminders for scheduled routines',
            'Interactive analytics dashboard with charts and historical logs',
            'AI-generated insights tailored to personal productivity trends'
        ],
        challenges: [
            'Maintaining local-first state responsiveness with immediate visual updates before database confirmation',
            'Designing background notification delivery systems that reliably trigger even when the device is idle or battery-optimized',
            'Balancing raw user habit logs into concise, readable analytics dashboards without overwhelming the UI'
        ],
        solutions: [
            'Implemented optimistic UI updates in Kotlin backed by local caching and Firestore offline persistence',
            'Leveraged advanced WorkManager jobs and Firebase Cloud Messaging for robust background scheduling',
            'Designed high-fidelity micro-charts and summary cards filtering long-term trend data dynamically'
        ],
        github: 'https://github.com/RishikGorakala/lapse',

        featured: true
    },
    {
        id: 'zkp-medical',
        title: 'ZKP-Based Medical Verification System',
        shortDescription: 'Blockchain-based medical verification platform utilizing Zero-Knowledge Proof concepts for privacy-preserving authentication.',
        fullDescription: 'A modern decentralized solution for verifying medical records and health status without compromising sensitive patient data. Using advanced cryptographic Zero-Knowledge Proof (ZKP) protocols, users can prove eligibility, test results, or immunization status to third-party validators without revealing their identities or full health profiles.',
        tags: [
            'TypeScript',
            'Smart Contracts',
            'Decentralized Auth',
            'Cryptography',
            'Zero-Knowledge Proofs'
        ],
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
        features: [
            'Cryptographic proof generation preserving zero-knowledge privacy',
            'Blockchain-anchored verification for tamper-proof status checks',
            'Decentralized identity mapping with self-sovereign control',
            'Validator portal for instant scanning and cryptographic validation',
            'Self-custodial patient vault with encryption keys'
        ],
        challenges: [
            'Optimizing heavy zero-knowledge proof generation computations to run smoothly within a mobile/client browser environment',
            'Managing decentralized authentication and wallet handshakes securely without introducing developer centralization or security flaws',
            'Translating complex cryptographic status states into clean, user-friendly positive/negative verification feedback'
        ],
        solutions: [
            'Implemented lightweight snarkjs client-side proving pipelines backed by pre-compiled WASM verification keys',
            'Built multi-signature smart contract workflows with secure wallet connectors and decentralized credential keys',
            'Designed an intuitive, secure mobile scanner layout with green/red indicator states and simple verified badges'
        ],
        github: 'https://github.com/RishikGorakala/zkp-medical',

        featured: true
    },
    {
        id: 'malware-sandbox',
        title: 'Malware Analysis Sandbox',
        shortDescription: 'Docker-based malware analysis sandbox supporting isolated static and dynamic behavioral analysis environments.',
        fullDescription: 'A secure, automated environment built to perform static and dynamic analysis on suspicious binaries and scripts. Operating entirely within highly isolated, ephemeral container environments, the platform monitors system calls, network activity, and filesystem modifications to identify malicious indicators safely.',
        tags: [
            'Python',
            'Docker',
            'Flask',
            'Linux Containers',
            'Behavioral Analysis',
            'Sandbox'
        ],
        gradient: 'from-pink-500 via-rose-500 to-indigo-500',
        features: [
            'Isolated ephemeral sandboxing environments using automated Docker management',
            'Static analysis pipeline parsing PE headers, string signatures, and entropy rates',
            'Dynamic behavioral monitoring tracking system calls and file system writes',
            'Interactive control panel displaying network packet analysis and activity graphs',
            'Automated threat classification reports mapping findings to the MITRE ATT&CK framework'
        ],
        challenges: [
            'Preventing malware from detecting that it is executing inside a sandbox (vm detection techniques) and shutting down',
            'Ensuring absolute network isolation of the runtime environment while still capturing DNS queries and network calls safely',
            'Managing safe real-time data streaming of massive runtime activity logs to the main Flask control dashboard'
        ],
        solutions: [
            'Developed advanced anti-evasion hooks and custom kernel telemetry layers to emulate realistic system characteristics',
            'Built a custom private virtual network with simulated Internet services (using tools like InetSim) that logs all outgoing telemetry',
            'Leveraged asynchronous Celery workers and WebSockets (Socket.IO) to push activity stream packets efficiently'
        ],
        github: 'https://github.com/RishikGorakala/malware-sandbox',

        featured: true
    },
    {
        id: 'daily-tools',
        title: 'Daily Tools',
        shortDescription: 'Productivity platform containing calculators, converters, and utility tools with responsive cross-device UI.',
        fullDescription: 'Daily Tools is a clean, hyper-responsive utility toolkit aggregating the most common converters, numerical calculators, developer tools, and formatting utilities in a beautiful, cohesive bento-style user interface. Formatted for speed and cross-device accessibility, it handles tasks with zero lag and offline capability.',
        tags: [
            'HTML',
            'CSS',
            'TypeScript',
            'Responsive Design',
            'Bento UI',
            'Local-First'
        ],
        gradient: 'from-cyan-500 via-sky-500 to-blue-500',
        features: [
            'Diverse unit, base, and currency converters with instant conversion',
            'Developer tool suite including string encoders, hash generators, and formatting tools',
            'Polished bento-grid user interface with elegant hover states and theme transitions',
            'Full offline operational support powered by modern service workers',
            'Cross-device fluid layout adapting perfectly from smartwatch screens to high-res displays'
        ],
        challenges: [
            'Creating a layout that feels balanced and premium across drastically different screen aspect ratios',
            'Achieving zero latency conversion results while typing without causing thread blocking or key lag',
            'Maintaining complete local-first operations and offline asset serving without external libraries'
        ],
        solutions: [
            'Engineered a custom CSS Grid configuration adapting bento positions dynamically based on screen width queries',
            'Utilized lightweight, optimized arithmetic algorithms and native TypeScript processing for instant calculations',
            'Configured a custom Progressive Web App (PWA) manifest and caching service worker for absolute offline execution'
        ],
        github: 'https://github.com/RishikGorakala/daily-tools',

        featured: true
    }
];