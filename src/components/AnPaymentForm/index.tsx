import {useFormik} from "formik";
import {Button, Center, Container, Flex, Select, Space, TextInput, Title} from "@mantine/core";
import {useState} from "react";
import {AnPaymentFunction} from "../../algoritms/AnPaymentFunction";

export const AnPaymentForm = () => {
    const [ans, setAns] = useState<any>(undefined)
    const [checkAns, setCheckAns] = useState<boolean> (false)
    const [reqValue, setReqValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const formik = useFormik({
        initialValues: {
            credit_sum: '',
            term: '',
            percent: '',
            payment: '',
            overpayment: '',
        },
        onSubmit: (v) => {
            if(!reqValue) {
                setError('Введите значение')
                return;
            }
            let values = {
                Summ: Number(v.credit_sum),
                years: Number(v.term),
                percents: Number(v.percent),
                payment: Number(v.payment),
                overpayment: Number(v.overpayment),
                choice: reqValue
            }
            setCheckAns(true)
            setAns(AnPaymentFunction(values))
        }
    })
    return (
        <Container px={"150px"}>
            <form onSubmit={formik.handleSubmit} >
                <Flex direction={"column"} gap={"md"} >
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
                        error={error}
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
                        onChange={(value) => {
                            setReqValue(value ? value : '')
                            setError(null)
                        }}
                    />
                    <Button type={"submit"}>Посчитать</Button>
                </Flex>
            </form>
            {checkAns &&
                <Container component={Center} bg={"var(--mantine-color-grey)"}>
                    { ans ?
                        <Title order={1}>Результат: {ans}</Title> :
                        <Title order={3}>К сожалению, калькулятор пока что не способен посчитать требуемое в заданных параметрах</Title>
                    }
                </Container>
            }
            <Space h={"100px"}/>
        </Container>
    );
};