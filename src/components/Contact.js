import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import * as styles from '../styles/contacts.module.css'

export default function Contact() {

    const data = useStaticQuery(graphql`
        query contactQuery {
            site {
                siteMetadata {
                    contact
                }
            }
        }
    `)

    const { contact } = data.site.siteMetadata

    return (
        <div>
            <h2 className={styles.header}>Contact</h2>
            <div className={styles.contacts}>
                <ul>
                    <li className={styles.wrapper + ' ' + styles.wrapper_email}><a target="_blank" rel="noopener noreferrer" aria-label="email" href={`mailto:${contact}`}><FiMail/></a></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_github}><a target="_blank" rel="noopener noreferrer" href="https://github.com/jongjin-j" aria-label="email"><FaGithub/></a></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_linkedin}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jongjin-jung-445595204/" aria-label="email"><FaLinkedinIn/></a></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_instagram}><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jongjin_jung/" aria-label="email"><FaInstagram/></a></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_facebook}><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/JongjinJung0316/" aria-label="email"><FaFacebookF/></a></li>
                </ul>
            </div>
        </div>
    )
}