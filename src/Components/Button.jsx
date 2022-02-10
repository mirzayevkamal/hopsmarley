import styles from '../sass/components/button/Button.module.scss';

function Button({onButtonClick, children}) {
    return (
        <button data-testid='button' onClick={onButtonClick} className={styles.button}>
            {children}
        </button>
    );
}

export default Button;
