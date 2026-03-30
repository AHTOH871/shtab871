import { getStyles } from "@/shared/helper/getStyles";
import styles from "./Typography.module.scss";

export const Typography = ({
    as: Tag = "p", // h1 | h2 | h3 | h4 | h5 | p | li | span | th
    fontStyle = "circe400", // circe400 | circe600 | circe800 | italiana
    color = "black", // black | gray | dark-red | green | yellow-green | red | white | dark-yellow
    size, 
    className,
    children
}) => {

    const useCustomSize = (Tag === "p" || Tag === "span" || Tag === "th") && size;
    const defaultSize = styles[Tag];
    const sizeClass = useCustomSize ? styles[`size${size}`] || '' : defaultSize;
    const additional = [
        className, 
        styles[fontStyle], 
        styles[color], 
        sizeClass
    ]

    return (
        <Tag className={getStyles(styles.typography, {}, additional)}>
            {children}
        </Tag>
    )
}
