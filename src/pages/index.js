import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

export default function Home({ data }) {
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Jongjin Jung</h2>
          <h3>Project Portfolio</h3>
          <p>Computer Engineering Student at University of Toronto</p>
          <Link className={styles.button} target="_blank" rel="noopener noreferrer" to="https://jongjin-j.github.io/">Website</Link>
          <Link className={styles.button} to="/projects">Personal Projects</Link>
        </div>
      </section>
    </Layout>
    
  )
}