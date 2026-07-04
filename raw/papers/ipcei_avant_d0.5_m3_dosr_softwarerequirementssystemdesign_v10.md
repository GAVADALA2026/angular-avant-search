---
source_file: IPCEI_AVANT_D0.5_M3_DOSR_SoftwareRequirementsSystemDesign_V10
source_subdir: pdf
ingested: 2026-06-16
sha256: a0b5c7f02b00c6eb94fdc767536e79db1fac42c6e5f2282b0cb82f6aa249bd89
chars: 14022
---


--- Pagina 1 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 0 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design 
Project AVANT:  
dAta and infrastructural serVices for the digitAl coNTinuu) 
ENGINEERING 
THE DIGITAL TRANSFORMATION 
COMPANY 


--- Pagina 2 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 1 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
 
 
 
 
 
REVISION TABLE: 
 
 
ISSUED BY 
Engineering I.I. 
APPROVED BY 
Giuseppe Sajeva 
EFFECTIVE DATE 
29/09/2023 
VERSION NO. 
1.0 
 
 
VERS. 
DATE 
REASON 
CHANGES 
AUTHORS 
REVIEWERS 
1.0 
29/09/2023 
First Version 
n.a. 
Giovanni Frattini 
Marco Alessi, Vito Morreale 


--- Pagina 3 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 2 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
INDEX 
LIST OF TABLES ................................................................................................................................................................................. 3 
ACRONYMS ........................................................................................................................................................................................ 4 
1 
ARCHITECTURAL GOALS AND PRINCIPLES .................................................................................................................. 6 
1.1 
HIGH-LEVEL ARCHITECTURAL OVERVIEW .................................................................................................................... 7 
1.2 
MULTI-PROVIDER CLOUD CONTINUUM CONCEPT..................................................................................................... 7 
1.3 
REFERENCE DOCUMENTATION – ANNEX ..................................................................................................................... 9 
 
 
 
 
 
 


--- Pagina 4 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 3 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
LIST OF TABLES 
Table 0-1: Acronyms ...................................................................................................................................................................................................................... 5 
Table 1-1: Annex ............................................................................................................................................................................................................................. 9 
 
 
 


--- Pagina 5 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 4 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
ACRONYMS 
The following table contains acronyms are used throughout this document: 
Term 
Definition 
Term 
Definition 
A-Obj.  
AVANT Objective  
IBN 
Intent Based Network 
AI 
Artificial Intelligence 
IBS 
Intent Based System 
API 
Application Programming Interface 
IDSA  
International Data Space Association  
Apps 
Applications 
IG  
Innovation Goal  
AVANT 
dAta and infrastructural serVices for the digitAl 
coNTinuum 
IIoT  
Industrial Internet of Things  
BDA  
Big Data Analytics  
IoT 
Internet of Things 
BDVA  
Big Data Value Association  
I-Obj.  
IPCEI Objective  
BSS 
Business Support System 
IPCEI 
Important Projects of Common European Interest 
C3OP 
Cognitive Computing Continuum Orchestration 
Platform  
IT 
Information Technology 
CAGR  
Compound Annual Growth Rate  
M&A  
Merger and Acquisition  
CDSS  
Clinical Decision Support Systems  
ML 
Machine Learning 
CH  
Cultural Heritage  
MLOps 
ML Operations 
CI/CD 
Continuous Integration/Continuous Delivery 
MP  
Macro Project  
CIS 
Cloud Infrastructure and Services 
NBI 
NorthBound Interface 
CPS  
Cyber-Physical System  
NIST 
National Institute of Standards and Technology 
DDAaaS  
Distributed Data Analytics as a Service  
OSS 
Operation Support System 
DDE 
Distributed Data Ecosystem 
PA  
Public Administration  
Del.  
Deliverable  
PaaS 
Platform as a Service 
Dev(Sec)Ops SW development cycles including control of SW 
security aspects. 
PRM 
Project Risk Management 
DevDataOps Management of training datasets  
QC 
Quality Control 
DIH  
Digital Innovation Hub  
QA 
Quality Assurance 
DL 
Deep Learning 
SaaS 
Software as a Service 
DPP  
Digital Product Passport  
SBI 
SouthBound Interface 
DL  
Deep Learning  
SLA  
Service Level Agreement  
DT 
Digital Twin 
SW 
Software 
DTOps 
DTs Operations 
TBD 
To be defined 
ENG 
Engineering Ingegneria Informatica S.p.A. 
TCO  
Total Cost of Ownership  
EBITDA  
Earnings Before Interests Taxes Depreciation and 
Amortization  
TOSCA 
Topology and Orchestration for the Specification of 
Cloud Applications 
EFFRA  
European 
Factories 
of 
the 
Future 
Research 
Association  
UC 
Use Case 


--- Pagina 6 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 5 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
eID  
electronic IDentification  
UDT  
Urban DT  
eIDAS  
electronic IDentification, Authentication, and Trust 
Services  
WP 
Work Package 
GSoTA  
Global State of The Art  
WS 
IPCEI WorkStream 
HPC 
High-Performance Computing 
WSD  
IPCEI WorkStream Deliverable  
HW 
Hardware 
WS-
Obj.  
IPCEI WorkStream – Objective  
IaaS 
Infrastructure as a Service 
XaaS 
Anything as a Service 
Table 0-1: Acronyms 
 
 
 


--- Pagina 7 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 6 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
1 
ARCHITECTURAL GOALS AND PRINCIPLES  
Considering the above mentioned HL requirements and TCs let consider some of the architectural goals matching them. 
Architectural Goals: 
1. 
Scalability: Ensure the architecture can scale horizontally and vertically to accommodate increasing workloads and 
user demands. 
2. 
Flexibility: Design a flexible architecture that can adapt to changing requirements and integrate with various 
technologies and platforms. 
3. 
Interoperability: Facilitate seamless integration and interaction between diverse systems and cloud providers, 
ensuring smooth data exchange and service interoperability. 
4. 
Resilience and High Availability: Build a robust system capable of maintaining high availability and resilience 
against failures and disruptions. 
5. 
Security and Compliance: Incorporate strong security measures and comply with relevant standards and 
regulations to protect data and services. 
6. 
Energy Efficiency: Optimize the system for energy efficiency to reduce the environmental footprint and operational 
costs. 
7. 
Ease of Management: Provide tools and interfaces that simplify system management, monitoring, and 
maintenance. 
Guiding software engineering Principles: 
1. 
Modularity: Develop the system in modular components to enable independent development, testing, and 
deployment. 
2. 
Decoupling: Decouple components to reduce dependencies and enhance flexibility and resilience. 
3. 
Standards-Based: Adhere to industry standards and best practices to ensure compatibility and future-proofing. 
4. 
User-Centric Design: Focus on user needs and experience, ensuring the architecture supports intuitive and efficient 
workflows. 
5. 
Continuous Improvement: Implement feedback loops and continuous improvement processes to refine and 
enhance the architecture over time. 


--- Pagina 8 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 7 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
 
1.1 
HIGH-LEVEL ARCHITECTURAL OVERVIEW 
We want in this section to highlight the main components at infrastructure level and their interactions that will enable the 
concept of Multi provider Cloud Continuum. It serves as a blueprint for understanding how different parts of the system work 
together at infrastructure level to achieve the project goals.  
Key Components: 
1. 
Compute Nodes: Central processing units that handle the bulk of computational tasks. These nodes will include 
both general-purpose CPUs and specialized GPUs for advanced processing. 
2. 
Storage Nodes: Dedicated nodes for data storage, ensuring high availability and fast access to large datasets. 
3. 
Networking 
Components: High-speed interconnects and network appliances that facilitate seamless 
communication between different parts of the system. 
4. 
Edge Computing Nodes: Smaller, distributed nodes located closer to end-users to provide low-latency processing 
and data handling. 
5. 
Management and Orchestration Layer: Software tools and interfaces for managing resources, deploying 
applications, and orchestrating workflows across the multi-provider cloud continuum. 
6. 
Security and Compliance Layer: Components dedicated to ensuring security and regulatory compliance, including 
identity and access management, encryption, and audit logging. 
7. 
Monitoring and Observability Layer: Tools and systems for monitoring performance, detecting anomalies, and 
providing insights into the operation of the system. 
8. 
Distributed and scalable software applications: software designed to leverage the computing power, data 
storage, and connectivity provided by a multi-cloud infrastructure. This includes applications based on microservices, 
artificial intelligence, data analytics, IoT, edge computing, and business-critical platforms. These applications can 
dynamically adapt to workload demands, operate in hybrid environments, and ensure high performance, security, 
and resilience. 
1.2 
MULTI-PROVIDER CLOUD CONTINUUM CONCEPT 
The multi-provider cloud continuum concept envisions a seamless integration of cloud services from multiple providers, 
creating a unified environment that spans public clouds, private clouds, and edge computing resources. This continuum 
allows for optimal resource utilization, improved redundancy, and the ability to leverage the best features of each provider. 
Features: 
1. 
Unified Resource Management: A single interface for managing resources across different providers, simplifying 
operations and reducing complexity. 


--- Pagina 9 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 8 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
2. 
Cross-Provider Orchestration: The ability to deploy and manage applications across multiple cloud environments, 
ensuring flexibility and scalability. 
3. 
Dynamic Resource Allocation: Automated allocation and scaling of resources based on real-time demand and 
predefined policies. 
4. 
Interoperability: Ensuring that services and applications can seamlessly interact across different cloud 
environments. 
5. 
Data Sovereignty and Compliance: Ensuring that data is stored and processed in compliance with regional 
regulations and organizational policies. 
Following these basic architectural principles let’s consider some basic decision that will be further confirmed during the 
execution of the project  
Decisions: 
1. 
Choice of Technologies: We have selected Kubernetes for container orchestration. We will analyse in depth eBPF 
technologies possibly complementing or substituting Prometheus/Thanos for monitoring, adding the features for 
having a fully multi provider observability feature. More investigation are needed for finding a satisfactory solution 
for for log aggregation considering the distribution of computing in this context. 
2. 
Modular Design: Adopting a modular architecture to enable independent development and scaling of components, 
allowing for more agile responses to changes in requirements. 
3. 
Use of Open Standards: Implementing open standards for communication, data formats, and APIs to ensure 
interoperability and future-proofing the architecture. 
4. 
Security First Approach: Prioritizing security in the design and implementation phases, including the use of zero-
trust principles and end-to-end encryption. 
5. 
Energy Profiling: Integrating tools for monitoring and optimizing energy consumption to align with sustainability 
goals. 
Rationale: 
1. 
Scalability and Flexibility: The modular and standards-based approach ensures the architecture can scale and 
adapt to future needs without major overhauls. More R&D is needed for assessing scalability in Mult provider 
contexts considering the need for managing appropriately network resources 
2. 
Interoperability: By adhering to open standards, the system can integrate with a wide range of existing and future 
technologies, ensuring seamless operation across different environments. 
3. 
Security: A proactive security approach mitigates risks early and ensures compliance with stringent regulatory 
requirements. 


--- Pagina 10 ---

 
 
   
 
 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 9 
 
 
D0.5_M3_AVANT SW Requirements and SW and system design  
4. 
Energy Efficiency: Monitoring and optimizing energy usage aligns with global sustainability initiatives and reduces 
operational costs. 
5. 
User-Centric Design: Focusing on the needs and experience of users ensures that the system is practical and 
effective in real-world scenarios. 
1.3 
REFERENCE DOCUMENTATION – ANNEX 
The comprehensive set of annexes listed below is an integral part of this document and provides detailed documentation to 
support the development, quality assurance, and maintenance of the AVANT project. 
WP 
Del.   Documents 
WP1 D1.0  IPCEI_AVANT_D1.0_M3_DOSR_WP1_RequirementsAndFuncionalDesign_V10.pdf 
WP4 D4.0  IPCEI_AVANT_D4.0_M3_DOSR_WP4_RequirementsAndFuncionalDesign_V10.pdf 
WP5 D5.0  IPCEI_AVANT_D5.0_M3_DOSR_WP5_RequirementsAndFuncionalDesign_V10.pdf 
WP6 D6.0  IPCEI_AVANT_D6.0_M3_DOSR_WP6_RequirementsAndFuncionalDesign_V10.pdf 
WP7 D7.0   IPCEI_AVANT_D7.0_M3_DOSR_WP7_RequirementsAndFuncionalDesign_V10.pdf 
WP8 D8.0  IPCEI_AVANT_D8.0_M3_DOSR_WP8_RequirementsAndFuncionalDesign_V10.pdf 
 
 
 
Table 1-1: Annex 
