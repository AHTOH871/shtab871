import { Stack } from "@/shared/ui/Stack"
import styles from './Block.module.scss'
import { Typography } from "@/shared/ui/Typography"

export const Block = ({
    number,
    children
}) => {
    return(
        <Stack
            className={styles.block}
            max gap='32'
        >
            <Stack 
                className={styles.block_number}
                align="center" justify="center"
            >
                <Typography
                    fontStyle="circe800"
                    color="white"
                    size='20'
                >
                    Блок { number }
                </Typography>
            </Stack>
            <Stack 
                className={styles.block_children}
            >
                { children }
            </Stack>
        </Stack>
    )
}