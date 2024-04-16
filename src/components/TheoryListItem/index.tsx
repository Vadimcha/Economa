import {Button, Card, Flex, Image, Text} from "@mantine/core";
import {ITheoryItem} from "../../models/ITheoryItem";
import {useNavigate} from "react-router-dom";

export const TheoryListItem = ({ data }: { data: ITheoryItem }) => {
    const navigate = useNavigate()
    return (
        <Card shadow="sm" padding="md" radius="sm" withBorder>
            <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                <div>
                    <Card.Section>
                        <Image
                            src={data.image ? data.image : "https://prodengiblog.ru/wp-content/uploads/2016/05/1.jpg"}
                            height={160}
                            alt="Theory Image"
                        />
                    </Card.Section>
                    <Text fw={500} mt={"md"}>{data.name}</Text>
                    {data.description && <Text size="sm" c="dimmed" truncate="end" lineClamp={2}>
                        {data.description}
                    </Text> }
                </div>
                <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate(`/theory/${data.src_name}`)}>
                    Читать
                </Button>
            </Flex>
        </Card>
    );
};