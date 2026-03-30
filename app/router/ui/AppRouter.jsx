import { Loading } from "@/shared/ui/Loading";
import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "../lib/data";


export const AppRouter = () => {
    const renderWithWrapper = useCallback((route) => {
        const element = (
            <Suspense fallback={<Loading width='100' height='100' fullHeight />}>
                {route.page}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </>
    );
};