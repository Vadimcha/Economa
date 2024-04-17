import {Layout} from "../../components/Layout";
import {Tabs, Title, Text, Divider} from "@mantine/core";
import {AnPaymentForm} from "../../components/AnPaymentForm";

export const CalculatorPage = () => {
    return (
        <Layout>
            <Title order={2} mb={"xl"}>Калькулятор</Title>
            <Tabs variant="pills" radius="md" defaultValue="an_payment">
                <Tabs.List>
                    <Tabs.Tab value="an_payment" >
                        <Text size={"sm"} fw={500}>Аннуитетный платёж</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="diff_payment">
                        <Text size={"sm"} fw={500}>Дифференцированный платёж</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="mix_payment">
                        <Text size={"sm"} fw={500}>Смешанный платёж</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="deposits">
                        <Text size={"sm"} fw={500}>Вклады</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="optimization">
                        <Text size={"sm"} fw={500}>Оптимизация</Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Divider my={"md"} />

                <Tabs.Panel value="an_payment">
                    <AnPaymentForm />
                </Tabs.Panel>
                <Tabs.Panel value="diff_payment">
                    Messages tab content
                </Tabs.Panel>
                <Tabs.Panel value="mix_payment">
                    Settings tab content
                </Tabs.Panel>
                <Tabs.Panel value="deposits">
                    Settings tab content
                </Tabs.Panel>
                <Tabs.Panel value="optimization">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
        </Layout>
    );
};