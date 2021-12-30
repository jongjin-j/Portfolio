import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {

    const projects = data.projects.nodes

    return (
        <Layout>
            <Link className={styles.button} to="/">Back</Link>
            <div className={styles.portfolio}>
                <h2>Projects</h2>
                <div className={styles.projects}>
                    {projects.map(p => (
                        <Link to={"/projects/" + p.frontmatter.slug} key = {p.id}>
                            <div className={styles.project}>
                                <GatsbyImage image={getImage(p.frontmatter.projectImage)} alt={p.frontmatter.title} className={styles.image} />
                                <div className={styles.overlay}>View Project</div>
                            </div>
                            <h3>{p.frontmatter.title}</h3>
                            <p>{p.frontmatter.stack}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query projectQuery {
        projects: allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}) {
            nodes {
                frontmatter {
                    title
                    stack
                    slug
                    projectImage {
                        childImageSharp {
                            gatsbyImageData(width: 300, aspectRatio: 2)
                        }
                    }
                }
                id
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`