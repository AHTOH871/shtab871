import { Stack } from "@/shared/ui/Stack"
import { Typography } from "@/shared/ui/Typography"
import logo from '@/shared/assets/images/logo_recycling.PNG'
import styles from './SlideCover.module.scss'

export const SlideCover = () => {
    return(
        <Stack 
            className={styles.slideCover_container}
            align="center" justify="center"
        >
            <div className={styles.circle}></div>

            <Stack 
                className={styles.slideCover}
                max align="center" 
            >
                <Stack 
                    direction="column"
                    className={styles.slide_info}
                    justify="center"
                >
                    <Typography as="h1" fontStyle="circe800">
                        <i>Нижегородская область</i>
                    </Typography>
                    <Typography fontStyle="circe600">
                        (материалы Инцидента №58)
                    </Typography>
                    <Stack 
                        className={styles.date_info}
                        max justify="between"
                    >
                        <Typography fontStyle="circe800">Минприроды России</Typography>
                        <Typography fontStyle="circe800">10.11.2025</Typography>
                    </Stack>
                </Stack>
                <Stack 
                    className={styles.logo_container}
                    align="center" justify='end'
                >
                    <img src={logo} alt="logo recycling"/>
                </Stack>
            </Stack>
        </Stack>
    )
}