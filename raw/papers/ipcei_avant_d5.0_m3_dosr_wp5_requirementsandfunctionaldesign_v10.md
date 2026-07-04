---
source_file: IPCEI_AVANT_D5.0_M3_DOSR_WP5_RequirementsAndFunctionalDesign_V10
source_subdir: docx
ingested: 2026-06-16
sha256: 90d97c3643372ff2baf54c1bd9c5a1a763320410609df4b655f49f6fb9cf0324
chars: 27222
---

REVISION TABLE:
 LIST of tables
Table 1-1: Acronyms	4
Table 2-1: WP5 Innovation Goals	14
Table 2-2: WP5 key performance indicators	14
AcronymS
Table 0-1: Acronyms
WP5 in brief
WP5 will deal with DTs for many types of CH item: paintings, sculptures, historic buildings, archaeological sites, archaeological findings, ranging from very small to very large dimensions. This variety adds complexity, which WP5 will tackle by conceiving the CH DT as the fusion of one main digital content with detailed data/information concerning areas and parts. 
Such data/information could for example specify the constituent materials and their physical properties or identify the precise location of near real-time data streams, coming from sensors. The available digital content could be different for different CH categories, but in all cases the main digital content will be a high-quality 3D model. 
The processing of the main digital content and of data/information to be added needs to be guided by one criterion: a CH DT must be able to faithfully reproduce the specific CH item in the relevant processes in which it is involved. We will therefore consider all processes conservation, preservation, restoration, and fruition.
Document structure and evolution
This document deals with WP5 Requirements, SW design and system design.
This first version (V1), released at M3, concentrates on Requirements.
Since a valid preliminary analysis of (macro) Requirements, expressed as high-level Innovation Goals (IGs) was already carried out when we proposed the Avant Project Portfolio, this updated analysis will revisit, reconsider (especially in the light of the progress in the GSoTA) and detail - where necessary - some relevant (micro) requirements.
Therefore, a structural similarity between this document and the relevant sections in the Project Portfolio must be expected.
Global State of the Art
Several major museums have been making efforts to digitize their collections for years, striving to obtain the best possible digital representations with advancing technology. Some institutions have experimented with extreme image resolutions, while others document historic structures through 3D laser scans. In the last decade, photogrammetry has gained significant interest among innovative cultural heritage (CH) institutions as a method for documenting both the structural and aesthetic aspects of historic sites and buildings. Some institutions have even made high-quality photogrammetric datasets available as open content.
However, these digitization efforts are typically expensive, requiring highly specialized skills for both the acquisition and post-processing of digital content. With accurate datasets and careful processing, detailed digital twins (DTs) of cultural heritage items can be created for virtual exhibitions and online access. Unfortunately, for smaller GLAMs (Galleries, Libraries, Archives, and Museums) or lesser-known sites, these efforts remain prohibitively costly, and they often lack adequate digital content.
Recent years have seen incremental improvements in the quality/cost ratio of digitization tools and procedures. For example, laser scanning sensors are now available on consumer devices like iPhones and iPads at a fraction of the cost of professional equipment from companies like FARO or Leica. Photogrammetry has become more mainstream, thanks to mature software packages like Colmap, an open-source tool offering good performance. Yet, the post-processing required for photogrammetry still demands significant time and expertise.
A crucial consideration for CH DTs is the need to contextualize the item within its physical and cultural surroundings. For instance, a fresco in Pompeii may need to be monitored for preservation, but its cultural significance cannot be fully understood in isolation from the surrounding site. While photogrammetry is effective for modeling individual items, modeling entire scenes and environments is much more complex and expensive.
In this slowly evolving landscape, machine learning (ML) and foundational AI models show potential to transform CH digitization. With ongoing research, these technologies will enable more cost-effective workflows, allowing a broader range of institutions to benefit from DTs for engagement, conservation, and restoration. 
3DGS explicit representation (semitransparent ellipsoids in virtual space whose shape is modelled like a 3D gaussian volume) is good and efficient enough to be useful across a diverse set of DTs, high quality CH DTs, but also in a small implementation near real time DTs meant to improve the spatial awareness in robotics and autonomous systems. 
Recent breakthroughs in radiance field modeling, such as Neural Radiance Fields (NeRFs), initiated progress toward photorealistic 3D content but faced limitations for real-time applications. A more recent advancement, 3D Gaussian Splatting (3DGS) , addresses these limitations, enabling high-quality, real-time rendering of radiance fields at ≥60 fps. This technology is gaining significant attention from the worldwide research community due to its potential to render entire scenes efficiently, making it a promising alternative to traditional photogrammetry. Although 3DGS still requires accurate datasets, its ability to capture the context around CH items at no additional cost could drastically improve cost-effectiveness for CH DT workflows.
Another promising development is the use of foundational AI models like CLIP, DINO and DINOv2 for classification, segmentation, and visual question answering (VQA) in CH datasets. These models - trained on vast amounts of diverse data - generalize across a wide range of tasks without requiring task-specific training, making them highly scalable and cost-effective. 
Foundational models are transformative because they overcome the rigid, task-specific nature of traditional AI and semantic technologies, offering more flexibility, scalability, and efficiency in handling large-scale, unstructured data common in Cultural Heritage. They serve as a foundation (provide the embeddings) for diverse downstream applications, from image classification to segmentation, with no need for task-specific training data. And this fact makes their adoption very cost effective.
For example, CLIP can automatically classify artifacts by period or style, while DINO can segment intricate patterns in artwork for detailed analysis.
While foundational models are becoming commonplace for images, the application of similar models for 3D DTs is still in its early stages. Nonetheless, CH institutions can leverage these models indirectly by applying them to 2D images related to the 3D DTs, enabling tasks like Q&A on related imagery while maintaining structured databases for the DTs themselves.
In summary, advancements in photogrammetry, AI, and 3DGS offer CH institutions new opportunities to create detailed and contextually rich DTs at lower costs, enabling broader accessibility and improving workflows for documentation, conservation, and engagement.
(MACRO) ReQUIREMENTS
In the Project Portfolio we identified four main technological locks that prevent improvements in the CH field. 
the high cost of accurate digital content acquisitions of CH, 
the relevant cost of managing such content along its entire life cycle, 
the obsolescence of investments related to XR fruition, 
the not yet fully demonstrated value for conservation, preservation, and restoration activities.
These locks are still relevant. Each of them still translates 1:1 in a Macro-Requirements (MR) for CH DTS. 
Let’s provide further details. 
MR1: Reducing the cost of digital content acquisitions and postprocessing
Cultural institutions, especially smaller institutions, often operate on tight budgets. Therefore, reducing the cost of digital content acquisitions - and of the related postprocessing - is still the most important macro requirement.
Today advanced LIDAR systems are still very expensive, but for smaller objects and environments Ipad or Iphone based LIDAR scans can offer a low-cost alternative of reasonable quality.
Photogrammetry and more recently radiance fields (3D Gaussian Splatting) can use much less expensive devices. Good full frames digital cameras are adequate, even though tall buildings and larger areas do require (as it is the case also for LIDAR scans) some aerial coverage. Today inexpensive very small drones are almost good enough and safer to operate than their larger counterparts. In fact, by leveraging AI (upscaling) their image capabilities can be raised to a sufficient level. However, their lightweight body needs very careful operation and good weather conditions to provide enough stability for images of sufficient quality.  In many cases, the indirect cost related to obtaining flight permissions, insurance and professional operating skills are much larger than the hardware investment per se.
Aerial operation complication set aside today for many Cultural Heritage use cases photogrammetry (and hence the capture of large digital photo datasets) is the best alternative for CH DT. Laser scans keep an important complementary role especially when extreme metric precision is necessary for engineering related conservation efforts.
As a direct consequence AVANT WP5 will prioritize research efforts on techniques, procedures, workflows and ML models that use photos as their primary input information.
Several major masterpieces have been digitized by using top-class digitization processes, employing expensive equipment and long efforts of skilled professionals. These processes have proven to be too expensive for smaller institutions and less known works of art. Excessive cost is a relevant obstacle to the generalized digitization of European CH.
Therefore, the (Macro)Requirement # 1 still is to reduce these costs while still achieving results of a good quality.
Mastering digitization equipment, digitization practices, workflows and available 3D software are important aspects that will contribute to satisfying this requirement, but the real promise for the future lies in research about specific Machine Learning models able to drastically improve the quality/cost ratio for CH DT.
These models will not need equipment, practices and radically new workflows, but all these aspects will need to be tweaked and adapted to the new workflows.
The new machine learning models will likely benefit from optimized workflow to boost output quality. As an example, 3DGS can substantially benefit from the noise reduction process in the sparse photogrammetric point clouds. Good software (CloudCompare) is already available for this specific processing step but considering the specific needs of the new 3DGS models, more time/effort – in relative terms – should be dedicated to accurate point cloud denoising, improving downstream efficiency and accuracy.
The new models are much more amenable to progressive improvement. As an example, the main point cloud structure of a DT can be obtained even if distracting elements are present in the dataset. As technology progresses and AI enabled masking/correction of such defects becomes available the model can be incrementally retrained to improve its, reducing the need for radical upgrades or replacements.
Therefore, implementing a feedback loop where digitized outputs are regularly reviewed and analyzed can help in continuously refining the processes. Lessons learned from each project can inform future digitization efforts, ensuring ongoing improvement in quality and cost-effectiveness.
By focusing on these strategies, it is possible to make significant strides in reducing the costs associated with digitization while maintaining, or even improving, the quality of the digital representations. This approach not only democratizes access to digitization for smaller institutions but also ensures the preservation of a more extensive range of cultural heritage items for future generations.
MR2: Managing the life cycle 
Once relevant datasets are captured, they need to be efficiently stored, managed, and digitally preserved , an aspect that can incur significant costs. However, dataset lifetime management presents opportunities to optimize these processes. For example, image datasets can be expanded over time by capturing additional photos either to complement the existing data or to document the evolution of cultural heritage (CH) artifacts over time.
Post-processing techniques for images, such as denoising, deblurring, upscaling, or removing distractions and defects, are rapidly advancing. These improvements make it feasible to revisit and enhance datasets at a later stage, increasing the overall quality of the digital models. Additionally, CH datasets are processed to create either photogrammetric models or new machine learning-based models like 3D Gaussian Splatting (3DGS) through workflows that offer many possible variations and choices.
For instance, certain photos may be excluded from the workflow due to distractions (e.g., people or moving objects) or quality issues (such as lens flare). Alternatively, such images could be retained, with problematic areas masked out. Photos can also undergo different levels of denoising or be processed in various tonal ranges. The alignment phase, which forms the foundation of photogrammetric models, can be executed using different software tools like Colmap, Reality Capture, or Agisoft Metashape, each offering more than 20 customizable parameters for controlling the process. While similar, these parameters differ slightly across software, and tuning them properly can improve precision, especially since the alignment is usually carried out in incremental steps.
Given these choices, it is important to recognize that the same dataset can yield multiple versions of a digital twin, with each version showing incremental improvements over time. This highlights the need for effective version control and access management features in dataset management systems.
Moreover, CH artifacts vary greatly in type and scale. We can categorize them as follows:
Large tangible items – sites, buildings, parks, gardens, and architectural landmarks.
Small tangible items – statues, paintings, and archaeological findings.
Semi-tangible items – books, music, movies.
This diversity in artifact types translates to a corresponding diversity in the datasets and content produced. Therefore, cultural institutions require a comprehensive software architecture that supports CH Digital Twin (DT) management throughout their lifecycle. Such an architecture should optimize storage, facilitate digital preservation, versioning, and ensure easy access to different versions. This is the second critical requirement for effective digital preservation and management of CH.
MR3. Reducing the obsolescence of XR related investments
Cultural institutions must offer extended reality (XR) experiences, which are becoming a key factor in staying competitive. XR experiences attract new audiences, enhance learning, and create immersive, emotionally engaging environments. XR may also provide experiences that go beyond real-world constraints, such as time travel, or virtual reconstructions.
The ability to deliver innovative XR experiences should be achieved while 1) Supporting a wide range of XR devices and standards, including VR headsets, AR glasses, haptic gloves. 2) Adopting a versatile and unified XR model that can adapt to various scenarios, content types, and interactions. 3) Simplifying the creation of XR applications for third-party developers by more directly leveraging the CH Digital Twins (DTs).
Investments in XR technology still face significant risks due to the rapid evolution of hardware and standards. Additionally, the life cycle management of digital content remains underdeveloped, resulting in limited content reuse. To address these challenges, we need XR architecture flexible, modular, and open to adapt to the constantly evolving XR landscape. 
In fact, in recent years, investments in XR experiences, including virtual reality (VR), augmented reality (AR), and mixed reality (MR), have gained some traction among innovative cultural institutions worldwide. However, the risk of technological obsolescence looms large, particularly for sophisticated XR experiences. This risk is a pressing concern for CH institutions aiming to use XR for interactive exhibitions and educational purposes.
The fast-paced development of XR hardware - such as new headsets, controllers, and sensors - poses significant challenges. Devices designed for newer hardware may not perform optimally in experiences created for older platforms, requiring reworking. Moreover, new input methods, such as hand or eye tracking, and advanced rendering techniques, like real-time ray tracing, necessitate engine upgrades for compatibility and performance optimization.
To keep up with these changes, leading XR software platforms like Unity and Unreal Engine frequently release updates, introducing new features and optimizations. This often requires upgrading the XR content, which can be time-consuming and resource intensive. Although modular design practices allow individual components to be updated without reworking the entire project, upgrading to the latest version of Unity or Unreal Engine still requires retesting and, in some cases, refining the 3D assets that are part of the experience.
The problem becomes more complex if institutions decide to switch from Unity to Unreal Engine, or vice versa. Currently, a common scenario is transitioning from Unity to Unreal Engine 5.x. Historically, Unity has been more popular due to its permissive licensing policies, but Unreal Engine now holds a significant advantage in terms of graphical performance. Porting content from Unity to Unreal Engine is not just about transferring assets, it often requires rebuilding core systems like scripts, physics, rendering pipelines. This means the effort is closer to a full redevelopment than a simple port .
Even though transitions in the opposite direction - from Unreal to Unity are less common, they would present similar challenges. To mitigate these risks, adopting some cross-platform flexible technology, combined with regular updates and testing, would be extremely helpful. By focusing on technologies and design techniques that reduce the likelihood of obsolescence, institutions can safeguard their investments in XR content and extend the life cycle of their digital assets.
MR4. Experiment DT usefulness for conservation, preservation, and restoration activities
A Cultural Heritage Digital Twin (CH DT) should be far more than just an aesthetically accurate reproduction of reality, even if it achieves extreme visual fidelity. A true CH DT needs to function as a full digital counterpart to the physical object, capturing not only its appearance at a specific point in time but also embedding the necessary data and software to simulate various processes the object might undergo and predict future outcomes. To fully realize this concept, it’s essential to understand:
Conservation processes: These are aimed at maintaining the CH item in its current condition, counteracting known factors of deterioration. Conservation can involve monitoring, cleaning, safeguarding, and documenting the item’s condition and history, ensuring it remains as preserved as possible.
Preservation processes: Focused on preventing future damage, these processes assess potential risks like environmental conditions, biological decay, chemical reactions, or human interaction and aim to mitigate or prevent these threats before they cause harm.
Restoration processes: Intended to bring a CH item back to a state closer to its original form, restoration efforts attempt to reverse aging effects or incidents through reconstruction, enhancements, and other specialized techniques.
A well-developed CH DT has the potential to significantly enhance these processes. For example, it can enable virtual restoration, where digital techniques are used to restore an object’s original appearance without physically altering it. Additionally, CH DTs can be used to run simulations and predictions, allowing conservationists to model various scenarios and their outcomes without risking the object’s physical safety.
However, the Cultural Heritage sector is often slow to adopt new technologies due to the high stakes involved in conservation. New approaches must be rigorously tested and validated, given the potential for unforeseen consequences when dealing with delicate historical artifacts. This conservatism can sometimes delay the introduction of new methods.
Moreover, building CH DTs requires managing complex processes, which necessitate clear, reproducible workflows. This is essential not only for consistency but also so that different staff members can follow the same procedures over time.
There are also significant legal and ethical considerations. Many cultural artifacts are protected by ownership rights, and digitizing these items could raise new copyright and data ownership issues. Beyond that, certain artifacts hold sensitive cultural or religious significance. Digitizing these objects may require obtaining permissions and ensuring that ethical standards are upheld throughout the process.
In terms of restoration work, CH DTs need to offer advanced capabilities, such as the ability to simulate physical restoration techniques, detect surface erosion, or predict material behavior over time. While new generation CH DTs offer great potential for highly detailed and photorealistic reconstructions, especially in large-scale projects or complex environments, there are still numerous hurdles. Many cultural institutions, particularly smaller ones, face challenges such as lack of specialized equipment, technical expertise, and the capacity to manage the large datasets needed for high-quality CH DTs.
Further, adopting CH DTs means integrating these digital workflows into existing conservation and restoration practices. This requires updating protocols, training staff, and adapting digital archives, all of which can present substantial barriers to adoption.
Although CH DTs can achieve remarkable levels of accuracy, they must still be validated for precise conservation tasks, such as detecting micro-cracks or fine surface textures. Conservation professionals may be skeptical in comparison to traditional methods, and some may question whether the digital twins can truly meet the high standards required for their work.
In summary, while CH DTs have great potential for conservation, preservation, and restoration, there is still much work to be done to prove their value. More research and case studies are needed to showcase their tangible benefits and help overcome the skepticism that remains in the cultural heritage sector.
To address these macro requirements, we can confirm that WP5 will pursue four related innovation goals put forward in the project portfolio. 
Their short tabular description in the project portfolio is still relevant.
Table 4-1: WP5 Innovation Goals
Also still adequate appear the project portfolio’s specific objectives and key performance indicators (KPIs). 
Table 4-2: WP5 key performance indicators 

--- Tabella ---
ISSUED BY | Engineering I.I
APPROVED BY | Giuseppe Sajeva
EFFECTIVE DATE | 29/09/2023
VERSION NO. | 1.0
 | 

--- Tabella ---
VERS. | DATE | REASON | CHANGES | AUTHORS | REVIEWERS
1.0 | 29/09/2023 | First Version | n.a. | Luca Bevilacqua | Marco Alessi, Vito Morreale

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
WP# | IG# | Description
5 | IG 5.1 | Improve the quality/cost ratio for digitization processes, to make CH institutions able to afford CH DTs. Achieving this goal will make CH DTs a fully practical choice also for smaller CH institutions and/or less famous CH items.
5 | IG 5.2 | Realize a complete SW architecture to effectively manage CH DTs life cycle, for a large variety of CH categories. Achieving this goal will significantly lower the IT cost of adopting and evolving CH DTs.
5 | IG 5.3 | Leverage CH DTs effectiveness for fruition processes. Achieving this goal will increase the appeal of fruition experiences while fostering digital asset reuse and reducing obsolescence.
5 | IG 5.4 | Experiment CH DTs adoption for conservation, preservation, and restoration processes.

--- Tabella ---
Obj. # | Description | IG | KPI(s)
OB5.1.a | Select equipment, study best practices, and define convergent (combing different techniques) workflows to get digital content at the best performance/cost ratio. | 5.1 | > 20 equipment evaluated. 
> 8 equipment selected. 
> 5 best practices adopted. 
> 2 workflows defined.
OB5.1.b | Design and fine-tune ML models to improve the performance/cost ratio of digital acquisitions. | 5.1 | > 3 ML models.
OB5.2 | Realize a unified SW architecture to define, manage and deliver CH DTs. | 5.2 | Support full DT life cycle for > 7 CH classes.
OB5.3 | Enable CH DTs adoption for XR fruition experiences, and use the cloud/edge continuum, with downstream or upstream links, to optimize persistent XR fruition experiences. | 5.3 | > 2 (persistent) experience formats on >3 most recent XR devices.
OB5.4 | Enable CH DTs adoption for conservation, preservation, and restoration processes. Deliver a working platform for CH. | 5.4 | > 3 ML models for use in such processes (physical or digital).