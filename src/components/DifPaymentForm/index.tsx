import {useState} from "react";
import {useFormik} from "formik";
import {Button, Center, Container, Flex, Select, Space, TextInput, Title} from "@mantine/core";
import {DifPaymentFunction} from "../../algoritms/DifPaymentFunction";

export const DifPaymentForm = () => {
    const [ans, setAns] = useState<number | null>(null)
    const [reqValue, setReqValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [yearError, setYearError] = useState<string | null>(null)
    const formik = useFormik({
        initialValues: {
            term: '',
            percent: '',
            summa_payments: '',
            summa_credit: '',
            selected_year: ''
        },
        onSubmit: (v) => {
            if(!reqValue) {
                setError('Введите значение')
                return;
            }
            if(reqValue == 'Величина выплаты в определенный год' && !(Number(v.term) >= Number(v.selected_year) && Number(v.selected_year) > 0)) {
                setYearError("Введите корректный год")
            }
            let values = {
                years: Number(v.term),
                percents: Number(v.percent),
                summa_payments: Number(v.summa_payments),
                choice: reqValue,
                summa_credit: Number(v.summa_credit),
                selected_year: Number(v.selected_year)
            }
            setAns(DifPaymentFunction(values))
        }
    })
    return (
        <Container px={"150px"}>
            <form onSubmit={formik.handleSubmit} >
                <Flex direction={"column"} gap={"md"} >
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
                        name={"summa_payments"}
                        label={"Сумма платежей (млн руб.)"}
                        placeholder={"Введите сумму платежей"}
                        value={formik.values.summa_payments}
                        onChange={formik.handleChange}
                    />
                    <TextInput
                        name={"summa_credit"}
                        label={"Сумма кридита (млн руб.)"}
                        placeholder={"Введите сумму кредита"}
                        value={formik.values.summa_credit}
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
                            'Сумма выплат',
                            'Переплата по кредиту',
                            'Величина выплаты в определенный год',
                        ]}
                        onChange={(value) => {
                            setReqValue(value ? value : '')
                            setError(null)
                        }}
                    />
                    { reqValue == 'Величина выплаты в определенный год' ?
                        <TextInput
                            required
                            name={"selected_year"}
                            label={"Год выплаты (год/месяц)"}
                            error={yearError}
                            placeholder={"Введите год/месяц, в который была произведена выплата"}
                            value={formik.values.selected_year}
                            onChange={(e: React.ChangeEvent<any>) => {
                                formik.handleChange(e)
                                setYearError('')
                            }}
                        /> : <></>}
                    <Button type={"submit"}>Посчитать</Button>
                </Flex>
            </form>
            {ans &&
                <Container component={Center} bg={"var(--mantine-color-grey)"}>
                    <Title order={1}>Результат: {ans}</Title>
                </Container>
            }
            <Space h={"100px"}/>
        </Container>
    );
};