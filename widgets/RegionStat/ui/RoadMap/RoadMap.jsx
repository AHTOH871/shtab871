import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Table } from "@/entities/Table"

export const RoadMap = () => {

    return(
        <Slide_Region
            title='RoadMap'
        >
            <Table
                header="Мероприятия Дорожной карты (утверждена 25.02.2025)"
                data={[]}
                columns={[]}
            />
        </Slide_Region>
    )
}