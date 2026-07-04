---
source_file: IPCEI_AVANT_D4.0_M3_DOSR_WP4_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: b6b5bc4a835abbba87170ed4c14fb7cc8ffb3233d6514051a95827de781a6bc8
chars: 75032
---

REVISION TABLE:
LIST of tables
Table 1: Acronyms	6
Table 2: Annex	8
Table 3: WP4 Innovation Goals	17
Table 4: WP4 key performance indicators	18
Table 5: Requirements for DPPs	22
Table 6: roadmap for achieving DPP compliance	23
Table 7: US_WP4.1.1	27
Table 8: US_WP4.1.2	27
Table 9: US_WP4.1.3	27
Table 10: US_WP4.1.4	27
Table 11: US_WP4.1.5	28
Table 12: US_WP4.1.6	28
Table 13: US_WP4.1.7	28
Table 14: US_WP4.1.8	28
Table 15: US_WP4.1.9	28
Table 16: US_WP4.1.10	29
Table 17: US_WP4.1.11	29
Table 18: US_WP4.1.12	29
Table 19: US_WP4.2.1	29
Table 20: US_WP4.2.2	29
Table 21: US_WP4.2.3	30
Table 22: US_WP4.2.4	30
Table 23: US_WP4.2.5	30
Table 24: US_WP4.2.6	30
Table 25: US_WP4.2.7	30
Table 26: US_WP4.2.8	30
Table 27: US_WP4.2.9	31
Table 28: US_WP4.2.10	31
Table 29: US_WP4.3.1	31
Table 30: US_WP4.3.2	31
Table 31: US_WP4.3.3	31
Table 32: US_WP4.4.1	32
Table 33: US_WP4.4.2	32
Table 34: US_WP4.4.3	32
Table 35: US_WP4.4.4	32
Table 36: US_WP4.4.5	32
Table 37: US_WP4.4.6	33
Table 38: US_WP4.5.1	33
Table 39: US_WP4.5.2	33
Table 40: US_WP4.5.3	33
Table 41: US_WP4.6.1	33
Table 42: US_WP4.6.2	34
Table 43: US_WP4.6.3	34
Table 44: US_WP4.7.1	34
Table 45:US_WP4.7.2	34
Table 46: US_WP4.8.1	35
Table 47: US_WP4.8.2	35
Table 48: US_WP4.8.3	35
LIST of figures
Figure 1: Digital Twin - 5 Dimensions Model	11
Figure 2: Digital Twin market	13
Figure 3: Product lifecycle	20
Acronyms
Table 1: Acronyms
WP4 in brief
WP4 aims to drive the evolution of manufacturing processes into fully digital environments where real-time data from various sources can be harnessed to optimize production, enhance operational efficiency, and ensure product quality. As manufacturing becomes more digital, it is essential for industries to leverage the potential of Digital Twins (DTs) to gain both operational and strategic advantages. By creating digital replicas of physical assets, processes, and entire production lines, businesses can achieve deeper insights into their operations, enabling predictive maintenance, reducing downtime, and improving overall efficiency. This transformation not only revitalizes business processes but also aligns with the principles of Industry 5.0, which emphasizes the harmonious collaboration between human and artificial intelligence within a smart, adaptive industrial ecosystem.
Activities are organized around several key innovation goals, each designed to address specific challenges and opportunities in the implementation of DTs. The first of these goals is to develop an integrated approach to manufacturing production processes that involves creating DT models that provide a comprehensive digital representation of a product's lifecycle—from design and production to end-of-life and recycling. Another significant innovation goal is the creation of the Digital Product Passport (DPP), an advanced application of DT technology that serves as a digital record containing detailed information about a product’s origin, composition, production process, and lifecycle. This record is accessible to all stakeholders across the supply chain, facilitating recycling, reuse, and contributing to a circular economy. This goal underscores WP4’s commitment to enhancing the environmental responsibility of manufacturing processes, reducing waste, and promoting the efficient use of resources.
WP4 also prioritizes alignment with the Industry 5.0 paradigm, particularly through the development of human-centered processes. In this context, DTs are not only digital replicas of machines and systems but also include representations of human workers—referred to as "persona twins." These persona twins facilitate the integration of human intelligence and skills into the digital ecosystem, enabling more effective collaboration between humans and machines by leveraging cognitive computing and advanced data analytics to create a more adaptive and responsive manufacturing environment. This approach highlights the importance of human factors in the digitalization process, ensuring that the shift towards more automated and intelligent systems enhances, rather than diminishes, human roles in manufacturing. The objectives of this WP are ambitious and wide-ranging, addressing both the technological challenges and the strategic needs of modern manufacturing. One of the primary goal is to create an infrastructure that supports the continuous evolution of an ecosystem of DTs. This involves developing a platform that not only enables the deployment of DTs but also ensures their interoperability, scalability, and adaptability over time. The platform will be designed to support the integration of DTs across various stages of the product lifecycle, from design and production to maintenance and disposal.
Moreover, WP4 emphasizes the importance of enhancing the intelligent capabilities of DTs. This involves incorporating advanced cognitive services and AI-driven analytics into the DT framework, enabling more sophisticated decision-making and process optimization. By integrating these capabilities, WP4 aims to empower manufacturing companies to not only react to changes in their production environment but also anticipate and proactively address potential issues. This proactive approach is essential for maintaining competitiveness in the rapidly evolving industrial landscape.
In conclusion, WP4 seeks to revolutionize the manufacturing industry by advancing the implementation and evolution of Digital Twin technologies. Through its focus on innovation, sustainability, and human-centric design, WP4 aims to set a new standard for digital manufacturing that aligns with the principles of Industry 5.0. By addressing the technological challenges and strategic needs of modern manufacturing, WP4 is paving the way for a future where digital and physical processes are seamlessly integrated, leading to more efficient, sustainable, and adaptive production systems.
Reference Documentation – ANNEX
Table 2: Annex
Document structure and evolution
This document will deal with WP4 Requirements, SW design and system design. The first version (V1) released at M3 will concentrate on Requirements.
Since a valid preliminary analysis of Requirements, expressed as high-level Innovation Goals (IGs) was carried out to propose the Avant Project Portfolio, our current Requirement analysis will revisit, refresh (considering the progress in the GSoTA, if any) and detail (where necessary) the relevant requirements of further detail.
Therefore, a structural similarity between the refreshed requirements and those sections should not surprise.
Global State of the Art
Introduction
Digital Twin technology is an advanced simulation and modelling technology that creates virtual replicas of physical objects, systems, or processes. By continuously receiving real-time data from sensors, IoT devices, and other sources, these digital replicas provide detailed insights into the operation, performance, and potential failures of their physical counterparts. This makes Digital Twins highly valuable for monitoring, diagnosing, optimizing, and predicting behavior, all within a virtual space before physical execution or maintenance. The concept of the Digital Twin was first introduced by NASA in the early 2000s to enhance the maintenance and operations of space systems during space missions. By simulating spacecraft in real-time using digital models, NASA engineers could predict potential issues, understand system behavior, and optimize performance in remote environments. Since then, Digital Twin technology has evolved and diversified across various sectors such as manufacturing, healthcare, automotive, energy, and urban planning. In the last decade, as industries globalized and interconnected, business management faced increasing complexity. Recently, unforeseen events such as the COVID-19 pandemic, the war in Ukraine, and the global shortage of microchips and semiconductors have further disrupted global value chains. These challenges have exposed operational vulnerabilities but also created opportunities for innovation, particularly within the manufacturing sector. To navigate these disruptions, companies and supply chain actors rapidly adopted Digital Twins technologies, which have become central to the Fourth Industrial Revolution.Today, Digital Twin technology is being transformed by advances in artificial intelligence (AI), machine learning (ML), cloud computing, and the Internet of Things (IoT). These innovations are revolutionizing industries, enabling predictive maintenance in factories and optimizing complex systems such as urban infrastructure. As the role of Digital Twins expands, they are driving a fundamental shift in how we interact with both data and physical assets, reshaping industries for the future.
Evolution of Digital Twin Technology
Digital Twin technology has seen remarkable evolution over the past two decades, transitioning from niche applications to a powerful tool across various sectors. This evolution can be divided into three distinct phases:
First Phase - Conceptual (Early 2000s)
As said before, the Digital Twin concept originated as a theoretical framework designed for space exploration in the NASA departments to digitally replicate spacecraft and other systems, aiming to predict and prevent issues before they occurred in real-time during missions. These early versions of Digital Twins focused on creating accurate virtual representations of physical systems but were limited in terms of real-time data integration, modeling complexity, and computational power. Despite these constraints, the early adopters laid the groundwork for future advancements, demonstrating the value of dynamic simulations in high-stakes environments.
Second Phase: Adoption and Early Commercialization (2010s)
The Third Industrial Revolution marked the introduction of computerization and automation in manufacturing processes, aiming to create a network that addresses the interoperability issues within and across all levels of an automated factory—improving the flexibility and agility of conventional manufacturing. The evolution and the accessibility of technologies such as the Internet of Things (IoT), artificial intelligence (AI), machine learning, big data analytics, robotics, additive manufacturing, and DTs started shaping the future of manufacturing and production, creating more efficient, flexible, and sustainable processes.
This period marked the first wave of commercialization, with industries leveraging the power of real-time data from IoT sensors to monitor and optimize the performance of physical assets like machinery, turbines, and aircraft engines. Pioneering companies like General Electric (GE) and Siemens launched Digital Twin platforms to enhance predictive maintenance, reducing downtime and improving operational efficiency.
During this phase, the integration of machine learning and AI further enhanced these capabilities, allowing Digital Twins to move beyond simple monitoring to advanced analytics and predictive modeling.
Third Phase: Global Expansion into different domains (2020s and beyond)
Digital Twin technology is now at the forefront of Industry 5.0, with applications expanding beyond manufacturing into sectors like healthcare, smart cities, transportation, construction, and environmental management. The integration of AI, edge computing, and big data analytics has dramatically enhanced the utility of Digital Twins, offering not only real-time insights but also prescriptive analytics to improve decision-making processes. Additionally, the growing importance of quantum computing and the continual increase in computing power are accelerating the adoption of these technologies, making them more accessible and widely available.
In the manufacturing sector , for example, Digital Twins can now create virtual models of entire production lines or individual machines, allowing engineers to simulate operations, optimize workflows, and predict equipment failures before they occur. A factory’s Digital Twin can monitor machinery in real time, providing critical insights into performance, identifying inefficiencies, and predicting maintenance needs to minimize downtime. This capability shifts the focus from traditional reactive maintenance to proactive, data-driven decision-making, ensuring smoother and more efficient production. As a result, manufacturers are able to enhance productivity, improve product quality, and reduce operational costs, revolutionizing the way they manage and optimize their operations.
Enabling Technology
To construct a Digital Twin (DT), in reference to the 5-dimensional model (Figure 1) a range of enabling technologies must be employed.
Figure 1: Digital Twin - 5 Dimensions Model
The physical entity represents the real-world object, system, or process that the Digital Twin models. For the DT to operate effectively, the physical entity must be equipped with the necessary technologies to interact with its environment and gather real-time data. This is achieved through the use of sensors and actuators, which capture critical information such as temperature, pressure, and vibrations, and perform necessary actions. 
Additionally, the Internet of Things (IoT) plays a crucial role by connecting these devices and facilitating communication between the physical entity and the digital world. To reduce latency and manage data closer to the source, edge computing is employed, enabling real-time processing at the network's edge. Furthermore, embedded systems, consisting of microprocessors and control systems, automate data collection and control, ensuring seamless operation.
The virtual entity forms the digital counterpart of the physical object. This virtual model must accurately reflect the physical entity in every detail, from its geometry to its behavior. To achieve this, advanced 3D modeling and simulation software, such as CAD and CAE tools, are used to create detailed and dynamic representations. Machine learning and Artificial Intelligence further enhance the virtual entity by making simulations more intelligent and capable of predicting future behavior. Digital modeling platforms, like those provided by different technology providers, offer comprehensive environments for creating and maintaining these real-time digital twins. Additionally, Augmented Reality (AR) and Virtual Reality (VR) technologies allow users to interact with the virtual entity in immersive ways, improving understanding and decision-making by providing a tangible connection to the digital model.
The data management layer is critical for handling the enormous amounts of information generated by both the physical and virtual entities. Efficiently managing this data requires robust big data analytics tools, capable of processing large and complex datasets to extract meaningful insights. Cloud computing platforms offer scalable storage and processing power, enabling companies to manage data efficiently and cost-effectively. Data lakes and warehouses serve as centralized repositories for organizing and storing data, ensuring it is accessible for analysis. Artificial intelligence and Machine Learning techniques play a vital role in analyzing this data, creating predictive models, and driving automated decision-making. Data integration tools, such as Apache Kafka, ensure that data from multiple sources is seamlessly unified and ready for analysis, ensuring the digital twin operates with accurate and up-to-date information.
The services dimension of a Digital Twin is where actionable functions are delivered. and some of them can include monitoring, diagnostics, predictive maintenance, optimization and Decision Support Systems (DSS). in this perspective, optimization algorithms powered by AI allow companies to fine-tune processes and workflows in real time, enhancing productivity and efficiency while DSS provide critical insights based on the digital twin’s data, empowering users to make informed decisions. Comprehensive digital twin platforms, such as Siemens MindSphere or PTC ThingWorx, integrate all these services into a unified system, allowing users to manage and interact with their digital twins effectively.
Finally, bi-directional communication ensures that real-time interaction occurs between the physical entity and its digital twin. This seamless exchange of data allows for constant monitoring and the ability to send commands from the digital twin to the physical object, enabling remote control and automation. IoT protocols such as MQTT and OPC UA are essential for establishing fast and efficient communication. The emergence of 5G networks significantly enhances this process, offering the speed and low-latency connectivity required for real-time data exchange. In addition, edge computing plays a key role by processing data closer to the physical entity, reducing delays and bandwidth consumption. Cyber-physical systems (CPS) further integrate computational models with physical processes, ensuring real-time synchronization between the physical and digital worlds. For secure and transparent data transmission, blockchain technology can be utilized, ensuring that the bi-directional flow of data remains secure and verifiable.
The market landscape
The global digital twin market size (Figure 2) is estimated to grow from $12.8 billion in 2024 to $240.3 billion by 2035, growing at a CAGR of 41% during the forecast period from 2024 to 2035.
Figure 2: Digital Twin market
This growth will be driven and pushed by the equally promising growth forecasts of the main enabling technologies examined in the previous paragraph that in the coming years will increasingly establish themselves as consolidated technologies and will represent a driving force for the global economy.
In an era characterized by relentless digital advancement, Digital Twins are poised to be indispensable. They have the potential to revolutionize content creation, technological development, and our approach to learning, work, production, and life. One sector experiencing exceptional growth through the embrace of Digital Twin is Manufacturing, but the impact of these virtual replicas extends to other industries. 
Let's deep dive into the most promising industries shaping the future of this remarkable technology:
Leading the pack is the manufacturing sector, where Digital Twins have found extensive application making their presence felt in the creation of the 'Factory of the Future.' These digital counterparts offer a virtual window into highly automated production lines, enabling manufacturers to envision the impact of automation and optimization on their operations. In the field of light-off factories, Digital Twins can be used to steer production by providing decision-makers with insights into the current state of the factory and predicting how it will respond to changes. By creating virtual models of machinery and production lines, manufacturers can simulate various scenarios before physical implementation, drastically reducing downtime, equipment failure, and repair costs.
In this domain, General Electric uses Digital Twins to monitor and maintain jet engines, power plants, and manufacturing facilities. Through real-time monitoring and predictive analytics, GE has been able to improve engine efficiency and extend the lifespan of critical assets, providing a tangible return on investment. 
The healthcare industry is increasingly adopting Digital Twins to revolutionize patient care. By creating Digital Twins of human organs, doctors can simulate personalized treatments for individual patients, improving outcomes and reducing risks. From virtual simulations of complex surgeries to the optimization of medical device development, Digital Twins are ushering in a new era of precision medicine, improving patient outcomes, and enhancing the efficiency of healthcare delivery.
Siemens Healthineers and Philips are two major players driving innovation in the healthcare sector by developing Digital Twin applications that enable personalized medicine, predictive diagnosis, and improved patient management reducing healthcare costs, and supporting medical research.
In the realm of transportation, Digital Twins are contributing to the development of intelligent and sustainable mobility solutions. Whether it's the design and simulation of autonomous vehicles or the optimization of traffic management systems, these digital replicas are instrumental in shaping the future of transportation. They offer insights into improving safety, reducing environmental impact, and enhancing the overall mobility experience. Companies such as Tesla, BMW, and Volkswagen are leveraging Digital Twins to model vehicle performance under different conditions, enabling engineers to simulate and test new technologies before building physical prototypes.
The energy sector is embracing Digital Twins to revolutionize the management of power grids, renewable energy generation, and resource optimization. By creating virtual replicas of intricate and complex energy systems, stakeholders can monitor, control, and fine-tune their operations for maximum efficiency. Digital Twins also play a crucial role in achieving sustainable energy production, grid resilience, and effective resource allocation. While the energy sector has been slow to adopt these new technologies, some companies have jumped right in and are finding great success such as FMC Technologies, Inc., a global leader in solutions for the petroleum exploration, production and processing industries and ENEL a global energy utility that's working in Haifa, a “digital twin” that will revolutionise the network.
In the Smart and Augmented Cities domain, governments and urban planners are using Digital Twin technology to design and manage smart cities. By modelling urban environments, Digital Twins allow city planners to monitor traffic, optimize energy consumption, and enhance emergency response strategies. For example, Singapore has developed a comprehensive Digital Twin of its urban infrastructure to manage traffic congestion and simulate future urban developments.
In all the underlined application domains, different challenges can pose a barrier to the adoption and expansion of digital twin technology. Identifying and understanding these challenges is crucial for stakeholders looking to develop and implement digital twins:
Increased Implementation Cost: The advanced development of digital twin technologies involving IoT, cloud computing, and other components has raised the cost of digital twins. This cost increase might reduce the market's growth rate.
Lack of Skill: Implementing digital twins requires individuals with specific skills to manage and optimize the technology. A lack of these skills can hinder the adoption and growth of digital twin solutions.
Lack of Connectivity: Effective use of digital twin technology relies on a robust internet connection. If connectivity is lacking or unreliable, it can reduce the effectiveness of digital twins, leading to decreased production efficiency.
Cybersecurity and Risks: With the increased use of cloud platforms and IoT in digital twin technology, concerns related to cybersecurity and other risks have arisen. These concerns can affect trust and adoption among potential users and impede market growth.
Future evolution
The future of Digital Twin technology looks promising, as advances in AI, IoT, edge computing, and 5G networks drive new innovations and applications. As we stand on the precipice of a new era in technology, the evolution of digital twins is set to unfold in captivating ways, reshaping industries and transcending traditional boundaries. Several trends are expected to shape this evolution:
Hybrid Digital Twin
A hybrid digital twin is a virtual representation of a connected physical asset made possible by combining advanced simulation and analytics that integrate real-time data from multiple sources with AI-powered predictive analytics. These advanced models will provide deeper insights into complex systems, enabling more accurate predictions and facilitating real-time decision-making. This evolution will make Digital Twins indispensable in high-stakes environments like aerospace, manufacturing, and healthcare, where precision and reliability are paramount.
Digital Twins as a Service (DTaaS) and Cloud-Based Solutions
A democratization of Digital Twin technology is on the horizon, driven by the rise of DTaaS and cloud-based solutions. These models will make Digital Twins accessible to organizations of all sizes by offering scalable and flexible solutions without extensive infrastructure demands. Cloud platforms will provide secure data storage, processing capabilities, and universal accessibility, allowing companies to leverage the benefits of Digital Twins without the burden of managing complex IT systems.
Edge-Digital Twin
Edge Computing Facilities to process data and generate actionable insight at speed are increasingly crucial, given the growing tessellation of data-generating sensors and devices. Edge builds on the principle of centralised cloud by bringing compute power closer to the data source in regionalised or local edge nodes. This will result in three key benefits: 1) Speed because of bringing data streams closer to compute power it will be possible to enable DT to reflect live environment pushing changes to live real time; 2) Privacy and Regulation because of it will be possible to reduce attack surface and exposure of centralised cloud; 3) availability ensuring local and regional environments will remain live even if centralised cloud goes down.
Integration of 5G Connectivity for Seamless Data Transfer
The integration of 5G technology will significantly advance the capabilities of digital twins, enabling real-time data processing and automation through ultra-low latency (under 10 milliseconds). With enhanced bandwidth, capable of streaming high-definition video at speeds of 100MB/s and peaks up to 20GB/s, digital twins will manage and analyze vast amounts of data from numerous sensors. The increased capacity, supporting up to 1 million devices per square kilometre, will allows for a more comprehensive and accurate representation of assets. Furthermore, 5G’s reliability of 99.999%, seamless mobility between nodes at speeds up to 500km/h, and extended battery life for IoT devices (up to 10 years) will collectively enhance the efficiency, precision, and energy sustainability of digital twin applications, particularly in mission-critical and mobile environments.
Ethical Considerations and Data Privacy in Focus
As Digital Twins become ubiquitous, ethical considerations and data privacy will come to the forefront. Stakeholders will need to address issues of data ownership, privacy, and consent to ensure the responsible and ethical use of Digital Twin technology. Robust guidelines and regulations will be essential in maintaining public trust, with a focus on data anonymization, encryption, and access controls to balance data utilization with privacy protection.
Sustainability and Environmental Impact
Beyond enhancing functionality, the future of Digital Twins will prioritize sustainability. Organizations will increasingly leverage Digital Twins to optimize energy consumption, reduce carbon emissions, and enhance resource efficiency. Whether in the design of eco-friendly products or the planning of sustainable urban environments, Digital Twins will become indispensable tools in the pursuit of environmental goals. By simulating and analysing the environmental footprint of activities, Digital Twins will help create a greener, more sustainable future.
Technological locks that prevent improvements in the field
The main technological locks that prevent improvements in the field still are:
The lack of maturity of some core technologies (especially AI for autonomous action) when applied to complex DT environments.
The difficulties in data collection and harmonization. Data silos are still present inside organizations, and the issue is even amplified when the goal is to integrate data across different organizations.
The obsolescence of investments related to XR fruition, Data quality and model accuracy shortage and the lack of an efficient and ample mapping between physical and digital entities in a collaborative ecosystem.
The difficulty of current tools to be simultaneously integrated and applied for a particular objective due to different formats, protocols and standards, while an emerging demand for a unified development and operation platform for DTs exists.
The lack of process standardization, real-time monitoring processes and their transparency
The lack of research on the utilization of DT as tools for coordinating the production in complex value chains and on the relation between DTs and the potential communities of users.
To address them WP4 will pursue three related innovation goals (Table 3). The description put forward in the project portfolio is still relevant.
Table 3: WP4 Innovation Goals
Objectives, technological challenges, and results beyond the Global State of The Art
To develop a robust platform for creating and managing Digital Twins (DTs) in the manufacturing industry, leveraging them to improve business, operations, security, safety, and organizational performance. The main objectives are:
OB4.1: Build a foundation for creating DTs representing products, processes, and manufacturing environments. Address challenges in DT composition and integration.
OB4.2: Utilize DTs to enhance business outcomes by identifying problems, optimizing processes, and planning for future improvements. Ensure data security and continuous DT monitoring.
OB4.3: Align DT models with Industry 5.0 principles, incorporating human-centric aspects (persona twins) and exploring the impact on data pipelines and infrastructure.
OB4.4: Enhance DT intelligence through interoperability and lifecycle management, supporting faster product development, decision-making, and circular economy principles.
OB4.5: Create flexible and adaptable Digital Product Passports (DPPs) based on DTs to support diverse value chains and industries.
The following Table 4 outlines the objectives and Key Performance Indicators (KPIs) related to WP4.
Table 4: WP4 key performance indicators
The implementation strategy will use a stepped approach and addresses important inquiries that need to be addressed when implementing digital twins.
Start with a user story. Understand the fundamental problem and opportunities that exist that need to be addressed, including the business value. This requires breaking down the specific business context to be able to consider the strategic and performance goals.
In the ANNEX I - User Stories is available a first collection of User Stories subdivided by epics.
Adoption and buy-in Work with stakeholders, internal customers and managers to understand what they require of the system. Their buy-in will be crucial to the success of any project implementation.
Design and architecture Plan for the IT infrastructure changes, follow the path laid by others, and embed security and flexibility into the system from the outset.
In particular, to drive the design phase and the implementation of the DT for product, production, and personae it will be used a unique Concept and Engineering Development Process methodology that is s built on the following interconnected activities, namely:
Concept Development & System Specification: it is the initial development activity that is aimed at defining a system concept to best satisfy a specific need. This activity implies the analysis and planning that is necessary to establish the need for the new system, the feasibility of its realization and the specific system architecture to best satisfy the user needs. 
Architecture Design: The analysis and process plan performed in the previous activity will be used as the foundation of the system architecture design activity where the following sub activities will be performed: 
Definition of the interaction between the physical and digital dimensions. 
Definition of the system layers and components. 
Definition of the data model. 
Definition of the process (the DT in context), Interfaces (externals and internals) and dependencies. 
Engineering Development: the activity is aimed at developing a system considering the designed architecture to satisfy the identified requirements. Here agile software methodologies are used to continuously develop and test a minimum viable product (MVP) of a list of prioritized features.
Think long term Extract maximum value from the initial investment by growing the implementation and sharing the data up and down the supply chain. Consider the life cycle of the digital twin through evolving needs and use cases, through to end of life
WP4 Innovation Goal 4.1: Integrated approach to manufacturing production processes
DT industrial realizations are the digital version of an asset (product, process, or business) modelled to check, optimize, predict, and enhance operational and business performance 82. In this way, it’s possible to enable a better understanding not only of the product and its design, but of the overall system, the organization, and/or the processes that build that product and how it is used in the field, for example. Environmental (or context) information is relevant and complementary aspect for obtaining effective results from the DT-based approach. 
A data-driven architecture will link together information generated from across the product lifecycle delivering a communication framework used to design manufacturing processes in order to improve efficiency.
Linking information generated from all stages of the product lifecycle (e.g., early concept, design, manufacturing, operation, post-life, and retirement) through a data-driven architecture of shared resources (e.g., sensor output, computational tools, methods, and processes) it will be possible to reach real-time and long-term decision making. 
The new Digital Twin will contain all the information necessary to generate and provide updates to a Digital Twin. Of relevance is the process in which Digital Twins can be used in the design of the next generation of products as illustrated in Figure 3. Here, multiple stages across the product lifecycle feed information into the Digital Thread. Such information can be used to make informed choices on future designs, as well as to reduce uncertainty in design parameters and process costs. Additionally, such information may uncover more efficient strategies for operation. Carrying out design decisions adds new information to the product lifecycle (Figure 3), changing the state of the Digital Twin. 
Figure 3: Product lifecycle
Key features of a DT framework:
DT re-usability: DT solutions must become more portable and re-usable so that the “develop once use many” approach can be better leveraged.
DT interoperability: DT solutions must be able to interoperate with other DT instances, DT classes, and non-DT capabilities such as DT clients.
DT Interchangeability: The proliferation of DTs requires that they be modular so that they can be more easily assessed, updated, or even replaced. This interchangeability can be realized with standardized definitions of DT structure, baseline abilities, quantifiable capabilities metrics, services provided, interfaces, and behaviour exhibited.
DT capability: As DTs will increasingly be an integral part of the critical manufacturing processes, their capability must be verified and validated prior to accepting them for use in application environments.
DT maintainability: An often-under-estimated requirement of DTs is that they be maintainable over a useful period of time.
DT capability and accuracy: DTs will have to become increasingly capable and accurate as part of SM evolution. This requires that the DTs be able to best use the evolving analytical capabilities, whether they be improvements in existing techniques due to big data advancements, or emergence of new techniques, such as the appearance of deep learning
DT extensibility: The smart manufacturing trend towards integration across the entire ecosystem will require that DTs be extensible across that ecosystem. This means that DT capabilities operating within the “four-walls” of the factory today might in the future incorporate data outside the facility.
Sustaining a DT technology community: The increasing and more stringent requirements on DT technology will only be realizable if there is more cooperation between the various DT application areas and the technology community in general. An effective DT framework thus must provide a common taxonomy and other mechanisms that allow the community to collaborate on DT technology, from DT fundamental research through applied research, development, deployment, and maintenance.
WP4 Innovation Goal 4.2: Digital Product Passport
An advanced adoption of DTs is represented by the Digital Product Passport (DPP), containing the most valuable information about the whole life cycle of a product (from design to disposal) so that every user across the supply chain can perform the most convenient business with it. Imagine an easy-to-use, accessible, secure, certifiable, and shareable set of data (provided by the DPP), having information about the origin, production, delivery, use, end-of-life, and recycling of a product, all augmented by a set of traceable and verifiable data. This data compiles a tangible story of the product’s life cycle. It can help in recycling and reduce the use of untapped resources. To achieve this, information about a product gathered during its lifecycle is collected in a digital passport to ensure that the product can be easily traced, returned, and where possible reused. Often, this data synchronization is implemented through the concept of complex DT, aiming at providing technical solutions to enable (near) real-time synchronization and at delivering on-demand data-driven services on top of the data conveyed though the DPP.
Key features of a DPP:
Unique Identifiers Every product must be associated with a unique product identifier, but it is yet uncertain whether a DPP will correspond to a product model, batch or individual item.
It is necessary to think about two different DDP scenarios:
DPP scenario for a product which is not modified during the lifecycle of product. The product is either never modified, or only modified (updates originated by the manufacturer, repaired, refurbished to its original state) by the manufacturer. Consequently, the product manufacturer can always be used as a reliable source for DPP data during the entire product’s lifecycle. Only the product manufacturer will be able to make changes to the DPP data, and the authenticity of his changes can be verified by a digital signature.
An alternative scenario can be implemented for products that can be upgraded, refurbished, repaired, equipped with spare parts etc.
For this scenario, the DPP needs to be “passed on” from one actor to the next, e.g., from a user to a refurbisher. It is necessary to track the ownership of the product to find the current DPP at the current owner of the product, e.g., by updating resolvers.
Only the actor that currently uses, modifies, upgrades, the product is allowed to make changes to the actual DPP for the product – the DPP will change “holdership” with changes in ownership of the product.
Data Carrier Product information must be accessible through a data carrier in accordance with specifications. This carrier is to be physically present on the product, its packaging, or accompanying documentation.
Timely Creation A product passport must be available with accurate, complete, and up to-date information the moment a product is placed on the market or put into service.
Company Responsibility Economic operators placing products on the market are responsible for creating and maintaining accurate DPP data that complies with the established standards, privacy laws, and other relevant legislation.
Availability The DPP must remain available and accessible for a timeframe equivalent to, at minimum, the expected lifetime of the product.
Legal Obligations: The DPP system must comply with regulations and standards, of which some are just emerging. The European Commission’s “Proposal for the new Ecodesign for Sustainable Products Regulation” (ESPR) is among the most recent and important publications concerning DPPs. It was published in late March 2022 and represents the introduction of DPPs.
Functional Suitability: it defines what a product or service should do and includes functional completeness, correctness, and appropriateness. The functional suitability of a DPP system needs to fit the respective sector, industry, and use case.
Security, Confidentiality, and IP Protection: among other aspects, security describes the degree to which a product or system protects information and data, so that persons, other products, or systems have the degree of data access appropriate to their types and levels of authorization.
Accessibility: Accessibility describes the degree to which a product or system can be used by people with the widest range of characteristics and capabilities to achieve a specified goal in a specified context of use
Interoperability: Interoperability describes the degree to which two or more systems can exchange information and use the information that has been exchanged.
Modularity and Modifiability Modularity and modifiability refer to the degree to which the DPP system is composed of discrete components, such that a change to one component has minimal impact on other components.
Availability and Time Behavior The DPP information needs to be available through the DPP system whenever it is needed. The time behavior depends on the specific use case. In some use cases, real-time data are required.
Portability refers to the degree of effectiveness and efficiency with which an IT system can be transferred from one hardware, software, or other IT system to another
Essential data requirements for DPPs
To ensure product compliance from market entry to end-of-life and based on an in-depth analysis of the ESPR,some essential data requirements for DPPs have been identified in Table 5: Requirements for DPPs.
Table 5: Requirements for DPPs
This checklist outlines a high-level overview of critical steps within distinct phases, providing you with a clear roadmap for achieving DPP compliance (Table 6).
Table 6: roadmap for achieving DPP compliance
WP4 Innovation Goal 4.3: human-centered processes (Industry 5.0)
Industry 5.0 marks a transformative shift in industrial paradigms, emphasizing the harmonious collaboration between humans and machines. Unlike its predecessor, Industry 4.0, which primarily focused on automation and the digitization of manufacturing processes, Industry 5.0 prioritizes human-centered approaches, ensuring that technology enhances human capabilities rather than replaces them. To this end, it is essential to refine collaborative interactions between humans and machines, leveraging advanced streaming and cognitive solutions able to provide interoperability and composability among existing and newly created DTs, also considering the human-in-the-loop effect (e.g., via the so-called “personal twin”).
The transition from the Industry 4.0 to the Industry 5.0 therefore also marks an evolution of the concept of DT which is transformed, in accordance with the new paradigm, into the Human Digital Twin (HDT), an advanced, virtual representation of a human being that integrates real-time data to mirror physical, cognitive, and emotional states. This digital avatar becomes a vital component in optimizing human roles within industrial ecosystems, fostering an environment where human ingenuity is augmented by the precision and predictive capabilities of digital technologies.
The scope of the Human Digital Twin (HDT) is to model human workers and integrate human factors into complex manufacturing systems. following the final goal of reducing barriers for human engagement in AI-based sustainable manufacturing processes while building trust in these technologies. Integrating human factors into manufacturing processes involves considering human variability and limitations, thereby creating an environment that enhances efficiency, safety, productivity, and job satisfaction among workers. 
In the context of complex manufacturing processes, HDTs allow for the seamless integration of human skills with robotic precision. For instance, in tasks requiring fine motor skills or creative problem-solving, the HDT can optimize the human-machine interface, ensuring that the machine adapts to the human operator's needs rather than the other way around. This symbiosis not only increases productivity but also enhances the quality of work, as the human worker is empowered to focus on tasks that require creativity and critical thinking, leaving repetitive or dangerous tasks to the machines.
Another significant aspect of Human-Centered Processes in Industry 5.0 is the potential for personalized training and skill development. HDTs can be used to simulate various scenarios, allowing workers to train in a virtual environment that mirrors real-world conditions. This personalized approach to training ensures that workers can develop skills at their own pace, with the HDT providing feedback and guidance tailored to their specific needs. This not only enhances the effectiveness of training programs but also reduces the time and cost associated with traditional training methods.
Furthermore, the use of HDTs aligns with the growing emphasis on sustainability and ethical practices in Industry 5.0. By optimizing human resources and reducing the physical and mental strain on workers, companies can foster a more sustainable workforce. This approach also supports ethical labor practices, as it ensures that technology is used to enhance, rather than exploit, human capabilities. The ability to monitor and improve worker conditions in real-time also allows companies to address issues of inequality and ensure that all workers are treated fairly.
At the core of HDT technology lies the integration of several advanced technologies. First and foremost is the Internet of Things (IoT), which facilitates continuous data collection from wearables and environmental sensors. These devices capture vital signs, movement patterns, stress levels, and environmental conditions and they transmit data.to be processed using Artificial Intelligence (AI) and Machine Learning (ML) algorithms, which analyze patterns and predict potential issues such as fatigue or stress. AI-driven insights enable personalized adjustments to the work environment, like altering lighting or temperature, to optimize worker comfort and performance. Furthermore, Virtual Reality (VR) and Augmented Reality (AR) are employed to visualize the HDT in a simulated environment, allowing workers and managers to interact with the digital twin and make informed decisions based on the virtual model.
Looking to the future, the evolution of Human Digital Twins is poised to bring even more profound changes to the industrial landscape. As AI and ML algorithms continue to advance, HDTs will become increasingly adept at predicting not only physical fatigue but also more complex cognitive and emotional states, leading to a more nuanced understanding of human behavior in the workplace. The integration of quantum computing may further enhance the processing power of HDTs, enabling them to handle even larger data sets and provide more accurate real-time simulations.
Moreover, the future will likely see the HDT evolve into a tool for lifelong learning and skill development. By continuously tracking and analyzing a worker’s performance, HDTs can identify areas for improvement and suggest personalized training programs, facilitating continuous upskilling and reskilling in response to the rapidly changing demands of the job market. 
In addition to individual benefits, HDTs are expected to play a crucial role in team dynamics and collaborative work environments. By modeling the interactions between multiple workers, HDTs can optimize team performance, allocate tasks more effectively, and ensure that workloads are balanced according to each team member’s capabilities and current state. This holistic approach will transform how work is organized and executed, leading to more cohesive and efficient teams.
The main key features of a HDT are:
Human-Centered Approach: the HDT prioritizes enhancing human capabilities rather than replacing them, ensuring technology is a tool for human empowerment and not a tool for substitute human capabilities.
Real-Time Data Integration: HDT will create a mirror of physical, cognitive, and emotional states of the human worker in real-time by collecting data from heterogeneous data sources.
Personalization & Adaptability: in the process of design and implementation of HDT human-machine interfaces will be optimized, by adapting to the needs of individual operators such as motor skills or creative problem-solving.
Skill Development & Training: HDT will Supports personalized training and skill development through simulations, allowing workers to train in virtual environments reflecting real-world scenarios.
Worker Comfort Optimization: Thanks to the integration of AI, HDT will model the work environments (lighting, temperature) based on worker data to optimize comfort and performance.
Sustainability & Ethical Practices: HDT reduces physical and mental strain, fostering a sustainable workforce and promoting ethical labor best practices.
Team Dynamics & Collaboration: HDT enhance team performance by modeling interactions between workers, balancing workloads, and fostering collaborative work environments also tracking and analyzing worker performance over time, providing personalized feedback for continuous upskilling.
Advanced Technology integration: IoT sensors such as wearables and environmental sensors will collect data such as vital signs, stress levels, and movement patterns while AR/VR equipment will simulate environments for better decision-making and interaction
AI & Machine Learning Insights: HDT will leverage AI and ML to predict issues like fatigue and stress, enabling proactive measures for worker safety and productivity.
ANNEX I - User Stories
The criterion for the collection of user stories is that of subdivision by epics. The main epics identified are: Data modeling, Connectivity, Simulation, Visualization and insight, Synchronization, Deployment, Security, DT integration and Interoperability
DATA MODELING
Data modeling in the context of Digital Twins (DTs) for manufacturing is a multi-step process (Data collection, Data integration and model Creation) that involves the accurate representation of physical and logical elements within a manufacturing environment. This process forms the foundation of the Digital Twin, allowing for effective simulation, analysis, and optimization.
Table 7: US_WP4.1.1
Table 8: US_WP4.1.2
Table 9: US_WP4.1.3
Table 10: US_WP4.1.4
Table 11: US_WP4.1.5
Table 12: US_WP4.1.6
Data Integration
Table 13: US_WP4.1.7
Table 14: US_WP4.1.8
Table 15: US_WP4.1.9
Model Creation
Table 16: US_WP4.1.10
Table 17: US_WP4.1.11
Table 18: US_WP4.1.12
CONNECTIVITY
Connectivity enables the seamless flow of data between physical assets, digital models, and control systems. Effective connectivity ensures that data from various sources, such as IoT devices, industrial OT systems, and IT infrastructure, is reliably integrated into the Digital Twin. This connectivity supports real-time monitoring, control, and optimization of manufacturing processes, leading to improved efficiency and responsiveness.
Table 19: US_WP4.2.1
Table 20: US_WP4.2.2
Table 21: US_WP4.2.3
Table 22: US_WP4.2.4
Table 23: US_WP4.2.5
Table 24: US_WP4.2.6
Table 25: US_WP4.2.7
Table 26: US_WP4.2.8
Table 27: US_WP4.2.9
Table 28: US_WP4.2.10
SIMULATION
Simulation in the context of Digital Twins (DTs) for manufacturing allows for the virtual testing and analysis of systems, processes, and products without interrupting actual operations. By simulating different scenarios, manufacturers can predict outcomes, optimize processes, and identify potential issues before they occur. These simulations can range from simple model testing to complex, multi-variable scenarios that mirror real-world operations.
Table 29: US_WP4.3.1
Table 30: US_WP4.3.2
Table 31: US_WP4.3.3
VISUALIZATION AND INSIGHT
Through intuitive interfaces and interactive dashboards, users can explore data, track performance, and identify patterns. These tools transform raw data into actionable insights, enabling quick decision-making and proactive management of production processes. Effective visualization makes complex data more accessible, allowing users to see trends, compare scenarios, and understand the impact of various factors on production.
User interfaces (UI) must be designed to cater to different roles within the organization, providing the right level of detail to operators, engineers, and managers. Insights from the Digital Twin should be presented in a way that is easy to understand and act upon, whether through real-time monitoring, predictive analytics, or historical data reviews.
Table 32: US_WP4.4.1
Table 33: US_WP4.4.2
Table 34: US_WP4.4.3
Table 35: US_WP4.4.4
Table 36: US_WP4.4.5
Table 37: US_WP4.4.6
SYNCHRONIZATION
Synchronization in Digital Twins (DTs) ensures that the virtual model remains aligned with the physical counterpart in real-time. This alignment is achieved through continuous feedback loops, where data from the physical environment updates the digital model, and insights from the model inform real-world actions. Effective synchronization allows for real-time monitoring, predictive maintenance, and dynamic adjustments, improving overall efficiency and responsiveness in manufacturing processes.
Table 38: US_WP4.5.1
Table 39: US_WP4.5.2
Table 40: US_WP4.5.3
DEPLOYMENT
Table 41: US_WP4.6.1
Table 42: US_WP4.6.2
Table 43: US_WP4.6.3
SECURITY
As Digital Twins involve the integration of numerous data streams and control systems, they can become potential targets for cyber-attacks if not properly secured.
Table 44: US_WP4.7.1
Table 45:US_WP4.7.2
INTEGRATION
Integration involves connecting the DT with various systems, such as existing IT and OT systems, external data sources, and management platforms. The goal is to ensure seamless interaction between the DT and the broader ecosystem, allowing for the smooth exchange of data and insights across different platforms and devices. Integration also facilitates the interoperability between new and legacy systems, enabling the DT to enhance existing operations rather than replace them.
Effective integration ensures that the Digital Twin can fully leverage the data and capabilities of connected systems, providing a more comprehensive and accurate representation of the physical environment. It also supports scalability and flexibility, allowing the DT to adapt as new systems or data sources are introduced.
Table 46: US_WP4.8.1
Table 47: US_WP4.8.2
Table 48: US_WP4.8.3

--- Tabella ---
ISSUED BY | Engineering I.I.
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | First version | n.a. | Angelo Marguglio | Marco Alessi, Vito Morreale
 |  |  |  |  | 

--- Tabella ---
Acronym | Definition | Acronym | Definition
A-Obj. | AVANT Objective | GSoTA | Global State of The Art
AI | Artificial Intelligence | HDT | Human Digital Twin
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
World Economic Forum (2020) Global lighthouse network: four durable shifts for a great reset in manufacturing
Online: https://www3.weforum.org/docs/WEF_GLN_2020_Four_Durable_Shifts_In_Manufacturing.pdf | The World Economic Forum's Global Lighthouse Network comprises 54 leading companies that have succeeded in the adoption of Fourth Industrial Revolution technology at scale, at individual sites and/or end-to-end across the value chain. in this document the Growing and accelerating technology adoption are described at global scale also in reference with concrete use cases
Engineering “Digital Twin Fostering antifragility for business resilience”.
Online; https://www.eng.it/resources/whitepaper/doc/digital-twin/digital-twin_whitepaper_en.pdf | In this white paper, Engineering describes technology challenges and opportunities in the adoption of Digital Twin in different application domains illustrating concrete business case.
Ecodesign for Sustainable Products Regulation
Online:
Regulation - EU - 2024/1781 - EN - EUR-Lex (europa.eu) | The Ecodesign for Sustainable Products Regulation (ESPR), which entered into force on 18 July 2024, is the cornerstone of the Commission’s approach to more environmentally sustainable and circular products.

--- Tabella ---
WP# | IG# | Description
4 | IG4.1 | To realize an integrated approach to manufacturing production processes engineering, from the product design throughout the whole production and supply chain, in a coordinated, traceable, data- and quality-oriented approach.
4 | IG4.2 | To enable the implementation of composable and fast-updating Digital Product Passport based on the adoption of complex DTs
4 | IG4.3 | To enable human-centered processes (Industry 5.0) that are data-intensive solutions to support orchestration, optimization, and simulation of human-in-the-loop industrial processes, taking advantage of industrial cognitive DT apps.

--- Tabella ---
Obj. | Description | Related
Innovation | KPI(s) &
target value
OB4.1 | To create an infrastructure for DTs to provide a digital live representation of products, processes, and manufacturing spaces and assets | IG4.1 | =1 Reference Architecture for the DT manufacturing platform
OB4.2 | To achieve business, operational, security, safety, and organizational benefits thanks to the adoption of DTs | IG4.1 | >=3 Different Integrated development processes, supported by operational models for the industry
OB4.3 | To develop DT models compliant with the industry 5.0 paradigm and the interaction among TDs (related to things and systems) and DTs of humans (persona twins) | IG4.3 | >=10 reusable components for fast integration and preparation of datasets
OB4.4 | To enhance the intelligent capabilities of DTs with new interoperability and lifecycle aspects | IG4.1 
IG4.2 | >=10 AI/ML/Big data algorithms for model transfer/rapid development and data science experiments
OB4.5 | To support the continuous evolution of an ecosystem of DTs | IG4.1 
IG4.2 | >=15 assets for DT development integrated into the platform including data pipelines and visualization tools for prominent industrial UCs
OB4.1 | To create an infrastructure for DTs to provide a digital live representation of products, processes, and manufacturing spaces and assets | IG4.1 | =1 Reference Architecture for the DT manufacturing platform

--- Tabella ---
Requirement Category | Overview of Data Requirements
Durability & Reliability | Standards for longevity and consistent performance
Reusability & Upgradability | Criteria for life extension via reuse/upgrades
Reparability | Ease of repair, and access to information regarding repair
Maintenance & Refurbishment | Guidelines for product upkeep and refurbishing
Substances of Concern | Identification, restriction of hazardous substances
Energy & Water Efficiency | Minimising consumption throughout lifecycle
Resource Use & Efficiency | Optimization of material use, resource efficiency
Recycled Content | Thresholds for recycled material use in products
Remanufacturing & Recycling | Facilitating product remanufacturing/material recovery
Environmental Impacts | Carbon and environmental footprint assessment
Waste Generation | Strategies to minimise lifecycle waste production

--- Tabella ---
Phase A: Preparation | Phase A: Preparation | Phase A: Preparation
Step 1: Planning | Step 1: Planning | Step 1: Planning
Action Item | Description | Check
Assign a DPP Lead | Designate a team or individual responsible for DPP integration | 
Research & Assess Regulatory Relevance | Understand how upcoming regulations impact your organisation | 
Create a DPP Strategy | Outline goals towards DPP integration and develop a clear strategy | 
Set Clear Goals & Actions | Define actions, KPIs, and timelines for DPP implementation | 
Step 2: Engagement | Step 2: Engagement | Step 2: Engagement
Engage Internal Stakeholders | involve relevant departments in DPP planning and strategizing | 
Engage External Stakeholder | Begin to collaborate with suppliers and partners regarding data collection | 
Step 3: Action | Step 3: Action | Step 3: Action
Identify Required Data Points | Determine data needed for DPP compliance | 
Assess Data Availability | Evaluate current data sources and identify gaps | 
Plan for Technological Change | Prepare digital infrastructure for DPP integration | 
Begin Initial Data Gathering | Collect necessary data from internal and external sources | 
Phase B: Implementation | Phase B: Implementation | Phase B: Implementation
Step 4: Scope | Step 4: Scope | Step 4: Scope
Assess Technology Options | Evaluate off-the-shelf vs. custom solutions, evaluate blockchain or cloud platforms, solutions that prioritize interoperability, data compatibility, strategic alignment and more. | 
Step 5: Pilot | Step 5: Pilot | Step 5: Pilot
Initiate Pilot Implementation | Assess current IT systems, adapt or select a DPP solution, standardize data, integrate, engage with suppliers and other actors in the value chain (and their systems). Rigorously test on selected product lines before a full-scale rollout | 
Step 6: Scale | Step 6: Scale | Step 6: Scale
Scale & Integrate | Expand the DPP solution to additional products, onboard stakeholders (train users), and further integrate with actors along the value chain. | 

--- Tabella ---
US_WP4.1.1 | US_WP4.1.1
As [user type] | Developer/designer/operator
I want to [action X] | Model product (e.g. a machinery, a robot, a line), process (e.g. drilling machine, internal logistic, ...), human (e.g. blue collar worker) characteristics and behaviors
To get [result Y] | A virtual representation of the object under observation in the physical world

--- Tabella ---
US_WP4.1.2 | US_WP4.1.2
As [user type] | Developer/designer/operator
I want to [action X] | Connect REST APIs
To get [result Y] | Inputs such as Time Series, Numerical values, Structured data, Services, ...

--- Tabella ---
US_WP4.1.3 | US_WP4.1.3
As [user type] | Developer/designer/operator
I want to [action X] | Bulk upload multiple (e.g. thousands of) connected objects
To get [result Y] | Repetitive data entry tasks accomplished

--- Tabella ---
US_WP4.1.4 | US_WP4.1.4
As [user type] | Developer/designer/operator
I want to [action X] | Model product characteristics, including complex machinery and components
To get [result Y] | A detailed virtual representation that supports predictive maintenance and quality control

--- Tabella ---
US_WP4.1.5 | US_WP4.1.5
As [user type] | Developer/designer/operator
I want to [action X] | Capture and model human interactions within the manufacturing process
To get [result Y] | Optimize workflows and improve operator safety or skills through simulation

--- Tabella ---
US_WP4.1.6 | US_WP4.1.6
As [user type] | Developer/designer/operator
I want to [action X] | Integrate data from legacy systems and IoT devices
To get [result Y] | Create a unified data model that accurately represents both old and new manufacturing assets

--- Tabella ---
US_WP4.1.7 | US_WP4.1.7
As [user type] | Developer/designer/operator
I want to [action X] | Use open modelling language (e.g. using Digital Twins Definition Language)
To get [result Y] | custom domain models of any connected environment

--- Tabella ---
US_WP4.1.8 | US_WP4.1.8
As [user type] | Developer/designer/operator
I want to [action X] | Use standardized data formats and integration tools
To get [result Y] | Ensure seamless data flow and consistency across different systems and platforms

--- Tabella ---
US_WP4.1.9 | US_WP4.1.9
As [user type] | Developer/designer/operator
I want to [action X] | Implement API gateways to bridge between legacy systems and modern IoT devices
To get [result Y] | Facilitate smooth data integration without disrupting existing operations

--- Tabella ---
US_WP4.1.10 | US_WP4.1.10
As [user type] | Developer/designer
I want to [action X] | Build Reduced Order Models (ROMs)
To get [result Y] | Simulate system behavior in real-time without overwhelming computational resources

--- Tabella ---
US_WP4.1.11 | US_WP4.1.11
As [user type] | Developer/designer
I want to [action X] | Enrich Data and Interpret Data in Context
To get [result Y] | Interpret the data in a meaningful way that supports decision-making and optimization

--- Tabella ---
US_WP4.1.12 | US_WP4.1.12
As [user type] | Developer/designer
I want to [action X] | Continuously validate and update the Digital Twin model
To get [result Y] | Maintain an accurate and reliable representation of the physical manufacturing environment

--- Tabella ---
US_WP4.2.1 | US_WP4.2.1
As [user type] | Developer/designer
I want to [action X] | Collect data using many IoT devices (and IoT hubs) and protocols (e.g. MQTT, COAP, LoRaWAN, LwM2M, Zigbee, DDS)
To get [result Y] | Easy integration with IoT data

--- Tabella ---
US_WP4.2.2 | US_WP4.2.2
As [user type] | Developer/designer
I want to [action X] | Collect data using many industrial OT protocols (e.g. OPC UA, ModBus, UMATI, DDS, ROS/ROS2, ... )
To get [result Y] | Easy integration with industrial OT data

--- Tabella ---
US_WP4.2.3 | US_WP4.2.3
As [user type] | Developer/designer
I want to [action X] | Collect data using many industrial IT systems (e.g. ERP, MES, ...)
To get [result Y] | Easy integration with industrial IT data

--- Tabella ---
US_WP4.2.4 | US_WP4.2.4
As [user type] | Developer/designer
I want to [action X] | Collect data using many industrial ET files (e.g. CAD, BOM, ...)
To get [result Y] | Easy integration with industrial ET data

--- Tabella ---
US_WP4.2.5 | US_WP4.2.5
As [user type] | Developer/designer
I want to [action X] | Implement edge computing capabilities for IoT devices
To get [result Y] | Process data locally for real-time applications and reduce latency and server load

--- Tabella ---
US_WP4.2.6 | US_WP4.2.6
As [user type] | Developer/designer
I want to [action X] | Ensure seamless data flow between IoT sensors and cloud storage
To get [result Y] | leverage cloud-based analytics and long-term data storage

--- Tabella ---
US_WP4.2.7 | US_WP4.2.7
As [user type] | Developer/designer
I want to [action X] | create a middleware layer for integrating legacy OT systems
To get [result Y] | ensure data from older equipment is accessible and usable in the Digital Twin

--- Tabella ---
US_WP4.2.8 | US_WP4.2.8
As [user type] | Developer/designer
I want to [action X] | Implement a unified communication protocol across different OT systems
To get [result Y] | Facilitate interoperability and streamline data integration

--- Tabella ---
US_WP4.2.9 | US_WP4.2.9
As [user type] | Developer/designer
I want to [action X] | integrate the DTS with ERP and MES systems
To get [result Y] | align manufacturing data with enterprise-level decision-making processes

--- Tabella ---
US_WP4.2.10 | US_WP4.2.10
As [user type] | Developer/designer
I want to [action X] | implement end-to-end encryption and secure protocols for all data exchanges within the DTS
To get [result Y] | ensure data security and protect against cyber threats

--- Tabella ---
US_WP4.3.1 | US_WP4.3.1
As [user type] | developer/designer/operator
I want to [action X] | run simulations on different production line configurations
To get [result Y] | identify the most efficient setup for minimizing downtime and maximizing throughput

--- Tabella ---
US_WP4.3.2 | US_WP4.3.2
As [user type] | developer/designer/operator
I want to [action X] | simulate equipment failures and maintenance schedules
To get [result Y] | optimize maintenance planning and reduce unexpected downtime

--- Tabella ---
US_WP4.3.3 | US_WP4.3.3
As [user type] | developer/designer/operator
I want to [action X] | create dynamic simulations that adjust to real-time data inputs
To get [result Y] | make timely decisions based on current operational conditions

--- Tabella ---
US_WP4.4.1 | US_WP4.4.1
As [user type] | Developer/designer/operator
I want to [action X] | Select multiple HMI interaction patterns and visualization options
To get [result Y] | Rapid HMI Prototyping

--- Tabella ---
US_WP4.4.2 | US_WP4.4.2
As [user type] | developer/designer/operator
I want to [action X] | create customizable dashboards and views with drag-and-drop widgets
To get [result Y] | easily monitor key performance indicators (KPIs) relevant to my role

--- Tabella ---
US_WP4.4.3 | US_WP4.4.3
As [user type] | developer/designer/operator
I want to [action X] | integrate real-time data feeds into the visualization platform
To get [result Y] | see live updates and react quickly to changes on the factory floor

--- Tabella ---
US_WP4.4.4 | US_WP4.4.4
As [user type] | developer/designer/operator
I want to [action X] | implement interactive 3D models of machinery and processes
To get [result Y] | visualize complex systems and identify potential issues in a more intuitive way

--- Tabella ---
US_WP4.4.5 | US_WP4.4.5
As [user type] | developer/designer/operator
I want to [action X] | incorporate predictive analytics into the visualization tools
To get [result Y] | anticipate future trends and make data-driven decisions

--- Tabella ---
US_WP4.4.6 | US_WP4.4.6
As [user type] | developer/designer/operator
I want to [action X] | implement a data layering feature in the visualization tools
To get [result Y] | selectively view and focus on specific macro groups of data while hiding unrelated information, making it easier to analyze relevant aspects of the manufacturing process

--- Tabella ---
US_WP4.5.1 | US_WP4.5.1
As [user type] | developer/designer/operator
I want to [action X] | implement real-time feedback loops between the physical system and the Digital Twin
To get [result Y] | ensure that the digital model is always up-to-date and reflective of current operations

--- Tabella ---
US_WP4.5.2 | US_WP4.5.2
As [user type] | developer/designer/operator
I want to [action X] | enable automated control actions based on Digital Twin insights
To get [result Y] | the system can automatically adjust processes to optimize performance without manual intervention

--- Tabella ---
US_WP4.5.3 | US_WP4.5.3
As [user type] | developer/designer/operator
I want to [action X] | design a synchronization protocol that minimizes latency
To get [result Y] | real-time decisions are based on the most current and accurate data, improving the responsiveness of the system

--- Tabella ---
US_WP4.6.1 | US_WP4.6.1
As [user type] | developer/designer
I want to [action X] | ensure seamless integration of the Digital Twin with existing manufacturing infrastructure
To get [result Y] | the transition from development to live operations is smooth and does not disrupt current production processes

--- Tabella ---
US_WP4.6.2 | US_WP4.6.2
As [user type] | developer/designer
I want to [action X] | implement automated deployment scripts
To get [result Y] | DTS can be deployed efficiently and consistently across different environments

--- Tabella ---
US_WP4.6.3 | US_WP4.6.3
As [user type] | developer/designer
I want to [action X] | monitor the DTS closely during the initial deployment phase
To get [result Y] | quickly identify and resolve any issues that may arise, ensuring minimal impact on manufacturing operations

--- Tabella ---
US_WP4.7.1 | US_WP4.7.1
As [user type] | developer/designer
I want to [action X] | implement role-based access controls (RBAC) within the DTS
To get [result Y] | ensure that only authorized personnel can access sensitive functions and data

--- Tabella ---
US_WP4.7.2 | US_WP4.7.2
As [user type] | system administrator
I want to [action X] | deploy real-time monitoring tools to track and log all access to the Digital Twin
To get [result Y] | quickly detect and respond to any unauthorized access attempts or anomalies

--- Tabella ---
US_WP4.8.1 | US_WP4.8.1
As [user type] | developer/designer
I want to [action X] | ensure interoperability between the Digital Twin and legacy manufacturing systems
To get [result Y] | leverage existing infrastructure without needing extensive modifications or replacements

--- Tabella ---
US_WP4.8.2 | US_WP4.8.2
As [user type] | system architect
I want to [action X] | integrate the Digital Twin with real-time data feeds from external sources
To get [result Y] | the DT model remains current and reflective of external conditions, such as supply chain variations or environmental factors

--- Tabella ---
US_WP4.8.3 | US_WP4.8.3
As [user type] | developer/designer/operator
I want to [action X] | implement API gateways that support secure and efficient data exchange
To get [result Y] | integration process is streamlined, and data can flow seamlessly between the DT and connected systems