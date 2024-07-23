import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>RasVen</div>
            <div className={styles.text}>
                RasVen creative thoughts agency &copy; 2024 All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer;