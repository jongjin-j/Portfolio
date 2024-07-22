import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/experiences.module.css'


export default function about() {
    return (
        <Layout>
            <Link className={styles.button} to="/">Back</Link>
            <div className={styles.container}>
                <h2>Experiences</h2>
                <div className={styles.experiences}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.oracle.com/index.html">
                        <div className={styles.item}>
                            <plaintext>May 2022 - April 2023</plaintext>
                            <h3 className={styles.jobtitle}>Software Developer</h3>
                            <h3>Oracle</h3>
                            <ul className={styles.list}>
                                <li>Migrated a microservice into an external cloud native application (knative) and deployed as a serverless function, running parallel with the provider that increased scalability and flexibility</li>
                                <li>Implemented an event-driven architecture using Apache Kafka to send and receive cloud events between the provider and the cloud native application</li>
                                <li>Developed and deployed an API library that enables CRUD operations in Vault in order to manage AES secrets for pod configurations, further enhancing encryption and security</li>
                                <li>Developed a faster and user-friendly frontend to replace the old Eloqua UI through TypeScript and React that renders/manages its components, and saving / deleting data to the server</li>
                                <li>Wrote automation test cases using Selenium in C# to verify the developed functionalities and meet the required time constraints</li>
                            </ul>
                        </div>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://rapstudy.com/">
                        <div className={styles.item}>
                            <plaintext>Sep 2021 - Dec 2021</plaintext>
                            <h3 className={styles.jobtitle}>Software Engineer Intern</h3>
                            <h3>rapStudy</h3>
                            <ul className={styles.list}>
                                <li>Building a web and mobile software platform to help teachers educate kids in schools through music in over 30 schools</li>
                                <li>Performed real-time data reads and writes on a Firebase database and structured database security rules to manage user access</li>
                                <li>Developed standard alignment feature that filters songs based on the NY State educational standards</li>
                                <li>Implemented a responsive and dynamic design through conditional rendering and media queries</li>
                            </ul>
                        </div>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="http://cs-people.bu.edu/spchin/">
                        <div className={styles.item}>
                            <plaintext>May 2021 - August 2021</plaintext>
                            <h3 className={styles.jobtitle}>ML Research Assistant</h3>
                            <h3>BU LISP</h3>
                            <ul className={styles.list}>
                                <li>Developed recurrent neural network models which are biologically plausible that overcomes the limitations of backpropagation using the Pytorch library</li>
                                <li>Experimented the recurrent neural network models on computational graphs of scalar functions and matrix functions</li>
                                <li>Assisted in writing an academic paper on biologically plausible models by implementing and testing target propagation and direct feedback alignment</li>
                                <li>Participated in ATD (Algorithms for Thread Detection) to develop anomaly detection algorithms to detect unusual traffic congestion</li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}