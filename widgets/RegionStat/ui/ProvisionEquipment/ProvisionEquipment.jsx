import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Table } from "@/entities/Table";
import styles from './ProvisionEquipment.module.scss'

export const ProvisionEquipment = () => {

    const zonesColumns = [
        { key: '1', title: 'Блок 1'},
        { key: '2', title: 'План'},
        { key: '3', title: 'Факт'},
        { key: '4', title: 'Отклонения'},
        { key: '5', title: 'Закуплено\n2025 год'},
        { key: '6', title: 'Комментарии'},
    ];

    const activityDatas = [
        ["2. Обеспеченность специальной техникой, (шт.)\n(среднероссийский показатель потребности– 3,6%)",
        "192", "187", "5 (2,6 %)", "2 из 5\n(40%)",
        {text: "Источник финансирования:средства оператора по транспортированию отходов.Подтверждено/не подтвердждено", rowSpan: 2}],
        ["2.1. в том числе в рамках льготного лизинга, (шт.)",
        "0", "0", "0 (0%),", "", ""],
        [{text: "3. Обеспеченность контейнерных площадок и контейнеров (ДК утверждена 28.12.2024)", colSpan: 6}]

    ]

    return(
        <Slide_Region
            title='ProvisionEquipment'
        >
            <Table
                columns={zonesColumns}
                data={activityDatas}
                className={styles.gridColumns}
            />
        </Slide_Region>
    )
}