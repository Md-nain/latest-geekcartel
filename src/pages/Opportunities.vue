<template>
    <div class="page opportunity-page pb-2 pb-md-0 pt-4">
        <section class="section mt-2 mt-md-0 pt-lg-2">
            <div class="section-content">
                <div class="container">
                    <div class="section-title-description text-center">
                        <div class="section-title text-uppercase">
                            <h2>Opportunities</h2>
                        </div>
                    </div>
                    
                    <div class="oppertunities-block d-flex flex-wrap desktop-version">
                        <div class="left-listing-block">
                            <div class="block-content">
                                <!-- Opportunity Items -->
                                <div
                                v-for="(opportunity, index) in opportunities"
                                :key="index"
                                class="opportunity-item"
                                @click="updateDetails(opportunity)"
                                :class="{ active: selectedOpportunity && selectedOpportunity.id === opportunity.id }"
                                >
                                    <div class="item-content">
                                        <!-- Render opportunity details here -->
                                        <div class="company-logo">
                                            <div class="figure">
                                                <img :src="opportunity.logo" :alt="opportunity.title + ' Logo'">
                                                <div class="caption">
                                                    <span>{{opportunity.logocaption}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="title-content">
                                            <h3>{{ opportunity.title }}</h3>
                                            <div class="company">
                                                <span>Company: {{ opportunity.company }}</span>
                                            </div>
                                        </div>
                                        <div class="tags">
                                            <ul>
                                                <li v-for="(tag, index) in opportunity.tags" :key="index">
                                                    <a href="javascript:void(0)">{{ tag }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-detail-block" :class="{ 'sticky-detail': isSticky }">
                            <div class="block-content">
                                <!-- Display selected opportunity details -->
                                <div class="top-title-area">
                                    <div class="title-info">
                                        <h3>{{ selectedOpportunity ? selectedOpportunity.title : opportunities[0].title }}</h3>
                                        <div class="company">
                                            <span>Company: {{ selectedOpportunity ? selectedOpportunity.company : opportunities[0].company }}</span>
                                        </div>
                                        <div class="desination-scope">
                                            <span>{{ selectedOpportunity ? selectedOpportunity.designation : opportunities[0].designation }}</span>
                                            <span>{{
    selectedOpportunity
      ? (selectedOpportunity.fullTime === null
          ? 'Full-Time or Part-Time,'
          : (selectedOpportunity.fullTime === ''
              ? ''
              : (selectedOpportunity.fullTime ? 'Full-Time,' : 'Part-Time,')))
      : (opportunities[0].fullTime === null
          ? 'Full-Time or Part-Time,'
          : (opportunities[0].fullTime === ''
              ? ''
              : (opportunities[0].fullTime ? 'Full-Time,' : 'Part-Time,')))
  }} {{ selectedOpportunity ? selectedOpportunity.location : opportunities[0].location }}</span>
                                        </div>
                                    </div>
                                    <div class="cta-info">
                                        <span v-if="selectedOpportunity || opportunities[0]">Apply at</span>
                                        <a v-if="selectedOpportunity || opportunities[0]" :href="'mailto:' + (selectedOpportunity ? selectedOpportunity.email : opportunities[0].email)">{{ selectedOpportunity ? selectedOpportunity.email : opportunities[0].email }}</a>
                                    </div>
                                </div>
                                <div class="detail-content">
                                <!-- Render detailed description here -->
                                <div class="content" v-html="selectedOpportunity ? selectedOpportunity.description : opportunities[0].description"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="oppertunities-block d-flex flex-wrap mobile-version">
                        <div class="block-content">
                            
                            <div class="opportunity-item" v-for="(opportunity, index) in opportunities" :key="index"
                            @click="toggleDetail(index)" :class="{ active: selectedOpportunityIndex === index }"
                            >
                                <div class="item-content">
                                    <div class="company-logo">
                                    <div class="figure">
                                        <img :src="opportunity.logo" />
                                        <div class="caption">
                                        <span>{{ opportunity.logocaption }}</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="title-content">
                                    <h3>{{ opportunity.title }}</h3>
                                    <div class="company">
                                        <span>Company: {{ opportunity.company }}</span>
                                    </div>
                                    </div>
                                    <div class="tags">
                                        <ul>
                                            <li v-for="(tag, tagIndex) in opportunity.tags" :key="tagIndex">
                                            <a href="javascript:void(0)">{{ tag }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="toggled-content" v-show="selectedOpportunityIndex === index">
                                    <div class="top-title-area">
                                        <div class="cta-info">
                                            <span>Apply at</span>
                                            <a :href="'mailto:' + opportunity.email">{{ opportunity.email }}</a>
                                        </div>
                                    </div>
                                    <div class="detail-content">
                                        <div class="content" v-html="opportunity.description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import naviLogo from "@/static/images/opportunities/navi-logo.webp";
import solvLogo from "@/static/images/opportunities/solv-logo.webp";

export default {
  data() {
    return {
      opportunities: [
        
        { 
          id: 1,
          title: "Smart Contract Engineer", 
          company: "Navi", 
          logo: naviLogo,
          logocaption: "Navi",
          tags: ["Engineer", "Remote"],
          designation: "Engineer",
          fullTime: '',
          location: "Remote",
          email: "team@naviprotocol.io",
          description: `
          <h4>About NAVI Protocol:</h4>
            <p>
                NAVI Protocol is the most trusted DeFi infrastructure on #Sui with the leading Lending + LSDeFi platforms. Co-led by OKX Ventures, Hashed, and Dao5. NAVI Protocol has 200m TVL and 800k users since its launch 10 months ago.
            </p>
            <h4>Position Overview:</h4>
            <p>
                We are seeking an experienced Smart Contract Engineer with a deep understanding of blockchain technology and smart contract development. The ideal candidate will possess extensive experience in smart contract coding, with proficiency in Solidity and Move being highly advantageous. You will play a pivotal role in developing secure and efficient smart contracts to enhance our DeFi offerings and ensure the integrity of our platform.    
            </p>
            <h4>Key Responsibilities:</h4>
            <ul>
                <li>Design, develop, and test smart contracts for various DeFi applications, ensuring they are efficient, secure, and optimized for high performance.</li>
                <li>Collaborate with the development team to integrate smart contracts with existing blockchain infrastructure and front-end applications.</li>
                <li>Conduct thorough testing and audits of smart contracts to identify and rectify potential security vulnerabilities.</li>
                <li>Participate in code reviews and provide technical guidance to enhance the quality and security of our codebase.</li>
                <li>Stay updated with the latest in blockchain technology, smart contract security practices, and DeFi trends to incorporate cutting-edge solutions into our platform.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>Strong experience in smart contract development, with prior knowledge of Solidity and Move being a plus.</li>
                <li>A robust understanding of crypto, Web3 technologies, DeFi platforms, and smart contract security principles.</li>
                <li>Proficient in English with excellent communication skills to effectively articulate technical concepts and collaborate with global teams.</li>
                <li>Demonstrated coding skills with a focus on writing clean, efficient, and secure code.</li>
                <li>A proactive problem-solver with a keen attention to detail and a passion for innovation in the blockchain and DeFi space.</li>
            </ul>
            <p>Please send your resume to <a href="mailto:team@naviprotocol.io">team@naviprotocol.io</a></p>  
          `
        },
        { 
          id: 2,
          title: "Head of Business and Operations, Asia", 
          company: "Navi", 
          logo: naviLogo,
          logocaption: 'Navi',
          tags: ["Director", "Remote"],
          designation: "Director",
          fullTime: '',
          location: "Remote",
          email: "team@naviprotocol.io",
          description: `
            <h4>About NAVI Protocol:</h4>
            <p>
                NAVI Protocol is the most trusted DeFi infrastructure on #Sui with the leading Lending + LSDeFi platforms. Co-led by OKX Ventures, Hashed, and Dao5. NAVI Protocol has 200m TVL and 800k users since its launch 10 months ago.
            </p>
            <h4>Position Overview:</h4>
            <p>
                We are seeking a dynamic and experienced Head of Business and Operations, Asia to join our team. This role is pivotal in exploring new business development partnerships, managing relationships with investors and partners across Asia, and spearheading community building efforts. The successful candidate will play a key role in representing NAVI Protocol at conferences and events throughout Asia, driving growth and expanding our presence in the region.
            </p>
            <h4>Key Responsibilities:</h4>
            <ul>
                <li>Identify and pursue new business development opportunities across Asia to expand NAVI Protocol's presence.</li>
                <li>Manage and nurture relationships with existing investors and partners in the Asian market.</li>
                <li>Develop and implement strategies for community engagement and KOL partnership building in Asia.</li>
                <li>Represent NAVI Protocol at major conferences and industry events in Asia, showcasing our achievements and future plans.</li>
                <li>Collaborate with global teams to ensure alignment with NAVI Protocol's mission and objectives.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>Fluent in English; proficiency in Chinese, Korean or Japanese is a significant plus.</li>
                <li>At least 3 years of work experience in the crypto industry, with a solid understanding of DeFi trends and challenges.</li>
                <li> Strong networking and relationship-building skills, with a proven track record in business development and partner management.</li>
                <li>Ability to work independently in a remote setting, with excellent communication and organizational skills.</li>
                <li>Passionate about cryptocurrency, DeFi, and the potential of blockchain technology.</li>
            </ul>
            <p>Please send your resume to <a href="mailto:team@naviprotocol.io">team@naviprotocol.io</a></p>
            `
        },
        { 
          id: 3,
          title: "Senior UI/UX Designer", 
          company: "Navi", 
          logo: naviLogo,
          logocaption: "Navi",
          tags: ["Designer", "Remote"],
          designation: "Designer",
          fullTime: '',
          location: "Remote",
          email: "team@naviprotocol.io",
          description: `
            <h4>About NAVI Protocol:</h4>
            <p>
                NAVI Protocol is the most trusted DeFi infrastructure on #Sui with the leading Lending + LSDeFi platforms. Co-led by OKX Ventures, Hashed, and Dao5. NAVI Protocol has 200m TVL and 800k users since its launch 10 months ago.
            </p>
            <h4>Position Overview:</h4>
            <p>
                We are looking for a creative and talented UI/UX Designer to join our team. This role focuses on designing intuitive and engaging web3 products using Figma, as well as creating compelling graphic content for our Twitter and website. The ideal candidate will have a passion for design and a keen eye for detail, ensuring that NAVI Protocol's digital presence is visually stunning and user-friendly.  
            </p>
            <h4>Key Responsibilities:</h4>
            <ul>
                <li>Design and iterate on UI/UX for our web3 products, ensuring a seamless and user-friendly experience.</li>
                <li>Create graphic content for marketing purposes, including visuals for our website and social media channels.</li>
                <li>Work closely with the product and marketing teams to align designs with NAVI Protocol's branding and user engagement goals.</li>
                <li>Conduct user research and usability testing to gather insights and feedback, using this data to inform design decisions.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>Proficient in Figma and other design tools.</li>
                <li>Experience in designing for web3, cryptocurrency, or blockchain products is highly desirable.</li>
                <li>Ability to create visually appealing graphic content for digital platforms.</li>
                <li>Strong portfolio showcasing your design skills and creativity.</li>
                <li>Excellent communication skills and the ability to work effectively in a remote team environment.</li>
                <li>Passion for cryptocurrency, DeFi, and the transformative potential of blockchain technology.</li>
            </ul>
            <p>Please send your resume to <a href="mailto:team@naviprotocol.io">team@naviprotocol.io</a></p>    
          `
        },
        { 
          id: 4,
          title: "Product Manager", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["Singapore", "HK", "Remote"],
          designation: "Manager",
          fullTime: '',
          location: "Remote or On-Site",
          email: "hr@solv.finance",
          description: `
            <h4>Responsibilities:</h4>
            <ul>
                <li>Collaborate on and execute the product roadmap to ensure it aligns with the overall strategic vision.</li>
                <li>Work closely with teams to prioritize and oversee the development of product features, ensuring quality and timely delivery.</li>
                <li>Conduct market research to identify trends, analyze competition, and understand user needs, providing valuable insights for product strategy.</li>
                <li>Partner with UX/UI designers to improve the user experience, incorporating feedback and best practices into design decisions.</li>
                <li>Implement KPIs to monitor product performance, make data-driven decisions, and continuously improve the product based on user engagement and feedback.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>1+ years of centralized exchange core product experience such as trading system and data visualization; DEX product experience is a plus.</li>
                <li>Strong DeFi knowledge, especially in platforms like Uniswap.</li>
                <li>Technical background a plus.</li>
                <li>Proficient in Agile development.</li>
                <li>Self-motivated, excellent teamwork and communication skills.</li>
            </ul>
            <p>Reach out to us at <a href="mailto:hr@solv.finance">hr@solv.finance</a> with your resume and any relevant socials and files. </p>    
          `
        },
        { 
          id: 5,
          title: "Business Development Manager", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["Singapore", "APAC"],
          designation: "Manager",
          fullTime: '',
          location: "Remote or On-site",
          email: "hr@solv.finance",
          description: `
            <h4>What we're looking for:</h4>
            <p>We are seeking a self-motivated and results-driven BD Manager to join our team at Solv Protocol. Your primary role will be to introduce Solv and establish connections with potential clients.</p>
            <h4>Responsibilities:</h4>
            <ul>
                <li>Actively promote and introduce Solv to potential clients.</li>
                <li>Conduct outreach initiatives through various channels to generate leads.</li>
                <li>Build and maintain strong relationships with existing and potential clients.</li>
                <li>Stay up to date of a deep understanding of Solv and its products’ unique features, benefits, and value proposition and to effectively communicate their advantages to potential clients.</li>
                <li>Work closely with the marketing team to align sales strategies with promotional campaigns and optimize lead generation efforts.</li>
                <li>Provide valuable feedback from potential clients to the product development team, contributing to the continuous improvement of our offerings.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>Self-starter and driven individual who can work independently and also a team player.</li>
                <li>Familiar with DeFi ecosystem and passion for blockchain development in general.</li>
                <li>Excellent interpersonal and networking skills, with the ability to build rapport and maintain relationships with various stakeholders.</li>
                <li>Chinese and English speaker and is capable of effectively communicating with international clients and investors. </li>
                <li>Capacity to thrive in a fast-paced environment and adapt quickly to changes and new challenges.</li>
            </ul>  
            <p>Reach out to us at <a href="mailto:hr@solv.finance">hr@solv.finance</a> with your resume and any relevant socials and files. </p>    
          `
        },
        { 
          id: 6,
          title: "Solv US Ambassador", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["San Francisco"],
          designation: "Ambassador",
          fullTime: null,
          location: "San Francisco",
          email: "hr@solv.finance",
          description: `
            <h4>What we're looking for:</h4>
            <p>We're searching for a self-motivated individual to be our face in San Francisco. Your role will include attending local tech events, introducing Solv, and getting leads for potential clients.</p>
            <h4>Responsibilities:</h4>
            <ul>
                <li><strong>Event Presence:</strong> Attend local blockchain and business events, Present Solv and its products to event attendees, highlighting our value.</li>
                <li><strong>Lead Generation:</strong> Identify potential clients and maintain contact for follow-up.</li>
                <li><strong>Market Awareness:</strong> Stay updated on DeFi trends, competitors, and opportunities.</li>
                <li><strong>Networking:</strong> Build relationships within local blockchain community and work independently to meet and exceed lead generation targets.</li>
            </ul>
            <h4>Qualifications:</h4>
            <ul>
                <li>Strong communication skills.</li>
                <li>DeFi user and strong interest in blockchain&tech.</li>
                <li>Self-motivated, flexible and independent individual.</li>
                <li>Good at networking and negotiation.</li>
            </ul>  
            <h4>Why Solv:</h4>
            <ul>
                <li>Join a dynamic team at the forefront of blockchain technology.</li>
                <li>Competitive compensation and growth opportunities.</li>
                <li>Be part of an innovative team</li>
            </ul>
            <h4>Application Process:</h4>
            <p>Send your resume and other materials outlining your qualifications and motivation to <a href="mailto:hr@solv.finance">hr@solv.finance</a> </p>    
          `
        },
        { 
          id: 7,
          title: "Frontend Engineer", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["APAC", "Remote"],
          designation: "Engineer",
          fullTime: null,
          location: "Remote",
          email: "hr@solv.finance",
          description: `
            <h4>About the Role:</h4>
            <p>We hope to provide users with a more professional, smooth and artistic product interactive experience, so we are looking for an outstanding Frontend Engineer to join us and help us achieve this goal together. The ideal candidate is someone who is willing to take the extra mile and strives for excellence. You will be working closely with the product team and design team, and act as a key role in building Solv's professional SFT trading market.</p>
            <h4>Responsibilities:</h4>
            <ul>
                <li>Responsible for the design, development and optimization of Solv's DApp system and front-end</li>
                <li>Work with the front-end team to complete daily work arrangements and ensure product quality and development progress</li>
                <li>Coordinate with product manager to brainstorm and design process for interactions between functional interface and the backend</li>
                <li>Communicate with the product team and provide insights to improve user experience</li>
                <li>Continuously improve Solv's technical structure, codes, functionalities and put user experience as top priority</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>5+ years of web/mobile front-end work experience, 3+ years developing DeFi projects</li>
                <li>Proficient in using Graphql and Next Framework</li>
                <li>Able to use mainstream frontend tools such as ReactJS and Vue. Expert in HTML/CSS/ES/TS</li>
                <li>Practical experience and understanding of front-end performance optimization. Able to handle common problems such as static resource caching, WEB front-end architecture construction, etc.</li>
                <li>Good communication and management skills. Able to coordinate the team to complete tasks; have a good sense of user interaction and product design</li>
                <li>Have practical experience in NodeJs is preferable</li>
                <li>Must be able to communicate in Mandarin, English level reaches communication level</li>
            </ul>  
            <h4>How to Apply:</h4>
            <p>We’d love to see your application and have a coffee-chat with you (in the cyber world or irl) even if you don’t fully meet the requirements listed above.</p>
            
            <p>Reach out to us at <a href="mailto:hr@solv.finance">hr@solv.finance</a> with your resume and any relevant socials and files. </p>    
          `
        },
        { 
          id: 8,
          title: "DeFi Backend Engineer", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["APAC"],
          designation: "Engineer",
          fullTime: '',
          location: "Remote or On-site, Singapore, APAC",
          email: "hr@solv.finance",
          description: `
            <h4>Responsibilities:</h4>
            <ul>
                <li>Create, construct, and sustain scalable and secure web services and distributed systems.</li>
                <li>Engineer and implement robust solutions for trade negotiation and execution, real-time market data, authentication, and security.</li>
                <li>Help to incorporate with existing infrastructure, test coverage, and documentation.</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
                <li>5+ years of backend engineering experience, ideally building products from ideation to launch with a strong engineering team</li>
                <li>Experience monitoring and scaling microservice-oriented systems</li>
                <li>Effective communication across the teams</li>
                <li>Familiarity with Ethereum, Solidity and Ethers.js</li>
                <li>Familiarity with mainstream defi protocols compound, uniswap, gmx etc.</li>
                <li>Working knowledge of NodeJS, Rust or Golang is preferred</li>
                <li>Working knowledge of NodeJS, Rust or Golang is preferred</li>    
            </ul>  
            <h4>How to Apply:</h4>
            <p>Reach out to us at <a href="mailto:hr@solv.finance">hr@solv.finance</a> with your resume and any relevant socials and files. </p>    
          `
        },
        { 
          id: 9,
          title: "Graphic Designer", 
          company: "Solv", 
          logo: solvLogo,
          logocaption: "Solv",
          tags: ["Remote"],
          designation: "Designer",
          fullTime: null,
          location: "Remote",
          email: "hr@solv.finance",
          description: `
            <h4>Job Overview:</h4>
            <p>Solv Protocol is seeking an experienced Graphic Designer responsible for creating captivating brand visuals and marketing materials, effectively communicating the company's unique concepts and values across various media channels.</p>
            <h4>Responsibilities:</h4>
            <ul>
                <li><strong>Brand Design:</strong> Develop and maintain the Solv Protocol brand identity, ensuring consistency and professionalism.</li>
                <li><strong>Advertising and Collateral:</strong> Design advertisements, brochures, posters, etc., supporting Solv Protocol's marketing initiatives.</li>
                <li><strong>Digital Media Design:</strong> Create social media graphics, online ads, and other digital media assets.</li>
                <li><strong>Collaboration and Communication:</strong> Work collaboratively with the marketing team, understanding requirements and providing creative solutions.</li>
                <li><strong>Collaboration and Communication:</strong> Work collaboratively with the marketing team, understanding requirements and providing creative solutions.</li>
            
            </ul>
            <h4>Qualifications:</h4>
            <ul>
                <li>Bachelor's degree or equivalent professional experience in graphic design or a related field.</li>
                <li>Over 2 years of graphic design experience with a successful track record in brand design and marketing, , previous working experience in DeFi projects are preferred.</li>
                <li>Creative thinking and artistic skills, transforming concepts into visually compelling designs.</li>
                <li>Excellent communication skills, teamwork, and understanding of marketing needs.</li>
                <li>Strong time management and project management skills.</li>
            </ul>  
            <h4>How to Apply:</h4>
            <p>Reach out to us at <a href="mailto:hr@solv.finance">hr@solv.finance</a> with your resume and any relevant socials and files. </p>    
          `
        },
        
        // Add more opportunities as needed
      ],
      selectedOpportunity: null,
      isSticky: false ,
      selectedOpportunityIndex: null
    };
  },
  mounted() {
    // Set the first opportunity item as the initial selected opportunity
    this.selectedOpportunity = this.opportunities[0];
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // Remove scroll event listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleDetail(index) {
      // Toggle detailed content for the clicked opportunity item
      this.selectedOpportunityIndex = this.selectedOpportunityIndex === index ? null : index;
    },
    updateDetails(opportunity) {
      // Update selectedOpportunity only if it's different from the currently selected one
      if (this.selectedOpportunity && this.selectedOpportunity.id !== opportunity.id) {
        this.selectedOpportunity = { ...opportunity };
      } else {
        this.selectedOpportunity = opportunity;
      }
    },
    isActive(opportunity) {
      return this.selectedOpportunity && this.selectedOpportunity.id === opportunity.id;
    },
    handleScroll() {
      // Calculate the position of the header or top of the page
      const headerOffset = document.querySelector('.header').offsetHeight;
      
      // Determine if the top of the right-detail-block reaches the header
      if (window.scrollY >= headerOffset) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>

    .oppertunities-block {
        padding: 0.8rem 0 0;
        margin: 0 auto;
        max-width: 13.4rem;

        .left-listing-block{
            width: 40%;
            @media(max-width: 767px){
                width: 100%;
            }
        }
        .right-detail-block{
            width: 60%;
            // margin-bottom: 0.5rem;
            .detail-content{
                padding: 0.4rem 0.03rem 0.4rem 0.4rem;
                border-right: 1px solid #8e8e8e;
                border-bottom: 1px solid #8e8e8e;
                font-size: 0.18rem;
                p{
                    margin-bottom: 0.2rem;
                }
                .content{
                    height: calc(100vh - 3.8rem);
                    padding-right: 0.5rem;
                    overflow-y: auto;
                    &::-webkit-scrollbar {
                        width: 8px;
                    }
                    &::-webkit-scrollbar-track {
                        box-shadow: inset 0 0 2px 2px #6a6a6a; 
                        border-radius: 6px;
                        background: rgba(0,0,0,0.1);
                    }
                    &::-webkit-scrollbar-thumb {
                        background: #6a6a6a; 
                        border-radius: 6px;
                    }
                    &::-webkit-scrollbar-thumb:hover {
                        background: var(--green-color); 
                    }
                }
            }
            p{
                strong{
                    color: var(--green-color);
                }
            }
            &.sticky-detail {
                .block-content{
                    position: sticky;
                    top: 0.925rem; 
                }
            }
            @media(max-width: 767px){
                display: none;
            }
        }
        .top-title-area{
            padding: 0.25rem 0.4rem;
            border-top: 1px solid #8e8e8e;
            border-right: 1px solid #8e8e8e;
            border-bottom: 1px solid #8e8e8e;
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            .title-info{
                // padding-right: 0.15rem;
                .company{
                    padding-bottom: 0.24rem;
                }
                .desination-scope{
                    color: #6a6a6a;
                    span{
                        display: block;
                    }
                }
            }
            .cta-info{
                text-align: right;
                padding-bottom: 0.1rem;
                position: absolute;
                right: 0.4rem;
                bottom: 0.22rem;
                max-width: 42%;
                @media(max-width: 767px){
                    text-align: left;
                    max-width: 100%;
                    position: static;
                }
                span{
                    display: block;
                    padding-bottom: 0.1rem
                }
                a{
                    text-decoration: none;
                }
            }
        }
        h3{
            font-family: var(--roboto-font);
            margin: 0.1rem 0 0.03rem;
            line-height: 1.1;
            color: var(--green-color);
        }
        h4{
            font-family: var(--roboto-font);
            color: var(--green-color);
            margin-bottom: 0.1rem;
        }
        @media(max-width: 1099px){
            max-width: 15rem;
            p{
                font-size: 0.18rem;
            }
        }
        @media(max-width: 767px){
            .block-content{
                padding-left: 5px;
            }
        }
    }
    .opportunity-item {
        border: 1px solid #8e8e8e;
        border-top: 1px solid rgba(0,0,0,0);
        &:first-of-type{
            border: 1px solid #8e8e8e;
        }
        @media(max-width: 767px){
            padding-left: 0px;
        }
        
        &:first-of-type{
            border-top: 1px solid #8e8e8e;
        }
        .item-content {
            padding: 0.24rem 0.2rem 0.24rem 1.15rem;
            position: relative;
            align-items: center;
            @media(max-width: 767px){
                padding: 7px 10px 7px 80px;
            }
            @media(max-width: 480px){
                padding: 5px 5px 5px 70px;
            }
        }
        .title-content{
            padding-bottom: 0.4rem;
            color: #6a6a6a;
            @media(max-width: 767px){
                padding-bottom: 15px;
            }
            @media(max-width: 480px){
                padding-bottom: 12px;
                h3{
                    font-size: 19px;
                }
            }
            @media(max-width: 400px){
                h3{
                    font-size: 17px;
                }
            }
        }
        h3{
            color: #6a6a6a;
        }
        .company-logo{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -0.3rem;
            background: var(--black-color);
            @media(max-width: 767px){
                left: -15px;
            }
           .figure{
                width: 1.2rem;
                height: 1.3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #8e8e8e;
                padding: 0.1rem;
                flex-direction: column;
                img{
                    max-width: 100%;
                    height: auto;
                    filter: brightness(0.5) saturate(0);
                    padding: 0.05rem 0.10rem 0;
                }
                .caption{
                    font-size: 0.13rem;
                    padding-top: 0.03rem;
                    color: #6a6a6a;
                }
           }
        }
        &.active{
            border-color: #5adf30;
            // box-shadow: 0 0 0 1px #5adf30;
            border-top: 1px solid #5adf30;
            h3{
                color: var(--green-color);
            }
            .title-content{
                color: var(--white-color);
            }
            .company-logo{
                .figure{
                    img{
                        filter: brightness(0) invert(1);
                    }
                    border-color: #5adf30;
                }
            }
        }
        .tags{
            ul{
                display: flex;
                align-items: center;
                list-style: none;
            }
            li{
                
                // width: 33.3%;
                text-align: center;
                color: #6a6a6a;
                padding: 0 0.05rem;
                font-size: 0.16rem;
                a{
                    color: #6a6a6a;
                    border: 1px solid #6a6a6a;
                    padding: 0.05rem 0.15rem;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                    text-decoration: none;
                }
                @media(max-width: 767px){
                    width: auto;
                    font-size: 16px;
                }
                @media(max-width: 480px){
                    font-size: 12px;
                    a{
                        padding: 3px 5px;
                    }
                }
            }
        }
        
    }

    .oppertunities-block{
        &.mobile-version{
            display: none !important;
        }
        @media(max-width: 767px){
            padding-top: 30px;
            &.desktop-version{
                display: none !important;
            }
            &.mobile-version{
                display: block !important;
                .opportunity-item{
                    margin-block: 20px;
                    border-top: 1px solid #8e8e8e;
                    &.active{
                        border-color: #5adf30;
                    }
                }
                .toggled-content{
                    .top-title-area{
                        padding-bottom: 0;
                        border: 0;
                    }
                    .detail-content{
                        padding: 5px 10px;
                        .content{
                            max-height: 280px;
                            overflow-y: auto;
                            padding: 5px 15px 10px 10px;
                            p{
                                font-size: 16px;
                            }
                        }
                        
                    }
                }
            }
            .top-title-area{
                justify-content: flex-start;
            }
        }
        @media(max-width: 480px){
            padding-top: 20px;
        }
    }
</style>