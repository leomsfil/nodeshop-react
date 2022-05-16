import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 class={styles.logo}>
                <a href="#index.html" title="NodeShop - Loja de informática"> NodeShop - Loja de informática </a>
            </h1>

            <form method='post'>
                <input type='text' name='Search' id='search' placeholder='Search'/>
                    <button><i className='fa fa-search fa-lg'></i></button>
            </form>
        </header>
    );
}