import { getStyles } from "@/shared/helper/getStyles"
import { Stack } from "../../../shared/ui/Stack"
import { Typography } from "../../../shared/ui/Typography"
import styles from './Slide_Region.module.scss'

export const Slide_Region = ({
    children, 
    className,
    date, 
    title,
}) => {
    return(
        <Stack
            tag="section" max
            className={getStyles(styles.slide_container, {}, [className])}
        >
            <Stack
                max className={styles.slide}
            >
                <Stack
                    max gap="16"
                    justify="between" align="center"
                    className={styles.slide_header}
                >
                    {title !== undefined && (
                        <Typography 
                            size='24'
                            color="white"
                            fontStyle="circe800"
                        >
                            {title}
                        </Typography>
                    )}
                    {date && (
                        <Typography 
                            color="white"
                            size='14'
                            fontStyle="circe600"
                        >
                            По состоянию на {date}
                        </Typography>
                    )}
                </Stack>
                <Stack 
                    align="start" justify='start' max
                    className={styles.slide_content}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    )
}