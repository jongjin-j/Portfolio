import React from 'react'
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { Link } from 'gatsby'
import * as styles from '../styles/contacts.module.css'

export default function Contact() {
    return (
        <div>
            <h2 className={styles.header}>Contact</h2>
            <div className={styles.contacts}>
                <ul>
                    <li className={styles.wrapper + ' ' + styles.wrapper_email}><Link target="_blank" rel="noopener noreferrer"><FiMail/></Link></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_github}><Link target="_blank" rel="noopener noreferrer" to="https://github.com/jongjin-j"><FaGithub/></Link></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_linkedin}><Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/jongjin-jung-445595204/"><FaLinkedinIn/></Link></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_instagram}><Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/jongjin_jung/"><FaInstagram/></Link></li>
                    <li className={styles.wrapper + ' ' + styles.wrapper_facebook}><Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/JongjinJung0316/"><FaFacebookF/></Link></li>
                </ul>
            </div>
        </div>
    )
}
