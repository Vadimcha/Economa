import { MantineProvider } from "@mantine/core";
import { RouterProvider, RouterProviderProps } from "react-router-dom";

export const Providers = ({ router }: RouterProviderProps ) => {
    return (
        <MantineProvider defaultColorScheme={"dark"}>

            <RouterProvider router={router} />
        </MantineProvider>
    );
}