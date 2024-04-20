import {Layout} from "../../components/Layout";
import {SimpleGrid, Text} from "@mantine/core";
import {TheoryData} from "../../data/TheoryData";
import {ITheoryItem} from "../../models/ITheoryItem";
import {TheoryListItem} from "../../components/TheoryListItem";

export const TheoryPage = () => {
    return (
        <Layout>
            <Text size={"2rem"} fw={600} mb={"md"}>Теория</Text>
            <SimpleGrid cols={3}>
                { TheoryData.map((item: ITheoryItem) => {
                    return <TheoryListItem key={item.name} data={item} />
                }) }
            </SimpleGrid>
        </Layout>
    );
};