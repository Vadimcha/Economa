import {useFormik} from "formik";
import {Button, Flex, Select, Space, TextInput, Title} from "@mantine/core";
import {useState} from "react";
import {AnPaymentFunction} from "../../algoritms/AnPaymentFunction";

export const AnPaymentForm = () => {
    const [ans, setAns] = useState<number | null>(null)
    const [reqValue, setReqValue] = useState<string>('')
    const formik = useFormik({
        initialValues: {
            credit_sum: '',
            term: '',
            percent: '',
            payment: '',
            overpayment: '',
        },
        onSubmit: (v) => {
            console.log(v)
            let values = {
                Summ: Number(v.credit_sum),
                years: Number(v.term),
                percents: Number(v.percent),
                payment: Number(v.payment),
                overpayment: Number(v.overpayment),
                choice: reqValue
            }
            setAns(AnPaymentFunction(values))
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <Flex direction={"column"} gap={"md"} px={"150px"}>
                    <TextInput
                        name={"credit_sum"}
                        label={"Сумма кредита (млн руб.)"}
                        placeholder={"Введите сумму кредита"}
                        value={formik.values.credit_sum}
                        onChange={formik.handleChange}
                    />
                    <TextInput
                        name={"term"}
                        label={"Срок кредита"}
                        placeholder={"Введите срок на который берётся кредит"}
                        value={formik.values.term}
                        onChange={formik.handleChange}
                    />
                    <TextInput
                        name={"percent"}
                        label={"Процент по кредиту (%)"}
                        placeholder={"Введите процент по кредиту"}
                        value={formik.values.percent}
                        onChange={formik.handleChange}
                    />
                    <TextInput
                        name={"payment"}
                        label={"Платеж (млн руб.)"}
                        placeholder={"Введите платёж"}
                        value={formik.values.payment}
                        onChange={formik.handleChange}
                    />
                    <TextInput
                        name={"overpayment"}
                        label={"Переплата (млн руб.)"}
                        placeholder={"Введите переплату"}
                        value={formik.values.overpayment}
                        onChange={formik.handleChange}
                    />
                    <Select
                        name={"required_value"}
                        label={`Искомая величина`}
                        required
                        placeholder={"Выберите искомую величину"}
                        data={[
                            'Срок',
                            'Сумма кредита',
                            'Процент кредита',
                            'Ежегодная выплата по кредиту',
                            'Переплата по кредиту',
                            'Сумма выплат по кредиту'
                        ]}
                        onChange={(value) => setReqValue(value ? value : '')}
                    />
                    <Button type={"submit"}>Посчитать</Button>
                </Flex>
                <Space h={"100px"}/>
            </form>
            {ans && <Title order={1}>{ans}</Title>}
        </div>
    );
};