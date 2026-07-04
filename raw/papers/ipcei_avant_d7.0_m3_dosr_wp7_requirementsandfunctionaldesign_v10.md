---
source_file: IPCEI_AVANT_D7.0_M3_DOSR_WP7_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: c109ec549f2ce2075e990b7f43bdc86e0f081a2b5ebd1935a13b6696bbef4027
chars: 24385
---

REVISION TABLE:
LIST of tables
Table 1-1: Acronyms	4
Table 1-2: Annex	5
Table 2-1: WP7 Innovation Goals	7
Table 2-2: WP7 key performance indicators	11
AcronymS
Table 0-1: Acronyms
WP7 in brief
WP7 aims to develop and implement cross-stakeholder energy community-aware Digital Twins (DTs). The WP aim to collect, under a homogenous umbrella, a set of energy related cross domains such as Gas distribution and transport network, decentralized and renewable energy systems, electro mobility operators including the Charging Point Operators (CPO). These DTs will focus on micro-to-macro components, such as smart buildings, microgrids, and smart districts, while integrating with broader smart energy grids. 
key objectives include:
Leveraging DTs to optimize local energy consumption and production: By modeling energy flows and consumer behavior, DTs will enable more efficient use of self-generated energy at the building, district, and microgrid levels.
Promoting local energy communities (LECs): Empowering communities to participate in energy management and investment decisions through DTs.
Integrating data from various sources: Combining electric energy, Gas, mobility, and other relevant data to create comprehensive DTs.
Developing a platform for creating and managing DTs: Building a flexible platform for data acquisition, modeling, and simulation.
Addressing the challenges of decentralized energy systems: Developing solutions for interoperability, data management, and edge computing.
In essence, WP7 seeks to create a more efficient, resilient, and sustainable energy system by harnessing the potential of DTs and edge computing technologies.
Reference Documentation – ANNEX
Table 1-1: Annex
Document structure and evolution
This document will deal with WP7 Requirements, SW design and system design.The first version (V1) released at M3 will concentrate on Requirements. Since a valid preliminary analysis of Requirements, expressed as high-level Innovation Goals (IGs) was carried out to propose the Avant Project Portfolio, our current Requirement analysis will revisit, refresh (considering the progress in the GSoTA, if any) and detail (where necessary) the relevant requirements of further detail. Therefore, a structural similarity between the refreshed requirements and those sections should not surprise.
Global State of the Art 
Digital twins (DTs) are revolutionizing the energy sector by providing advanced solutions for energy efficiency, urban planning, and engineering dynamics. 
In buildings and industrial environments, DTs can enable detailed analysis of energy use, predictive maintenance, and operational adjustments, leading to optimized energy consumption and cost reductions. 
This technology is also pivotal in urban planning, where it helps create climate-neutral and resilient cities by simulating urban transformations and assessing the impact of climate actions, such as reducing greenhouse gas emissions and adapting to extreme weather events. 
Furthermore, DTs are used for high-fidelity modeling and simulation, particularly in dynamic applications like energy generation and transport systems. These models can predict and manage the performance of complex systems, ensuring efficient and reliable operations. 
Overall, DTs are becoming essential tools for enhancing energy efficiency, supporting sustainable urban development, and improving the performance of engineering systems. Their ability to provide real-time data and predictive insights makes them invaluable in addressing the challenges of modern energy management and urban planning. 
As DT technology continues to evolve, we can expect even more innovative applications and improvements in the way we manage and utilize energy resources.
Key challenges identified by the WP7 include:
Data Integration and Management: Energy systems generate data from diverse sources with varying formats. Integrating this data into a unified model is complex and requires sophisticated data management solutions
Cybersecurity Risks: The continuous data flow and connectivity required for digital twins increases the risk of cyberattacks. Ensuring robust cybersecurity measures is essential to protect sensitive data and maintain system integrity
Scalability: As digital twin applications expand, scaling them to handle larger datasets and more complex systems becomes challenging. This requires robust infrastructure and efficient data management practices
Interoperability: Integrating digital twins with existing systems and ensuring they work seamlessly with other technologies can be difficult. This is crucial for the successful implementation and operation of digital twins
Data Quality and Accuracy: The effectiveness of digital twins depends on the quality of the data they use. Issues such as sensor errors, data anomalies, and inconsistencies can lead to inaccurate models and predictions
In conclusion, the WP7 highlights the complex interplay between technology and stakeholders in the context of  energy sector. While DTs offer immense potential, their successful implementation requires addressing various challenges related to data quality, transparency, interoperability and standardization.
Technological locks that prevent improvements in the field
The four main technological locks that prevent improvements in the field still are: 
1) the high cost of the infrastructure digitalization ,  
2) the uncertainty in predicting supply and demand patterns, even depending from the weather conditions 
3) the difficulty to have a trustworthy environment able to assure fair conditions to all the stakeholders  
4) the not yet fully demonstrated value for flexibility marketplaces and Demand Response programs 
To address them WP7 will pursue four related innovation goals. The description put forward in the project portfolio is still relevant.
Table 2-1: WP7 Innovation Goals
Objectives, technological challenges, and results beyond the Global State of The Art  
WP7 focuses on developing Digital Twins (DTs) for decentralized energy systems. The primary objective is to effectively manage the complexity of distributed energy systems through the use of data, artificial intelligence, and simulation models.
Key objectives:
Data management: Addressing the challenges associated with collecting, managing, and analyzing data from decentralized energy systems.
Interoperability: Defining standards and frameworks for interoperability between different systems and components.
Reference architecture: Developing a reference architecture for DTs in decentralized energy systems.
Artificial intelligence: Utilizing AI to optimize energy management and decision-making.
Human-centric design: Incorporating the needs of users and communities into the design of DTs.
In summary, WP7 aims to create an advanced technological platform to optimize energy management in decentralized contexts.
The following outlines the objectives and key performance indicators (KPIs). 
Table 2-2: WP7 key performance indicators
WP7 Innovation Goal 7.1. To evolve standards and harmonization approaches at the interplay among electricity, and other energy (heat, gas) and non-energy (mobility, wellness, security) infrastructures including the realization of open interoperable interfaces and APIs. 
Data sharing is crucial to support more efficient system-level energy-domain processes and will benefit from increased adoption of common standard and harmonization processes. 
To date data exchange and sharing is managed through standards, such as SGAM-based IEC family of automation standards only when we consider the interaction among TSOs and DSOs, but very few efforts have been carried out when we consider the non-regulated side of the energy sector (such as aggregators, suppliers, renewable generation), like SAREF ontology. Moreover, data sharing with other non-electrical energy commodities (e.g., heat, gas) and other infrastructures (e.g., transport/e-mobility, ICT, water, health) will also be considered to enable cross-electricity-centered, cross-sector interoperability. 
WP7 Innovation Goal 7.2 - To deliver a complete cloud edge reference architecture for DTs together with a first-of-its-kind Reference Implementation for cross-sector Energy Data Space-centered, trusted building blocks for Energy DTs. 
IG 7.2 refers to facilitate data and models sharing while taking into due account, align with, and leveraging the latest advancement on GAIA-X, IDSA and DERA from EC DG Energy BRIDGE Data Management WG. IG 7.2 spans over adapting the IDSA/GAIA-X architecture and trust-related technological connectors to the specification of the energy sector’s business processes to ensure Data Trust, full sovereignty, control, and participatory capabilities for sharing of data, and integrating of DT and AI. The IDSA and GAIA-X Conceptual Architectures need to evolve as we adapt domain-agnostic implementations IDSA-compliant trust-level building blocks. It will include in the IDSA Connector energy-domain features, such as Federated Identity Management, DAPS, Data Usage Policies definition through data provenance and traceability, and ex-post control of Data Usage. Alongside these building blocks, we will need to ensure trust between stakeholders and data space operator/owner, through smart contract-based Data Control Policies, tamper-proof and immutable multi-party data sharing, notarization for provenance and traceability. In addition, this IG will also align and integrate the specifications for cloud initiatives and underlying B2B Reference Architectures at the intersection of smart energy grids, AI, DT and IoT, and Big Data initiatives, including BDVA SRIA4.0, COSMAG, FIWARE Smart Energy Reference Architecture, IDSA data sovereignty conceptual architecture, and IoT/edge AIOTI High-Level Architecture. GAIA-X conceptual architecture (https://www.data-infrastructure.eu/GAIAX/) will be also considered. Moreover, we will align with ongoing exercise for delivering cross-sector DERA (Data Exchange Reference Architecture) v3.0 as undertaken by EU DG Energy BRIDGE Data Management Working Group with a view to hybridize data and energy stakeholders and respective roles and use cases and specifications. The resulting Reference Architecture will incorporate a set of Open APIs and standard interfaces that will integrate multidomain DERA, IDSA, and the other specifications. 
WP7 Innovation Goal 7.3 - To develop an Open, Cloud-based Energy vertical Data Analytics Modular Adaptable Toolbox 
Decentralized management of renewable-intensive energy systems can be enabled through a variety of data-driven use cases which work at the interplay among different stakeholders along and across energy value chain. The definition and the subsequent categorization of such use cases will call for new AI-based energy-centered cross-sector analytics to support decentralized energy subsystems management, while leveraging seamless data-information-knowledge exchange under respective sovereignty and regulatory principles and adapting the most suitable ML techniques among the ones available to the specific data-driven scenario. An adaptable and modular toolbox will be developed which will be able to handle heterogeneous data (open data, sensor/IoT, historical data, metered electricity consumption/generation data, weather forecasting, EO-based data, BIM data.) from multiple sources. 
and will be developed as an adaptable software component which will allow us to select among a variety of learning models/approaches (es. federated learning, online learning, transfer learning, reinforcement learning), the one which will fit better with a set of categorized energy value chain scenarios. As an example, transfer learning approach can be utilized in some scenarios where there is insufficient real data availability (for example in countries where smart meters are not still deployed), with a view to develop new ML models for such a situation). 
WP7 Innovation Goal 7.4. The definition and implementation of specific DT services, especially tailored to decentralized energy system management, while interacting with smart energy grids through active nodes (es. homes, buildings, districts) 
The Energy System today is impacted by two main factors of change: the increasing penetration of renewable energy sources at the grid edge and a new active role for customers. This needs effective support through DT services dedicated to energy generation/consumption prediction and optimization, while supported by the cloud-edge continuum. For this reason, this IG will be tailored to offer “human-ware” hybrid and system-level cross—stakeholder DT applications and services to a variety of different decentralized and modular organizational paradigms which have emerged as consequence of the rise renewable generation. Such services will be characterized by: (i) duly considering individual and community-level energy consumers consumption and presumption profiles, preferences and wishes, (ii) trading off local objectives of the decentralized energy components against smart grid optimal management, hence considering not only personal comfort/wellness and/or consumption profiles, but also potential revenues from trading off energy consumption profiles against services provisioning for grid stabilization and/or peak shaving (iii) data-driven cross-stakeholder scenario-based DT services 
Concerning DTs at Buildings and District levels, we will go beyond the GSoTA in DTs along three different dimensions: 
- conceive DT for new and existing buildings, where the DT will be able to provide real-time insights to support energy consumption control. 
- employ AI for advanced analytics combined with expertise in energy and comfort. This WP will also design a data schema to model districts at diverse Levels of Details (LoDs) and develop a set of tools and simulations based on the appropriate 

--- Tabella ---
ISSUED BY | Engineering I.I.
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | Prima Emissione | n.a. | Vincenzo Croce, Ferdinando Bosco | Marco Alessi, Vito Morreale
 |  |  |  |  | 

--- Tabella ---
Acronym | Definition | Acronym | Definition
A-Obj. | AVANT Objective | GSoTA | Global State of The Art
AI | Artificial Intelligence | HPC | High-Performance Computing
Apps | Applications | HW | Hardware
BDA | Big Data Analytics | I-Obj. | IPCEI Objective
BDVA | Big Data Value Association | IDSA | International Data Space Association
CAGR | Compound Annual Growth Rate | IG | Innovation Goal
CI/CD | Continuous Integration/Continuous Delivery | IIoT | Industrial Internet of Things
CH | Cultural Heritage | IoT | Internet of Things
CPS | Cyber-Physical System | IT | Information Technology
CDSS | Clinical Decision Support Systems | M&A | Merger and Acquisition
DDAaaS | Distributed Data Analytics as a Service | ML | Machine Learning
DDE | Distributed Data Ecosystem | MLOps | ML Operations
Del. | Deliverable | MP | Macro Project
DIH | Digital Innovation Hub | OS/OSS | OS/ OS SW
Dev(Sec)Ops | SW development cycles including control of SW security aspects. | PA | Public Administration
DevDataOps | Management of training datasets | SLA | Service Level Agreement
DPP | Digital Product Passport | SW | Software
DL | Deep Learning | UC | Use Case
DT | Digital Twin | UDT | Urban DT
DTOps | DTs Operations | TCO | Total Cost of Ownership
EBITDA | Earnings Before Interests Taxes Depreciation and Amortization | WP | AVANT Work Package
EFFRA | European Factories of the Future Research Association | WS | IPCEI WorkStream
eID | electronic IDentification | WSD | IPCEI WorkStream Deliverable
eIDAS | electronic IDentification, Authentication, and Trust Services | WS-Obj. | IPCEI WorkStream – Objective
ENG | Engineering Ingegneria Informatica S.p.A. | XaaS | Anything as a Service
TBD | To be defined | PRM | Project Risk Management
QA | Quality Assurance | QC | Quality Control

--- Tabella ---
Document | Description
NA | NA

--- Tabella ---
WP# | IG# | Description
WP7 | IG7.1 | To evolve, harmonize and align standards and interoperability efforts between different actors active in the sector of electricity and beyond-electrical energy, including the deployment of open interoperable interfaces and APIs for facilitating data sharing
WP7 | IG7.2 | To deliver a complete cloud edge reference architecture for DTs along energy sector together with a first Reference Implementation for cross-sector Energy Data Space-centered trusted building blocks for Energy DTs
WP7 | IG7.3 | To develop an Open, Cloud-based Energy vertical Data Analytics Modular Adaptable Toolbox which will enable AI-based energy-centered cross-sector analytics to support decentralized energy subsystems management, while leveraging on seamless data-information-knowledge exchange under respective sovereignty and regulatory principles, and adapting the most suitable ML techniques among the ones available to the specific data-driven scenario
WP7 | IG7.4 | To define and implement specific cross-stakeholder human-centered hybrid DT services for decision support and for near real time management energy management especially dedicated to buildings and districts

--- Tabella ---
Obj.
# | Description | Related
Innovation | KPI(s) &
target value
OB 7.1.a/IG7.1 | DT are based on data. Data acquisition takes 40% of the effort in developing DTs. Complexity is rising from the extreme distribution of energy production/consumption in decentralized contexts. Thus, it is necessary to harness this complexity by defining an interoperability framework. AVANT will leverage relevant Smart Energy Grid Data Interoperability & Homogenization standards and frameworks– COSMAG, IDSA GAIA-X - compliant FIWARE Context Broker to provide data-driven vertical Smart Grid Interoperability to deploy electricity-centered data-driven energy and cross sector interoperability. | The main challenges in data acquisition in decentralized energy contexts are 1) The volume of data: Decentralized energy systems generate copious amounts of data, which can be difficult to collect, store, and process. 2)variety of data: Decentralized energy systems generate a variety of data types, including sensor data, weather data, and financial data. This can make it difficult to integrate and analyze the data. 3)velocity of data: Decentralized energy systems generate data in real time, which can be challenging to collect and process in a timely manner. 4)veracity of data: The data generated by decentralized energy systems can be unreliable, which can make it difficult to make accurate decisions. 
As in many other decentralized contexts, pre-processing at the edge can make system more reliable and robust, optimize resource, avoid latencies, etc. Working on interoperability in the edge-to cloud continuum means to deal with the many devices at the edge. Please, note that WP1 is also addressing the device-to-cloud continuum and new stacks for optimally mastering it. | Seamless and smooth data transition from 15 types of sensors and 7 types of data resources Identification of and interoperability with at least 5 well-known open data sources
OB 7.2.a 
IG7.2 | In decentralized, heterogeneous environment a solid AI-based Reference Architecture (RA) DTs for decentralized energy systems will define the conditions for making software system interwork flexibly in decentralized contexts. 
The objective is, then, to design a secure, scalable, and fault-tolerant data-driven AI-based Reference Architecture (RA) for supporting DTs for decentralized energy systems management and an underlying set of Open APIs. | I As for interoperability, a reference architecture for DT in decentralized is the operational counterpart of the previous objective. Such a reference architecture defines the framework for building our platform. It deals with issues related to the continuum. Below some of the relevant aspects/resources to be considered: 
Distributed energy resources (DERs): DERs are the small, distributed energy sources that make up a decentralized energy system. DERs can include solar panels, wind turbines, micro-hydro turbines, and biomass generators. 
Energy storage: Energy storage is often used in decentralized energy systems to store excess energy produced by DERs and to provide power when demand is high. Energy storage can include batteries, flywheels, and compressed air energy storage systems. 
Communication network(s): A communication network is needed to connect the DERs, energy storage, and other components of the decentralized energy system. The communication network can be used to transmit data about the operation of the system, to control the system, and to provide feedback to the users of the system. 
Control system: The control system is responsible for managing the operation of the decentralized energy system. The control system uses the data collected from the DERs, energy storage, and communication network to make decisions about how to operate the system in a safe, efficient, and reliable manner. 
User interface: The user interface allows users of the decentralized energy system to interact with the system. The user interface can be used to control the system, to monitor the system, and to receive feedback from the system. 
An integrated architecture dealing with all these aspects is still an open problem. It is necessary for building our energy specific DT platform. | Number of Reference Architectures aligned Number of OS Reference Implementations
OB 7.3.a / IG 7.3 | To leverage on pre-defined user scenarios/use cases focusing on decentralized energy systems to deliver data-driven AI tools, ML models for a variety of decentralized energy management specific use cases/scenarios, | The problems connected to data distribution. The issues are many, ranging from 1) training AI (e.g., to make predictions about the performance of the system under different conditions), 2) Making decisions, forecast energy system behavior. AI and ML can be used to decide when to turn on and off DERs, or when to charge and discharge energy storage. It is evident that AI in distributed contexts requires the deployment of new data processing technologies, natively distributed. In this WP we will study the vertical deployment of distributed AI projecting the problem on the energy sector. | Number of incremental deliveries for the WP7 
Deliver at least 20 novels pre-trained ML and DL 
models for decentralized energy systems, i.e. buildings, districts
OB 7.3.b/ IG7.3 | Consider human in contexts such as buildings or districts. It enables us to produce systems fitting requirements Develop and deliver a variety of human-enhanced asset-level and system-level complex DT for decentralized energy system management. | As described in the PP, human-enhanced systems are addressing prominent issues. Human-enhanced decentralized energy systems are a promising approach to optimize performance of decentralized energy systems. In WP7 we want to define and implement specific cross-stakeholder human-centered hybrid DT services for decision support and for near real time management energy management especially dedicated to buildings and districts (where human-awareness is essential) | Deliver at least 7 DTs for decentralized energy systems management, at home/buildings/district level.
OB 7.3.c/ IG 7.3 | Simplify development and deployment of DT, reducing costs and time-to-market. Open cloud-edge-based Energy-tailored Data Analytics Toolbox | Being aware that processing energy data in the continuum represents a main hurdle to overcome. The data collected from decentralized energy systems can be used for a variety of analytics tasks, such as forecasting energy demand, optimizing energy flows, detecting, and responding to faults and many others. The data analytics toolbox needs to be able to handle the large volume and variety of data generated by decentralized energy systems adopting the best approach considering the need to deal with different type of data (whose quality, volume, variety, velocity, veracity is different case by case). | Make use of at least 15 data analytics techniques and algorithms. 
Perform analytics that combine at least 60 different data sources. 
Develop and publish at least 4 user-oriented services on the platform.