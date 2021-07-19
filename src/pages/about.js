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
                <p>I'm a third year computer engineering student at University of Toronto, pursuing a minor in Artificial Intelligence. Currently, I'm a Summer Research Student at Boston University LISP (Learning, Intelligence, and Signal Processing) Research Group, assisting research in neural networks. I am interested in fullstack web development and machine learning.</p>
                <p>I grew up in Korea and Singapore, but I am currently living in Toronto and Boston. In my free time, I enjoy watching the NBA, and I support the Boston Celtics. Feel free to reach out!</p>
            </div>
        </Layout>
    )
}
