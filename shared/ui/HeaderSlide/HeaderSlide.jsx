import { getStyles } from "@/shared/helper/getStyles"
import { Typography } from "../Typography"
import styles from "./HeaderSlide.module.scss"

export const HeaderSlide = ({ 
    title,
    subtitle,
    className
}) => {
    return(
        <Typography 
            as="h2"
            color="green"
            fontStyle="circe800"
            className={getStyles(styles.header, {}, [className])}
        >
            { title } <br/>
            { subtitle }
        </Typography>
    )
}