import {Button, Center, Flex, Text} from "@mantine/core";
import {INavLink, NavLinksData} from "../../data/NavLinksData";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Flex component={Center} w='100vw' h='100vh' direction={"column"}>
            <Text size={"5rem"} fw={500}>Economa</Text>
            <Flex gap={50} justify={"space-between"} mt={"md"}>
                { NavLinksData.map((link: INavLink) => {
                    return (
                        link.src != '/' && <Button key={link.src} onClick={() => navigate(link.src)}>{link.name}</Button>
                    )
                }) }
            </Flex>
        </Flex>
    )
}