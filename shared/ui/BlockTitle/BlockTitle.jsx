import { getStyles } from "@/shared/helper/getStyles"
import { Stack } from "../Stack"
import styles from './BlockTitle.module.scss'
import { Typography } from "../Typography"

export const BlockTitle = ({
    children,
    green,
    red,
    yellow,
    gap
}) => {

    const mode = {
        [styles.green]: green,
        [styles.red]: red,
        [styles.yellow]: yellow
    }

    return(
        <Stack 
            className={getStyles(styles.blocktitle_container, mode, [])}
            align="center" justify="center"
            max gap={gap}
        >
            <Typography as="h3" fontStyle="circe600">
                {children}
            </Typography>
        </Stack>
    )
}