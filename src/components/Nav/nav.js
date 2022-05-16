import styles from './nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> Products </a> </li>
                <li> <a href="#"> Services </a> </li>
                <li> <a href="#"> Contacts </a> </li>
            </ul>
            <div className={styles.social_icons}>
                <a href="#" class={styles.btn_facebook}> <i class="fa fa-facebook fa-lg"></i> </a>
                <a href="#" class={styles.btn_twitter}> <i class="fa fa-twitter fa-lg"></i> </a>
                <a href="#" class={styles.btn_google}> <i class="fa fa-google fa-lg"></i> </a>
            </div>
        </nav>
    );
}