import {Layout} from "../../components/Layout";
import {Tabs, Text, Divider, Center} from "@mantine/core";
import {AnPaymentForm} from "../../components/AnPaymentForm";
import {DifPaymentForm} from "../../components/DifPaymentForm";

export const CalculatorPage = () => {
    return (
        <Layout>
            <Center w={"100%"}><Text size={"2rem"} fw={600} mb={"md"}>Калькулятор</Text></Center>
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
                    <DifPaymentForm />
                </Tabs.Panel>
                <Tabs.Panel value="mix_payment">
                    В данный момент идет разработка этой опции...
                </Tabs.Panel>
                <Tabs.Panel value="deposits">
                    В данный момент идет разработка этой опции...
                </Tabs.Panel>   
                <Tabs.Panel value="optimization">
                    В данный момент идет разработка этой опции...
                </Tabs.Panel>
            </Tabs>
        </Layout>
    );
};