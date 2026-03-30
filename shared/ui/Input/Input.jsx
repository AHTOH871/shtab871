import { forwardRef } from "react"
import { getStyles } from "../../helper/getStyles"
import { Stack } from "../Stack"
import styles from './Input.module.scss'

export const Input = forwardRef(({ 
    label, 
    register,
    required, 
    className, 
    error, 
    fullWidth, 
    ...otherProps 
}, ref) => {

    const mode = {
        [styles.error]: !!error,
        [styles.fullWidth]: fullWidth
    }

    const inputStyle = getStyles(styles.input, mode, [className]) 

    return(
        <Stack direction='column' gap='16' max>
            <label className={styles.label}>
                {label && label || required && '*'}
                <input
                    className={inputStyle}
                    ref={ref}
                    {...register}
                    {...otherProps}
                />
            </label>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </Stack>
    )
})
