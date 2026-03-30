import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Stack } from "@/shared/ui/Stack"
import { Table } from "@/entities/Table";
import { useState } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock/ContentBlock";
import { ActivitiesReg_Operators } from "../ActivitiesReg_Operators/ActivitiesReg_Operators";
import { ProvisionEquipment } from "../ProvisionEquipment/ProvisionEquipment";
import { RoadMap } from "../RoadMap/RoadMap";
import { InfrastructureObjects } from "../InfrastructureObjects/InfrastructureObjects";
import { NotTransmitting } from "../NotTransmitting/NotTransmitting";
import { SecondaryResources } from "../SecondaryResources/SecondaryResources";
import styles from './RegionStat.module.scss'
import { SlideCover } from "../SlideCover/SlideCover";

const columns = [
  { key: "index", title: "#" },      
  { key: "name", title: "Имя" },
  { key: "email", title: "Email" },
];

const initialData = [
    { id: 1, name: "Анна", email: "anna@mail.com" },
    { id: 2, name: "Иван", email: "ivan@mail.com" },
];

export const RegionStat = () => {

    const [rows, setRows] = useState(initialData);

    const handleAddRow = () => {
        const newRow = {
        id: Date.now(),
        name: `Новый ${rows.length + 1}`,
        email: `user${rows.length + 1}@mail.com`,
        };
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (id) => {
        setRows(rows.filter((r) => r.id !== id));
    };

    return(
        <Stack 
            direction="column"
            gap='32' max
            className={styles.regionStat_container}
        >
            <SlideCover/>
            <ContentBlock/>
            <ActivitiesReg_Operators/>
            <ProvisionEquipment/>
            <RoadMap/>
            <InfrastructureObjects/>
            <NotTransmitting/>
            <SecondaryResources/>
        </Stack>
    )
}