import { routeConfig } from "@/app/router/lib/data"
import { Stack } from "@/shared/ui/Stack"
import { CircleUser } from "lucide-react"
import { NavLink } from "react-router-dom"
import styles from './NavbarDesktop.module.scss'
import { GenerateButton } from "@/features/PptxGenerator/ui/GenerateButton"
import { getStyles } from "@/shared/helper/getStyles"
import { isAction } from "@reduxjs/toolkit"

export const NavbarDesktop = () => {
    return(
        <Stack 
            className={styles.navbarDesktop}
        >
            <Stack 
                className={styles.navbarDesktop_container}
                max gap="40"
                align="center" justify="end"
            >
                <Stack 
                    className={styles.profile}
                >
                    <CircleUser size={32}/>
                </Stack>
                    <Stack
                        gap="48" tag="nav" 
                        aria-label="Main Navigation"
                    >
                        {Object.values(routeConfig).map(route => (
                            route.title && (
                                <NavLink 
                                    key={route.path}
                                    to={route.path}
                                    className={({ isActive }) => 
                                        getStyles(styles.link, { [styles.active]: isActive }, [])
                                    }
                                >
                                    {route.title}
                                </NavLink>
                            )
                        ))}
                    </Stack>
                <GenerateButton />
            </Stack>
        </Stack>
    )
}