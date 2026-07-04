---
source_file: IPCEI_AVANT_D0.3a_M3_PDMP_DataManagementPlan_V10
source_subdir: pdf
ingested: 2026-06-16
sha256: 55eee7ede7cddde044f110edcc6412eedde2665bb394b1b74444165b84e9854a
chars: 43291
---


--- Pagina 1 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 0 
 
 
D03a_M3_Data Management Plan  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D03a_M3_Data Management Plan 
Project AVANT: dAta and infrastructural serVices for the digitAl coNTinuu) 
ENGINEERING 
THE DIGITAL TRANSFORMATION
COMPANY 


--- Pagina 2 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 1 
 
 
D03a_M3_Data Management Plan  
 
 
 
 
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
Marco Alessi 
Marco Alessi, Vito Morreale 


--- Pagina 3 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 2 
 
 
D03a_M3_Data Management Plan  
INDEX 
LIST OF TABLES ................................................................................................................................................................................. 3 
1 
INTRODUCTION ................................................................................................................................................................ 4 
1.1 
EXECUTIVE SUMMARY ..................................................................................................................................................... 4 
1.2 
OBJECTIVES ....................................................................................................................................................................... 4 
1.3 
ACRONYMS ....................................................................................................................................................................... 4 
2 
METHODOLOGY................................................................................................................................................................ 6 
2.1 
DATA TYPES ...................................................................................................................................................................... 6 
2.2 
FAIR PRINCIPLES .............................................................................................................................................................. 7 
2.2.1 
MAKING DATA FINDABLE ............................................................................................................................................................................ 7 
2.2.2 
MAKING DATA ACCESSIBLE ........................................................................................................................................................................ 7 
2.2.3 
MAKING DATA INTEROPERABLE .............................................................................................................................................................. 8 
2.2.4 
MAKING DATA REUSABLE ........................................................................................................................................................................... 8 
2.3 
MANAGEMENT OF PERSONAL DATA ............................................................................................................................ 9 
2.3.1 
IDENTIFYING PERSONAL DATA ................................................................................................................................................................. 9 
2.3.2 
TECHNICAL AND ORGANIZATIONAL MEASURES FOR THE PROCESSING OF PERSONAL DATA ............................... 10 
2.4 
ETHICAL CONSIDERATIONS ......................................................................................................................................... 11 
2.5 
SECURITY CONSIDERATIONS ...................................................................................................................................... 12 
2.5.1 
DATA ACCESS POLICY ...................................................................................................................................................................................... 13 
2.6 
PRIVACY AND ETHICS OFFICE ..................................................................................................................................... 14 
3 
AVANT DATASETS ......................................................................................................................................................... 16 
4 
REFERENCES ................................................................................................................................................................... 17 
5 
ANNEX I: DATASET TEMPLATE .................................................................................................................................... 18 
 
 
 
 
 
 


--- Pagina 4 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 3 
 
 
D03a_M3_Data Management Plan  
 LIST OF TABLES 
Table 1: Acronyms .......................................................................................................................................................................................................................... 5 
Table 2: Data set template ........................................................................................................................................................................................................ 19 
 
 
 


--- Pagina 5 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 4 
 
 
D03a_M3_Data Management Plan  
1 
INTRODUCTION 
1.1 
EXECUTIVE SUMMARY 
This document outlines the data management plan implemented by the AVANT project. The plan aims to define the scope of 
data management within the project and to systematically review the datasets involved. It is designed to be a dynamic 
document, regularly updated as new information about the project’s data becomes available and as new datasets are 
identified. 
The document details the data management strategy, including the FAIR principles and their specific application within 
AVANT. 
The final section of the report examines each work package and task to identify any data management needs, providing an 
updated list of datasets within the project. 
1.2 
OBJECTIVES 
AVANT (dAta and infrastructural serVices for the digitAl coNTinuum) aims at delivering an integrated SW solution to build 
and deploy advanced Digital Twins (DTs from now on). A DT, described as a digital representation of an intended or actual 
real-world physical product, system, or process is not a new concept but introduces several R&D&I innovation challenges 
to exploit the full potential of the huge amount of data which is produced across the cloud-edge continuum. 
Given the scope of the project, data plays a crucial role in all aspects of design, development, evaluation and production of 
AVANT; therefore, a comprehensive data management plan (DMP) is essential. 
This deliverable focuses on providing a clear overview of the established data management practices and compiling a list of 
datasets present within the project as well as looking ahead to datasets to be used or generated until the end of the project. 
AVANT also takes a FAIR approach to data management following the European Commission’s guidelines. 
The remainder of the deliverable is structured in the following way. Section 2 sets out the methodology for managing data 
within AVANT including the types of data, the process of FAIR data management, legal, ethical and security considerations. 
Section 3 reviews the current status of existing and known future or expected datasets that will be present in each work 
package. Section 4 concludes the deliverable and sets out the path forward for managing data in the remainder of the 
project. 
 
1.3 
ACRONYMS 
ACRONYM 
DEFINITION 
ACRONYM 
DEFINITION 
A-Obj.  
AVANT Objective  
GSoTA  
Global State of The Art  
AI  
Artificial Intelligence  
HPC  
High-Performance Computing  
Apps  
Applications  
HW  
Hardware  
BDA  
Big Data Analytics  
I-Obj.  
IPCEI Objective  
BDVA  
Big Data Value Association  
IDSA  
International Data Space Association  


--- Pagina 6 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 5 
 
 
D03a_M3_Data Management Plan  
CAGR  
Compound Annual Growth Rate  
IG  
Innovation Goal  
CI/CD  
Continuous Integration/Continuous 
Delivery  
IIoT  
Industrial Internet of Things  
CH  
Cultural Heritage  
IoT  
Internet of Things  
CPS  
Cyber-Physical System  
IT  
Information Technology  
CDSS  
Clinical Decision Support Systems  
M&A  
Merger and Acquisition  
DDAaaS  
Distributed Data Analytics as a Service  
ML  
Machine Learning  
DDE  
Distributed Data Ecosystem  
MLOps  
ML Operations  
Del.  
Deliverable  
MP  
Macro Project  
DIH  
Digital Innovation Hub  
OS/OSS  
OS/ OS SW  
Dev(Sec)Ops  
SW development cycles including control 
of SW security aspects.  
PA  
Public Administration  
DevDataOps  
Management of training datasets  
SLA  
Service Level Agreement  
DPP  
Digital Product Passport  
SW  
Software  
DL  
Deep Learning  
UC  
Use Case  
DT  
Digital Twin  
UDT  
Urban DT  
DTOps  
DTs Operations  
TCO  
Total Cost of Ownership  
EBITDA  
Earnings Before Interests Taxes 
Depreciation and Amortization  
WP  
AVANT Work Package  
EFFRA  
European Factories of the Future 
Research Association  
WS  
IPCEI WorkStream  
eID  
electronic IDentification  
WSD  
IPCEI WorkStream Deliverable  
eIDAS  
electronic IDentification, Authentication, 
and Trust Services  
WS-Obj.  
IPCEI WorkStream – Objective  
ENG  
Engineering Ingegneria Informatica S.p.A.  
XaaS  
Anything as a Service  
TBD 
To be defined 
PRM 
Project Risk Management 
DMP 
Data Management Plan 
WPC 
Avant WP Coordinator 
Table 1: Acronyms 
 
 
 


--- Pagina 7 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 6 
 
 
D03a_M3_Data Management Plan  
2 
METHODOLOGY  
The data management plan (DMP) for the AVANT project has two primary objectives: 1) to establish comprehensive 
guidelines for data management within AVANT, and 2) to oversee the datasets within AVANT, ensuring they adhere to FAIR 
principles. This strategy aims to maintain consistency in data management and maximize the use and reuse of datasets 
through effective data management practices. 
The project is dedicated to adhering to best practices in data management, guided by the principle that data should be ‘as 
open as possible, as closed as necessary’. The security requirements of the project should drive a high standard of data 
management, ensuring all data is properly recorded, documented, stored, and disposed of in accordance with legal, ethical, 
data privacy, and security standards. 
In AVANT, the data management process begins with understanding the broader context of the datasets. Only then can the 
process of making the data FAIR commence. This initial context can be summarized by answering six key questions as 
outlined in the European Commission’s 2016 guidelines: 
1. 
What is the purpose of the data collection/generation and its relation to the project’s objectives? 
2. 
What types and formats of data will the project generate/collect? 
3. 
Will any existing data be reused, and if so, how? 
4. 
What is the origin of the data? 
5. 
What is the expected size of the data? 
6. 
To whom might the data be useful (‘data utility’)? 
The goal of this initial M3 version of the DMP is to define the methodological framework and prepare the necessary materials 
to request the required information from each WP Coordinator. The final version, to be delivered at the project’s conclusion, 
may include all datasets and more detailed information on the FAIRification process. 
Section 3 of the document will provide a summary of datasets within AVANT, detailing their relevance to the project’s goals, 
development activities, or specific tasks (addressing question 1). Section 2.1 considers the types of data collected, whether it 
is gathered, consumed, or used for evaluation within AVANT (covering question 2). Question 3 is particularly relevant to 
machine and deep learning tasks within AVANT, involving both existing publicly available datasets and data provided by end 
users, linking directly to question 4 on data origin. At this stage, the size of the data (question 5) may be unknown or difficult 
to quantify but could be measured by the number of survey respondents, data size in MBs or GBs, or the number of features 
or labeled objects. Finally, the utility of the data (question 6) should consider its long-term potential for the research team, 
LEAs, H2020 projects, or the broader DT research community, while also considering the necessary security restrictions. 
2.1 
DATA TYPES  
At this stage of the project, six types of data and datasets have been identified and are outlined below: 
1. 
Project Management Data: These datasets support the administration, management, and dissemination activities 
of the AVANT project. They are unlikely to be required for broader use. 
2. 
Primary Data: Collected specifically for project tasks, this data includes information related to software modules, 
results from interviews or surveys, and evaluation data. 


--- Pagina 8 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 7 
 
 
D03a_M3_Data Management Plan  
3. 
Secondary Data (Not Publicly Available): Previously collected data provided to the AVANT project, which is not 
publicly accessible (e.g., data from Law Enforcement Agencies). 
4. 
Derived Data: Generated from the output of processing activities by specific software modules within AVANT. 
5. 
Publicly Available Datasets: These datasets are already accessible to researchers and include, but are not limited to, 
training or benchmark data that support the development of the Digital Twin. 
6. 
Synthetic/Generated Data: Created for specific purposes within the project, these datasets do not contain real data. 
While other types of data may emerge during the project, these six categories are expected to cover the majority of datasets 
encountered. The DMP will be updated to include any additional data types identified. 
2.2 
FAIR PRINCIPLES  
The principles of FAIR data management were first introduced in 2014 and later formalized in 2016 [1]. These principles 
emerged from the recognition of the need to enhance the usability of research data, particularly to support computational 
analysis. The FAIR principles assert that data should be Findable, Accessible, Interoperable, and Reusable. These attributes are 
essential for promoting ongoing knowledge discovery and innovation, as well as ensuring scientific reproducibility and 
replicability. 
A key point highlighted in the OpenAIRE guide to FAIR data is that the process of making data FAIR does not necessarily 
mean that the data or even its metadata will be openly accessible. Instead, the FAIRification process involves following a 
structured approach that allows for a well-defined and justified rationale for any decisions regarding data accessibility. 
The following sections elaborate on the significance of FAIR data within the context of the AVANT project. This discussion is 
based on the European Commission’s guidelines on the application of FAIR principles for data management (2016) [2], the 
original framework described by Wilkinson et al.[1], and the GO FAIR Initiative [3]. 
2.2.1 MAKING DATA FINDABLE 
Regardless of whether the data is open or restricted, ensuring findability involves addressing several key factors: 
1. 
Metadata Usage: Utilize existing metadata standards (such as FAIRsharing) or establish clear processes for creating 
new metadata. Employ standard identifiers like DOIs to enhance data discoverability. 
2. 
Naming Conventions: Maintain consistent naming conventions across the AVANT project, aligning with the security 
domain and standard practices of Law Enforcement Agencies (LEAs) where applicable. Adhere to standards relevant 
to the research area. 
3. 
Keywords: Define and standardize keywords, especially for open data, to facilitate easier data discovery and 
categorization. 
4. 
Versioning: Implement version control to track changes in datasets, such as corrections of errors or the inclusion of 
new data. 
2.2.2 MAKING DATA ACCESSIBLE  
Accessibility can be addressed through the following options: 


--- Pagina 9 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 8 
 
 
D03a_M3_Data Management Plan  
1. 
Data Not Available: If the data is not made available, a full justification must be included in the DMP. Reasons for 
non-availability may include legal, contractual, security, data privacy, or intellectual property concerns. 
2. 
Restricted Data: The data may be available but subject to various restrictions, such as who can access and use the 
data, how the data is accessed, the required authorizations, and the permitted uses of the data. 
3. 
Openly Available Data: The data is made openly available on a research data repository, accompanied by 
comprehensive metadata and a detailed methodology of collection. 
If the decision is made to make the data available, several additional considerations must be addressed to support this 
process: 
 
Access Location: Determine where the data will be accessible (e.g., in a specific repository) and specify which 
repository will be used. 
 
Supplementary Information: Identify any additional information that should be deposited with the data, such as 
metadata, a codebook, software, or source code. 
 
Authorization Process: Establish whether an authorization process is needed for access, who will manage this 
process, and ensure it is clear and transparent. Combine this process with an appropriate license. 
To make data available, we can use institutional or national repositories, or approved data hosting repositories such as those 
listed by Open Research Europe
1. When data from the AVANT project is made available, the description should clearly link to 
the AVANT project and include an appropriate funding statement. 
2.2.3 MAKING DATA INTEROPERABLE 
Datasets often reach their highest value when integrated with other data, a process facilitated by interoperability. 
Interoperability can be enhanced through: 
1. 
Standardized Formats: Utilizing standardized data formats and adhering to existing standards. 
2. 
Common Ontologies: Employing common ontologies to ensure consistency and compatibility across datasets. 
3. 
Unified Metadata: Using common metadata within the project, supported by vocabularies. This may also involve 
standardizing labels within training data and addressing any discrepancies in standards or classifications among 
Member State Law Enforcement Agencies (LEAs). 
2.2.4 MAKING DATA REUSABLE 
Reusability is crucial, especially when data is shared with other researchers. It is important to understand the context in which 
the data was collected, any relevant limitations, and the conditions under which reuse is permitted. Reusability involves 
applying appropriate licenses, such as Creative Commons licenses
2, and considering factors like the time from data collection 
to publication, the impact of any embargoes, and the data’s ‘shelf-life’. 
                                                          
1
  https://open-research-europe.ec.europa.eu/for-authors/data-guidelines#hosting  
2
 https://creativecommons.org/about/cclicenses/  


--- Pagina 10 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 9 
 
 
D03a_M3_Data Management Plan  
Other factors influencing reusability include identifying the potential users of the data. For instance, data collected for a 
specific module, use case, or single end user may not be applicable to other contexts. Accompanying documentation should 
clarify how the data should (or should not) be interpreted to prevent misunderstandings. Finally, before making any AVANT 
data available, it is essential to ensure quality and security measures are in place. This ensures the dataset is error-free, well-
documented, and does not pose any security risks. 
2.3 
MANAGEMENT OF PERSONAL DATA  
2.3.1 IDENTIFYING PERSONAL DATA 
The data management process must pay particular attention to management of personal data. Indeed, in AVANT, the 
prevailing framework in which personal data must be managed is the European Union General Data Protection Regulation 
(GDPR)
3,. though for LEAs the Law Enforcement Directive (LED) might be also of relevance.   
Personal data refers to any data that related of an identified or identifiable living individual. Examples of personal data under 
the GDPR given by the European Commission include, but are not limited to,7  
 
a name and surname  
 
a home address  
 
an email address such as name.surname@company.com  
 
an identification card number  
 
location data (for example the location data function on a mobile phone)  
 
an Internet Protocol (IP) address  
 
a cookie ID  
 
the advertising identifier of a phone  
 
data held by a hospital or doctor, which could be a symbol that uniquely identifies a person  
 
social media or online forum usernames  
 
photographs or videos of someone  
 
audio recordings of someone’s voice.   
Within the data management plan, the collection, storage, and archiving of personal data are considered forms of 
‘processing,’ regardless of whether this is done through automated or non-automated means. Article 5 [4] of the GDPR 
outlines the principles governing the processing of personal data. These principles, commonly referred to as the seven key 
principles, include: 
 
Lawfulness, fairness and transparency  
 
Purpose limitation  
 
Data minimization  
 
Accuracy  
 
Storage limitation  
 
Integrity and confidentiality  
 
Accountability 
                                                          
3
 Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural 
persons with regard to the processing of personal data and on the free movement of such data, and repealing 
Directive 95/46/EC (General Data Protection Regulation) 


--- Pagina 11 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 10 
 
 
D03a_M3_Data Management Plan  
The management of any personal data within AVANT should follow these principles from initial collection through to long-
term storage and archiving (or disposal) throughout the project. In particularly, it is necessary to assure that are established a 
lawful basis for any data that will process. The accepted lawful bases mentioned in Article 6 of the GDPR and are one of the 
following 
 
(informed) consent  
 
necessary to perform a contract  
 
necessary for compliance with a legal obligation  
 
vital interests of the data subject or another natural person  
 
performance of a public task in the public interest, or  
 
 necessity for a legitimate interest of the controller under the condition that it is not outweighed by rights and 
freedoms of the data subject. 
In AVANT, the majority of personal data should be processed on the basis of informed consent where possible. 
2.3.2 TECHNICAL AND ORGANIZATIONAL MEASURES FOR THE PROCESSING OF PERSONAL DATA 
Under Articles 25 – data protection by design and default and Article 32 – security of processing the following requirements 
are stated:  
 
25(1): … the controller shall, both at the time of the determination of the means for processing and at the time of the 
processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which 
are designed to implement data-protection principles, such as data minimisation, in an effective manner and to 
integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and protect 
the rights of data subjects.  
 
25(2) … The controller shall implement appropriate technical and organisational measures for ensuring that, by default, 
only personal data which are necessary for each specific purpose of the processing are processed.  
 This is further emphasised in Article 32(1) which states the following:  
…the controller and the processor shall implement appropriate technical and organisational measures to ensure a level of 
security appropriate to the risk, including inter alia as appropriate:  
 
the pseudonymisation and encryption of personal data; 
 
the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services; 
 
the ability to restore the availability and access to personal data in a timely manner in the event of a physical or 
technical incident; 
 
a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for 
ensuring the security of the processing. 
Therefore, AVANT will employ a number of techniques both at a project and organisational level to ensure the adequate 
protection of personal data. These include but are not limited to: 
 
Implementation of anonymisation techniques where possible – recognising that full anonymity is inherently difficult 
to achieve. 
 
Application of pseudonymisation techniques – defined as - processing of personal data in such a manner that the 
personal data can no longer be to attributed to a specific data subject without the use of additional information, 
provided that such additional information is kept separately and is subject to technical and organisational measures to 


--- Pagina 12 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 11 
 
 
D03a_M3_Data Management Plan  
ensure that the personal data are not attributed to an identified or identifiable natural person. Where it is not possible 
to apply anonymisation techniques within AVANT, pseudonymisation approaches are applied. These include manual 
approaches separating research participants identities from their responses and, in larger datasets through the 
systematic replacement of detected identifiers with placeholder information.   
Other measures applied in AVANT at the project level include managing and restricting access to project and technical 
resources to those with a need or requirement to access to fulfil their role in the project by implementing authorisation and 
access control procedures; organisational policies on creating and maintain backups to data as well as putting into place 
policies and procedures such as training on GDPR and cyber security.  
2.3.2.1 
ANONYMIZATION STRATEGIES 
Anonymisation involves removing all personal identifiers from a dataset, rendering it no longer subject to GDPR as no 
personal data is processed. Even if data is initially collected anonymously, the process of anonymising it is still considered 
personal data processing. However, this method is inherently less risky than using the original dataset for analysis. 
In AVANT, the approach to anonymising data varies across different activities and tasks. 
For research involving survey data collection (e.g., WP0), data can be collected anonymously from the start, eliminating the 
need for further anonymisation. However, for smaller datasets, it is good practice to manually check that respondents have 
not included personal data in free text fields. 
In the context of interviews or evaluations, especially where direct interaction with participants occurs (e.g., during pilot 
activities), pseudonymisation may be more appropriate. Here, the lead researcher should assign unique IDs to each 
participant and store this information separately from interview transcripts or evaluation forms. During transcription, 
identifiers should be removed unless essential to the response, often replaced with generic terms (e.g., age ranges). While the 
lead researcher maintains the link between participants and their responses, other researchers will only access anonymised 
data. However, since a link to the original data remains, it may not be considered truly anonymised. 
For training and test data used in machine learning or AI activities, anonymisation may not always be feasible. If data is 
sourced from existing open-source or research datasets, it should be checked for prior anonymisation and lawful reuse. If 
researchers collect the data themselves, anonymisation is possible, provided it does not conflict with the activity’s goals. 
True anonymisation of system data collected during development or piloting is challenging due to the complexity and size of 
the datasets. Techniques may include using natural language processing to detect and replace personal identifiers. Care must 
be taken to maintain data relationships, possibly using one-way hashes to prevent reidentification while preserving utility. 
Online posts are particularly difficult to fully anonymise. Even if identifiers are removed, the content can often be traced back 
to the original post. Additional phrase replacements with identical meanings may be necessary. 
For media such as images or videos, face detection algorithms can obscure or blur faces to limit identification, though this is 
not true anonymisation. Similarly, audio files can be altered with filters or masks to change the voice, but personal 
information revealed in speech must be removed. 
2.4 
ETHICAL CONSIDERATIONS  
In addition to data privacy and protection concerns, AVANT must also address ethical considerations related to data 
management within the project. While legal and ethical concerns are often intertwined, they are distinct and require separate 
discussions beyond the scope of GDPR. 


--- Pagina 13 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 12 
 
 
D03a_M3_Data Management Plan  
In many instances within AVANT, ethical issues arise not from the data itself but from how it is collected, labeled (if 
applicable), and potentially reused. Overall ethical considerations for data management are guided by two main frameworks. 
The first is the ALLEA (2017) code of conduct [5], which outlines good ethical practices in eight research areas. Relevant to 
AVANT, the section on data practices and management includes the following five approaches: 
1. 
Appropriate Stewardship and Curation: Securely managing and curating data and research materials, regardless 
of publication status, for an appropriate duration. 
2. 
Application of FAIR Principles: Implementing the FAIR principles for data management. 
3. 
Transparency: Ensuring transparency regarding access to or restriction of data and research materials. 
4. 
Data as Research Products: Treating data products as actual research outputs. 
5. 
Equitable Use and Ownership: Providing for the fair use and ownership of data, alongside appropriate intellectual 
property protections. 
AVANT should integrate these practices into daily research activities and ensure they are reflected in dissemination, 
communication, and intellectual property management tasks. 
The second framework pertains to the ethical management of data in artificial intelligence and machine learning systems. The 
European Commission’s High-Level Expert Group on AI has established ethics guidelines for trustworthy AI, comprising seven 
key requirements [6]. Many of these guidelines specifically address the data used to train or test AI systems. For AVANT, data 
management practices for AI systems should adhere to these trustworthy AI principles, particularly: 
1. 
Human Agency and Oversight: Ensuring data collection and labeling practices, as well as dataset evaluations, are 
conducted with human oversight. 
2. 
Technical Robustness and Safety: Implementing safeguards to prevent data poisoning and addressing changes in 
data collection methodologies outside the project’s control. 
3. 
Privacy and Data Governance: Considering personal data within datasets, opportunities for de-identification or 
anonymisation, and preventing unintended re-identification of data subjects. 
4. 
Transparency: Documenting data collection methods and labeling procedures. 
5. 
Diversity, Non-Discrimination, and Fairness: Ensuring dataset representativeness, minimizing bias, preventing the 
criminalization of certain groups, and managing the inclusion/exclusion of protected characteristics. 
6. 
Accountability: Establishing approaches for auditing dataset features and any included or excluded data, whether 
by design or availability. 
The final guideline addresses societal and environmental well-being, which, while less impactful on data management 
processes, is relevant if large amounts of data require long-term storage. 
2.5 
SECURITY CONSIDERATIONS 
Data used in AVANT will be kept secure by implementing access controls. Only authorized individuals to access the data 
based upon the roles and responsibilities within the project. Data access will be in compliance with all laws and regulations. 
Additionally, stakeholders will be asked for consent in order to collect, use, and disclose sensitive data.  


--- Pagina 14 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 13 
 
 
D03a_M3_Data Management Plan  
In all cases, it is crucial to consider not only the data itself but also: 
 
The potential impact if this data is combined with other datasets. 
 
The metadata that must accompany the dataset. 
 
Documentation detailing how the data was collected or created. 
 
Information on the processes required for parsing the data. 
 
Inferences that could be drawn from the data beyond its original purpose. 
Special attention should be given to data collected during piloting and demonstration activities, as it may reveal how multiple 
datasets can be linked or expose the analytical or investigative capabilities and processes of LEAs. 
2.5.1 DATA ACCESS POLICY 
The Data Access Policy plays a fundamental role in the AVANT data management by defining the guidelines and procedures 
for secure and responsible data access. Its primary objective is to ensure that data is accessed and managed in a secure, 
controlled, and compliant manner. The data access policy includes specifications regarding user authentication, authorization 
levels, encryption requirements, data sharing restrictions, auditing mechanisms, and any relevant legal or regulatory 
considerations. By implementing this policy, data managers can mitigate the risk of unauthorized data access, protect 
sensitive information, and maintain data integrity and privacy. 
Within AVANT project clear role definitions are crucial for ensuring accountability and maintaining data security. Defining 
roles establishes the authority and access privileges on users, ensuring that only the authored users handle and access data. 
The European Commission (EC) emphasizes the importance of robust access control, authorization mechanisms, and privacy 
considerations in data governance. Specifically, the EC recommends: 
Access Control 
Refers to the process of granting or restricting access to data based on predefined rules and policies. The EC recommends 
implementing access control mechanisms that enforce the principle of least privilege, ensuring that individuals have access 
only to the data necessary to perform their assigned tasks. Access control policies should include user authentication, role-
based access control and granular permissions management
4. 
Authorization Mechanisms 
Defines how access requests are evaluated and approved based on established rules and policies. The EC advises 
implementing robust authorization mechanisms to ensure that data access is granted only to authorized individuals or 
systems. This includes defining authorization rules, managing access rights, and implementing workflow processes for 
granting and revoking access privileges. 
Privacy Considerations 
                                                          
4 https://edps.europa.eu/sites/default/files/publication/11-07-15_acs_jrc_en.pdf  


--- Pagina 15 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 14 
 
 
D03a_M3_Data Management Plan  
These considerations are crucial to protect personal data and comply with data protection regulations such as the GDPR 
(General Data Protection Regulation)
5. The EC emphasizes the need to incorporate privacy principles into data access policies. 
This involves implementing privacy controls, anonymization techniques and data minimization practices to reduce the risk of 
privacy breaches. Additionally, ensuring transparency and providing users with clear information about their data rights and 
how their data is used is essential. 
Consent Management 
Consent management is a critical aspect of privacy that the European Commission emphasizes. It is essential for organizations 
to implement mechanisms that allow for obtaining, documenting, and managing user consent regarding the processing of 
their personal data. This consent should be freely given, specific, informed, and clear. Access policies should include 
provisions to accommodate and respect user preferences, providing the option to withdraw consent if desired. This 
consideration becomes even more important when considering the potential need for an off-boarding process. 
Furthermore, it is crucial to establish a formal and standardized procedure for revoking the credentials of former employees. 
Although former employees may not have malicious intentions, unattended credentials can be exploited by hackers or other 
malicious individuals to gain unauthorized access to sensitive data and systems. Since these credentials are not actively in use, 
it may go unnoticed that they have been compromised until substantial damage has already occurred
6. 
Auditing and Monitoring 
To ensure accountability and detect any unauthorized access or misuse of data, the EC recommends implementing robust 
audit and monitoring mechanisms. These mechanisms enable the tracking and recording of data access activities, including 
user actions, data modifications, and access attempts, especially for employees who need access to sensitive data as part of 
their responsibilities. Regular audits and monitoring help identify security breaches and ensure compliance with data 
protection requirements.  
Incorporating these access control, authorization mechanisms, and privacy considerations, organizations can establish a 
strong baseline for data protection and privacy rights. 
2.6 
PRIVACY AND ETHICS OFFICE 
AVANT will establish a Privacy and Ethics Office to monitor compliance with the GDPR and providing advice to the WPCs on 
data protection matters where appropriate or requested. The data protection and ethics office will have the following 
responsibilities:  
 
to monitor compliance with General  Data  Protection, Directive 680/2016  and  with  other  Union  or 
Member  State  data  protection  provisions  in  relation  to  the  protection  of  personal  data,  including 
the  assignment  of  responsibilities,  awareness-raising  and  training  of  staff  involved  in  processing operations, 
and the related audits  
 
to provide advice when requested to WPCs activities  
                                                          
5 https://gdpr.eu/tag/gdpr/?cn-reloaded=1  
6 https://www.birdrockusa.com/blog/9-data-governance-policies-for-business  


--- Pagina 16 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 15 
 
 
D03a_M3_Data Management Plan  
 
to carry out data protection impact assessments where needed 
 
to establish mitigation measures for rights and freedom possible infringements through an awareness report  
 
to apply data protection and ethics by design principles to the system and developed tools  
 
to cooperate with the supervisory authority  
 
to act as the contact point for users (testing phase) and supervisory authority on issues relating to data processing, 
and to consult, where appropriate, with regard to any other matter.  
The privacy and ethics office shall in the performance of its tasks have due regard to the risk associated with processing 
operations, considering the nature, scope, context and purposes of processing. 
Other mitigation measures to avoid the potential misuse of research data will be: monitor the researcher actions, define a 
procedure for incidental personal data collection, define and implement ethics and privacy policy, define a data breach 
procedure, etc. All measures will be part of the activities of the Privacy and Ethics Office.  
 
 


--- Pagina 17 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 16 
 
 
D03a_M3_Data Management Plan  
3 
AVANT DATASETS 
In this chapter, will be review the current status of existing and known future or expected datasets that will be present in each 
work package. 
To achieve this, a template for data collection Annex I) will be distributed to each WPC. 
 
 


--- Pagina 18 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 17 
 
 
D03a_M3_Data Management Plan  
4 
REFERENCES  
1. 
Wilkinson, M. D. et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific 
data, 3(1), 1-9  
2. 
European Commission (2016) H2020 Programme: Guidelines on FAIR Data Management in Horizon 2020. 
https://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/oa_pilot/h2020-hi-oa-data-mgt_en.pdf  
3. 
GO FAIR (n.d.) GO FAIR Initiative: make your data and services FAIR. https://www.go-fair.org/   
4. 
Article 5 GDPR. Principles relating to processing of personal data, https://gdpr-text.com/read/article-5/#para_gdpr-
a-05_1f  
5. 
ALLEA (2017) The European Code of Conduct for Research Integrity. All European Academies. https://allea.org/code-
of-conduct/  
6. 
European High Level Expert Group on AI (2019). Ethics guidelines for trustworthy AI. European Commission. 
https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai  
 
 


--- Pagina 19 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 18 
 
 
D03a_M3_Data Management Plan  
5 
ANNEX I: DATASET TEMPLATE 
Overview  
 
Dataset ID  
 
Dataset Title  
 
Work Package  
 
Task / Deliverable  
 
Partner(s)  
 
Data Type  
 
Format  
 
Details  
 
Description  
 
Use in AVANT  
 
Use beyond AVANT  
 
Open Data  
 
Is the data open?  
 
Explanation  
 
Storage location  
 
Who  
 


--- Pagina 20 ---

 
 
 
 
 
Confidential document.  
Not for distribution 
Pag. 19 
 
 
D03a_M3_Data Management Plan  
Metadata  
 
How  
 
Ethics and Data Protection  
Dataset contains 
personal data?  
Does the dataset contain personal data, and if YES, which?   
 
If YES, have you conducted a data minimisation review to ensure that you need all data 
you intend to process? Please explain how data you are processing are adequate, 
relevant and limited to what is necessary in relation to the purposes of your research:  
 
Have you devised appropriate technical and organisational measures to safeguard the 
rights and freedoms of the data subjects/research participants? In other words, do you 
have any data protection policy in your organisation that determine these measures? 
Please provide overview of these measures:  
 
Table 1: Data set template 
 
