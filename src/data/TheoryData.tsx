import {ITheoryItem} from "../models/ITheoryItem";
import {Space, Text, Table} from "@mantine/core";

export const TheoryData = [
    {
        src_name: "theory-for-ege",
        name: "Теория для ЕГЭ",
        image: "https://www.kamgov.ru/files/2023/01/18/6a5419e2b4207ba931cb7d6167c41cce.jpg",
        sections: [
            {
                title: "Аннуитетные платежи",
                content: <div>
                    <Text>Аннуитетный платеж – это такая система выплат, при которой кредит выплачивается ежегодно (ежемесячно) равными платежами. При этом каждый год (месяц) до внесения платежа банк начисляет на оставшуюся часть долга некоторый процент, то есть оставшаяся сумма долга увеличивается на это количество процентов.</Text>
                    <Space h={"xl"} />
                    <Text>Выведем общую формулу для аннуитетных платежей.</Text>
                    <Space h={"sm"} />
                    <Text fw={700}>Вывод формулы:</Text>
                    <Space h={"sm"} />
                    <Text>Пусть клиент взял в банке <b>A</b> руб. в кредит на <b>n</b> лет. Годовая процентная ставка в банке <b>r%</b> . Выплачивать кредит необходимо равными ежегодными платежами.</Text>
                    <Space h={"sm"} />
                    <Text>Обозначим <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mstyle displaystyle="true" scriptlevel="0">
                            <mfrac>
                                <mrow>
                                    <mn>100</mn>
                                    <mo>+</mo>
                                    <mi>r</mi>
                                </mrow>
                                <mn>100</mn>
                            </mfrac>
                        </mstyle>
                    </math> за <b>t</b> :</Text>
                    <Space h={"sm"} />
                    <Table withTableBorder withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Год</Table.Th>
                                <Table.Th>Сумма долга до начисления %</Table.Th>
                                <Table.Th>Сумма долга после начисления %</Table.Th>
                                <Table.Th>Сумма долга после платежа %</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>1</Table.Td>
                                <Table.Td>A</Table.Td>
                                <Table.Td>tA</Table.Td>
                                <Table.Td>tA - x</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>2</Table.Td>
                                <Table.Td>tA - x</Table.Td>
                                <Table.Td>t(tA - x)</Table.Td>
                                <Table.Td>t(tA - x)-x=t^2*A-tx-x</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>3</Table.Td>
                                <Table.Td>t^2*A-tx-x</Table.Td>
                                <Table.Td>t(t^2*A-tx-x)</Table.Td>
                                <Table.Td>t(t^2*A-tx-x)-x=t^3*A-t^2*x-tx-x</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>n</Table.Td>
                                <Table.Td>t^(n-1)*A-t^(n-2)*x-...-x</Table.Td>
                                <Table.Td>t(t^(n-1)*A-t^(n-2)*x-...-x)</Table.Td>
                                <Table.Td>t(t^(n-1)*A-t^(n-2)*x-...-x)-x</Table.Td>
                            </Table.Tr>
                            
                        </Table.Tbody>
                        <Table.Caption>Scroll page to see sticky thead</Table.Caption>
                    </Table>
                </div>,
            },
            {
                title: "Дифференцированный платеж",
                content: <Text>
                    Дифференцированный платеж – это такая система выплат, при которой сама сумма долга уменьшается равномерно, то есть на одну и ту же величину каждый год (месяц). При этом платежи каждый год разные.
                    <Space h={"sm"} />
                    Таким образом, если кредит взят на <b>n</b> лет, то это значит, что сумму кредита <b>A</b> разделили на <b>n</b> равных частей и что каждый год после платежа сумма долга уменьшается на <b>A*1/n</b> по сравнению с долгом на начало года.


                </Text> ,
            },
            {
                title: "Смешанный платеж",
                content: <Text>
                    Смешанный платеж - это система выплат, при которой меняются различные параметры взависимости от условия будь то выплата по кредиту (например в первые два года выплата была больше в 2 раза, чем в последние три года и т.д.), процент, сумма (например, чтобы сумма менялась в соответсвии с какой-то схемой и т.д.) и другие. </Text> ,
            },
            {
                title: "Вклады",
                content: <Text>
                    Банковский вклад — это сумма денег, переданная банку на хранение с целью получить доход в виде начисленных процентов. 
                    <Space h={"sm"} />
                    Раз в какой-то промежуток времени (в задачах это, как правило, месяц или год) банк начисляет на текущую сумму некоторое количество <b>r%</b> процентов. Раз в год после начисления процентов клиент, как правило, имеет право доложить на счет любую сумму денег. 
                    <Space h={"sm"} />
                    Также клиент имеет право снимать со счета любую сумму (естественно, не превышающую имеющуюся). Время, когда он может это сделать, указывается в задаче.

                </Text> ,
            },
            {
                title: "Оптимизация",
                content: <Text>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non ultricies justo, in tempus libero. Nulla sollicitudin non augue eget dignissim. Vivamus sagittis sem sed tempor hendrerit. Sed convallis metus eget tellus rhoncus dictum. Curabitur accumsan, neque at faucibus iaculis, est sem tincidunt lectus, sit amet eleifend neque orci nec mauris.</Text> ,
            },
        ],
    },
    {
        src_name: "theory-of-economics",
        name: "Теория Экономики",
        image: "https://i.pinimg.com/564x/cf/35/91/cf3591c157824cef0e27ed092549afe0.jpg",
        sections: [
            {
                title: "Начала экономической теории",
                content: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio fuga, dolor ullam ad fugiat incidunt autem ducimus perspiciatis voluptates? Molestias sunt quod eum quibusdam, aliquam minus aut illo sapiente.</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, doloribus magnam. Assumenda tenetur pariatur exercitationem, voluptate commodi dolor non repellendus rerum. Totam doloribus ratione, eveniet sapiente at nisi ipsum quas!</Text> ,
            },
            {
                title: "Параграф 2",
                content: <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, sed! Odit nemo tempore nam delectus a pariatur neque ab itaque enim rerum porro, perferendis modi accusantium molestias sint officiis reprehenderit.</Text> ,
            },
        ],
    },
    {
        src_name: "financial-literacy",
        name: "Финансовая грамотность",
        image: "https://i.pinimg.com/564x/20/66/52/2066527356f678e462bce6b025b59dcf.jpg",
        sections: [
            {
                title: "Параграф 1",
                content: <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, maiores voluptas. Amet temporibus quae, eius consectetur quasi asperiores quis porro veritatis modi, saepe sunt dicta atque iusto libero, possimus ex.</Text> ,
            },
            {
                title: "Параграф 2",
                content: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae corporis minima aliquid consequuntur asperiores corrupti eius suscipit mollitia, error, exercitationem quod ipsa cum, magni earum sit? Esse, totam sunt.</Text> ,
            },
            {
                title: "Параграф 3",
                content: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio perspiciatis possimus sed veniam a nisi fugiat est. Sed inventore nam suscipit reprehenderit alias eveniet deleniti dolorem voluptatum iusto mollitia.</Text> ,
            },
        ],
    },
] as ITheoryItem[]