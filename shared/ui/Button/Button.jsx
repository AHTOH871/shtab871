import { Ellipsis } from 'lucide-react';
import { getStyles } from '@/shared/helper/getStyles';
import styles from './Button.module.scss';

export const Button = (props) => {
    const {
        className,
        children,
        color, //filled,
        circle,
        cta,
        loading,
        ...otherProps
    } = props;

    const mode = {
        [styles.circle]: circle,
    }

    const additional = [
        className,
        styles[color],
    ]

    return (
        <button
            className={getStyles(styles.button, mode, additional)}
            {...otherProps}
        >
            {loading
                ? <Ellipsis className={styles.waiting} />
                : children
            }
        </button>
    );
};