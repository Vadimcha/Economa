import {Layout} from "../../components/Layout";
import {SimpleGrid, Title} from "@mantine/core";
import {TheoryData} from "../../data/TheoryData";
import {ITheoryItem} from "../../models/ITheoryItem";
import {TheoryListItem} from "../../components/TheoryListItem";

export const TheoryPage = () => {
    return (
        <Layout>
            <Title order={3}>Страница с теорией</Title>
            <SimpleGrid cols={3} mt={"xl"}>
                { TheoryData.map((item: ITheoryItem) => {
                    return <TheoryListItem key={item.name} data={item} />
                }) }
            </SimpleGrid>
        </Layout>
    );
};