export const bannerSlides = [
  {
    tone: 'home',
    eyebrow: 'Save Money on Electricity',
    title: 'Install Rooftop Solar in Assam and Reduce Your Bills by 90%',
    copy: 'Lower your monthly current bill with government-approved solar systems. We help you with PM Surya Ghar subsidy, local installation, and 25 years of service support.',
  },
];

export const solarSolutions = [
  {
    id: 'on-grid',
    title: 'On-Grid Solar Systems',
    tagline: 'Save up to 90% on Electricity Bills',
    description: 'On-grid or grid-tie solar systems are the most popular for residential and commercial buildings. They are connected to the main electricity grid and allow you to export excess energy back to the government.',
    howItWorks: [
      { step: 'Generation', title: 'Sun to DC', desc: 'Solar panels convert sunlight into DC electricity during the day.' },
      { step: 'Conversion', title: 'ShineX Inverter', desc: 'RoyallSolar ShineX Inverters convert DC into high-quality AC for your home.' },
      { step: 'Consumption', title: 'Self Use', desc: 'Your home appliances use solar power first, reducing grid intake.' },
      { step: 'Export', title: 'Net Metering', desc: 'Excess energy is sent to the grid via a bi-directional Net-Meter.' },
      { step: 'Savings', title: 'Bill Deduction', desc: 'The exported energy is deducted from your monthly electricity bill.' },
    ],
    products: [
      { name: 'RoyallSolar ShineX (1Ph)', spec: '1kW to 5kW', ideal: 'Small/Medium Homes', icon: 'zap' },
      { name: 'RoyallSolar ShineX (3Ph)', spec: '5kW to 50kW', ideal: 'Large Homes/Offices', icon: 'zap' },
      { name: 'RoyallSolar Mono DCR Panels', spec: 'Subsidy Approved', ideal: 'Residential Projects', icon: 'panels' },
    ],
    benefits: [
      'Huge savings on electricity bills',
      'Government subsidy up to ₹78,000 (PM Surya Ghar)',
      'Low maintenance (No batteries required)',
      'Net-metering benefit (Earn from extra power)',
    ],
    subsidyInfo: {
      title: 'PM Surya Ghar: Muft Bijli Yojana',
      details: [
        '₹30,000 per kW for 1st & 2nd kW',
        '₹18,000 for the 3rd kW',
        'Total ₹78,000 max subsidy',
      ]
    },
    image: '/assets/installations/home_solar.jpg',
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Solar Systems',
    tagline: 'Complete Power Independence 24/7',
    description: 'Off-grid systems are independent of the electricity grid. They use solar batteries to store power for use during the night or during power cuts. Perfect for remote areas in Assam.',
    howItWorks: [
      { step: 'Solar Power', title: 'Energy Harvest', desc: 'Panels generate DC electricity from morning to evening.' },
      { step: 'Smart PCU', title: 'Gamma+ Management', desc: 'RoyallSolar Gamma+ PCU runs loads and charges batteries simultaneously.' },
      { step: 'Storage', title: 'UST Batteries', desc: 'Energy is stored in RoyallSolar UST C10 tubular batteries for night use.' },
      { step: 'Reliable Backup', title: '24/7 Power', desc: 'When sun is down, PCU draws power from batteries to run home.' },
    ],
    products: [
      { name: 'Gamma+ rMPPT PCU', spec: '1kVA to 2kVA', ideal: 'Homes with High Sun', icon: 'cpu' },
      { name: 'Alfa+ PCU', spec: '5kVA to 15kVA', ideal: 'Petrol Pumps/Schools', icon: 'cpu' },
      { name: 'Heliac Solar Inverter', spec: 'Budget Friendly', ideal: 'Small Shop/Home', icon: 'inverter' },
      { name: 'UST C10 Batteries', spec: 'Solar Tubular', ideal: 'Deep Discharge Support', icon: 'battery' },
    ],
    benefits: [
      'Complete power independence',
      'Works during total grid failure',
      'No monthly electricity bills',
      'Reliable power for remote locations',
    ],
    image: '/assets/installations/backup_system.jpg',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Solar Systems',
    tagline: 'Smart Priority Modes: Solar, Grid & Battery',
    description: 'Hybrid systems are connected to the grid and also have battery backup. They prioritize using solar power, store excess in batteries, and can also feed extra power back to the grid.',
    priorityModes: [
      { mode: 'PCU Mode', priority: 'Solar → Battery → Grid', use: 'Maximum Savings' },
      { mode: 'Smart Mode', priority: 'Solar/Battery (Day) → Grid (Night)', use: 'Balanced Performance' },
      { mode: 'Hybrid Mode', priority: 'Grid → Solar → Battery', use: 'Low Sun/Winter Season' },
    ],
    howItWorks: [
      { step: 'Solar First', title: 'Self Power', desc: 'Panels power the home and charge the batteries.' },
      { step: 'Grid Export', title: 'Bill Savings', desc: 'Once batteries are full, excess solar is exported via Net-Meter.' },
      { step: 'Emergency Backup', title: 'Zero Downtime', desc: 'If grid fails, system switches to Battery mode instantly.' },
    ],
    products: [
      { name: 'Sigma Pro Hybrid', spec: 'Net-Metering Support', ideal: 'Urban Homes/Clinics', icon: 'cpu' },
      { name: 'Sigma+ rMPPT', spec: '30% More Extraction', ideal: 'Heavy Load Backup', icon: 'cpu' },
      { name: 'Zeta Hybrid', spec: 'Up to 50kVA', ideal: 'Industries/Hospitals', icon: 'factory' },
    ],
    benefits: [
      'Electricity bill savings (Net-metering)',
      'Battery backup during power cuts',
      'Smart power management modes',
      'High reliability for critical loads',
    ],
    image: '/assets/installations/home_solar.jpg',
  },
];

export const productCategories = [
  {
    id: 'rooftop',
    navLabel: 'SOLAR SYSTEMS',
    title: 'Solar Power Systems',
    description: 'Complete On-grid, Off-grid, and Hybrid solar solutions for homes and businesses.',
    features: ['Bill Savings', 'Battery Backup', 'Govt. Subsidy'],
    image: '/assets/installations/home_solar.jpg',
    subcategories: ['On-Grid Systems', 'Off-Grid Systems', 'Hybrid Systems'],
  },
  {
    id: 'pumps',
    navLabel: 'SOLAR PUMPS',
    title: 'Solar Water Pumps',
    description: 'Ideal for agricultural and rural use in Assam. Reliable water supply without fuel costs.',
    features: ['No Electricity Needed', 'Low Maintenance', 'High Water Yield'],
    image: '/assets/installations/solar_pump.jpg',
    subcategories: ['DC Surface Pumps', 'Submersible Pumps', 'Farming Solutions'],
  },
  {
    id: 'lighting',
    navLabel: 'STREET LIGHTS',
    title: 'Solar Street Lights',
    description: 'Automatic lighting for gardens, streets, and commercial premises.',
    features: ['Auto On/Off', 'No Wiring Required', 'Weather Proof'],
    image: '/assets/installations/street_light.jpg',
    subcategories: ['All-in-One Lights', 'Semi-Integrated', 'Garden Lights'],
  },
  {
    id: 'inverters',
    navLabel: 'BACKUP SYSTEMS',
    title: 'Inverters & Batteries',
    description: 'High-quality solar inverters and batteries for long-lasting power backup.',
    features: ['Instant Backup', 'Solar Charging', 'Long Life'],
    image: '/assets/installations/backup_system.jpg',
    subcategories: ['Solar Inverters', 'Tubular Batteries', 'SMU Units'],
  },
];

export const heroHighlights = [
  { value: '90%', label: 'Bill Savings', detail: 'Huge reduction in monthly current bills.' },
  { value: 'Subsidy', label: 'Assistance', detail: 'Full help with PM Surya Ghar govt. schemes.' },
  { value: 'Local', label: 'Support', detail: 'Based in Assam for fast service and repair.' },
  { value: '25 Yrs', label: 'Panel Life', detail: 'High-quality panels built to last for decades.' },
];

export const trustPoints = [
  { title: 'Local Assam Team', detail: 'We are based in Sonari, Charaideo. We understand local conditions and provide fast on-ground service.' },
  { title: 'Subsidy Assistance', detail: 'We handle the paperwork for PM Surya Ghar and other government schemes for your peace of mind.' },
  { title: 'Genuine Products', detail: 'We only use top brands like Adani, Waaree, and Loom Solar to ensure long-term performance.' },
  { title: 'Professional Fitting', detail: 'Our technicians ensure strong mounting structure that can withstand heavy Assam rains and wind.' },
];

export const featuredProducts = [
  {
    tag: 'Best Seller',
    category: 'Home System',
    name: '3kW On-Grid Solar System',
    originalPrice: 'After Subsidy',
    price: 'Call for Best Price',
    details: ['Ideal for medium families', 'Covers AC & Refrigerator', 'Fast ROI in 3-4 years'],
  },
  {
    tag: 'Agricultural',
    category: 'Water Pump',
    name: '3HP Solar Submersible Pump',
    originalPrice: 'Heavy Duty',
    price: 'Call for Best Price',
    details: ['High water discharge', 'Durable structure', 'Work all day on sun'],
  },
];

export const installationProcess = [
  { step: 1, title: 'Free Site Visit', desc: 'Our engineer visits your house to check roof space and energy needs.' },
  { step: 2, title: 'Best Quotation', desc: 'We provide a clear price estimate including all subsidy benefits.' },
  { step: 3, title: 'Quick Installation', desc: 'Professional setup by our expert team in just 2-3 days.' },
  { step: 4, title: 'Subsidy & Metering', desc: 'We help you with net-metering and getting your subsidy back.' },
];

export const contactDetails = {
  carePhone: '03772-325190',
  mobilePhone: '+91 9707670101',
  whatsapp: '+91 9707670101',
  email: 'royalinfratech28@gmail.com',
  office: 'c/o Borah Bhavan, Sonari Town, Near ASTC Bus Terminus, P.O. Sonari, Charaideo, Assam - 785690',
};

export const brandPartners = ['Adani Solar', 'Waaree', 'Vikram Solar', 'Loom Solar', 'Fujiyama', 'Vsole'];

export const aboutPillars = [
  {
    title: 'Customer-First Approach',
    description: 'We design systems that solve your specific energy problems — not just sell panels.',
  },
  {
    title: 'Honest Pricing',
    description: 'We provide clear cost breakdowns so you know exactly what you are paying for, including subsidy deductions.',
  },
  {
    title: 'Local Service Promise',
    description: 'Being local means we are always available for maintenance, repairs, and system upgrades.',
  },
];

export const aboutStats = [
  { label: 'Service', value: 'Local' },
  { label: 'Products', value: 'Genuine' },
  { label: 'Support', value: '24/7' },
];

export const documentsRequired = [
  'Aadhaar Card',
  'Electricity Bill (Latest)',
  'Property Tax Receipt',
  'Bank Account Details',
  'Passport Size Photos',
];

export const testimonials = [
  {
    name: 'Homeowner, Sonari',
    text: 'My electricity bill came down from ₹3,500 to ₹400 after installing the 3kW system. Very happy with the service.',
  },
  {
    name: 'Shop Owner, Sivasagar',
    text: 'Royall Solar helped with everything — installation, subsidy papers, and net metering. Very professional team.',
  },
];
