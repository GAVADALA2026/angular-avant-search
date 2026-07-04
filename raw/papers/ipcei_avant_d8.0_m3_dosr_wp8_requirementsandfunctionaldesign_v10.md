---
source_file: IPCEI_AVANT_D8.0_M3_DOSR_WP8_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: bd62829423ae6a1220f070ba1acfa9801d64e2f3b047ad459ccfd2983d2aa17a
chars: 24148
---

REVISION TABLE:
 LIST of tables
Table 0-1: Acronyms	4
Table 2-1: WP8 Innovation Goals (IG)	6
Table 2-2: WP8 key performance indicators	7
AcronymS
Table 0-1: Acronyms
WP8 in brief
WP8 aims to develop a framework for integrating health data from various sources to support clinical decision-making and personalized medicine. This involves creating interoperable microservices, utilizing AI and Digital Twins (DTs), and ensuring data privacy and security.
Key objectives:
Data integration: Combining health data from different sources (e.g., EHR, IoT, environmental data) into a unified platform.
Clinical decision support: Developing AI-powered decision support systems to assist healthcare professionals.
Personalized medicine: Creating electronic medical records tailored to individual patients using AI and DTs.
Patient monitoring: Implementing remote patient monitoring solutions.
Data privacy: Ensuring secure and controlled sharing of health data for research purposes.
In essence, WP8 seeks to improve healthcare delivery through the use of advanced technologies and data-driven insights.
Document structure and evolution
This document will deal with WP8 Requirements, SW design and system design.
The first version (V1) concentrates on Requirements.
Since a valid preliminary analysis of Requirements, expressed as high-level Innovation Goals (IGs) was carried out to propose the Avant Project Portfolio, our current Requirement analysis will revisit, refresh (considering the progress in the GSoTA, if any) and detail (where necessary) the relevant requirements of further detail.
Therefore, a structural similarity between the refreshed requirements and those sections should not surprised.
Technological locks that prevent improvements in the field
The four main technological locks that prevent improvements in the field still are: 
Difficult integration of health data in respect of privacy and data sovereignty
Limited capability of integration APIs for HDTs and explainable CDSSs
EHRs are not ready for personalized medicine 
Little support for patients monitoring. 
To address them WP8 will pursue four related innovation goals. The description put forward in the project portfolio is still relevant.
Table 2-1: WP8 Innovation Goals (IG)
Objectives, technological challenges, and results beyond the Global State of The Art  
The four main objectives aim to:
Design and develop a platform for the federation, acquisition, integration, harmonization, and management of health data to be exploited for both research and healthcare specialists.
Design and develop a framework for the implementation of user-centered and explainable CDSS which can both support the usage of third-party decision support services, including HDTs, and the execution of local decision support models based on a hybrid paradigm (i.e., integrating both knowledge-based and data-driven AI), also exploiting WP2 results.
Design and develop a framework for the creation of next-generation AI-powered EHRs tailored to the needs of different healthcare professionals and patients with different health profiles, employing suitable CDSS, data analytics services and personalized data visualization patterns.
Design and develop services enabling intelligent remote patient monitoring based on the combination of certified medical devices and environmental sensors, enabling a more complete comprehension of the health status of patients, early identification, and prevention of health risks, and more personalized interventions based on a holistic view of patients.
The goal is to create a comprehensive healthcare platform that leverages AI and data to improve patient care, research, and decision-making. This platform will integrate various health data sources, provide advanced decision support tools, and enable personalized healthcare.
The following outlines the objectives and key performance indicators (KPIs). 
Table 2-2: WP8 key performance indicators
WP8 Innovation Goal 8.1 Federated integration and sharing of holistic health data. 
Based on WP2 results, WP8 will realize a framework for the federation of health data in support of both healthcare and research that will overcome the limits listed above about the “Difficult integration of health data in respect of privacy and data sovereignty" (first technical locks). For the first time, an OS framework will provide a coherent solution to all these problems.
First, the framework will allow different data providers to share data according to a common structured health data model that will integrate current state-of-the-art standards and will extend them to support a holistic description of the patient’s history, not only from the clinical point of view but in relation to other aspects that may be relevant for the patient’s health. The unified data model will be extensible and cover data required and produced by explainable CDSS, including HDTs. The developers will not need to reinvent for each application how to represent data covered by different standards and will have a common approach for extending the model. The framework will adopt a federation approach to avoid data centralization and minimize data exchange, for patients’ privacy and data sovereignty. While data centralization gives control of all shared data to the owner of the central repository, the federation approach will leave full control of data to the owners of the data sources (data providers). On the other side, the framework will allow the patients (data subjects) to clearly express their will concerning data use and will adopt enforcement policies in compliance with EU data spaces. The data subject will be able to consent only to the sharing of specific data, with specific consumers for specific purposes. The data provider will be allowed to share health data with other data consumers only if compatible specific consent has been provided by the data subject and will be able in turn to apply further constraints to the data sharing to protect the value of the data they produced. The framework will support both the sharing of health data for research and healthcare.
WP8 Innovation Goal 8.2 Simplified development of pluggable user centered and explainable CDSSs and HDTs 
WP8 will overcome the previously mentioned limitations related to the “Limited capability of integration APIs for HDTs and explainable CDSSs" (second technical lock). An open-source framework will be developed to support the creation of CDSS, including HDTs, that are modular, dynamically pluggable into a client system, and capable of providing user-oriented explanations. A new integration API will be defined, as an extension of the standard CDS-Hook API or other standard APIs, allowing the CDSS to describe its capabilities in a more structured way and to better automate the integration process. The CDSS integration API will also support the integration of HDTs useful for decision support, meeting the requirements for stateful systems, such as HDTs, and enabling asynchronous communications. The API will also require each CDSS to provide relevant metadata that facilitates the evaluation of the CDSS output by the end user, including human-oriented explanations in a structured format, to simplify the presentation and further processing of this information by client applications. CDSSs will also be developed and integrated into the framework to support decision-making: some activities will focus on tools such as digital twins for emergency services, AI algorithms, and augmented reality tools to support pathology. All these clinical decision support tools are part of the CDSS framework. In addition to the new integration API, the framework will include support to create CDSSs compliant with the new API and capable of operating on the infrastructure continuum (WP1), based on AI-driven decisions expressed in standard formats.
WP8 Innovation Goal 8.3 Simplified development of holistic EHRs for personalized medicine 
WP8 will also address the previously described limitations related to the “EHRs not ready for personalized medicine " (third technical lock). The developed solution will include a new framework for the development of GUIs for personalized medicine, facilitating their deployment on the infrastructure continuum and integration with backend services for data storage and processing. This framework will reduce the effort required to develop new applications for personalized medicine while ensuring adherence to high standards of usability and reliability.
The framework will provide composable user interfaces for displaying and managing health data, adhering to an extensible common data model (IG1) and supporting non-clinical data. The user interface components will be designed to make clear to the end user the sources of the various data and their level of reliability. The framework will offer analytical capabilities to explore and display the relationships between different types of data (e.g., between behavioral and clinical data) of the same patient and to compare an individual patient with a population of other patients based on specific characteristics.
The framework will also incorporate experiments using generative AI (genAI) for building GUIs, aiming to accelerate interface development and enhance the user experience. Toolkits and WebKits will be used for graphical design and rapid component development, ensuring greater efficiency and visual consistency across applications. These experiments aim to optimize the development process and facilitate the creation of more intuitive and customized user interfaces.
These capabilities will be designed to integrate seamlessly with decision support functionalities offered by AI-based CDSSs and HDTs. The framework will enable the development of apps that can natively integrate new CDSSs, reducing the effort required to update the system and offering new decision support functionalities, covering additional pathologies or healthcare phases. Specific support will be provided for interaction with proactive CDSSs that can automatically identify when a user may need support and offer it non-invasively, without waiting for an explicit request.
WP8 Innovation Goal 8.4 Smooth integration between health care and health monitoring 
WP8 will address the limitations related to the “Little support for patient monitoring” (fourth technical lock) by developing a comprehensive platform for remote patient monitoring. This platform will extend the frameworks for federated data integration and holistic EHR through specific components designed to enable continuous remote monitoring of patients, both in clinical and home environments. These components will allow the integration of various patient monitoring devices and sensors for tracking vital signs, medication adherence, and environmental data, ensuring continuous oversight of patients' health conditions. Differently from current approaches that distinguish monitoring apps from healthcare apps, monitoring UIs will be conceived as extensions of clinical UIs, so to guarantee that during a medical visit the HCPs look at the monitored data together and in connection with the clinical data and to assure the planning and reviewing of the monitoring activities as part of the patient’s holistic treatment plan, similarly to the planning of diagnostic tests and therapies.  The framework will extend the proactive decision support also to the phases of planning the monitoring activities, considering the capabilities of HDTs installed in the systems, to suggest to the HCPs the planning of specific monitoring activities, possibly supported by HDTs, suitable for the individual patient, providing as in the case of other decision support capabilities, any available evidence that supports the recommendation. While current solutions allow the HCPs to set just alarms on observed data, the application developed with the new framework will offer the capability to monitor also parameters predicted by the HDTs to anticipate the interventions and reduce the risk of negative health events. The next section relates the four innovation goals to the objectives of WP8 and related KPIs, providing additional details on the expected innovations.
High level requirements
Requirements related to IG 8.1 - Federated integration and sharing of holistic health data
OBJ8.1 Design and develop a platform for the federation, acquisition, integration, harmonization, and management of health data to be exploited for both research and healthcare specialists.
Requirements related to Innovation Goal 8.2 - Simplified development of pluggable user centered and explainable CDSS and HDTs
OBJ8.1 Design and develop a framework for the implementation of user-centered and explainable CDSS which can both support the usage of third-party decision support services, including HDTs, and the execution of local decision support models based on a hybrid paradigm (i.e., integrating both knowledge-based and data-driven AI), also exploiting WP2 results.
Requirements related to Innovation Goal 8.3 - Simplified development of holistic EHRs for personalized medicine
Requirements related to Innovation Goal 8.4 - Smooth integration between health care and health monitoring

--- Tabella ---
ISSUED BY | Engineering I.I.
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | First Version | n.a. | Francesco Torelli | Marco Alessi, Vito Morreale

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
PRM | Project Risk Management |  | 
QA | Quality Assurance | QC | Quality Control

--- Tabella ---
WP# | IG# | Description
WP8 | IG8.1 | Federated integration and sharing of holistic health data.
WP8 | IG8.2 | Simplified development of pluggable user centered and explainable CDSSs and HDTs
WP8 | IG8.3 | Simplified development of holistic EHRs for personalized medicine
WP8 | IG8.4 | Smooth integration between health care and health monitoring

--- Tabella ---
Obj.
# | Description | Related
Innovation | KPI(s) &
target value
OB8.1 | Support health data federation for healthcare and research | IG8.1 | R&D&I KPIs: 
- Nr of supported standard health data formats ≥ 2 (e.g., OMOP and FHIR standard). 
- Nr of supported FHIR IGs ≥ 3 
- Built-in integrated data space architecture ≥ 1 
- Possibility for the patient to give and retract consent for every single usage of data (i.e., single episode of cure or single research study) = TRUE 
- Possibility to query federated data sources = TRUE 
- Compliant with ENISA security requirements=TRUE 
- Compliant with GRPR requirements= TRUE
OB8.2 | Support the development of User Centered and Explainable CDSS Systems (CDSSs) based on AI and DTs. | IG8.2 | R&D&I KPIs: 
- Nr of innovative features supported by new open API for CDSS integration ≥ 3 (e.g., asynchronous interactions, state updates, explanations) 
Nr of supported executable knowledge formats ≥ 3. 
Nr of testing HDTs/CDSSs provided by the framework ≥ 3.
OB8.3 | Support the development of Electronic Medical Records for personalized medicine based on AI and DTs. | IG8.3: | R&D&I KPIs: 
- Nr built-in categories of health data supported by the EHR framework ≥ 4 (e.g., clinical data, genomic data, environmental data, behavioral data) 
- Nr built-in healthcare activities covered by the EHR framework ≥ 5 
- Nr of built-in categories of a decision supported by the EHR framework ≥ 3 (e.g., diagnosis, risk prediction, therapy suggestions) 
- Nr of built-in categories of explanation ≥ 3 
- Nr of testing HDTs/CDSSs integrated with the testing EHR ≥ 3.
OB8.4 | Support monitoring of remote patients. | IG8.4 | R&D&I KPIs: 
- Nr of supported kinds of monitoring data ≥ 4 (e.g., patient’s manual data, patient’s certified and uncertified devices, environment data, HCPs provided data, HDT provided data) 
- Nr of supported IoT integration protocols ≥ 4 
- Nr of built-in categories of monitoring recommendations ≥ 3 (e.g., type of data to monitor, frequency of monitoring, alarms to set)

--- Tabella ---
Epic ID and Title | Epic Description
R8.1.1 High Performance Multi-Source Health Data Repository | As a healthcare professional want a cloud-native health data repository that enables access to a comprehensive patient clinical history, integrating data from multiple sources in a unified format with enriched terminologies, advanced full-text search on structured and unstructured data, and high performance on large datasets, ensuring compliance with healthcare regulations and standards without requiring licenses for similar products.
R8.1.2 Acquisition of Patient’s Omic Data from Omic Labs | As a healthcare professional in a hospital, I want omic lab data to be stored directly in the health data repository, so I can easily analyze correlations between clinical history and omic characteristics without relying on external systems like DVDs or third-party data access
R8.1.3 Sharing health data for research | As a researcher at an IRCCS, I want a solution that enables me to easily extract anonymized data from the Health Data Repository (HDR) for research purposes according to established standards, and, when needed, to export datasets for submission to the EHDS2
R8.1.4 Federated query on distributed heath data repository | As a healthcare professional, I want a Health Data Repository that enables me to query multiple federated repositories, given appropriate authorization, so that I can easily gain a comprehensive understanding of the patient’s medical history and improve continuity of care.

--- Tabella ---
Epic ID and Title | Epic Description
R8.2.1 Pluggable and Explainable framework for CDSS/DTs | As a healthcare software developer, I want a framework to provide support for developing Clinical Decision Support Systems (CDSS) and Digital Twins (DTs) that are pluggable, explainable, and optimized for seamless integration into EHRs. This framework should be seamlessly integrated into an EHR by an administrator without requiring software coding, provide functionality to explain to end users the rationale behind their suggestions or predictions and allow the use of white-box CDSS/DTs, where algorithms are represented in standardized declarative data formats
R8.2.2 CDS for Digital Pathology for Histological Sample and Image Analysis | As a pathologist, I want decision-support tools that assist me in analyzing surgical samples and scanned slide images to enhance the diagnostic process. These tools should provide advanced analysis capabilities to help identify relevant patterns and structures in tissue samples, making it easier and more accurate to diagnose conditions.
R8.2.3 DT for Emergency | As a policy maker, I want a Digital Twin EMS that enables decision-making through simulations, allowing me to optimize emergency medical resources efficiently. Unlike traditional methods limited to a few parameters, this solution will use a virtual model to test and adapt resource distribution based on real-time data (e.g., vehicle tracking, traffic, weather), helping improve service coverage and response times.
R8.2.4 CDS based on generative AI | As a healthcare professional, I want to make queries and create dashboards using natural language, leveraging generative AI techniques. This will allow me to access and visualize patient data intuitively, simplifying the process of gaining insights and supporting my clinical decision-making without the need for complex technical skills.

--- Tabella ---
Epic ID and Title | Epic Description
R8.3.1 Simplified Development of Healthcare Web Apps | As a developer of healthcare web apps, I want a specification and extensible software framework, that provides reusable components for managing holistic health data. This will enable me to rapidly develop consistent user interfaces, leveraging Ellipse services, unlike the current approach of building from scratch.
R8.3.2 Generative AI to Simplify Development | As a healthcare web app developer, I want to use generative AI tools to simplify and accelerate the development process, helping me quickly create and refine user interfaces and components while ensuring consistency and alignment with design standards.
R8.3.3 High-Level Visualization of Clinical-Omic Data | As a healthcare professional, I want a solution that provides high-level visualization of large volumes of omic data through multiple views, making it easier to understand and correlate with clinical data. Unlike current EHR/EMR systems that require external applications to explore omic data, this solution should offer integrated visualization tools for a more seamless experience.
R8.3.4 Dynamic Plugging of CDSS | As an EHR administrator, I want a solution that allows me to add or remove local or remote Clinical Decision Support Systems (CDSS) without requiring changes to the EHR code or any software development activities. Unlike current methods that necessitate code modifications, this solution should enable dynamic integration of CDSS tools, making it easier to manage and update decision support services.

--- Tabella ---
Epic ID and Title | Epic Description
R8.4.1 Remote Patient Monitoring | As a healthcare professional, I want a telemedicine platform that enables remote visits, assistance, and patient monitoring with real-time and asynchronous communication according to a patient’s care plan, so that I can provide comprehensive remote medical care and track patient KPIs effectively. Unlike traditional in-person visits, this platform will unify multiple telemedicine functionalities and integrate with hospital systems to support continuous and coordinated patient care.
R8.4.2 Patient's app for advanced telemedicine | As a patient, I want an app that allows me to access remote healthcare services, monitor my health status, and communicate with my healthcare providers in real-time or asynchronously, with the capability to connect various monitoring devices, so that I can receive continuous support and care outside of hospital visits and ensure my health is monitored consistently.
R8.4.3 CDS for patient monitoring | As a healthcare professional, I want a clinical decision support system that proactively predicts the evolution of monitored KPIs, suggests telemonitoring actions, and assists in configuring monitoring devices, resources, and alarms. This support will help me to plan and manage patient monitoring more effectively, improving patient care and streamlining my workflow.