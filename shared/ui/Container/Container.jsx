import { getStyles } from "@/shared/helper/getStyles"
import { Stack } from "../Stack"
import styles from './Container.module.scss'

export const Container = ({
    direction,
    gap,
    align,
    justify,
    children,
    border,
    borderColor, // darkRed | darkYellow | darkGreen 
    bgColor, // red | yellow | green | pink | lightGreen
    fullWidth,
    className
}) => {

    const bgColorContainer = {
        red: styles.red,
        yellow: styles.yellow,
        green: styles.green,
        pink: styles.pink,
        lightGreen: styles.lightGreen
    }

    const borderColorContainer = {
        darkRed: styles.darkRed,
        darkYellow: styles.darkYellow,
        darkGreen: styles.darkGreen,
    }

    const mode = {
        [styles.fullWidth]: fullWidth,
        [styles.border]: border,
    }


    const additional = [
        className,
        bgColorContainer[bgColor],
        border && borderColor && borderColorContainer[borderColor]
    ]


    return(
        <Stack 
            direction={direction} align={align}
            justify={justify} gap={gap}
            className={getStyles(styles.container_main, mode, additional)}
        >
            { children }
        </Stack>
    )
}