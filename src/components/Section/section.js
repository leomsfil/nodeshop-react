import styles from './section.module.css';

export default function Section() {
    return (

<section className={styles.newsletter}>
			<h3> Newsletter </h3>
			<p> Receive our promotions email </p>
			<form>
				<input type='text' name='' id='' placeholder='Your name'/>
				<input type='email' name='' id='' placeholder='Your email'/>
				<button> Register </button>
			</form>
		</section>
        );
    }