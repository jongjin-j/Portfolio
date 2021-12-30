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
                            <h3 className={styles.jobtitle}>Software Developer Intern</h3>
                            <h3>Oracle</h3>
                            <ul className={styles.list}>
                                <li>Incoming...</li>
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