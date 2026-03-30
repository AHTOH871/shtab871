import { LoaderCircle } from "lucide-react"
import styles from './Loading.module.scss'

export const Loading = () => {
    return(
        <LoaderCircle className={styles.loading}/>
    )
}