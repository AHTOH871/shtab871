import { Slide_Region } from "@/entities/Slide_Region/ui/Slide_Region"
import { Block } from "../Block/Block"
import { Stack } from "@/shared/ui/Stack"
import { Typography } from "@/shared/ui/Typography"
import { Grid } from "@/shared/ui/Grid"
import { blockContent } from "@/shared/assets/data/regions"

const TITLES = ['План', 'Факт', 'Дефицит', 'Закуплено в 2025 году']

export const ContentBlock = () => {

    const renderSection = (item, idx) => {
        const {
            section_title,
            roadmap_status,
            metrics,
            operator_name,
            coverage,
            ownership_type
        } = item

        return (
            <Stack key={idx} direction="column" gap="6">
                <Stack gap="4">
                    <Typography as="h3">{section_title}</Typography>
                    <Typography>{roadmap_status}</Typography>
                </Stack>

                {metrics ? (
                    <Stack direction="column" gap="4">
                        <Grid columns="4" gap="16">
                            {TITLES.map((title, i) => (
                                <Typography key={i} weight="bold">
                                    {title}
                                </Typography>
                            ))}
                        </Grid>
                        <Grid columns="4" gap="16">
                            <Typography>{metrics.plan}</Typography>
                            <Typography>{metrics.fact}</Typography>
                            <Typography>{metrics.deficit}</Typography>
                            <Typography>{metrics.purchased_2025}</Typography>
                        </Grid>
                    </Stack>
                ) : (
                    <Stack direction="column" gap="4">
                        <Typography>
                            {operator_name} ({coverage})
                        </Typography>
                        <Typography>
                            Форма собственности: {ownership_type}
                        </Typography>
                    </Stack>
                )}
            </Stack>
        )
    }

    return (
        <Slide_Region title="Нижегородская область">
            <Stack direction="column" gap="8" max>
                {blockContent.map((item, index) => (
                    <Block key={index} number={index + 1}>
                        <Stack direction="column" 
                            gap="8" max
                        >
                        {Array.isArray(item)
                            ? item.map((subItem, i) => renderSection(subItem, i))
                            : renderSection(item, index)}
                        </Stack>
                    </Block>
                ))}
            </Stack>
        </Slide_Region>
    )
}
