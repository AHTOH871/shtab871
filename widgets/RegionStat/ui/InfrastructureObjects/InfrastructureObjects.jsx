import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Table } from "@/entities/Table"

export const InfrastructureObjects = () => {
    return(
        <Slide_Region
            title='InfrastructureObjects'
        >
            <Table
                header="Действующие объекты инфраструктуры ТКО"
                data={[]}
                columns={[]}
            />
        </Slide_Region>
    )
}