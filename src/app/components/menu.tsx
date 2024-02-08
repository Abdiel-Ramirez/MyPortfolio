import styles from "../styles/menu.module.css";

interface props{
    showMenu: number
    opacityM: number
}

const Menu = ({showMenu, opacityM}:props) => {
  return (
    <div className={styles.orangeBox} style={{ top: showMenu + 'px', opacity:opacityM }}>
        <div className={styles.upDControl}>
        <div className={styles.menuText}>Menu</div>
        <div className={styles.hiddenList}>

        <ul className={styles.menuList}>
        <li><a aria-label="About" href="#About">About Me</a></li>
        <li><a aria-label="Projects" href="#Projects">Projects</a></li>
        <li><a aria-label="Strengths" href="#Strengths">Strengths</a></li>
        <li><a aria-label="Contact" href="#Contact">Contact Me</a></li>
        </ul>
        </div>
        </div>
    </div>
  )
}
export default Menu;
