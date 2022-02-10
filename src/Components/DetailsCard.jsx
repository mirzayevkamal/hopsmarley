import styles from '../sass/components/card/DetailsCard.module.scss';

function DetailsCard({ data, icon, placeholder }) {
    return (
        <div data-testid='details' className={styles.detailsCard}>
            <div style={{backgroundImage:`url(${icon})`}} className={styles.cardImg}>
            </div>
            <div className={styles.details}>
                <span>{placeholder}</span>
                <h4>{data}</h4>
            </div>
        </div>
    );
}

export default DetailsCard;
