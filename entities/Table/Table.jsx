import React from 'react';
import { Trash2 } from 'lucide-react';
import styles from './Table.module.scss';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';

export const Table = ({
    data = [],
    columns = [],
    onAddRow,
    onRemoveRow,
    showActions = false,
    header,
    className = '',
    addRowLabel = '+ Добавить строку',
}) => {
    const getFlattenedColumns = () => {
        const flattened = [];

        columns.forEach(column => {
            if (column.children) {
                column.children.forEach(child => {
                    flattened.push({
                        ...child,
                        parentKey: column.key,
                        parentTitle: column.title
                    });
                });
            } else {
                flattened.push(column);
            }
        });

        return flattened;
    };

    const renderTableHeader = () => {
        const hasChildren = columns.some(col => col.children);

        return (
            <thead className={styles.thead}>
                <tr className={styles.headerRow}>
                    {columns.map((column, index) => {
                        if (column.children) {
                            return (
                                <Typography as="th" fontStyle='circe800'
                                    key={index}
                                    colSpan={column.children.length}
                                    rowSpan={hasChildren ? 1 : 2}
                                >
                                    {column.title}
                                </Typography>
                            );
                        } else {
                            return (
                                <Typography as="th" fontStyle='circe800'
                                    key={index}
                                    className={styles.th}
                                    rowSpan={2}
                                >
                                    {column.title}
                                </Typography>
                            );
                        }
                    })}
                    {showActions && (
                        <Typography as="th"
                            className={styles.th}
                            rowSpan={2}
                        >
                            Действия
                        </Typography>
                    )}
                </tr>

                {hasChildren && (
                    <tr className={styles.subHeaderRow}>
                        {columns.map((column, index) => {
                            if (column.children) {
                                return column.children.map((child, childIndex) => (
                                    <Typography as='th'
                                        key={childIndex}
                                        className={`${styles.th} ${styles.subHeader}`}
                                    >
                                        {child.title}
                                    </Typography>
                                ));
                            }
                            return null;
                        })}
                    </tr>
                )}
            </thead>
        );
    };

    const renderTableBody = () => {
        const flattenedColumns = getFlattenedColumns();

        if (!data || data.length === 0) {
            return (
                <tbody>
                    <tr className={styles.emptyRow}>
                        <td
                            className={`${styles.td} ${styles.emptyCell}`}
                            colSpan={flattenedColumns.length + (showActions ? 1 : 0)}
                        >
                            Нет данных
                        </td>
                    </tr>
                </tbody>
            );
        }

        return (
            <tbody className={styles.tbody}>
                {data.map((row, rowIndex) => {
                    const isArrayFormat = Array.isArray(row);
                    
                    const getCellValue = (columnIndex) => {
                        if (isArrayFormat) {
                            const value = row[columnIndex];
                            
                            if (value && typeof value === 'object' && value.text !== undefined) {
                                return value.text;
                            }
                            
                            return value;
                        } else {
                            const column = flattenedColumns[columnIndex];
                            const value = row[column.key];
                            
                            if (column.render) {
                                return column.render(value, row);
                            }
                            
                            if (value && typeof value === 'object' && value.text !== undefined) {
                                return value.text;
                            }
                            
                            return value;
                        }
                    };

                    const getCellConfig = (columnIndex) => {
                        if (isArrayFormat) {
                            const value = row[columnIndex];
                            if (value && typeof value === 'object') {
                                return {
                                    colSpan: value.colSpan,
                                    rowSpan: value.rowSpan,
                                    skip: value.skip
                                };
                            }
                        } else {
                            const column = flattenedColumns[columnIndex];
                            const value = row[column.key];
                            if (value && typeof value === 'object') {
                                return {
                                    colSpan: value.colSpan,
                                    rowSpan: value.rowSpan,
                                    skip: value.skip
                                };
                            }
                        }
                        return {};
                    };

                    return (
                        <tr
                            key={row.id || rowIndex}
                            className={`${styles.tr} ${rowIndex % 2 === 0 ? styles.even : styles.odd}`}
                        >
                            {flattenedColumns.map((_, colIndex) => {
                                const cellConfig = getCellConfig(colIndex);

                                if (cellConfig.skip) return null;

                                return (
                                    <td
                                        key={colIndex}
                                        className={styles.td}
                                        colSpan={cellConfig.colSpan}
                                        rowSpan={cellConfig.rowSpan}
                                    >
                                        <Typography as='span'>{getCellValue(colIndex)}</Typography>
                                    </td>
                                );
                            })}
                            {showActions && (
                                <td className={`${styles.td} ${styles.actionCell}`}>
                                    <Button
                                        onClick={() => onRemoveRow?.(row.id || rowIndex)}
                                        className={styles.removeBtn}
                                    >
                                        <Trash2 size={18} />
                                    </Button>
                                </td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        );
    };

    return (
        <div className={`${styles.tableWrapper} ${className}`}>
            {header && (
                <div className={styles.tableHeader}>
                    <h3>{header}</h3>
                </div>
            )}

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    {renderTableHeader()}
                    {renderTableBody()}
                </table>
            </div>

            {showActions && onAddRow && (
                <div className={styles.footer}>
                    <button onClick={onAddRow} className={styles.addButton}>
                        {addRowLabel}
                    </button>
                </div>
            )}
        </div>
    );
};