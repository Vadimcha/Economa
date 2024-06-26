import {Center, Text} from "@mantine/core";
import './AboutUsPage.css'
import {Layout} from "../../components/Layout";

export const AboutUsPage = () => {
    return (
        <Layout>
            <Center w={"100%"}><Text size={"2.5rem"} fw={600} mb={"md"}>О нас</Text></Center>
            <Text>Изначально проект "Economa" возник на идее создания калькулятора для решения экономических задач из Единого Государственного Экзамена (ЕГЭ) по профильной математике, проводимого в России ежегодно. Данные задачи поддавались хорошей алгоритмической адаптации. Затем пришла мысль дополнить сайт и теоретическими сведениями об этих задачах, а не оставить использовать калькулятор только с практической точки зрения. После возникла идея создать сайт, охватывающий всю теорию экономики, все сведения и открытия науки о деньгах.
            </Text>
        </Layout>
    )
}