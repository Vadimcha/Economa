import {Layout} from "../../components/Layout";
import {Center, Text, Title, UnstyledButton, Flex} from "@mantine/core";
import {INavLink, NavLinksData} from "../../data/NavLinksData";
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <Flex component={Center} direction={"column"} w={'100%'} style={{ height: "calc(70vh)" }}>
                <Title order={1}>Ошибка 404</Title>
                <Text size={"xl"}>Но есть много других полезных страниц</Text>
                <Flex gap={50} justify={"space-between"} mt={"md"}>
                    { NavLinksData.map((link: INavLink) => {
                        return (
                            <UnstyledButton
                                className={"link"}
                                key={link.src}
                                onClick={() => navigate(link.src)}
                            >
                                <Text size={"1.3rem"}>{link.name}</Text>
                            </UnstyledButton>
                        )
                    }) }
                </Flex>
            </Flex>
        </Layout>
    );
};