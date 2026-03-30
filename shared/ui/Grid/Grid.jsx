import { forwardRef } from "react";
import { getStyles } from "@/shared/helper/getStyles";
import styles from "./Grid.module.scss"

const generateGapMapping = (prefix) => ({
    "4": styles[`${prefix}4`],
    "8": styles[`${prefix}8`],
    "16": styles[`${prefix}16`],
    "24": styles[`${prefix}24`],
    "32": styles[`${prefix}32`],
    "48": styles[`${prefix}48`],
});

export const Grid = forwardRef(({
    children,
    columns = "1", // "1" | "2" | "3" | "4";
    rows = "1", // "1" | "2" | "3" | "4";
    gap, // "4" | "8" | "16" | "24" | "32" 
    rowGap, // "4" | "8" | "16" | "24" | "32" 
    columnGap, // "4" | "8" | "16" | "24" | "32" | "48"
    align, // center | end | start 
	justify, // between | center | start | end
    className,
    tag = "div", // "div" | "section" | "article" | "aside" | "main"
    fullWidth,
    zones,
    tender,
    ...otherProps
}, ref) => {
    const mapGridTag = {
        div: 'div',
        section: 'section',
        article: 'article',
        aside: 'aside',
        main: 'main',
    };

    const mapColumns = {
        "1": styles.cols1,
        "2": styles.cols2,
        "3": styles.cols3,
        "4": styles.cols4,
        "5": styles.cols5,
        "6": styles.cols6,
    };

    const mapRows = {
        "1": styles.rows1,
        "2": styles.rows2,
        "3": styles.rows3,
        "4": styles.rows4,
        "5": styles.rows5,
        "6": styles.rows6,
    };

    const justifyClasses = {
		start: styles.justifyStart,
		center: styles.justifyCenter,
		end: styles.justifyEnd,
		between: styles.justifyBetween,
	}
	
	const alignClasses = {
		start: styles.alignStart,
		center: styles.alignCenter,
		end: styles.alignEnd,
		stretch: styles.alignStretch,
	}

    const mapGap = generateGapMapping('gap');
    const mapRowGap = generateGapMapping('rowGap');
    const mapColumnGap = generateGapMapping('columnGap');

    const mode = {
        [styles.fullWidth]: fullWidth,
        [styles.zones]: zones,
        [styles.tender]: tender
    };

    const additional = [
        justifyClasses[justify],
        alignClasses[align],
        mapColumns[columns],
        mapRows[rows],
        gap && mapGap[gap],
        rowGap && mapRowGap[rowGap],
        columnGap && mapColumnGap[columnGap],
        className,
    ];

    const Tag = mapGridTag[tag] || 'div';

    return (
        <Tag
            ref={ref}
            className={getStyles(styles.grid, mode, additional)}
            {...otherProps}
        >
            {children}
        </Tag>
    )
})