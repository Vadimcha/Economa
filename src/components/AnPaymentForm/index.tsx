import {useFormik} from "formik";
import {Button, Center, Container, Flex, Select, Space, Table, TextInput, Title, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import {AnPaymentFunction} from "../../algoritms/AnPaymentFunction";
import {IRow, AnPaymentRecurse} from "../../algoritms/AnPaymentRecurse";

export const AnPaymentForm = () => {
    const [ans, setAns] = useState<any>(undefined)
    const [checkAns, setCheckAns] = useState<boolean> (false)
    const [reqValue, setReqValue] = useState<string>('')
    const [yearError, setYearError] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [tableData, setTableData] = useState<React.ReactNode> (<></>)
    const formik = useFormik({
        initialValues: {
            credit_sum: '',
            term: '',
            percent: '',
            payment: '',
            overpayment: '',
        },
        onSubmit: (v) => {
            setTableData(<></>)
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
            if(values.years && values.years > 9) {
                setYearError("Введите значение от 1 до 10")
                return;
            }
            const Ans = AnPaymentFunction(values)
            setCheckAns(true)
            setAns(Ans)
            if(Ans && values.years && values.percents && (values.payment || values.Summ)) {
                const d = AnPaymentRecurse(values.years)
                setTableData(
                    <div>
                        <Text>Таблица изображающая схему выплаты</Text>
                        <Table withTableBorder withColumnBorders>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Год</Table.Th>
                                    <Table.Th>Сумма долга до начисления %</Table.Th>
                                    <Table.Th>После начисления %</Table.Th>
                                    <Table.Th>Сумма долга после платежа</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {d.map((row: IRow) => (
                                    <Table.Tr key={row.year}>
                                        <Table.Td>{row.year}</Table.Td>
                                        <Table.Td>{row.first}</Table.Td>
                                        <Table.Td>{row.second}</Table.Td>
                                        <Table.Td>{row.third}</Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>
                        </Table>
                        <Text>A - сумма кредита, t - процент кредита, x - ежегодная выплата</Text>
                    </div>
                );
            }
        }
    })
    useEffect(() => {console.log(tableData)}, [tableData])
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
                        error={yearError}
                        placeholder={"Введите срок на который берётся кредит"}
                        value={formik.values.term}
                        onChange={(e: React.ChangeEvent<any>) => {
                            formik.handleChange(e)
                            setYearError('')
                        }}
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
            {checkAns ?
                <Container component={Center} bg={"var(--mantine-color-grey)"} mt={"md"} px={0}>
                    <Flex direction={"column"} gap={"md"}>
                        { ans ?
                            <Title order={1}>Результат: {ans}</Title> :
                            <Title order={3}>К сожалению, калькулятор пока что не способен посчитать требуемое в заданных параметрах</Title>
                        }
                        {tableData}
                    </Flex>
                </Container> : <></>
            }
            <Space h={"100px"}/>
        </Container>
    );
};