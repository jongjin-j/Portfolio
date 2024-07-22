import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'
import resume from '../files/resume.pdf'

export default function Home({ data }) {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hello!</h2>
          <h5>Recent Computer Engineering Graduate from University of Toronto</h5>
          <p>📍 Toronto &amp; Boston</p>
          <div className={styles.buttonContainer}>
            <a className = {styles.button} target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
            <Link className={styles.button} to="/experiences">Experiences</Link>
            <Link className={styles.button} to="/projects">Projects</Link>
          </div>
        </div>
      </section>
    </Layout>
    
  )
}