import loading from '../../assets/loading.svg'

import styles from './loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img lassName={styles.loader} src={loading} alt='loading' />
        </div>
    )
}

export default Loading