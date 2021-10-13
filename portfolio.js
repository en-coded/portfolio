import emoji from "react-easy-emoji";

export const greetings = {
	name: "Amit Nema",
	title: "Hello, I am Amit",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django and some other cool libraries and frameworks.",
	resumeLink: "https://cv.amitnema.com",
};

export const openSource = {
	githubUserName: "en-coded",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/",
	instagram: "https://www.instagram.com/",
	twitter: "https://twitter.com/amitnema",
	github: "https://github.com/en-coded",
	linkedin: "https://www.linkedin.com/in/amit-nema/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for web applications"
		),
		emoji(
			"⚡ Crypto Bots"
		),
		emoji(
			"⚡ Scalable Backends to launch companies to the moon!"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Blockchain/Crypto",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Columbia Business School",
		subHeader: "Master of Business Administration",
		duration: "July 2014 - April 2016",
		desc: "Private Equity and Entrepreneurship",
		descBullets: [
			"Startup - Keyword based algorithms for search engines",
			"Venture Capital - Financial models for investments in shipping industry",
		],
	},
	{
		schoolName: "Institute of Management Studies",
		subHeader: "Master of Information Systems",
		duration: "September 2000 - August 2002",
		desc: "Information Systems",
		descBullets: [
			"Network engineer for ISPs",
			"Automated KPI selection methods for Telecom companies",
		],
	},
	// {
	// 	schoolName: "Jiwaji University",
	// 	subHeader: "Bachelor of Science in Electrical Engineering",
	// 	duration: "September  - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Project Manager",
		company: "Bloomberg",
		companylogo: "/img/icons/common/Bloomberg.png",
		date: "July 2009 – Present",
//		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Implemented financial models for revenue forecasting at Bloomberg L.P. to improve forecast accuracy",
			"Improved Accounting, Accounts Payable/Receivable, and Supply Chain processes to gain efficiency and reduce OPEX",
			"Performed due diligence, on-boarding and integration of companies acquired by Bloomberg",

		],
	},
	{
		role: "Consultant",
		company: "Pearson",
		companylogo: "/img/icons/common/Pearson.png",
		date: "May 2006 – May 2009",
//		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Managed business process changes and turnaround during Pearson’s migration from print to digital media.",
			"Developed pricing strategies for procurement and streamlined inventory operations to save on OPEX",
			"Implemented Royalty Management System to track media and copyright information thereby reducing expenses for media acquisition",

],
	},
	{
		role: "SAP Consulting",
		company: "Siemens",
		companylogo: "/img/icons/common/Siemens",
		date: "Jan 2003 – May 2006",
//		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Siemens Financial Services (Spiridon), Siemens Venture Capital. Implemented SAP HR and SAP CRM systems across Asia-Australia",
			"Conducted due diligence and Investment analysis for Siemens I&S acquisition of VA Tech, Austria",
			"Evaluated investments for Series B funding in Inge Watertechnologies and Series C funding in Enocean",

],
	},
];

export const projects = [
	{
		name: "Crypto Market Simulator",
		desc: "Paper trade with the master Satoshi Nakamoto himself on the crypto market simulator",
		link: "https://crypto-market-simulator.herokuapp.com/",
		github: "https://github.com/en-coded/market-simulator",
	},
	{
		name: "NFT Marketplace",
		desc: "NFTs are hot! Buy, Sell, Hold NFTs using the most advanced analytics",
		link: "https://example.com",
		github: "https://github.com/en-coded",
	},
	{
		name: "Cake Shop",
		desc: "New York's best kept secret is no more a secret. Buy the most delicious cakes on our online store",
		github: "https://for-goodness-cakes-by-saira.herokuapp.com/",
		link: "https://for-goodness-cakes-by-saira.herokuapp.com/",
	},
	{
		name: "Crypto Bot",
		desc: "Beat the market and most importantly sleep well! Try our crypto bot in the 24/7 highly volatile crypto market",
		github: "https://github.com/en-coded",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Arthur Bernier Jr.",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with Amit Nema has been great. ",
	},
	{
		name: "Cathy Moran",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. great job",
	},
];
