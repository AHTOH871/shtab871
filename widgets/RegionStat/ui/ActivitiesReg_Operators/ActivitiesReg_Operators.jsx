import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Table } from "@/entities/Table";
import { Stack } from "@/shared/ui/Stack";
import { useState } from "react";
import styles from './ActivitiesReg_Operators.module.scss'

    const activityDatas = [
        ["xxx", "1. XXXX\n2. XXXX", {"text": "XXXX", rowSpan: 3}],
        ["xxx", "1. XXXX\n2. XXXX",""],
        ["xxx", "1. XXXX\n2. XXXX",""]
    ]

export const ActivitiesReg_Operators = () => {

    const [activityData, setActivityData] = useState(activityDatas)

    const handleAddRow = () => {
        const newId = Math.max(...activityData.map(() => d.id), 0) + 1;
        setActivityData([...activityData, {
            id: newId,
            operator: 'xxx',
            reasons: '1. XXXX\n2. XXXX',
            roadmap: ''
        }]);
    };

    const handleRemoveRow = () => {
        setActivityData(activityData.filter(() => row.id !== id));
    }

    const zonesData = [[
        '1. Деятельность региональных операторов - ХХХХХ', 'X', 'X' ,'X' ,'X' 
    ]]

    const zonesColumns = [
        { key: 'block', title: 'Блок 1', rowSpan: 2 },
        { 
            key: 'zones', 
            title: 'Зоны реактивности', 
            colSpan: 4,
            children: [
                { key: 'all', title: 'Всего' },
                { key: 'red', title: 'Красная' },
                { key: 'yellow', title: 'Желтая' },
                { key: 'green', title: 'Зелёная' }
            ]
        }
    ];

    const activityColumns = [
        { key: '1', title: 'Наименование регионального оператора зона'},
        { key: '2', title: 'Причины'},
        { key: '3', title: 'Мероприятия из Дорожной карты (ХХ.ХХ)'},
    ]



    return(
        <Slide_Region
            title='Нижегородская область'
            date='10.11.2025'
        >
            <Stack direction="column" max>

                <Table
                    data={zonesData}
                    columns={zonesColumns}
                    rows='2'
                    className={styles.gridColumns}
                />

                <Table
                    data={activityData}
                    columns={activityColumns}
                    onAddRow={handleAddRow}
                    onRemoveRow={handleRemoveRow}
                />

                <Table
                header="2. Охват МНО фотофиксацией:"
                data={[]}
                columns={[]}
                />

                <Table
                header="3. Передача данных ГЛОНАСС: X автомобиль"
                data={[]}
                columns={[]}
                />

                <Table
                header="4. Один из самых низких платежей населения: XX руб./чел в месяц (XXX среднее по РФ)"
                data={[]}
                columns={[]}
                />
            </Stack>
        </Slide_Region>
    )
}