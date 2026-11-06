/* ============================================================
   EDIT ONLY THIS FILE to change your website content.
   Add a project: copy one { ... } block in "projects", change the text, save.
   Photo: put your image at assets/photo.jpg. Resume: assets/Shahzad_Resume.pdf
   ============================================================ */
const DATA = {
  name: "Muhammad Shahzad",
  title: "Data Analyst & BI Specialist",
  roles: ["Data Analyst", "Power BI & Tableau Developer", "Insurance Data Specialist", "AI Data Quality Specialist"], // typing animation on Overview
  tagline: "I turn messy insurance, SaaS and operations data into dashboards and decisions people actually use.",
  status: "Open to remote roles and freelance projects",
  email: "shahzadbilal418@gmail.com",
  location: "Islamabad, Pakistan (remote)",
  photo: "assets/photo.jpeg",
  resume: "assets/Shahzad_Resume.pdf",
  formEndpoint: "", // optional: paste your Formspree URL (https://formspree.io/f/xxxx). Empty = opens email app.
  links: {
    upwork: "https://www.upwork.com/freelancers/~01cc14166b5364dd39",
    fiverr: "https://www.fiverr.com/techlystack1",
    linkedin: "https://www.linkedin.com/in/mshahzad21",
    github: "https://github.com/mshahzad021"
  },
  stats: [
    { n: 6, suffix: "+", l: "Years in data" },
    { n: 20, suffix: "+", l: "Dashboards shipped" },
    { n: 1000, suffix: "+", l: "Customers analyzed" },
    { n: 500, suffix: "K+", l: "Data points annotated" }
  ],
  about: [
    "I’m a data analyst with a computer science degree and six-plus years across data operations, analytics and AI training data. I’ve worked inside a UAE insurance platform and a US SaaS company, so I’m used to turning unclear questions into clean data and clear reporting.",
    "Today I manage insurance data operations at myAlfred: reconciling payments and commissions, preparing regulatory reports and building Power BI dashboards. On the side I take freelance analytics work and build my own tools."
  ],
  experience: [
    {
      role: "Operations Executive", company: "myAlfred.com", type: "Full-time · Remote", period: "09/2026 – Present",
      tags: ["Power BI", "Reconciliation", "Data Validation"],
      points: [
        "Manage insurance data operations by validating policy, documentation, payment, and transaction data for accuracy and completeness.",
        "Reconcile policy payments, invoices, receipts, commissions, and VAT data, identifying discrepancies and maintaining data integrity.",
        "Maintain operational datasets, booking trackers, and transaction records to ensure accurate and timely processing.",
         "Develop operational reports and dashboards using Power BI and internal data to monitor bookings, payments, exceptions, and workflow KPIs.",
         "Analyze operational data to identify inconsistencies, trends, and process improvement opportunities.",
         "Collaborate with Operations and Placement teams to resolve data issues and improve reporting workflows, operational controls, and process efficiency."
         
      ]
    },
    {
      role: "Data Management Executive", company: "myAlfred.com", type: "Full-time · Remote", period: "03/2024 – 09/2026",
      tags: ["SQL", "Excel", "AML Reporting", "Data Quality"],
      points: [
        "Managed and validated insurance policy, premium, benefits, and master data across multiple insurance products and carrier sources.",
        "Standardized and mapped vehicle and policy data with internal databases, improving data quality, search accuracy, and quotation matching.",
        "Prepared AML and regulatory reports by extracting, transforming, validating, and formatting policy data for insurer submissions.",
        "Used SQL and Excel to improve data workflows, reporting accuracy, and consistency across operational datasets.",
         "Developed and maintained operational dashboards and reports to monitor policy data quality, coverage, and compliance, supporting decision-making and operational efficiency.",
         "Supported Business Analysts, Compliance teams, and insurer stakeholders with accurate data, reporting, and data-quality analysis."
      
      ]
    },
    {
      role: "Data Analyst", company: "PackageX, Inc.", type: "US SaaS · Islamabad", period: "12/2022 – 02/2026",
      tags: ["SQL", "BigQuery", "Tableau", "Power BI", "HubSpot"],
      points: [
        "Built weekly-to-annual usage reports from PostgreSQL/MySQL product databases and HubSpot data in BigQuery, using Excel to analyze customer behavior, product trends, and performance.",
         "Built billing projection reports using SQL and Excel, improving forecast accuracy by 30% and reducing billing discrepancies by 18%.",
         "Developed churn predictors and renewal dashboards using contract expiry, usage declines, and behavioral signals, improving renewals by 15% and retention by 25%.",
         "Built 20+ Tableau and Power BI dashboards for Product, Sales, Finance, and Executive teams, increasing stakeholder adoption by 50%.",
         "Conducted CRM audits to identify and fill missing values, improving data accuracy and maintaining a single source of truth.",
         "Analyzed product usage, feature adoption, and engagement trends across 1,000+ customers, supporting product roadmap decisions."
         
      ]
    },
    {
      role: "Data Annotator", company: "VisionX Technologies", type: "Remote", period: "09/2019 – 03/2022",
      tags: ["Computer Vision", "OCR", "QA"],
      points: [
        "Annotated and validated 500,000+ data points across image, document, video and metadata datasets.",
        "Labeled warehouse documents for OCR systems that extract tracking numbers, addresses and shipment details.",
        "Contributed to a reported 15% model performance gain on a retail queue-management project."
      ]
    }
    /* NOTE: your 2026 VisionX role overlaps with myAlfred. Add it here only once the dates are confirmed. */
  ],
  /* PROJECT FIELDS: link = live demo/dashboard, code = GitHub repo, embed = optional URL to show inside the site.
     Tableau Public links embed automatically. GitHub Pages and Power BI "Publish to web" links can go in embed. */
  projects: [
    {
      title: "Insurance Portfolio Intelligence", cat: "BI", featured: true,
      desc: "End-to-end analytics platform with synthetic customer, policy, claims, renewal and payment data. BigQuery views feed a Power BI semantic model covering risk, retention, sales funnel and collections.",
      tools: ["Python", "BigQuery", "SQL", "Power BI"], link: "", code: "https://github.com/mshahzad021/insurance-portfolio-intelligence"
    },
    {
      title: "Healthcare Analytics Dashboard", cat: "BI",
      desc: "Interactive Tableau dashboard on patient demographics, visits and staff performance to support planning and resource allocation.",
      tools: ["Tableau", "SQL", "Excel"], link: "https://public.tableau.com/app/profile/muhammad.shahzad7978/viz/HealthcareAnalysisDashboard_17251104994740/Dashboard", code: ""
    },
    {
      title: "Car Price Analysis Dashboard", cat: "BI",
      desc: "Pricing dashboard showing how fuel type, transmission, mileage and brand drive car prices.",
      tools: ["Tableau", "SQL"], link: "https://public.tableau.com/app/profile/muhammad.shahzad7978/viz/CarPriceAnalysis_17390785388020/CarPriceAnaysis", code: ""
    },
    {
      title: "PSX Trade Calculator", cat: "Web Tools",
      desc: "Browser calculator for planning Pakistan Stock Exchange trades, plus a DCA planning workbook in Excel.",
      tools: ["HTML", "JavaScript"], link: "", code: ""
    },
    {
      title: "Personal Finance Tracker", cat: "Web Tools",
      desc: "Income and expense dashboard that syncs to Google Sheets through Apps Script.",
      tools: ["JavaScript", "Apps Script", "Google Sheets"], link: "", code: ""
    }
  ],
  skills: [
    { group: "Analytics & BI", items: ["SQL", "Power BI (DAX)", "Tableau", "Looker Studio", "Excel", "Python"] },
    { group: "Data Engineering", items: ["BigQuery", "PostgreSQL", "MySQL", "ETL", "Data Modeling", "Data Warehousing"] },
    { group: "Data Quality", items: ["Data Cleaning", "Validation", "Reconciliation", "Statistical Analysis"] },
    { group: "Platforms", items: ["GCP", "HubSpot", "Salesforce", "Google Analytics", "GitHub"] },
    { group: "AI Data", items: ["Data Annotation", "CVAT", "Label Studio", "Labelbox", "Roboflow"] }
  ],
  services: [
    { title: "Dashboards & reporting", desc: "Power BI and Tableau dashboards built around the decisions your team makes." },
    { title: "Data cleaning & reconciliation", desc: "Fix messy spreadsheets and databases so your numbers match and stay matched." },
    { title: "SQL & BigQuery analysis", desc: "Queries, views and reports that answer business questions fast." },
    { title: "AI training data quality", desc: "Annotation QA and guideline review for computer vision projects." }
  ],
  roadmap: [
    { when: "Now", title: "Insurance data and BI", text: "Deepening operations analytics and Power BI at myAlfred." },
    { when: "Next", title: "Freelance analytics clients", text: "Growing Upwork and Fiverr work around dashboards and reporting." },
    { when: "Later", title: "Automation and AI-assisted analytics", text: "Building reporting pipelines that run themselves." }
  ]
};
