---
source_file: IPCEI_AVANT_D1.0_M3_DOSR_WP1_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: 57cf26ed8efeae46caff7535c16310f06bbce3e4fc8d5c06796a16b5e2ab6f38
chars: 51910
---

REVISION TABLE:
 List of figures
Figure 1 - High-level WP1 features	20
LIST of tables
Table 0-1: Acronyms	6
Table 1-1: Annex	9
Table 8-1: Glossary	30
Acronyms
The following table contains acronyms are used throughout this document:
Table 0-1: Acronyms
Introduction
This document outlines the technical architecture of WP1, which aims to establish a dynamic architecture where edge nodes are integral components of the cognitive computing continuum. This architecture is envisioned as a distributed, opportunistic, collaborative, heterogeneous, self-managed, sensing, and learning environment that interconnects multiple edge and cloud systems owned by different actors. The goal is to leverage the broad spectrum of cloud-edge services and their natural proximity to end-users, significantly closer than those offered by leading global cloud providers.
This dynamic environment must adapt to user needs, including use cases where the computing architecture evolves over time (e.g., cognitive agents in the field utilizing resources such as cars, robots, drones, people with smart devices, etc.). However, such dynamicity may introduce complexities that could deter adoption. Therefore, WP1 includes Research and Development (R&D) and Field Implementation and Deployment (FID) activities to facilitate straightforward edge and cloud interoperability in dynamic contexts where resources need to be intelligently discovered, observed, and managed.
Finally, while Gaia-X aims to provide an interoperability model for EU clouds, AVANT will extend beyond this by considering dynamic, distributed, heterogeneous computing systems that self-adjust to operational conditions, system configurations, and data topologies.
This document describes the high-level architecture of the WP1 addressing the above listed features. It matches the IPCEI program in large extent being foundational for the implementation of distributed data-based policies. As a matter of fact, data are stored and processed over clouds and these clouds are distributed over Europe. AVANT aligns with the overall IPCEI CIS strategy by addressing multi-provider cloud continuum by delivering innovation ranging from the management of the computation across cloud up to the the delivery of advanced applications. 
This document highlights key components and frameworks resulting from various work packages (WP) to enable an advanced and dynamic cognitive computing continuum, focusing on efficient use and management of distributed resources, data, and cybersecurity measures.
WP1: Cognitive Computing Continuum Orchestration Platform (C3OP)
Supports intelligent and optimal use of cloud-edge resources.
Provides AIOps capabilities for discovery, monitoring, control, and orchestration.
Focuses on energy efficiency, SLA, and reputation optimization.
WP2: Data Management and Analytics
Distributed Data Ecosystem (DDE): A framework for data and service interoperability, DataOps practices, data quality management, and GDPR compliance.
Distributed Data Analytics as a Service (DDAaaS): A platform for AI-based data analytics supporting MLOps, including tools for big data management and ML model lifecycle.
Data Toolkit for DT Platforms (DT4DT): Provides data management, transformation, and processing capabilities for digital twin (DT) platforms, including general-purpose 3D visual modeling tools.
WP3: Cybersecurity Measures for Digital Twins
Cybersecurity of Digital Twin (CSoDT): AI-based cybersecurity measures for DT service delivery platforms, enhancing cyber risk assessment and real-time situational awareness.
Digital Twins for Cyber-Security (DT4CS): Tools to use DTs for improving the cybersecurity of cyber-physical systems, supporting risk assessment, threat detection, and response.
WP4-WP8: Frameworks for Specific Domains
WP4: Industrial DT (IDT) Implementation: Supports the creation of DT-based systems in manufacturing and supply chain scenarios, aligning with Industry 5.0.
WP5: Preserving EU Cultural Heritage: Manages cultural heritage DTs, optimizing conservation, preservation, and user experience.
WP6: Urban DTs and Public Services: Platform for designing and deploying DTs in urban environments, enhancing decision-making and personalized services.
WP7: Decentralized Energy Systems Management: Supports delivery of energy community-aware DTs for smart buildings, microgrids, and smart energy grids.
WP8: DTs and AI-Supported Healthcare: Framework for integrating interoperable microservices and models supporting clinical decisions, interoperable with National and European Health Data Spaces.
The purpose of this document is to highlight the advance with respect to the state of the art as described in the project portfolio.
As said the first delivery of this document is aimed to update the state of the art with respect to the possible evolutions of the technology and business background.
Finally, due to the typical nature of a research project, this document shall be intended as a living artifact. As such, it might be subject to changes during the course of the project (e.g. because of new research objectives, new technologies or whatever) and will be regularly updated to reflect the current status.
Reference Documentation – ANNEX
Table 1-1: Annex
Description of the system
Major technical locks for WP1
This document addresses the major technical challenges and innovation goals for WP1, focusing on overcoming interoperability issues posed by heterogeneous infrastructures and services. It highlights the necessary innovations to unlock the potential of cloud, edge, and IoT resources.
Major Technical Challenges:
Heterogeneity of Infrastructures: Over 620 IoT platforms exist with limited standards, steering investments towards on-premises solutions and complicating cloud service management.
Interoperability Challenges: Lack of standards and support for intelligent, cognitive, multi-domain service discovery, monitoring, connectivity, and orchestration.
Visibility of Offerings: The small size and multitude of offerings in the continuum reduce visibility, impacting service diversification and quality.
Cross-Domain Trust: Need for mechanisms to automatically evaluate and establish trust relationships among stakeholders in cross-domain scenarios.
Connecting IoT with Continuum: Difficulty in connecting the continuum with the IoT world, especially at the edge where data-driven solutions for practical problems are needed.
Innovation Goals (IGs) for WP1:
IG1.1: Realize a robust, integrated, cognitive computing infrastructure
Objective: Develop an infrastructure integrating cloud and edge nodes into the cognitive computing continuum.
Features: Distributed, collaborative, heterogeneous, self-managed, energy-efficient environment connecting various infrastructures.
Mechanisms: Real-time resource discovery, smart and predictive management of resource dynamicity and mobility.
IG1.2: Smart, multi-provider, goal-driven, reputation-aware, and sustainable application orchestration
Objective: Optimize computational resource usage and performance while minimizing energy consumption.
Features: Multi-provider orchestration optimizing multiple constraints and inputs (resource status, energy consumption, application profiles, user goals, connectivity, data, security requirements).
Mechanisms: Goal-driven orchestration considering current and predicted resource status and trustworthiness.
IG1.3: Realize a comprehensive, trusted set of mechanisms and tools to control deployments and QoS/QoE of apps
Objective: Provide necessary data and tools for optimal orchestration and informed decision-making.
Features: Unified monitoring systems, performance and energy profilers, declarative mechanisms for expressing deployment requirements.
Mechanisms: Simplified tools for managing SLAs, ensuring trustworthiness, and optimizing QoS/QoE for applications.
These innovation goals aim to create a cohesive and efficient computing environment, addressing the challenges of heterogeneity, interoperability, and visibility, while fostering trust and optimizing resource use in the cloud-edge-IoT continuum.
Objectives, technological challenges, and results beyond the global state of the art 
The objectives and key performance indicators (KPIs) for WP1, aiming to deliver a highly interoperable, efficient, and flexible computing and data infrastructure. The focus is on promoting dynamic, intelligent federated cloud services across the EU, leveraging new and sustainable computing models.
Objectives:
OB1.1: Effective Resource Discovery
Objective: Enable resource discovery in heterogeneous, multi-domain, dynamic, and mobile environments within the cloud-edge continuum.
Related IG: IG1.1
KPIs:
KPI 1.1: Support discovery, observability, and orchestration across ≥ 6 platforms (cloud and edge).
KPI 1.2: Integrate ≥ 3 administrative domains during the RD phase.
KPI 1.3: Minimize time needed to discover, connect, and orchestrate untapped resources.
OB1.2: Resource Observability
Objective: Utilize trusted and distributed monitoring solutions and benchmarking techniques for effective service orchestration and SLA management.
Related IG: IG1.1, IG1.3
KPIs:
KPI 1.4: Ensure consistent monitoring over heterogeneous federated environments.
KPI 1.5: Integrate at least 5 new benchmarks specific to the edge.
KPI 1.6: Limit failures to orchestrate due to obsolete/invalid resource profiles to ≤ 5%.
OB1.3: Energy-Aware Service Placement
Objective: Develop solutions for energy-aware service placement and execution in the cloud-edge continuum to optimize resource consumption.
Related IG: IG1.2
KPIs:
KPI 1.7: Reduce energy footprint for edge applications by 15% through optimized orchestration.
OB1.4: Goal-Driven, Policy- and Application-Aware Solutions
Objective: Optimize usage of the elastic infrastructure with goal-driven, policy- and application-aware, multi-domain solutions for trusted and energy-efficient deployments.
Related IG: IG1.2, IG1.3
KPIs:
KPI 1.8: Reduce time (and cost) needed to deploy and operate distributed apps on heterogeneous edge-cloud environments by 30%.
KPI 1.9: Ensure ≤ 10% of active continuum nodes assigned to an application are unused.
These objectives and KPIs are designed to advance the integration and efficiency of cloud-edge-IoT systems, moving computation closer to data, reducing latency, and enabling seamless integration of physical and digital worlds. The initiatives leverage new virtualization techniques, high-speed networks, and edge computing technologies to create a sustainable and scalable computing infrastructure. Research is demonstrating significant potential for energy savings and improved system design, which will complement efforts towards green data centres and sustainable data processing strategies.
Technological challenges
In this section we will list the technical challenges for WP1, highlighting the difficulties in achieving an effective and efficient computing and data infrastructure across the cloud-edge-IoT continuum. The technical challenges are tied to specific objectives to provide a clear path towards overcoming these obstacles.
TC 1.1: Fast and Accurate Resource Discovery in Dynamic Environments
Objective: OB1.1
Description: Dynamic, mobile, and diverse environments require mechanisms to rapidly and accurately discover resources, managing their volatility and heterogeneity.
TC 1.2: Lack of Security Information for Autonomous Placement
Objective: OB1.1
Description: Absence of digital and physical security data complicates trusted deployments, necessitating consistent security policies and zero-trust designs.
TC 1.3: Heterogeneous Monitoring Mechanisms
Objective: OB1.2
Description: Need for monitoring tools that handle diverse cloud/edge/IoT systems, addressing privacy, detail, and data aggregation while ensuring consistent data collection.
TC 1.4: Unified SLA and QoS Management in Cross-Domain Scenarios
Objective: OB1.2
Description: Development of unified mechanisms for evaluating, negotiating, and monitoring SLAs and QoS across different domains to ensure optimal resource usage.
TC 1.5: Automated Energy Profiles for Applications
Objective: OB1.3
Description: Creation of automated mechanisms to build detailed energy profiles for applications, guiding energy-aware orchestration and reducing the energy footprint.
TC 1.6: Goal-Driven Application Delivery
Objective: OB1.4
Description: Enabling application providers to focus on QoS/QoE expectations rather than operational details, supporting dynamic scaling and migration decisions.
TC 1.7: Platform-Dependency and Interoperability Issues
Objective: OB1.4
Description: Addressing challenges in deploying and orchestrating applications across heterogeneous multi-domain infrastructures, ensuring portability and business continuity.
Detailed Descriptions of Technical Challenges:
TC 1.1 - Dynamic Environments Demand Fast Resource Discovery
Dynamicity, mobility, and diversity of resources require reactive discovery mechanisms to manage varying capabilities and rapid changes in resource availability.
TC 1.2 - Lack of Security Information for Autonomous Decisions
Fragmented and heterogeneous edge/IoT environments lack consistent security policies. Building security profiles based on benchmarks and community-acknowledged information is essential.
TC 1.3 - Heterogeneous Monitoring Tools
Monitoring tools must handle diverse systems, ensure data collection, and resist connectivity issues. Aggregating data from different systems remains challenging.
TC 1.4 - Unified SLA and QoS Management
Dynamic and heterogeneous contexts require mechanisms for unified SLA evaluation and QoS management, ensuring optimal resource usage and system engineering.
TC 1.5 - Automated Energy Profiles for Applications
Establishing benchmarks and a common data model to automate energy profile measurements, guiding smart, energy-aware orchestration.
TC 1.6 - Goal-Driven Application Delivery
Application providers should express QoS/QoE expectations, allowing automated decisions on scaling and offloading to optimize performance and energy use.
TC 1.7 - Platform-Dependency and Interoperability Issues
Ensuring application portability and addressing interoperability across heterogeneous infrastructures, focusing on automated mechanisms for stateful component migration.
These technical challenges highlight the complexity of managing a dynamic and heterogeneous computing environment, emphasizing the need for innovative solutions to ensure efficient and secure operations across the cloud-edge-IoT continuum.
Technological background
In AVANT it is envisaged and fostered the extensive adoption and customization of open-source software (OSS). Among the OSS projects, ENG has selected Liqo (Liqo.io), developed by a European team from the “Politecnico di Torino”. ENG plans to establish a baseline from past experiences of both groups and support Liqo's development by creating a common roadmap with the Liqo team. The expected deliverables include:
Distributed Monitoring Capabilities: Tools and frameworks for monitoring resources and applications across the cloud-edge continuum.
Application and Infrastructure Characterization: Methods to describe and classify various applications and infrastructure components.
Evaluation of QoS, Performance, and Stability: Mechanisms to assess and ensure the quality of service, performance, and stability of the computing environment.
Privacy-Enhancing Technologies: Solutions to protect privacy and data security at the edge.
Liqo Integration: Customization and integration of the Liqo platform into the broader infrastructure, leveraging its capabilities for efficient resource management and orchestration.
These deliverables aim to enhance the interoperability, efficiency, and security of the computing infrastructure within WP1.  To achieve these results, we will define a Common Roadmap with Liqo Team at POLITO.
Definition of the main requirements
Mapping of the technical challenges with high level features and requirements
In this section we will analyse relevant requirements derived from the project portfolio. Let’s consider them as an output of a preliminary analysis of the technical challenges and objectives of the project since its start.
The Cloud Continuum concept described in the Project Portfolio can be to the distribution of workloads and data across multiple clusters, spread over a large geographical area and with heterogenous characteristics. Those cluster might be part of a single administrative domain, but this shall not be considered as the general case. More generally, Federation supports the sharing of resources, from different application among various administrative domains. In a federated-cloud model, different providers are integrated into a single scalable platform.
The Federation user who can have access to the shared resources are of various type. Typically, users can be members of one of the administrative domain, individual users who, for various reasons, have the right to access all or part of the shared resources, despite not being members of the federation, or unregistered users who can have access to the public resources possibly made available by the federation. In conclusion let consider the following high-level requirements:
HL1- Cluster Federation: This category would typically involve issues related to managing multiple clusters of computers, often in different locations, to work together as a single system. Relevant TCs might include those dealing with resource management across different domains or platforms.
TC 1.7: Platform-Dependency and Interoperability Issues — This challenge focuses on deploying and orchestrating applications across heterogeneous infrastructures, which aligns with the concept of cluster federation.
HL1.1- Cloud Continuum Orchestration: The Cloud Continuum refers to the seamless expansion of the cloud from centralized to distributed. The definition of the Cloud Continuum is continuously evolving over time. Nowadays the concept of seamless continuity is applied to the resources available from the IoT through network edge to the cloud/datacenter. The computational related aspects are also considered: where and how the computation is performed. Finally, the integration of different services across multiple infrastructures must be considered in the definition of Cloud Continuum.
These capabilities are unified and supported by advanced connectivity. This allows access to the cloud from virtually anywhere and eliminates the silos among services. The Cloud Continuum is not a technology but a topology, bringing together many cloud technologies designed to work together to create a new topology that connects everything from central cloud to edge, and IoT devices.
WP1 of the AVANT project aims to orchestrate computational resources in heterogeneous cloud ecosystems whose boundaries are constantly changing due to the mobility characteristics of the devices that compose them (mobile phones and IoTs primarily).
The orchestration of computational tasks must consider performance aspects, low latency and computing performance, but also compliance with legal, privacy and regulatory constraints, environmental sustainability, cost containment, and security. All this requires automation and a continuous verification loop to ensure immediate responses to changes but also the balance of the environment through the correction of natural deviations due to changing conditions and the competition that is established between the requirements considered.
For each new request from a Federation user, for example, the system must assign a workload placement based on the user's explicitly entered requirements and implicit ones: security, privacy, environmental sustainability, etc... Then, through observability techniques, re-placements must be predicted and applied to respond to the imbalances that may occur. Machine learning and AIOps techniques are used to optimize the process and avoid counterproductive continuous re-placements.
Challenges under this category involve managing services and resources that span across cloud and edge environments in a seamless manner.
TC 1.2: Lack of Security Information for Autonomous Placement — Deals with security across digital and physical environments, important in a continuum where resources are distributed.
TC 1.3: Heterogeneous Monitoring Mechanisms — Addresses the need for monitoring tools that handle diverse systems, essential for orchestration across cloud and edge.
H1.1.1- Intent Based Orchestration: This includes dynamically managing resources and services based on the intent or desired outcomes, such as performance or service quality.
TC 1.6: Goal-Driven Application Delivery — Specifically emphasizes enabling providers to focus on quality of service and experience, which fits intent-based orchestration.
HL2-Multitenancy: Pertains to systems that can be used by multiple users without those users affecting each other's data or performance. None of the described TCs directly addresses issues related to multitenancy. It does not match any challenges: nevertheless it is assumed to be a pre-requisite for managing Digital Twins as a service. 
HL 3- Green Awareness: Involves managing IT resources in a way that minimizes environmental impact, focuses on energy efficiency, and promotes sustainability.
TC 1.5: Automated Energy Profiles for Applications — Discusses the creation of mechanisms to build energy profiles for applications, directly supporting green-aware strategies.
TC 1.6: Goal-Driven Application Delivery. It is related to green awareness since it one of the goal could be reduce energy consumption. 
HL4-Observability: Relates to the ability to monitor and understand the state of systems by observing external outputs. Observability is crucial in complex systems for troubleshooting and self-optimization.
TC 1.3: Heterogeneous Monitoring Mechanisms — While this TC discusses monitoring tools for diverse systems, its focus on ensuring consistent data collection aligns with the needs of observability.
TC 1.4: Unified SLA and QoS Management — Involves evaluating and monitoring service level agreements and quality of service across domains, which is key for observability in ensuring system performance meets set standards.
Baseline definition 
The objective of this section is to setup an open-source baseline for a multi-cluster Kubernetes federation platform. In the project portfolio (ref. 1) we have highlighted previous projects and open-source frameworks that we have envisaged as baseline for our project. Considering that time has passed and more products/packages have been produced/delivered, it is necessary to further investigate on which is the best architectural baseline considering the project objectives. At the time of writing, we have identified various open-source products that align with the technical challenges and features outlined in the roadmap. Here are some key open-source projects that could form the foundation of such a platform:
Kubernetes (K8s)
Description: Kubernetes is the core container orchestration platform that allows for the management of containerized applications across clusters.
Relevance: Fundamental for multi-cluster management, resource orchestration, and workload scheduling. K8S is more than a simple framework: it is the lingua franca of cloud native solutions. As such we mention it as a fundamental reference for AVANT
 Submariner
Description: Submariner is an open-source project that provides network connectivity between Kubernetes clusters, enabling multi-cluster communication and services.
Relevance: Facilitates cross-cluster network connectivity, making it easier to deploy applications that span multiple clusters.
 Federated AI Technology Enabler (FATE)
Description: FATE is an open-source project for federated learning, providing a framework for training AI models across distributed data sources without sharing raw data.
Relevance: Useful in scenarios requiring federated machine learning, especially in multi-cluster environments with distributed data.
 Karmada
Description: Karmada (Kubernetes Armada) is a Kubernetes management system that aims to provide high availability, scalability, and consistent user experience across multiple Kubernetes clusters.
Relevance: Directly addresses multi-cluster resource management, synchronization, and high availability.
Open Cluster Management
Description: Open Cluster Management (OCM) is an open-source project that provides a set of tools and APIs for managing multiple Kubernetes clusters at scale. It focuses on enabling consistent cluster management, policy enforcement, application lifecycle management, and governance across diverse environments, including public clouds, private clouds, and edge locations.
Relevance: Open Cluster Management is crucial for organizations looking to effectively manage a large number of Kubernetes clusters in a coherent and unified manner. It addresses the needs for centralized policy enforcement, governance, and application lifecycle management across multi-cluster environments, ensuring consistency, security, and efficiency.
Liqo
Description: Liqo enables dynamic and transparent sharing of Kubernetes resources across clusters by allowing them to join each other and share their unused resources.
Relevance: Enhances resource utilization by allowing seamless resource sharing between clusters. It has been selected at Project Portfolio elaboration time since it is European, and it is the simplest way for getting the necessary competencies.
Liqo is a technology developed in Europe by Politecnico di Torino. As been our first choice and an agreement with POLITO has been already found. All considered it is our first choice. Nevertheless, for assessing the state of the art it is necessary to compare it with the other tools having the same mission. 
Openslice
Description: OpenSlice is an open-source platform for managing network slices in 5G networks and beyond. It provides end-to-end network slicing management, enabling the creation, modification, and deletion of network slices across multiple domains and infrastructure providers. OpenSlice focuses on automating the lifecycle management of network slices to ensure efficient and optimized use of network resources.
Relevance: OpenSlice is highly relevant in the context of a multi-provider cloud continuum as it addresses the need for dynamic, flexible, and efficient management of network resources across diverse environments. By enabling seamless network slicing, OpenSlice supports high availability, scalability, and consistent user experience across multiple infrastructure providers.
The projection of the slicing concept on the cloud continuum context provides inputs on how to manage multitenancy in this context. Apart from the management of network resources it provides inputs on how to manage the multi provider cloud continuum
Prometheus
Description: Prometheus is a leading open-source monitoring and alerting toolkit.
Relevance: Essential for unified metric collection, monitoring resource usage, and performance metrics across clusters.
 Thanos
Description: Thanos is an open-source project that provides highly available Prometheus setup with long-term storage capabilities.
Relevance: Enhances Prometheus capabilities for large-scale observability, particularly useful in multi-cluster environments.
 VictoriaMetrics
Description: VictoriaMetrics is a fast, cost-effective, and scalable monitoring solution and time series database, compatible with Prometheus.
Relevance: Provides efficient time-series data storage and querying, suitable for large-scale observability needs.
Loki
Description: Loki is a horizontally scalable, highly available log aggregation system inspired by Prometheus.
Relevance: Provides log aggregation and query capabilities that integrate well with existing Prometheus and Grafana setups.
eBPF-Based Observability Tools.
eBPF is a technology that detach the application for the observers. It is not invasive not requiring annotation in code.
BPFTrace
Description: BPFTrace is a high-level tracing language for Linux enhanced BPF (eBPF), providing a powerful way to write custom observability tools.
Relevance: Enables deep observability into system performance, resource usage, and network activity using eBPF.
Cilium
Description: Cilium is an open-source networking and security project that uses eBPF for providing secure network connectivity and load balancing.
Relevance: Provides network observability and security features using eBPF, suitable for Kubernetes environments.
Pixie
Description: Pixie is an open-source observability tool for Kubernetes applications that uses eBPF to automatically capture and surface observability data.
Relevance: Leverages eBPF for low-overhead, high-resolution observability into Kubernetes applications without requiring code changes.
Falco
Description: Falco is an open-source runtime security tool that can detect anomalous activity in applications and containers using eBPF.
Relevance: Provides real-time security monitoring and observability, leveraging eBPF to monitor kernel events.
Sysdig
Description: Sysdig is an open-source visibility tool for containers and microservices, offering deep insights into system calls and kernel activity using eBPF.
Relevance: Offers comprehensive observability and security monitoring by leveraging eBPF to capture detailed system-level data.
Grafana
Description: Grafana is an open-source platform for monitoring and observability that integrates with various data sources, including Prometheus.
Relevance: Provides unified visualization of metrics, logs, and other observability data.
Jaeger
Description: Jaeger is an open-source, end-to-end distributed tracing tool.
Relevance: Crucial for distributed tracing and monitoring the flow of requests across multiple clusters.
Elasticsearch, Fluentd, Kibana (EFK Stack)
Description: The EFK stack is used for log aggregation and analysis.
Relevance: Supports log aggregation, storage, and visualization, ensuring comprehensive observability.
Istio
Description: Istio is an open-source service mesh that provides traffic management, security, and observability.
Relevance: Helps with managing network traffic between services, enforcing security policies, and providing observability at the service level.
OPA (Open Policy Agent)
Description: OPA is an open-source policy engine that provides policy-based control for cloud-native environments.
Relevance: Useful for implementing consistent security policies, compliance rules, and policy-driven resource management.
Terraform
Description: Terraform is an open-source infrastructure as code tool that allows for the management of infrastructure resources through code.
Relevance: Facilitates automated provisioning and management of resources across multi-cloud and on-premises environments.
Helm
Description: Helm is a package manager for Kubernetes that simplifies the deployment and management of applications.
Relevance: Helps with managing application lifecycles and deployments across clusters.
Cluster API
Description: Cluster API provides a Kubernetes-style API for managing clusters.
Relevance: Enhances the ability to manage the lifecycle of Kubernetes clusters and facilitates multi-cluster management.
Argo CD
Description: Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.
Relevance: Supports continuous deployment and GitOps workflows for managing applications across multiple clusters.
The large amount of OSS project is at this stage one of the major challenges to be addressed since the selection process could lead to uncertainty and undefinition of the basic architecture. 
Moreover many collaborations have been setup leading to an even more complex project management
High-Level Functional Scenarios & Research roadmap
Considering the above sections, in the following sections we want to provide an initial activity roadmap aimed at developing the necessary R&D activities for answering to the identified TC. 
Figure 1 - High-level WP1 features
Possible development roadmap
Considering all the above elements, a possible roadmap could be segmented into phases, focusing on building, and integrating the necessary components to create a comprehensive multi-cluster Kubernetes federation platform.
Phase 1: Foundation and Initial Setup
Duration: 0-6 Months
Objective: Establish a robust foundational framework and initial components for multi-cluster management.
Activities:
Subscription Management, Order Management, Billing/Invoicing: Implement these foundational components to manage subscriptions, orders, and billing for multi-cluster services.
Service Lifecycle Management: Develop mechanisms to handle the lifecycle of services across clusters.
Federation Management: Set up basic federation management capabilities to start integrating multiple clusters.
User Self-Assurance and Catalogues: Implement initial versions of user self-assurance and various catalogues (infra, app, data, net service) for organizing resources.
IAM (Identity and Access Management): Establish IAM to manage access control across the platform.
Admin and Audit/Log: Set up administrative tools and logging/auditing mechanisms for tracking and managing changes.
Phase 2: Advanced Multi-Cluster Management and Security
Duration: 7-12 Months:
Objective: Enhance multi-cluster management capabilities and strengthen security measures.
Activities:
Multicluster Resource Manager, Multi-Provider Registry: Implement these components to manage resources across different clusters and providers.
Cross Cluster Sync, Multi-Cluster Scheduling: Develop synchronization and scheduling mechanisms to efficiently manage workloads across clusters.
Dynamic Resource Discovery: Integrate dynamic resource discovery to quickly identify available resources in dynamic environments.
Security-Based Configuration: Enhance security measures with advanced IAM integration and consistent security policies.
Unified Metric Collection and Service Metering: Deploy unified metric collection and service metering tools to monitor and measure resource usage across clusters.
Unified Visualization: Create a unified dashboard for visualizing metrics, logs, and resource statuses.
Phase 3: Intent-Based Orchestration and Optimization
Duration: 13-18 Months
Objective: Implement intent-based orchestration and optimize resource usage.
Activities:
Intent-Based System Configuration: Develop configuration tools for intent-based orchestration, allowing for dynamic adjustments based on predefined intents.
HA/SLA Management: Implement high availability and SLA management tools to ensure service reliability and performance.
Workload Profiling (WL profiling), Energy Profiling: Develop profiling tools to optimize workload placement and energy usage.
Geolocation and Affinity Rules: Integrate geolocation and affinity rules for better workload distribution and compliance with data residency requirements.
Service Metering and Log Aggregation: Enhance service metering and log aggregation tools for better tracking and analysis.
Distributed Tracing: Implement distributed tracing to monitor and debug applications across multiple clusters.
Phase 4: Compliance, AI Integration, and Further Optimization
Duration: 19-24 Months
Objective: Ensure compliance, integrate AI for enhanced decision-making, and optimize existing components.
Activities:
Compliancy Regulatory: Implement tools to ensure compliance with regulatory requirements across all clusters.
Distributed AI: Integrate distributed AI for advanced decision-making and automation in resource management.
Data/Resource Management: Enhance data and resource management tools to ensure consistent and efficient data handling.
Admin Enhancements: Improve administrative tools for better control and management of the multi-cluster environment.
Continuous Improvement: Regularly update and optimize all components based on feedback and operational data.
Phase 5: Scaling and Continuous Improvement
Duration: 25-36 Months and beyond
Objective: Scale the platform and continuously improve based on evolving needs and technologies.
Activities:
Scaling Implementations: Scale the deployment of security, monitoring, and orchestration systems across all federated clusters.
Continuous Improvement Processes: Implement processes for continuous improvement to adapt to new challenges and integrate innovative technologies.
Energy Efficiency Updates: Regularly update energy profiles and optimization algorithms to maintain green-awareness strategies.
This development roadmap ensures a structured approach to building and integrating a comprehensive multi-cluster Kubernetes federation platform, addressing the key technical challenges and incorporating essential features shown in the provided image.
HW architecture and development environment
Considering the earlier discussed technical challenges and roadmap, here is a proposed hardware (HW) architecture for establishing a development and test system for a multi-provider cloud continuum:
Objectives:
Distributed and Scalable Environment: Ensure the system can be distributed across multiple data centers to mimic real-world scenarios.
Interoperability: Support various software (SW) and hardware (HW) configurations to test interoperability across different environments.
Energy Efficiency: Include capabilities to measure and optimize energy consumption.
Repeatable and Isolated Testing: Provide isolated environments to conduct repeatable tests without interference.
Advanced Processing: Support for advanced processing requirements using GPUs and other accelerators.
Edge and IoT Integration: Include edge computing capabilities to simulate real-world edge scenarios.
High Availability and Performance: Ensure the infrastructure can support high availability and performance testing.
Proposed HW Architecture:
Core Components:
Compute Nodes:
Quantity: 8 nodes per cluster
Specifications: Dual socket x86 servers, each with 40 cores/CPU and 512GB RAM
GPU Integration: Nodes equipped with 2x NVIDIA A100 40GB GPUs for advanced processing
Storage Nodes:
Quantity: 2 nodes per cluster
Specifications: 30 TB storage per node, scalable storage solution like Dell PowerScale F900
Networking:
High-Speed Interconnects: 10GbE networking for intra-cluster communication
Edge Gateways: Equivalent to Eurotech BOLTGate 20-25 with 5G capability and Intel Atom LTE Cat 4 IP66 for edge deployments
Specialized Hardware:
Edge Computing: Eurotech BoltGPU, BoltCOR, and DynaCOR for edge computing nodes
Network Appliances: ADVA FSP 150 XG118Pro with 16 Core Xeon server blade for advanced networking
Energy Measurement:
Energy Profiling Tools: Integration of energy measurement tools to profile and compare different SW configurations.
Multi provider test bed:
Primary Data Centers:
Locations: Distributed across EU data centers (e.g., Aruba and IONOS)
Purpose: Host the main compute, storage, and networking infrastructure
Features: High availability, redundant power supplies, and cooling systems
Edge Data Centers:
Locations: Smaller, distributed locations closer to end-users
Purpose: Host edge computing nodes to simulate edge scenarios
Features: Limited but scalable compute and storage resources
Example Configuration for Work Packages (WPs):
WP1, WP5, WP8:
Compute: Equivalent to 256 cores with approx. 2TB RAM
Storage: 2 nodes with 15 TB each
Advanced Processing: Dual socket x86 servers with GPUs, Eurotech BOLTGPU, BoltCOR
Networking: ADVA FSP 150 XG118Pro, Edge gateways with 5G updates
 WP2, WP6:
Compute: Equivalent to 240 CPUs with approx. 1.5TB RAM
Storage: 2 nodes with 30 TB each
Advanced Processing: Similar to WP1 but with different Eurotech models (BOLTGPU, BoltCOR)
Networking: Similar networking hardware
WP3, WP4, WP7:
Compute: Equivalent to 240 CPUs with approx. 1.5TB RAM
Storage: 2 nodes with 15 TB each
Advanced Processing: Similar configurations with specific models for edge computing
Networking: Similar ADVA and Eurotech models
Development environment
Development environment adopted is described in the Project Quality Plan (D0.2b Quality management plan)
Glossary
The following table provides definition and terminology used in the document: 
Table 8-1: Glossary

--- Tabella ---
ISSUED BY | Engineering I.I.
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | First Version | n.a. | Giovanni Frattini | Marco Alessi, Vito Morreale
 |  |  |  |  | 

--- Tabella ---
Term | Definition | Term | Definition
A-Obj. | AVANT Objective | IBN | Intent Based Network
AI | Artificial Intelligence | IBS | Intent Based System
API | Application Programming Interface | IDSA | International Data Space Association
Apps | Applications | IG | Innovation Goal
AVANT | dAta and infrastructural serVices for the digitAl coNTinuum | IIoT | Industrial Internet of Things
BDA | Big Data Analytics | IoT | Internet of Things
BDVA | Big Data Value Association | I-Obj. | IPCEI Objective
BSS | Business Support System | IPCEI | Important Projects of Common European Interest
C3OP | Cognitive Computing Continuum Orchestration Platform | IT | Information Technology
CAGR | Compound Annual Growth Rate | M&A | Merger and Acquisition
CDSS | Clinical Decision Support Systems | ML | Machine Learning
CH | Cultural Heritage | MLOps | ML Operations
CI/CD | Continuous Integration/Continuous Delivery | MP | Macro Project
CIS | Cloud Infrastructure and Services | NBI | NorthBound Interface
CPS | Cyber-Physical System | NIST | National Institute of Standards and Technology
DDAaaS | Distributed Data Analytics as a Service | OSS | Operation Support System
DDE | Distributed Data Ecosystem | PA | Public Administration
Del. | Deliverable | PaaS | Platform as a Service
Dev(Sec)Ops | SW development cycles including control of SW security aspects. | PRM | Project Risk Management
DevDataOps | Management of training datasets | QC | Quality Control
DIH | Digital Innovation Hub | QA | Quality Assurance
DL | Deep Learning | SaaS | Software as a Service
DPP | Digital Product Passport | SBI | SouthBound Interface
DL | Deep Learning | SLA | Service Level Agreement
DT | Digital Twin | SW | Software
DTOps | DTs Operations | TBD | To be defined
ENG | Engineering Ingegneria Informatica S.p.A. | TCO | Total Cost of Ownership
EBITDA | Earnings Before Interests Taxes Depreciation and Amortization | TOSCA | Topology and Orchestration for the Specification of Cloud Applications
EFFRA | European Factories of the Future Research Association | UC | Use Case
eID | electronic IDentification | UDT | Urban DT
eIDAS | electronic IDentification, Authentication, and Trust Services | WP | Work Package
GSoTA | Global State of The Art | WS | IPCEI WorkStream
HPC | High-Performance Computing | WSD | IPCEI WorkStream Deliverable
HW | Hardware | WS-Obj. | IPCEI WorkStream – Objective
IaaS | Infrastructure as a Service | XaaS | Anything as a Service

--- Tabella ---
Ref. | Date | Title/Version/URL
[1] | Feb 8th, 2022 | AVANT: dAta and infrastructural serVices for the digitAl coNTinuum - Project Portfolio / v.2.2
[2] | Feb 2020 | The NIST Cloud Federation Reference Architecture (NIST Special Publication 500-332) / https://doi.org/10.6028/NIST.SP.500-332
[3] | Oct 2022 | RFC 9315 Intent-Based Networking - Concepts and Definitions / https://www.rfc-editor.org/info/rfc9315
[4] | Oct 2022 | RFC 9316 Intent Classification / https://www.rfc-editor.org/info/rfc9316

--- Tabella ---
Term | Definition | Comments
Asymmetric Federation | A Federation in which some members provide only users or resources, but not both. | 
Cognitive Resources | Represent a novel type of sense-and-act devices located somewhere in an open space. | These properties and the need for fast, ad-hoc, and binding decisions requires a novel type of resource management and an architecture for cognitive devices that is able to implement the required on-demand and ad-hoc management approach.
Community cloud | The cloud infrastructure is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations). It may be owned, managed, and operated by one or more of the organizations in the community, a third party, or some combination of them, and it may exist on or off premises | NIST definition to be review.
Data Gravity | Phenomenon in which large data sets attract applications, services, and other data, becoming a centralized point of workload. It also refers to the challenge of moving large data sets due to their size, and therefore the need to process the data close to the source. | 
Data Space | Federated data ecosystem based on shared policies and rules, enabling secure, transparent, and unified access to data. It supports data sharing within a data ecosystem, ensuring compliance with laws and fair treatment of participants. | 
Edge Cloud | Edge Cloud is a form of cloud computing that brings cloud resources closer to where data is generated and end-users are located. This reduces the need to send data back to a central data center or private cloud for processing. | The difference between Edge and Fog is nuanced and to avoid misunderstanding in this document will be used only the edge term.
Federated Resources | Resources that are being made available by the Federation Member such that discovery and access can be managed as part of the Federation. | In AVANT the resources are data, computational resources or storage.
Federation | An organization of self-governing entities (members) that have common policies, administrative controls, and enforcement abilities governing the use of shared resources among members. A virtual administrative domain wherein multiple participating organizations/sites can define, agree upon and enforce resource discovery, access and usage policies for the sharing of a subset of their resources.
The members of the federation, in AVANT, are typically Kubernetes clusters or multiclusters. Each cluster/multicluster member of the federation belongs to a separate administrative domain. | The difference between multi-cloud and federated cloud lies in the way the resources are integrated and managed. In a multi-cloud model, the user can choose different resources from different providers. In a federated-cloud model, different providers are integrated into a single scalable platform. In the latter model, an application can use different resources from different providers to function.
Federation Administrator | The role that has the authorization to configure and operate a Federation. This role may be distributed depending on the governance model. | 
Federation Manager | The entity that provides the essential Federation management functions. Is the enabler and orchestrator of the Federated Resources. | 
Federation Member | Any entity that operates and provides a resource that is a service to the Federation and is part of it. | 
Federation Operator | The role that deploys, configures and maintains one or more Federation Managers. | 
Federation Policy | The practices that govern the functioning of a Federation. | 
Federation Provider | Federation Provider could be a site that operates a single Federation Manager to provide Federation Services to a set of Federation Members.
FP could also operate a set of Federation Managers to provide Federation Services (perhaps commercially) to a community of users.
The FP could be part of one or more Federation or could be an external entity. | 
Federation Resource Catalog | A systematic compilation of the Federated Resources being made discoverable and available within a Federation. If the Federation has a commercial mission the resource pricing is also present. | 
Federation Resource Inventory | A compilation of the Federated Resources actually available at the time of consultation. | 
Federation user | A user that belongs to a Federation Member (researchers/ tourists/ farmers/ doctors). | Users who are part of a Federation Member generally inherit roles and grants from the Federation Member(s) which they come from ("Identity Federation" and or "Identity Linking"). Trusted User
Hybrid cloud | The cloud infrastructure is a composition of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities, but are bound together by standardized or proprietary technology that enables data and application portability (e.g., cloud bursting for load balancing between clouds). | NIST definition to be review.
Identity Federation | Mechanism that allows digital identities and attributes to be shared between different information security systems. This is often used to allow users to use the same login credentials across multiple systems or applications. | 
Identity Linking | Process of linking different identities of a user in different systems. This can be used to create a unified view of the user across systems and can be used to assign roles and permissions in one system based on the user's roles and permissions in other systems. | 
Intent | A set of operational goals (that a network should meet) and outcomes (that a network is supposed to deliver) defined in a declarative manner without specifying how to achieve or implement them. | 
Intent Based Network | A network that can be managed using intent | 
Intent Based System | A system that supports management functions that can be guided using intent. | 
Monitoring | The task of assessing the health of a system by collecting and analyzing aggregate data from IT systems based on a predefined set of metrics and logs. | The results of the assessment can be displayed on dashboard and reports systems, that allows to follow the evolution of the monitored system during the time.
Non-registered users | access the federation to search, view and access Open Items only | 
Observability | An observability solution can understand a complex system’s internal state based on external outputs. It allows to detect problems proactively and resolve issues | You can’t have observability without monitoring. Observability is an enhancement of monitoring that start from it to become proactive and not only reactive.
Private cloud | The cloud infrastructure is provisioned for exclusive use by a single organization comprising multiple consumers (e.g., business units). It may be owned, managed, and operated by the organization, a third party, or some combination of them, and it may exist on or off premises. | NIST definition to be review.
Public cloud | The cloud infrastructure is provisioned for open use by the general public. It may be owned, managed, and operated by a business, academic, or government organization, or some combination of them. It exists on the premises of the cloud provider. (Amazon, Google, or Microsoft) | NIST definition to be review.
Registered User | A user who joins the Federation without belonging to any organization. | This kind of users must be submitted to a trust process and linked to roles defined at the Federation level. Untrusted User
Resource Discovery | The process of discovering  Federated Resources. | 
Resource Owner | The role that is accountable and authorizes use and governance of a resource of a given Federation Member. This role may be distributed depending on the governance model. | For example, the medical director of a hospital or a delegate
Roaming | TBD | In a context of continuum and federation it is necessary to define the concept of roaming. Which cannot be directly derived from the Telco lexicon
Symmetric Federation | A Federation in which members provide both users and services. | 
Third party suppliers | Produces Items resource offered by the Federation but is not part of it. | 