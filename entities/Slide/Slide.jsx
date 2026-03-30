import { getStyles } from "../../shared/helper/getStyles";
import { Stack } from "../../shared/ui/Stack";
import logo from '@/shared/assets/images/reo_logo.webp'
import { HeaderSlide } from "../../shared/ui/HeaderSlide";
import styles from './Slide.module.scss'

export const Slide = ({ 
    children, 
    className,
    number,
    date, 
    title,
    subtitle,
    summary
}) => {

    return (
        <Stack
            tag="section"
            max
            className={getStyles(styles.slide_container, {}, [className])}
        >


            <Stack
                max
                direction="column" gap="16"
                className={styles.slide_content}
            >
                <Stack 
                    max
                    justify="between" gap="16"
                >
                    <HeaderSlide
                        title={title}
                        subtitle={subtitle}
                        className={styles.header}
                    />
                    {summary}
                    <img src={logo} alt="logo reo" className={styles.logo}/>
                </Stack>

                {children}

                <Stack>
                    {number !== undefined && (
                        <span className={styles.slide_number}>{number}</span>
                    )}
                    {date && (
                        <span className={styles.slide_date}>По состоянию на {date}</span>
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}

