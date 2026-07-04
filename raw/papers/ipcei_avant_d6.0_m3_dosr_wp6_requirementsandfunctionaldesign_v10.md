---
source_file: IPCEI_AVANT_D6.0_M3_DOSR_WP6_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: fe13a2080709baf8d61df0382435b1475e6ec58a7ae43a5d09bcbd1d71ad5407
chars: 26825
---

REVISION TABLE:
 LIST of tables
Table 1-1: Acronyms	5
Table 1-2: Annex	6
Table 2-1: WP6 Innovation Goals	9
Table 2-2: WP6 key performance indicators	11
AcronymS
Table 0-1: Acronyms
WP6 in brief
Digital Twins (DTs) in Urban Planning.
Digital Twins (DTs) are gaining traction in the public sector, offering a bridge between physical and digital worlds. They hold immense potential for urban planning, impacting both short-term responses to unforeseen events and long-term planning decisions.
Data Challenges and Solutions:
Urban planning with DTs involves massive data collection from various sources, often distributed and subject to technical and legal restrictions. This is where a robust cloud infrastructure is crucial. Effective Urban Digital Twins (UDTs) require seamless connection to data on physical assets, processes, services, and surrounding environments.
UDTs and Citizen Engagement:
Beyond data integration, UDTs can foster communication among stakeholders, promoting a more open and participatory approach to decision-making (similar to the Living-in.eu movement). This aligns with Destination Earth and the Horizon Europe climate goals.
Data Sharing and Security:
The Data Governance Act plays a vital role. It facilitates data sharing beyond Open Data scenarios, enabling G2G, G2B, and B2G collaborations (e.g., with anonymized statistical data). However, data protection, privacy, and confidentiality remain paramount. Sharing will be limited to the strictly necessary data, potentially aggregated or pre-processed. Data intermediaries could act as facilitators within the European Data Market.
Open Data and High-Value Datasets:
The impact of Open Data needs further exploration, particularly regarding "High-Value Datasets" as defined in the Open Data Directive. We should leverage these datasets while ensuring compliance with GDPR.
Citizen Twins: Personalized Public Services:
The concept of Citizen Twins seeks to unite data silos related to individuals within a territory. This can predict citizens' needs and provide personalized public services, offering a new generation of proactive governance.
Reference Documentation – ANNEX
Table 1-1: Annex
Document structure and evolution
This document will deal with WP6 Requirements, SW design and system design. The first version (V1) released at M3 will concentrate on Requirements.Since a valid preliminary analysis of Requirements, expressed as high-level Innovation Goals (IGs) was carried out to propose the Avant Project Portfolio, our current Requirement analysis will revisit, refresh (considering the progress in the GSoTA, if any) and detail (where necessary) the relevant requirements of further detail.
Therefore, a structural similarity between the refreshed requirements and those sections should not surprise.
Global State of the Art 
The WP6 delves into the concept of Society 5.0, a human-centric approach driven by technology, and its potential applications in urban planning using Digital Twins (DTs). This new paradigm aims to balance economic growth with social well-being through technologies like AI, IoT, and big data. DTs, in this context, are not mere digital replicas but rather complex systems that capture the socio-cultural nuances of a city. This requires advanced sensing technologies and multi-perspective data collection, incorporating real-time data feeds from various urban systems to create a dynamic and comprehensive representation of the city's infrastructure and its social fabric. To effectively implement DTs in urban planning, collaboration between citizens, policymakers, and scientists is crucial. The WP6 emphasizes evidence-based decision-making but also highlights the challenges in ensuring the quality, transparency, and replicability of evidence. Engaging citizens through participatory platforms can enhance the relevance and acceptance of decisions derived from DT analyses, fostering a more inclusive approach to urban development.
Key challenges identified by the WP6 include:
Evidence quality and selection: Not all evidence is equal, and the selection process can be influenced by various factors such as biases, incomplete data, and stakeholder interests. Transparency in evidence selection and the creation of "open evidence" strategies are needed to foster trust. This involves making data sources and decision-making processes open and accessible to all stakeholders.
Process replicability: Policy outcomes may not be generalizable across different contexts due to varying local conditions, cultures, and needs. A robust methodology for evaluating generalizability is required, including the development of adaptable models that can be tailored to specific urban environments.
Evidence digitalization: Transforming data into actionable knowledge requires scientific methodologies and high-quality data. This includes the integration of qualitative data, such as citizen feedback and socio-cultural indicators, with quantitative data from sensors and administrative records.
Standardization and correlation: The abundance of information sources demands standardized approaches for mobilizing evidence and ensuring the reliability of decision-making. Developing common frameworks and protocols for data interoperability is essential to enable seamless data sharing and integration across different systems.
Technological challenges: Real-time data collection, handling "extreme data" from IoT devices, and integrating diverse data sources pose significant technical hurdles. Additionally, ensuring data security and privacy is critical, as the misuse of sensitive data can lead to ethical and legal issues.
Additional challenges that WP6 identifies include:
Socio-Economic Barriers: The adoption of DTs is influenced by socio-economic factors such as funding availability, regulatory environments, and public acceptance. Addressing these barriers requires policies that provide financial incentives, streamline regulatory processes, and promote public awareness and education about the benefits of DTs.
Environmental Considerations: Incorporating environmental sustainability into DT models is essential. This involves integrating data on natural resources, pollution levels, and climate impacts to support sustainable urban planning and resilience against environmental challenges.
In conclusion, WP6 highlights the complex interplay between technology, society, and urban planning in the context of Society 5.0. While DTs offer immense potential, their successful implementation requires addressing various challenges related to data quality, transparency, and standardization. Moreover, fostering collaboration among all stakeholders, from citizens to policymakers, is key to creating a more resilient, inclusive, and sustainable urban future.
Technological locks that prevent improvements in the field
Today, 55% of the world's population lives in urban areas, a proportion that is expected to increase to 70% by 2050. There are already an estimated 26.6 billion IoT devices in existence, with a predicted 75 billion connected things by 2025. These trends pose significant challenges in terms of data interoperability, analysis, new models, algorithms, and the building of an urban Digital Twin (DT).
Urban DT and Citizen Twin future scenarios will have growing privacy and ethical implications, potentially raising strong concerns. Public organizations increasingly use artificial intelligence (AI) for automating and supporting their decision-making. UDT can enable new services for citizens, businesses, and public agencies, improving public administration (PA) effectiveness and efficiency. However, other public values like accountability, transparency, equality, privacy, and security should be prioritized when designing AI for public use. The following are the main technological and technology-related locks that may prevent improvements in the field of UDT.
Data Interoperability and Integration
Incompatible Systems: Different entities using incompatible systems create data silos, leading to excessive integration costs and inefficiencies. The lack of common standards and frameworks for city operation platforms results in IT and OT interoperability locks.
Fragmented Data Systems: Urban areas often have fragmented data systems that make it challenging to integrate and analyze data from various sources cohesively.
Data Privacy and Security
Privacy Concerns: The integration of various data sources into urban DTs and Citizen Twins raises significant privacy and ethical issues. Ensuring data privacy and security is crucial to gaining public trust and enabling effective data blending.
Security Vulnerabilities: Protecting sensitive data from cyber threats is a major challenge, especially with the increasing use of IoT devices and the large amounts of data they generate.
Data Governance
Lack of Data Governance: Without robust data governance frameworks, the availability and quality of data needed for evidence-based decision-making can be compromised. Effective governance is essential for ensuring data accuracy, reliability, and accessibility.
Standardization Issues: The absence of standardized data formats and protocols makes it difficult to mobilize evidence and ensure reliable decision-making.
Advanced Analytics and AI
Algorithm Complexity: Developing and deploying sophisticated models and algorithms for analyzing urban data require advanced technical expertise and substantial computational resources.
Ethical and Accountability Issues: The use of AI in public administration must balance efficiency with public values like accountability, transparency, and equality. Designing AI systems that uphold these values is a significant challenge.
Technological Infrastructure
Outdated Infrastructure: Many urban areas operate with outdated infrastructure that cannot support the advanced technologies required for implementing digital twins effectively.
Scalability Issues: Ensuring that technological solutions can scale to accommodate the growing volume of urban data and increasing population densities is critical.
Skills and Expertise
Skill Gaps: A lack of necessary technical skills among key stakeholders, including policymakers, urban planners, and IT professionals, can limit the adoption and effective use of DT solutions.
Training and Capacity Building: Ongoing training and capacity building are essential to equip stakeholders with the skills needed to implement and manage digital twin technologies successfully.
Economic and Financial Barriers
High Initial Costs: The cost of setting up and maintaining the infrastructure for digital twins can be prohibitive. Securing sustained funding for these projects is often challenging.
Cost-Benefit Uncertainty: The long-term economic benefits of urban DTs may not be immediately apparent, making it difficult to justify the investment to stakeholders focused on short-term gains.
To address them WP6 will pursue four related innovation goals. The description put forward in the project portfolio is still relevant.
Table 2-1: WP6 Innovation Goals
Objectives, technological challenges, and results beyond the Global State of The Art
The objectives aim to develop innovative solutions in the fields of artificial intelligence and simulation systems, with the goal of improving urban management and decision-making.
Objectives:
OB 6.1: Building safe and reliable AI systems through explainable AI models and techniques. This objective focuses on creating AI systems that are not only accurate but also transparent in their decision-making processes. By making the AI's reasoning understandable, we ensure that decisions are fair and unbiased.
OB 6.2: An evidence-based decision-making approach that provides policymakers with diverse types of evidence from various stakeholders. This objective centers on using data and evidence to inform policy decisions. By gathering information from a variety of sources, we can make more informed and effective choices.
OB 6.3: Services, tools, and AI algorithms to support active citizen participation. This objective aims to empower citizens to participate in decision-making processes. By providing tools and platforms, we can create more inclusive and representative policies.
OB 6.4: A modular system with multiple Digital Twins and a runtime environment to enable the creation of simulation systems composed of sub-models. This objective involves creating a flexible system that can simulate complex systems. By using multiple Digital Twins, we can model and analyze different scenarios and their potential outcomes.
In summary, these objectives aim to:
Develop safe, reliable, and transparent AI systems
Support data-driven decision-making
Increase citizen engagement in policymaking
Create flexible simulation platforms for complex systems
The following outlines the objectives and key performance indicators (KPIs). 
Table 2-2: WP6 key performance indicators
WP6 Innovation Goal 6.1 Transparency and Explainability of the AI algorithms
In recent years, the use of AI (AI) for making decisions in public affairs has raised issues related to transparency and explanation of the consequent decisions. The traditional concept of transparency in the PA is endangered by the revolution in the automation of algorithms. What is certain is that the use of modern technologies by the PA cannot lead to the attenuation the obligations of transparency and motivation of administrative measures. IG6.1 is avoiding that human is extraneous to this dynamic and unable to decode the solutions, the outputs are automatically generated by advanced AI systems. 
Transparency is the tool that makes it possible for the private individual to be involved in the administrative procedure and, therefore, to become aware of the work of the public machine; and empowers the PA, ensuring its satisfactory performance and impartiality. Transparency is a fundamental principle of our society, which allows administrative action to be elevated to the role of an instrument of democracy and pluralism. The use of AI can make the system more efficient, but it requires transparency to be guaranteed to protect the citizen and decision-makers. The risk is for automation to create a dangerous opacity in decisions. The issue that arises is, therefore, technical, legal, and ethical. When algorithms will fully be made accountable, explainable, and understandable in simple language to anyone, the immense benefits of AI for PA be fully realized. 
The domain of Explainable AI (XAI) was developed to address the need for clarity regarding the predictions generated by AI models. The explanations provided can vary in format and are essential for building trust in predictive systems. When faced with information that appears unreasonable, our initial response is typically, “What’s the reasoning behind this?”. At the top of the list are neural networks, which are the most effective models but also the least interpretable, often described as “black box” models. The scientific community is now focusing on making these models more transparent, aiming to transform them from "black-box" to "glass-box" models. This shift is intended to provide not only predictions but also more detailed insights. The most common type of explanation involves assigning a “score” to each input of a neural network, reflecting how much each input affects the network's output. More complex explanations can be derived by combining these individual scores. For instance, if a model predicts voltage values at one node in an electrical network using voltage and current measurements from other nodes as inputs, aggregating the scores can reveal whether voltage measurements are more influential. This insight allows for targeted improvements to the model. To generate these explanations, various techniques can be employed, including SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations). SHAP uses game theory concepts to assign each input feature a contribution score based on its effect on the model's prediction, ensuring consistency and fairness in the explanation. LIME, on the other hand, approximates the neural network's behavior with a simpler, interpretable model locally around each prediction, allowing users to understand how individual inputs influence the output for specific cases. Both methods aim to make complex models more transparent and understandable.
WP6 Innovation Goal 6.2 Digitalization, Standardization, management, and correlation of different evidence 
Governments increasingly face complex challenges, and their decisions should be informed by the best available evidence and data from IoT, research, citizen, and enterprises and considering all involved factors such as environment, equity, the feasibility of implementation, affordability, sustainability, and acceptability to stakeholders. This evidence can be grouped into tacit and scientific evidence, structured and non-structured, qualitative, and quantitative. The evolution of the territory towards a truly digital philosophy passes, in addition to the infrastructures capable of analyzing this data and drawing added value from it, also for the ability to recognize and expand the concept of given sources and transform all the evidence into structured knowledge that can be used by machines. The use of multiple types of "evidence" is not only a technical and technological challenge but is a moral issue, of social justice and equity; the possibility of having the best information available to understand and deal with problems to improve daily life is a right and a duty of the whole community. For these reasons, it is necessary to produce a collaborative environment in which all stakeholders can exchange ideas, produce documents and disseminate knowledge. In light of the need for transparency and interpretability in machine learning models, some useful open-source tools can facilitate these objectives.  A collaborative space is needed that can host different types of information and transform unstructured data into structured information, making it usable for generating new knowledge. Furthermore, the system must distinguish between different types of evidence, allowing the user to select the appropriate category. This cataloging, which can be achieved through the use of semantic tags, ontologies, or taxonomies, reveals connections between pieces of evidence that were not initially apparent. Additionally, with the advancement of AI, this technology can offer substantial support by creating a private context composed solely of imported documents. 
WP6 Innovation Goal 6.3 Citizen, Enterprise, and civil society active role 
The current social, economic, and political challenges that cities are facing require an enormous amount of data and evidence that allow decision-makers to set priorities, formulate innovative programs, and manage the implementation of policies. The creation of this shared knowledge requires the active involvement of all territorial actors who are no longer just the recipients of the policies but have become a valuable tool for knowledge co-production. Therefore, tools and interfaces are needed that enable collaboration and allow civil society to play an active and productive role as well as modules that enable non-expert users to create shared and reusable AI models. 
It is essential for both experienced and inexperienced users to be able to collaborate in creating new knowledge. This can be helped through interactive workshops and tools that facilitate immediate knowledge transfer between participants, allowing synchronization and sharing across different devices. Additionally, citizens should be involved in co-design activities and encouraged to contribute ideas through gamification mechanisms, fostering broader participation and engagement. In parallel to the knowledge derived from studies or discussions, more experienced users will have access to dedicated sections of the system where they can create AI models. These sections will provide a customizable technical workspace for developing, testing, and sharing their models.
WP6 Innovation Goal 6.4 Coordination, in an urban context, of different micro-systems and different DT 
In recent years, the Smart City concept - understood as a city equipped with sensors and widespread information systems that become direct services for citizens - has evolved. The metropolitan context cannot be sufficiently represented by a series of isolated silos as it is itself an ecosystem characterized by relationships and flows of value between enterprises, government entities and people. This complexity leads to make insufficient the classic concept of DT (DT) as a tool for representing such an ecosystem. The classic DT is described as a digital copy of a specific system existing in the real world. However, the analyzed perspective presents an interaction of multiple micro-systems that vary according to the local application context. Therefore, a new computing paradigm is needed that allows large-scale, high-precision real-world reproductions by performing various operations to combine various DTs, and that enables new interactions in cyberspace. Hence the need to extend the traditional concept of Digital Urban Platform (City Platform). The city platform acts as a base layer on which to define and implement an Urban DT that can respond to the current needs of a broad-spectrum territory, not conceptualized only in the city context but able to include a broader vision by involving data and value flows on all levels.
To effectively address and implement the concept of an “advanced Smart City" and create a comprehensive digital urban platform, several strategic steps must be considered. First, it is essential to analyze the context and identify all the microservices that will be part of the Digital Twin. This involves defining logical data flows to understand how aggregating data and multiple services can generate valuable insights and produce well-defined information. To ensure seamless integration, the platform must support interoperability between various systems and modules, facilitating the integration of data and services from different microsystems. Users should be enabled to easily create complex data flows and associate each flow with a simulation scenario, which can be triggered by different events (e.g., high temperature readings or manual activation). This is because defining data flow implementations is inherently complex and requires varying levels of technical expertise. The aim is to simplify this process as much as possible, for example, through a drag-and-drop approach, so that even less experienced users can create their own data flows and simulation scenarios by integrating different systems and data. These flows will then be represented in a graphical interface that allows users to interact with the resulting data (flow output).

--- Tabella ---
ISSUED BY | Engineering I.I.
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | First Version | n.a. | Davide Storelli | Marco Alessi, Vito Morreale
 |  |  |  |  | 

--- Tabella ---
Acronym | Definition | Acronym | Definition
A-Obj. | AVANT Objective | I-Obj. | IPCEI Objective
AI | Artificial Intelligence | IDSA | International Data Space Association
Apps | Applications | IG | Innovation Goal
BDA | Big Data Analytics | IIoT | Industrial Internet of Things
BDVA | Big Data Value Association | IoT | Internet of Things
CAGR | Compound Annual Growth Rate | IT | Information Technology
CI/CD | Continuous Integration/Continuous Delivery | M&A | Merger and Acquisition
CH | Cultural Heritage | ML | Machine Learning
CPS | Cyber-Physical System | MLOps | ML Operations
CDSS | Clinical Decision Support Systems | MP | Macro Project
DDAaaS | Distributed Data Analytics as a Service | OS/OSS | Open Sourec Software
DDE | Distributed Data Ecosystem | OT | Operational Technology
Del. | Deliverable | PA | Public Administration
DIH | Digital Innovation Hub | PRM | Project Risk Management
Dev(Sec)Ops | SW development cycles including control of SW security aspects. | QA | Quality Assurance
DevDataOps | Management of training datasets | QC | Quality Control
DPP | Digital Product Passport | SLA | Service Level Agreement
DL | Deep Learning | SW | Software
DT | Digital Twin | TBD | To be defined
DTOps | DTs Operations | TCO | Total Cost of Ownership
EBITDA | Earnings Before Interests Taxes Depreciation and Amortization | UC | Use Case
EFFRA | European Factories of the Future Research Association | UDT | Urban DT
eID | electronic IDentification |  | 
eIDAS | electronic IDentification, Authentication, and Trust Services | WP | AVANT Work Package
ENG | Engineering Ingegneria Informatica S.p.A. | WS | IPCEI WorkStream
G2G, G2B, and B2G | Government to Government, Government to Business, Business to Gevernment | WSD | IPCEI WorkStream Deliverable
GDPR | General Data Protection Regulation | WS-Obj. | IPCEI WorkStream – Objective
GSoTA | Global State of The Art | XaaS | Anything as a Service
HPC | High-Performance Computing | XAI | Explainable AI
HW | Hardware |  | 

--- Tabella ---
Document | Description
NA | NA

--- Tabella ---
WP# | IG# | Description
WP6 | IG6.1 | Transparency and Explainability of the AI algorithms
WP6 | IG6.2 | Digitalization, Standardization, management, and correlation of different evidence (research, data, citizen evidence, practice-informed evidence)
WP6 | IG6.3 | Citizen, Enterprise, and civil society active role
WP6 | IG6.4 | Coordination, in an urban context, of different micro-systems and different DT

--- Tabella ---
Obj. 
# | Description | Related  
Innovation | KPI(s) &  
target value
OB 6.1 | Building safe, dependable AI systems thanks to explainable AI models and techniques. | IG6.1 | KPI6.1: 
>= 3 XAI algorithms and strategies.
OB 6.2 | Evidence-informed decision -making approach and techniques that make available to the policy maker diverse types of "evidence" produced by different stakeholders. | IG6.2 | KPI6.2: 
1 Evidence-informed decision -making process. 
1 Knowledge space management tool
OB 6.3 | Services, Tools, and AI algorithms to support the active role of civil society. | IG6.3 | KPI6.3: 
>=10 AI algorithms and analytical models. 
>=10 modular digital services enabling the Urban and Citizen DT 
>=10 intuitive user interfaces for data visualization and guidance.
OB 6.4 | The modular system is characterized by a multiplicity of DT and run-time environment to enable the creation of simulation systems composed of sub-models. | IG6.4 | KPI6.4: 
1 run-time environment to enable interoperability between simulations. 
1 Architecture and ontology of reference. 
1 UDT