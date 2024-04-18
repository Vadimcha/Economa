import {ITheoryItem} from "../models/ITheoryItem";
import {Space, Text, Table} from "@mantine/core";

export const TheoryData = [
    {
        src_name: "theory-for-ege",
        name: "Теория для ЕГЭ",
        image: "https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg",
        sections: [
            {
                title: "Аннуитетные платежи",
                content: <div>
                    <Text>Аннуитетный платеж – это такая система выплат, при которой кредит выплачивается ежегодно (ежемесячно) равными платежами. При этом каждый год (месяц) до внесения платежа банк начисляет на оставшуюся часть долга некоторый процент, то есть оставшаяся сумма долга увеличивается на это количество процентов.</Text>
                    <Space h={"xl"} />
                    <Text>Выведем общую формулу для аннуитетных платежей. Уже по уравнениям из предыдущих примеров должно стать понятно, как она выглядит. Но все же приведем ее вывод.</Text>
                    <Space h={"sm"} />
                    <Text fw={700}>Вывод формулы:</Text>
                    <Space h={"sm"} />
                    <Text>Пусть клиент взял в банке A руб. в кредит на n лет. Годовая процентная ставка в банке r% . Выплачивать кредит необходимо равными ежегодными платежами.</Text>
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
                    </math> за t :</Text>
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
                title: "Quisque a libero ac dui ultricies finibus.",
                content: <Text>Duis blandit magna vel nulla congue, ac laoreet dui semper. Quisque a cursus risus. Phasellus dignissim velit elit, nec laoreet diam pulvinar convallis. Mauris rhoncus sollicitudin tellus vitae feugiat. Vivamus non commodo erat. Vestibulum vel libero tincidunt orci iaculis placerat ac id nisl. Nulla placerat lectus felis. Maecenas volutpat massa nisi, et finibus tellus sollicitudin eu. Vivamus laoreet molestie neque, sit amet varius lectus faucibus quis. Suspendisse et mollis diam, sit amet pretium massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc pretium dapibus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis placerat mi, dignissim accumsan dolor tincidunt vel.</Text> ,
            },
            {
                title: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
                content: <Text>Nulla euismod ante arcu, a facilisis nulla mollis vel. Proin vel purus in libero porta ultricies a vel felis. Nulla mollis ipsum sit amet justo ullamcorper, eget ultricies nisi sollicitudin. Praesent sit amet ligula a erat vestibulum euismod vitae non sem. Aenean sed tellus non sapien sagittis facilisis quis ut enim. Vestibulum posuere magna eu urna imperdiet volutpat. Phasellus hendrerit vestibulum nisl, at volutpat velit pulvinar eu. Sed sit amet lectus sit amet leo convallis euismod. Vestibulum in cursus nulla, sit amet interdum lacus. Ut eget convallis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus est libero, in efficitur arcu tincidunt sit amet. Suspendisse ornare metus lobortis nisl venenatis dignissim.</Text> ,
            },
            {
                title: "Nulla ultricies eu nisl id malesuada.",
                content: <Text>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non ultricies justo, in tempus libero. Nulla sollicitudin non augue eget dignissim. Vivamus sagittis sem sed tempor hendrerit. Sed convallis metus eget tellus rhoncus dictum. Curabitur accumsan, neque at faucibus iaculis, est sem tincidunt lectus, sit amet eleifend neque orci nec mauris.</Text> ,
            },
        ],
    },
    {
        src_name: "english-name1",
        name: "Какая-то ABOBA",
        sections: [
            {
                title: "Параграф cfvsq rhenjq",
                content: <Text>Параграф cfvsq rhenjq</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
        ],
    },
    {
        src_name: "english-name2",
        name: "Какая-то ABOBA",
        sections: [
            {
                title: "Параграф cfvsq rhenjq",
                content: <Text>Параграф cfvsq rhenjq</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
        ],
    },
] as ITheoryItem[]