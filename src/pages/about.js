import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'


export default function about() {
    return (
        <Layout>
            <Link className={styles.button} to="/">Back</Link>
            <div className={styles.container}>
                <h2>About Me</h2>
                <p>I'm a recent graduate from University of Toronto, with a degree in Computer Engineering and a minor in Artificial Intelligence. I am based in Toronto and Boston. In my free time, I enjoy watching the NBA, and I support the Boston Celtics. Feel free to reach out!</p>
            </div>
        </Layout>
    )
}
