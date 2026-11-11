export const DATA = {
  name: 'Rishabh Kushwaha',
  first: 'Rishabh',
  photos: {
    hero: '/img/hero-suit.png',
    avatar: '/img/portrait.png',
    about: '/img/about-suit.png',
    campus: '/img/campus.jpg',
  },
  resumePdf: '/Rishabh_Kushwaha_Resume.pdf',
  email: 'rishukush08@gmail.com',
  phone: '+91 63079 14345',
  linkedin: 'https://www.linkedin.com/in/rishabh-kushwaha-19535b293/',
  github: 'https://github.com/rishabhkushwaha2406-crypto',
  location: 'Bengaluru, Karnataka',
  hometown: 'Prayagraj, Uttar Pradesh',
  synopsis:
    'A Computer Science graduate who verifies identities for a living. At Navi he checks customer documents for digital onboarding. Outside work he trains models to catch fraud and hate speech.',
  summary:
    'Detail-oriented Computer Science graduate with hands-on experience in KYC/VKYC operations, customer identity and document verification, data validation, discrepancy identification, and compliant digital onboarding at Navi.',

  experience: [
    {
      company: 'Navi Finserv',
      role: 'VKYC Associate – Product Operations',
      place: 'Bengaluru',
      when: 'Jun 2026 – Present',
      points: [
        'Perform customer identity and document verification for digital onboarding, maintaining accuracy, completeness, data integrity and confidentiality.',
        'Validate customer-provided information and documentation, identifying discrepancies and exceptions for resolution or escalation.',
        'Follow defined KYC/AML procedures, process guidelines and documentation requirements while processing verification cases.',
        'Maintain accurate customer records and complete verification within defined process timelines.',
        'Handle verification-related customer issues and coordinate with internal teams to resolve exceptions.',
      ],
    },
  ],

  projects: [
    {
      id: 'fraud',
      title: 'Credit Card Fraud Detection',
      genre: 'Thriller',
      when: 'Feb – Apr 2026',
      art: 'art-fraud',
      glyph: '₹',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
      liveUrl: 'https://credit-card-fraud-detection-wheat.vercel.app/',
      github: 'https://github.com/rishabhkushwaha2406-crypto/credit-card-fraud-detection',
      result: 'Imbalanced classification · precision, recall, F1, ROC-AUC',
      logline: 'One transaction in hundreds is a fraud. A model has to find it without crying wolf.',
      episodes: [
        'Built a machine-learning model to identify potentially fraudulent credit-card transactions.',
        'Cleaned and preprocessed transaction data and handled the heavily imbalanced fraud class.',
        'Trained and compared several classifiers, scoring them on precision, recall, F1 and ROC-AUC to reduce missed fraud.',
      ],
      facts: [
        ['Timeline', 'Feb – Apr 2026'],
        ['Focus', 'Imbalanced classification'],
        ['Metrics', 'Precision, Recall, F1, ROC-AUC'],
      ],
    },
    {
      id: 'hate',
      title: 'Breaking Digital Abuse',
      subtitle: 'Hinglish Cyberbullying Detection',
      genre: 'Drama',
      when: '2025 – 26',
      art: 'art-hate',
      glyph: '#',
      tags: ['Python', 'NLP', 'Streamlit', 'Scikit-learn', 'Hugging Face'],
      liveUrl: 'https://breaking-digital-abuse.streamlit.app/',
      embed: true,
      result: '97.2% F1 · 4,940 posts · 0.92 Kappa',
      logline:
        'B.Tech CSE final-year project at United Institute of Technology, Prayagraj. A live app that flags Hinglish cyberbullying.',
      episodes: [
        'Final-year project at United Institute of Technology, Prayagraj (2025–26): detect cyberbullying in Hinglish posts.',
        "Hand-labelled a 4,940-sample Hinglish dataset from social media, with 0.92 Cohen's Kappa agreement.",
        'Compared Linear SVM, Multinomial Naive Bayes and a fine-tuned MuRIL transformer. The SVM hit 97.2% F1, then shipped as a Streamlit demo.',
      ],
      facts: [
        ['Project', 'B.Tech CSE final year'],
        ['College', 'UIT Prayagraj'],
        ['Best model', 'Linear SVM · 97.2% F1'],
      ],
    },
    {
      id: 'finguard',
      title: 'FinGuard AI',
      subtitle: 'Financial-crime intelligence console',
      genre: 'Thriller',
      when: '2026',
      art: 'art-data',
      glyph: '₹',
      tags: ['JavaScript', 'React', 'AML', 'Fraud scoring'],
      liveUrl: 'https://finguard-ai-console.vercel.app/',
      github: 'https://github.com/rishabhkushwaha2406-crypto/finguard-ai-console',
      result: 'In-browser console · synthetic data · AML, fraud, cases',
      logline:
        'A live console for transaction monitoring, AML rules, fraud scoring, customer risk and case management.',
      episodes: [
        'Built an interactive financial-crime console: transaction monitoring, AML rules, fraud scoring, customer risk, graph analytics and case management.',
        'Added a rule-based AI copilot. Roles are a demo switch, and every screen runs in the browser.',
        'The benchmark uses a PaySim-style simulator, or a local PaySim / credit-card fraud CSV that never leaves the machine.',
      ],
      facts: [
        ['Runs in', 'The browser'],
        ['Data', 'Synthetic · never uploaded'],
        ['Covers', 'AML, fraud, cases, graph'],
      ],
    },
  ],

  skills: [
    {
      name: 'KYC & Compliance',
      note: 'The day job',
      color: '#7a0d1b',
      items: [
        'KYC Verification',
        'VKYC',
        'Identity Verification',
        'Document Verification',
        'Customer Due Diligence',
        'AML Process Awareness',
        'Information Validation',
        'Customer Onboarding',
        'Case Documentation',
        'Process Compliance',
      ],
    },
    {
      name: 'Risk & Operations',
      note: "Spotting what doesn't add up",
      color: '#1b5f5c',
      items: [
        'Discrepancy Identification',
        'Exception Handling',
        'Case Review',
        'Data Validation',
        'Pattern Recognition',
        'Anomaly Detection',
        'Issue Escalation',
        'Record Maintenance',
      ],
    },
    {
      name: 'Data & Tools',
      note: 'Where the analysis happens',
      color: '#8a5d14',
      items: [
        'MS Excel',
        'Google Sheets',
        'SQL',
        'MySQL',
        'Python',
        'Pandas',
        'Scikit-learn',
        'PyTorch',
        'Hugging Face',
      ],
    },
    {
      name: 'Communication',
      note: 'Talking to customers and teams',
      color: '#3b2f63',
      items: ['Customer Communication', 'Written Documentation', 'English', 'Hindi'],
    },
  ],

  awards: [
    {
      sel: 'Winner',
      big: '2nd Place',
      sub: 'Cybersecurity Challenge · Security Fundamentals & Threat Defense Bootcamp, MNNIT 2025',
    },
    {
      sel: 'Best performance',
      big: '97.2% F1',
      sub: 'Linear SVM on held-out Hinglish hate-speech data',
    },
    {
      sel: 'Data quality',
      big: '0.92 Kappa',
      sub: 'Inter-annotator agreement on a hand-labelled dataset',
    },
    {
      sel: 'Graduated',
      big: '81.09%',
      sub: 'B.Tech, Computer Science & Engineering, AKTU 2026',
    },
  ],

  certs: [
    {
      name: 'Diploma in Fraud Management & Anti-Money Laundering Awareness',
      by: 'Alison',
      year: '2026',
    },
    {
      name: 'Tata GenAI Data Analytics Virtual Experience Program',
      by: 'Forage',
      year: '2025',
    },
    {
      name: 'Machine Learning Course',
      by: 'Soft Pro India',
      year: '2024',
    },
  ],

  seasons: [
    {
      title: 'The Beginning',
      span: '2018 – 2019',
      art: 'art-journey',
      eps: [
        {
          t: 'High School',
          d: 'Bishop Johnson School, Prayagraj. Finished with 88.67%.',
          w: '2018 – 2019',
        },
      ],
    },
    {
      title: 'Choosing a Path',
      span: '2020 – 2021',
      art: 'art-skill',
      eps: [
        {
          t: 'Intermediate',
          d: 'Erny Memorial School, Prayagraj. Finished with 78.21%.',
          w: '2020 – 2021',
        },
      ],
    },
    {
      title: 'Engineering',
      span: '2022 – 2026',
      photo: 'campus',
      caption: 'On campus · UIT Prayagraj',
      eps: [
        {
          t: 'B.Tech begins',
          d: 'Computer Science & Engineering at United Institute of Technology, AKTU.',
          w: '2022',
        },
        {
          t: 'Learning machine learning',
          d: 'Machine Learning course with Soft Pro India.',
          w: '2024',
        },
        {
          t: 'Second place at MNNIT',
          d: 'Cybersecurity Challenge at the Security Fundamentals & Threat Defense Bootcamp.',
          w: '2025',
        },
        {
          t: 'Tata GenAI Data Analytics',
          d: 'Virtual experience program on Forage.',
          w: '2025',
        },
        {
          t: 'The Hinglish dataset',
          d: 'Team project: hand-labelled 4,940 posts and built a hate-speech classifier.',
          w: 'Aug 2025 – Jan 2026',
        },
        {
          t: 'Chasing fraud',
          d: 'Built a credit-card fraud detection model.',
          w: 'Feb – Apr 2026',
        },
        {
          t: 'Graduation',
          d: 'B.Tech completed with 81.09%. Diploma in Fraud Management & AML from Alison.',
          w: '2026',
        },
      ],
    },
    {
      title: 'Building Real Experience',
      span: '2026 – Now',
      now: true,
      photo: 'hero',
      caption: 'Now streaming · Navi',
      eps: [
        {
          t: 'Joining Navi',
          d: 'VKYC Associate in Product Operations, Bengaluru. Verifying identities and documents for digital onboarding.',
          w: 'Jun 2026 – Present',
          now: true,
        },
      ],
    },
  ],

  picks: [
    {
      title: 'The Verifier',
      tag: 'Now streaming',
      art: 'art-ver',
      line: "Checks every document twice. Flags what doesn't match before it becomes a problem.",
      tags: ['KYC', 'VKYC', 'CDD'],
      detail:
        'Day to day at Navi, Rishabh verifies customer identities and documents for digital onboarding, following KYC/AML procedures and escalating exceptions.',
      list: [
        'Identity and document verification',
        'Discrepancy and exception handling',
        'Accurate, confidential record keeping',
      ],
    },
    {
      title: 'The Fraud Hunter',
      tag: 'Original',
      art: 'art-fraud',
      line: 'Teaches models to spot the one bad transaction in a crowd of good ones.',
      tags: ['Python', 'Scikit-learn', 'AML'],
      detail:
        'Pairs compliance training with hands-on machine learning: a fraud-detection model and a diploma in fraud management and AML awareness.',
      list: [
        'Imbalanced classification',
        'Precision and recall trade-offs',
        'Fraud & AML diploma (Alison, 2026)',
      ],
    },
    {
      title: 'The Data Detective',
      tag: 'Fan favourite',
      art: 'art-data',
      line: 'Turns messy data into clean answers with SQL, Pandas and patience.',
      tags: ['SQL', 'Pandas', 'Excel'],
      detail:
        'From hand-labelling 4,940 posts to cleaning transaction data, Rishabh is comfortable with the unglamorous work that makes analysis trustworthy.',
      list: [
        'Data validation and cleaning',
        'Pattern recognition and anomaly detection',
        'SQL, MySQL, Excel, Google Sheets',
      ],
    },
  ],
}

export const PROFILES = {
  rishabh: {
    label: 'Rishabh',
    tag: 'MAIN',
    cls: 'av-me',
    photo: true,
    note: 'The full series, in order',
    order: ['about', 'journey', 'originals', 'skills', 'awards', 'story', 'picks'],
  },
  recruiter: {
    label: 'Recruiter',
    cls: 'av-rec',
    letter: 'R',
    note: 'Resume, awards and skills first',
    order: ['story', 'awards', 'skills', 'journey', 'originals', 'picks', 'about'],
  },
  analyst: {
    label: 'Analyst',
    cls: 'av-ana',
    letter: 'A',
    glyph: '</>',
    note: 'Projects, data skills and tools first',
    order: ['originals', 'skills', 'picks', 'awards', 'story', 'journey', 'about'],
  },
}

export const SECTIONS = {
  story: { label: 'The Full Story', nav: 'Resume', art: 'art-story', hint: 'The resume as a screenplay' },
  originals: { label: 'Originals', nav: 'Projects', art: 'art-fraud', hint: 'Three live projects' },
  skills: { label: 'Skill Universe', nav: 'Skills', art: 'art-skill', hint: '31 skills in 4 genres' },
  awards: { label: 'Award Season', nav: 'Awards', art: 'art-award', hint: 'Wins, scores and certificates' },
  journey: { label: 'My Journey', nav: 'Journey', photo: 'campus', hint: 'Four seasons, 2018 to now' },
  about: { label: 'About Me', nav: 'About', photo: 'about', hint: 'The lead, in his own words' },
  picks: { label: 'Top Picks', nav: 'Roles', art: 'art-ver', hint: 'Three roles he fits' },
}

export const ART = {
  'art-fraud': 'radial-gradient(120% 90% at 85% 10%, #ff3b4f 0%, #9b0b1d 35%, #2a060b 75%)',
  'art-hate': 'radial-gradient(120% 90% at 15% 15%, #f0b443 0%, #a4521a 40%, #241109 80%)',
  'art-story': 'linear-gradient(135deg,#2b0a10 0%,#7a0d1b 55%,#e3122a 120%)',
  'art-skill': 'radial-gradient(110% 100% at 80% 20%, #2bb3a8 0%, #0f4e4a 45%, #0b1414 85%)',
  'art-award': 'radial-gradient(110% 100% at 50% 0%, #f2cd78 0%, #8f6420 45%, #1d140a 85%)',
  'art-journey': 'linear-gradient(160deg,#44344f 0%,#1d1622 60%,#0e0b10 100%)',
  'art-ver': 'linear-gradient(140deg,#1f8a86 0%,#103c3a 60%,#0b1312 100%)',
  'art-data': 'radial-gradient(120% 100% at 90% 90%, #6d7cff 0%, #26265e 45%, #0d0c18 85%)',
}

