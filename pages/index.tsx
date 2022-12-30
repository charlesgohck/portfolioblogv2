import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import FadeInSection from '../components/FadeInSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Charles Goh (伍长康)</title>
                <meta name="description" content="Charles Goh (伍长康) Site" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <FadeInSection>
                    <section className='sectionelement'>
                        <Image src={'/assets/CharlesInSuitSquare.jpg'} alt={'Charles Goh (伍长康) In A Suit'} width={300} height={300} className="sectionsubelement" style={{ borderRadius: "50%" }} priority />
                        <div className='sectionsubelement'>
                            <h1>I am Charles Goh (伍长康).</h1>
                            <br />
                            <p>I am an&nbsp;
                                <span className="elementfadeinleft"><strong>engineer </strong></span>
                                <span className="elementfadeinleft" style={{ animationDuration: "4s" }}><strong>and problem solver.</strong></span>
                            </p>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='sectionelement'>
                        <i className="sectionsubelement fa-solid fa-briefcase fa-10x" />
                        <div className='sectionsubelement'>
                            <div>
                                <h1>Experience</h1>
                                <br />
                                <h2><i className="fa-solid fa-spinner" />&nbsp;&nbsp;May 2019 - Present</h2>
                                <p><strong>Intern to Senior Software Engineer</strong></p>
                                <p>Visa Worldwide @ Singapore</p>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='sectionelement'>
                        <i className="sectionsubelement fa-solid fa-graduation-cap fa-10x" />
                        <div className='sectionsubelement'>
                            <h1>Education</h1>
                            <br />
                            <div>
                                <div>
                                    <h2><i className="fa-solid fa-spinner" />&nbsp;&nbsp;January 2022 - Present</h2>
                                    <p><strong>Master of Science in Computer Science</strong></p>
                                    <p>Georgia Institute of Technology, USA</p>
                                </div>
                                <br/>
                                <div>
                                    <h2><i className="fa-solid fa-check" />&nbsp;&nbsp;May 2019 - Present</h2>
                                    <p><strong>Bachelor of Computing (Distinction Honours) in Computer Science</strong></p>
                                    <p><strong>Minor in Management</strong></p>
                                    <p>National University of Singapore, Singapore</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='sectionelement'>
                        <i className="sectionsubelement fa-solid fa-laptop-code fa-10x" />
                        <div className='sectionsubelement'>
                            <h1>Technical Skills</h1>
                            <br />
                            <div>
                                <div>
                                    <h3><i className='fa-solid fa-code' />&nbsp;&nbsp;Programming & Markup Languages</h3>
                                    <p>Python, Javscript, Java, C#, HTML + CSS, Markdown</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-atom' />&nbsp;&nbsp;Full-Stack Development Technologies</h3>
                                    <p>ReactJS, Angular, Spring/Springboot, jQuery, .NET Framework, REST APIs</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-database' />&nbsp;&nbsp;Databases</h3>
                                    <p>SQL, NoSQL</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-shield-halved' />&nbsp;&nbsp;Software Security</h3>
                                    <p>Checkmarx, Blackduck, SAML2 Auth, OAuth, Enterprise B2E Security Libraries</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-code' />&nbsp;&nbsp;Software & IT Service Management</h3>
                                    <p>Github/Bitbucket (Git), Jira, Confluence, ServiceNow</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-code-pull-request' />&nbsp;&nbsp;User Interface Design</h3>
                                    <p>Sketch, Adobe XD, Balsamiq</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-cloud-arrow-up' />&nbsp;&nbsp;Cloud</h3>
                                    <p>AWS Certified Cloud Practitioner, Proprietary Corporate Cloud Platform</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='sectionelement'>
                        <i className="sectionsubelement fa-solid fa-person-chalkboard fa-10x" />
                        <div className='sectionsubelement'>
                            <h1>Integrated Skills</h1>
                            <br />
                            <div>
                                <div>
                                    <h3><i className='fa-solid fa-envelopes-bulk' />&nbsp;&nbsp;Office Productivity</h3>
                                    <p>Microsoft Word, Powerpoint, Excel, Outlook, Visio and Google Workspace Equivalents</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-language' />&nbsp;&nbsp;Language Proficiency</h3>
                                    <p>English (First Language), Chinese (Second Language)</p>
                                </div>
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-people-group' />&nbsp;&nbsp;Other</h3>
                                    <p>Project Management, Problem Solving, Strategic Thinking, Collaboration, Communication</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className='sectionelement'>
                        <i className="sectionsubelement fa-solid fa-bolt fa-10x" />
                        <div className='sectionsubelement'>
                            <h1>Interests/Hobbies</h1>
                            <br />
                            <div>
                                <div>
                                    <h3><i className='fa-solid fa-person-running' />&nbsp;&nbsp;Health and Fitness</h3>
                                    <p>Strength Training, Running, Hiking, Nutrition Planning</p>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <h3><i className='fa-solid fa-earth-americas' />&nbsp;&nbsp;World Affairs</h3>
                                    <p>Geopolitical, Technology, and Economic Trends.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeInSection>
            </main>
        </>
    )
}
