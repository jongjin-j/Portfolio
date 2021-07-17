import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'


export default function Projects({ data }) {

    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    console.log(projects[0].frontmatter.projectImage)

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Personal Projects</h2>
                <div className={styles.projects}>
                    {projects.map(p => (
                        <Link to={"/projects/" + p.frontmatter.slug} key = {p.id}>
                            <div>
                                <StaticImage src={p.frontmatter.projectImage} alt="Google Maps"/>
                                <h3>{p.frontmatter.title}</h3>
                                <p>{p.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <p>Email: {contact}</p>
            </div>
        </Layout>
            
    )
}

export const query = graphql`
    query projectQuery {
        projects: allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    stack
                    slug
                    projectImage
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

/*<StaticImage src="../../images/GoogleMaps.png" alt="Google Maps"/>*/