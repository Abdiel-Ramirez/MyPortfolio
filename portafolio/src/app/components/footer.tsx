import styles from "../styles/footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
<footer className={styles.footer}>
      
		<div className={styles.container + " " + styles.row}>
			<div className={styles.footercol}>
				<h4>Follow Me</h4>
				<div className={styles.sociallinks}>
					<a aria-label="GitHub" href="https://github.com/Abdiel-Ramirez"><FaGithub/></a>
					<a aria-label="LinkedIn" href="https://www.linkedin.com/in/abdiel-ramirez/"><FaLinkedin/></a>
					<a aria-label="Instagram" href="https://www.instagram.com/abdielz_z/"><FaInstagram/></a>
					<a aria-label="Twitter" href="https://twitter.com/Abdielz_Z"><FaTwitter/></a>
				</div>
			</div>
		</div>
	</footer>    )
}
export default Footer;
