export const bannerSlides = [
  {
    tone: 'home',
    eyebrow: 'Solar Energy Solutions in Assam',
    title: 'Powering Assam with Smart Solar Energy Solutions',
    copy: 'Royall Solar delivers residential, commercial, and industrial solar systems across Assam, helping customers reduce electricity costs with reliable clean energy.',
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
    id: 'solar-panels',
    title: 'Solar Panels',
    description: 'High-efficiency solar panels designed to maximize energy generation and long-term savings. Suitable for residential rooftops, commercial buildings and industrial facilities.',
    image: '/assets/products/mono_panel.png',
    features: [
      'High energy output',
      'Durable weather-resistant design',
      'Long operational lifespan',
      'Trusted industry brands'
    ]
  },
  {
    id: 'solar-inverters',
    title: 'Solar Inverters',
    description: 'Advanced solar inverters that efficiently convert solar energy into usable electricity while ensuring stable system performance.',
    image: '/assets/products/shinex.png',
    features: [
      'Efficient energy conversion',
      'Smart monitoring capabilities',
      'Reliable performance',
      'Residential and commercial applications'
    ]
  },
  {
    id: 'hybrid-solar-inverters',
    title: 'Hybrid Solar Inverters',
    description: 'Intelligent hybrid systems combining solar energy, battery storage and grid power to provide uninterrupted electricity.',
    image: '/assets/products/gamma_pcu.png',
    features: [
      'Solar plus battery integration',
      'Backup during power outages',
      'Energy optimization',
      'Smart power management'
    ]
  },
  {
    id: 'solar-batteries',
    title: 'Solar Batteries',
    description: 'Reliable tubular and lithium battery solutions for energy storage and dependable backup power.',
    image: '/assets/products/battery.png',
    features: [
      'Long backup duration',
      'Deep cycle performance',
      'Low maintenance',
      'Enhanced reliability'
    ]
  },
  {
    id: 'online-ups',
    title: 'Online UPS Systems',
    description: 'Uninterrupted power supply solutions for homes, offices, hospitals, educational institutions and industrial facilities.',
    image: '/assets/products/lithium_cat.png',
    features: [
      'Instant power backup',
      'Equipment protection',
      'Stable power delivery',
      'Business continuity support'
    ]
  },
  {
    id: 'solar-pumps',
    title: 'Solar Water Pumps',
    description: 'Energy-efficient solar-powered pumping systems designed for agriculture, irrigation and rural water supply applications.',
    image: '/assets/products/gamma_pcu.png',
    features: [
      'Reduced operating costs',
      'Sustainable water management',
      'Reliable operation',
      'Ideal for remote locations'
    ]
  },
  {
    id: 'solar-street-lights',
    title: 'Solar Street Lights',
    description: 'Eco-friendly, integrated, and all-in-one solar street lighting systems for pathways, parks, roads, and security lighting across Assam.',
    image: '/assets/products/street_light.png',
    features: [
      'Auto dusk-to-dawn operation',
      'High-brightness LED output',
      'Maintenance-free lithium battery',
      'Weatherproof IP65/IP66 enclosure'
    ]
  },
  {
    id: 'residential-solutions',
    title: 'Residential Solar Solutions',
    description: 'Customized rooftop solar systems designed to reduce electricity bills and increase energy independence for homeowners.',
    image: '/assets/products/rooftop_cat.png',
    features: [
      'Save up to 90% on electricity bills',
      'Government subsidy benefits',
      '24/7 solar power backup options',
      'Professional installation support'
    ]
  },
  {
    id: 'commercial-industrial-solutions',
    title: 'Commercial & Industrial Solar Solutions',
    description: 'Scalable solar projects engineered to help businesses reduce energy expenses and improve long-term operational efficiency.',
    image: '/assets/products/mono_panel.png',
    features: [
      'Lower business operating expenses',
      'High return on investment (ROI)',
      'Custom project engineering',
      'Accelerated depreciation benefits'
    ]
  }
];

export const heroHighlights = [
  { value: 'Homes', label: 'Residential Solar', detail: 'Rooftop systems for homes and residential properties.' },
  { value: 'Business', label: 'Commercial Solar', detail: 'Scalable systems for offices, shops, hotels, and institutions.' },
  { value: 'Industry', label: 'Industrial Solar', detail: 'High-capacity projects for large energy requirements.' },
  { value: 'Support', label: 'Installation & Care', detail: 'End-to-end installation and maintenance across Assam.' },
];

export const trustPoints = [
  { title: 'Quality Products', detail: 'We source only high-efficiency panels and certified components from leading global manufacturers to ensure maximum power generation.' },
  { title: 'Certified Installation', detail: 'Our experienced, certified solar technicians design and install standard-compliant systems with strict quality control.' },
  { title: 'Reliable Support', detail: 'Enjoy peace of mind with 24/7 client assistance, active monitoring, and local maintenance support whenever you need it.' },
  { title: 'Customized Energy Solutions', detail: 'We engineer custom rooftop, off-grid, and hybrid configurations tailored to your specific monthly energy loads and budget.' },
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
  { step: 1, title: 'Energy Assessment', desc: 'Evaluate consumption patterns and site suitability.' },
  { step: 2, title: 'System Design', desc: 'Create a customized solar solution tailored to customer requirements.' },
  { step: 3, title: 'Installation', desc: 'Professional installation with strict quality and safety standards.' },
  { step: 4, title: 'Monitoring & Support', desc: 'Ongoing support and maintenance to ensure peak system performance.' },
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
    name: 'Residential Customer, Jorhat',
    text: 'Royall Solar designed a rooftop solar system for our home and explained every step clearly. Our monthly electricity cost has reduced, and the installation team was professional.',
  },
  {
    name: 'Hotel Owner, Guwahati',
    text: 'We needed a dependable commercial solar solution to control rising power expenses. Royall Solar delivered a neat installation and practical guidance for long-term savings.',
  },
  {
    name: 'Business Customer, Dibrugarh',
    text: 'The team helped us choose the right hybrid solar setup with battery backup. Their support after installation has been responsive and reassuring.',
  },
];

export const featuredKits = [
  {
    id: 1,
    name: 'Residential rooftop solar systems for homes across Assam',
    image: '/assets/products/shinex.png',
    link: '#',
    badge: 'Residential'
  },
  {
    id: 2,
    name: 'Commercial solar systems for offices, hotels, shops, and institutions',
    image: '/assets/products/shinex.png',
    link: '#',
    badge: 'Commercial'
  },
  {
    id: 3,
    name: 'Industrial solar projects for high-capacity energy requirements',
    image: '/assets/products/gamma_pcu.png',
    link: '#',
    tag: 'Custom project planning'
  },
  {
    id: 4,
    name: 'Hybrid solar systems with batteries and grid connectivity',
    image: '/assets/products/shinex.png',
    link: '#',
    tag: 'Reliable backup power'
  },
  {
    id: 5,
    name: 'Solar water pumps for agriculture and rural applications',
    image: '/assets/products/gamma_pcu.png',
    link: '#',
    tag: 'Agricultural solutions'
  },
  {
    id: 6,
    name: 'Solar inverters, batteries, and online UPS power backup',
    image: '/assets/products/shinex.png',
    link: '#',
    discount: 'Support',
    tag: 'Leading brand options'
  }
];
export const topSellingInverters = [
  {
    id: 1,
    name: 'On-grid solar inverter solutions for rooftop solar systems',
    image: '/assets/products/gamma_pcu.png',
    originalPrice: 'Grid connected',
    price: 'Call for proposal',
    discount: 'Solar',
    tag: 'Designed for energy savings'
  },
  {
    id: 2,
    name: 'Off-grid solar inverter systems for independent power',
    image: '/assets/products/shinex.png',
    originalPrice: 'Battery backed',
    price: 'Call for proposal',
    discount: 'Backup',
    tag: 'Useful for remote and low-grid areas'
  },
  {
    id: 3,
    name: 'Hybrid solar inverter systems for uninterrupted power',
    image: '/assets/products/gamma_pcu.png',
    originalPrice: 'Solar + grid + battery',
    price: 'Call for proposal',
    discount: 'Hybrid',
    tag: 'Balanced savings and reliability'
  },
  {
    id: 4,
    name: 'Residential solar power backup with batteries',
    image: '/assets/products/shinex.png',
    originalPrice: 'Home power',
    price: 'Call for proposal',
    discount: 'Home',
    tag: 'Reliable backup for everyday use'
  },
  {
    id: 5,
    name: 'Commercial inverter and UPS power continuity solutions',
    image: '/assets/products/gamma_pcu.png',
    originalPrice: 'Business power',
    price: 'Call for proposal',
    discount: 'UPS',
    tag: 'Built for offices and institutions'
  },
  {
    id: 6,
    name: 'Battery storage options from trusted power brands',
    image: '/assets/products/gamma_pcu.png',
    originalPrice: 'Storage',
    price: 'Call for proposal',
    discount: 'Battery',
    tag: 'Tubular, lithium, and backup options'
  },
  {
    id: 7,
    name: 'High-capacity industrial solar inverter planning',
    image: '/assets/products/shinex.png',
    originalPrice: 'Industrial',
    price: 'Call for proposal',
    discount: 'Project',
    tag: 'Engineered for large energy loads'
  },
  {
    id: 8,
    name: 'Solar maintenance and performance support services',
    image: '/assets/products/lithium_cat.png',
    originalPrice: 'After-sales',
    price: 'Call for support',
    discount: 'Care',
    tag: 'Keep systems running efficiently'
  }
];

export const topSellingPCUs = [
  {
    id: 1,
    name: 'UTL solar inverters and power backup products',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  },
  {
    id: 2,
    name: 'Luminous inverters, batteries, and UPS solutions',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  },
  {
    id: 3,
    name: 'Livguard solar and power storage solutions',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  },
  {
    id: 4,
    name: 'Exide batteries for dependable backup performance',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  },
  {
    id: 5,
    name: 'Microtek online UPS and inverter systems',
    image: '/assets/products/shinex.png',
    tag: 'Leading brand'
  },
  {
    id: 6,
    name: 'Havells solar and electrical power products',
    image: '/assets/products/shinex.png',
    tag: 'Leading brand'
  },
  {
    id: 7,
    name: 'Waaree solar panels and rooftop solar components',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  },
  {
    id: 8,
    name: 'Adani Solar panels and other trusted manufacturers',
    image: '/assets/products/gamma_pcu.png',
    tag: 'Leading brand'
  }
];
