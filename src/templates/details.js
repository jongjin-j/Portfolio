import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/details.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Details({ data }) {

    const { html } = data.markdownRemark
    const { title, stack, link, projectImage, order } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <Link className={styles.button + ' ' + styles.back} to="/projects">Back</Link>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.image}>
                    <GatsbyImage image={getImage(projectImage)} alt={title} />
                </div>
                {order === 1 ? 
                    <a className={styles.button} href={link} target="_blank" rel="noopener noreferrer">Link</a>
                :
                    <a className={styles.button} href={link} target="_blank" rel="noopener noreferrer">Github</a>
                }
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query singlePageQuery($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                stack
                order
                projectImage {
                    childImageSharp {
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                            formats: [AUTO, AVIF]
                        )
                    }
                }
                link
            }
        }
    }  
`