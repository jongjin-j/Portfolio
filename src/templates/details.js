import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/details.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Mdx } from "gatsby-plugin-mdx"

export default function Details({ data }) {
  console.log(data, data.mdx)
  const { frontmatter, body } = data.mdx
  const { title, stack, link, projectImage, order } = frontmatter

  return (
    <Layout>
      <Link className={styles.button + " " + styles.back} to="/projects">
        Back
      </Link>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.image}>
          <GatsbyImage image={getImage(projectImage)} alt={title} />
        </div>
        {order === 1 ? (
          <a
            className={styles.button}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        ) : (
          <a
            className={styles.button}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
        <div className={styles.html}>
          <Mdx>{body}</Mdx>{" "}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singlePageQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
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
