import {Center, Flex, Text, UnstyledButton} from "@mantine/core";
import {INavLink, NavLinksData} from "../../data/NavLinksData";
import {useNavigate} from "react-router-dom";
import './HomePage.css'
import {Layout} from "../../components/Layout";

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <Flex component={Center} style={{ height: "calc(85vh - 60px)" }} direction={"column"}>
                <Text size={"5rem"} fw={500}>Economa</Text>
                <Text  my={"xl"}> Economa - это образовательный портал об экономике, где каждый может узнать чем отличается инфляция от дефляции, как спрос влияет на цены, почему коммунизм не так крут, как многие думают и многое другое. Здесь представлена теория обо всем, касающемся экономики, ваших финансов и выгоды!  
                </Text>
                <Flex gap={50} justify={"space-between"} mt={"md"}>
                    { NavLinksData.map((link: INavLink) => {
                        return (
                            link.src != '/'
                            &&
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
    )
}