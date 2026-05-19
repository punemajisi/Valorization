# MCI-Games Hub: Content, Design, and Guided Tour

## 1. App Content
The **MCI-Games Hub** is an interactive web-based dashboard dedicated to the mapping and evaluation of serious games for Mild Cognitive Impairment (MCI) assessment and rehabilitation. The platform comprehensively catalogs specific "gameful artefacts," organizing related research data and metadata to assist researchers, healthcare professionals, and designers.

Key content features include:
- **Game Database**: A detailed repository of serious games and digital interventions (e.g., *VR Spatial Navigation*, *Episodix*, *Kitchen and Cooking*, *RehabCity*). Each entry contains information regarding interaction modalities, game design elements, targeted cognitive domains, and healthcare objectives.
- **Reference Management**: A curated list of academic literature and studies structured from the core research bibliography, establishing the scientific foundation of the mapped games.

## 2. App Design
The design of the MCI-Games Hub follows a modern, accessible, and user-centric approach tailored to both clinical researchers and developers.
- **Visual Design**: The interface leverages a clean, intuitive aesthetic utilizing the "Inter" typography and a cohesive color palette (slate backgrounds with professional blue accents). It ensures high readability, which is critical when displaying dense academic and clinical data.
- **Architecture**: Developed utilizing the modern React framework (Next.js), it employs robust component-based architecture and responsive design, ensuring smooth interaction and optimal performance across various devices. 
- **Layout & Navigation**: A persistent, sticky top navigation bar provides immediate global access to all core sections. The use of clear iconography and active-state highlighting prevents user disorientation and minimizes cognitive load while browsing the database.

## 3. Guided Tour

Here is a step-by-step walkthrough of the application's key areas:

### Step 1: The Landing Experience (Home)
- **Path**: `/`
- **Description**: Upon entering the site, users are greeted by the Dashboard Home space. This landing area introduces the core purpose of the MCI-Games Hub. It dynamically presents a high-level overview and highlights an initial set of serious games extracted from the dataset, serving as the primary springboard for deeper exploration.

### Step 2: Exploring the Database (Gameful Artefacts)
- **Path**: `/artefacts`
- **Description**: This section constitutes the core of the application. Here, users can browse the complete gallery of evaluated serious games ("Gameful Artefacts"). The interface allows users to discover tools and evaluate them based on their specific clinical requirements, interaction modalities, and formal game design traits.

### Step 3: Academic Foundations (References)
- **Path**: `/references`
- **Description**: To ensure scientific rigor and validity, the references section lists the academic papers, empirical studies, and reviews underpinning the platform. It links the gameful artefacts back to peer-reviewed evidence regarding MCI assessment and gamified intervention, providing researchers with the necessary context and citations.

### Step 4: Getting in Touch (Contact)
- **Path**: `/contact`
- **Description**: The final section of the tour facilitates networking and collaboration. It provides users—whether they are developers wishing to submit new games to the hub, or clinical researchers seeking to collaborate on data—with a direct, structured line of communication to the project's maintainers.

This structured navigation and robust data presentation ensure that the MCI-Games Hub serves not only as a functional database, but as a critical translational resource advancing the intersection of game design and cognitive healthcare.
