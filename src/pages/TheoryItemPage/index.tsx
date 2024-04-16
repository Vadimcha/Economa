import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ISection, ITheoryItem} from "../../models/ITheoryItem";
import {Center, Loader, Title, Text, Container, Button} from "@mantine/core";
import {TheoryData} from "../../data/TheoryData";
import {Layout} from "../../components/Layout";
import './TheoryItemPage.css'
import {IconChevronLeft} from "@tabler/icons-react";

export const TheoryItemPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState<ITheoryItem | null>(null)
    useEffect(() => {
        const params_name = params.name
        const find_data = TheoryData.find((item: ITheoryItem) => item.src_name === params_name)
        if(find_data) setData(find_data)
    }, [])
    if(!data) {
        return <Center w='100vw' h='100vh'>
            <Loader size="md"/>
        </Center>
    }
    return (
        <div >
            <Layout theoryItem={data} >
                <Container mb={100}>
                    <Title order={1}>{data.name}</Title>
                    <Text size="md" c="dimmed" my={"xs"}>{data.description}</Text>
                    <Container p={0}>
                        { data.sections.map((paragraph: ISection, index) => {
                            return <Container key={index} mt={"xl"} id={`${data.name}-${index}`} className={"paragraph"}>
                                <Title order={4}>{paragraph.title}</Title>
                                <Text size={"sm"} fw={400} mt={"xs"}>{paragraph.content}</Text>
                            </Container>
                        }) }
                    </Container>
                </Container>
                <Center w={"100%"}>
                    <Button
                        rightSection={<IconChevronLeft size={20} stroke={2} />}
                        onClick={() => navigate("/theory")}
                    >Вернуться к списку теории</Button>
                </Center>
            </Layout>
        </div>
    );
};