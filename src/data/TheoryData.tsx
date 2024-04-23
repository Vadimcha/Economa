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
                    <Text>Пусть клиент взял в банке <math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>A</mi>
                        </math> руб. в кредит на <b>n</b> лет. Годовая процентная ставка в банке <math xmlns="http://www.w3.org/1998/Math/MathML">
                                        <mi>r</mi>
                                </math>%.
                            Выплачивать кредит необходимо равными ежегодными платежами.
                    </Text>
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
                        <Table.Caption></Table.Caption>
                    </Table>
                    <Text>Таким образом: <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mi>t*</mi>
                        <mo stretchy="false">(</mo>
                        <msup>
                            <mi>t</mi>
                            <mrow>
                            <mi>n</mi>
                            <mo>-</mo>
                            <mn>1</mn>
                            </mrow>
                        </msup>
                        <mi>A</mi>
                        <mo>-</mo>
                        <msup>
                            <mi>t</mi>
                            <mrow>
                            <mi>n</mi>
                            <mo>-</mo>
                            <mn>2</mn>
                            </mrow>
                        </msup>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mo>...</mo>
                        <mo>-</mo>
                        <mi>x</mi>
                        <mo stretchy="false">)</mo>
                        <mo>-</mo>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mn>0, </mn>
                        <mo stretchy="false"> </mo>
                        <msup>
                            <mi>t</mi>
                            <mi>n</mi>
                            
                        </msup>
                        
                        <mi>A</mi>
                        <mo>-</mo>
                        <mi>x</mi>
                        <mo stretchy="false">(</mo>
                        <msup>
                            <mi>t</mi>
                            <mrow>
                            <mi>n</mi>
                            <mo>-</mo>
                            <mn>1</mn>
                            </mrow>
                        </msup>
                        <mo>+</mo>
                        <msup>
                            <mi>t</mi>
                            <mrow>
                            <mi>n</mi>
                            <mo>-</mo>
                            <mn>2</mn>
                            </mrow>
                        </msup>
                        <mo>+</mo>
                        <mo>...</mo>
                        <mo>+</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        <mo>=</mo>
                        <mn>0</mn>
                        </math>

                    </Text>
                    <Space h={"sm"} />
                    <Text>
                        Значит в случае с аннуитетным платежом имеет место формула:<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                        <mstyle mathsize="1.2em">
                            <mrow>
                            <msup>
                                <mrow>
                                <mo>(</mo>
                                <mfrac>
                                    <mrow>
                                    <mn>100</mn>
                                    <mo>+</mo>
                                    <mi>r</mi>
                                    </mrow>
                                    <mn>100</mn>
                                </mfrac>
                                <mo>)</mo>
                                </mrow>
                                <mi>n</mi>
                            </msup>
                            <mo>*</mo>
                            <mi>A</mi>
                            <mo>-</mo>
                            <mi>x</mi>
                            <mrow>
                                <mo>(</mo>
                                <mrow>
                                <msup>
                                    <mrow>
                                    <mo>(</mo>
                                    <mfrac>
                                        <mrow>
                                        <mn>100</mn>
                                        <mo>+</mo>
                                        <mi>r</mi>
                                        </mrow>
                                        <mn>100</mn>
                                    </mfrac>
                                    <mo>)</mo>
                                    </mrow>
                                    <mrow>
                                    <mi>n</mi>
                                    <mo>-</mo>
                                    <mn>1</mn>
                                    </mrow>
                                </msup>
                                <mo>+</mo>
                                <msup>
                                    <mrow>
                                    <mo>(</mo>
                                    <mfrac>
                                        <mrow>
                                        <mn>100</mn>
                                        <mo>+</mo>
                                        <mi>r</mi>
                                        </mrow>
                                        <mn>100</mn>
                                    </mfrac>
                                    <mo>)</mo>
                                    </mrow>
                                    <mrow>
                                    <mi>n</mi>
                                    <mo>-</mo>
                                    <mn>2</mn>
                                    </mrow>
                                </msup>
                                <mo>+</mo>
                                <mo>...</mo>
                                <mo>+</mo>
                                <mn>1</mn>
                                </mrow>
                                <mo>)</mo>
                            </mrow>
                            <mo>=</mo>
                            <mn>0</mn>
                            </mrow>
                        </mstyle>
                        </math>
                    </Text>
                </div>,
            },
            {
                title: "Дифференцированный платеж",
                content: <Text>
                    Дифференцированный платеж – это такая система выплат, при которой сама сумма долга уменьшается равномерно, то есть на одну и ту же величину каждый год (месяц). При этом платежи каждый год разные.
                    <Space h={"sm"} />
                    Таким образом, если кредит взят на <b>n</b> лет, то это значит, что сумму кредита <b>A</b> разделили на <b>n</b> равных частей и что каждый год после платежа сумма долга уменьшается на <b>A*1/n</b> по сравнению с долгом на начало года.
                    <Space h={"sm"} />
                    Пусть кредит взят на <b>A</b> рублей, на <b>n</b> лет, годовая ставка <b>r%</b>.
                    <Space h={"sm"} />
                    Значит, каждый год долг должен уменьшаться <b>(1/n)*A</b> рублей. К тому же, например, в первый год после начисления процентов долг составит <b>A+(r/100)*A</b>, поэтому обозначим для удобства <b>(r/100)=t</b> и составим таблицу:
                    <Space h={"sm"} />

                    <Table withTableBorder withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Год</Table.Th>
                                <Table.Th>Сумма долга до начисления %</Table.Th>
                                <Table.Th>Сумма долга после начисления %</Table.Th>
                                <Table.Th>Сумма долга после платежа %</Table.Th>
                                <Table.Th>Выплата</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>1</Table.Td>
                                <Table.Td>A</Table.Td>
                                <Table.Td>A+tA</Table.Td>
                                <Table.Td>A*(n-1)/n</Table.Td>
                                <Table.Td>t*A+A*(1/n)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>2</Table.Td>
                                <Table.Td>A*(n-1)/n</Table.Td>
                                <Table.Td>A*(n-1)/n+ t*A*(n-1)/n</Table.Td>
                                <Table.Td>A*(n-2)/n</Table.Td>
                                <Table.Td>t*A*(n-1)/n+A*(1/n)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>3</Table.Td>
                                <Table.Td>A*(n-2)/n</Table.Td>
                                <Table.Td>A*(n-2)/n+ t*A*(n-2)/n</Table.Td>
                                <Table.Td>A*(n-3)/n</Table.Td>
                                <Table.Td>A*(n-3)/n+A*(1/n)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                                <Table.Td>...</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>n-1</Table.Td>
                                <Table.Td>(2/n)*A</Table.Td>
                                <Table.Td>(2/n)*A+y*(2/n)*A</Table.Td>
                                <Table.Td>(1/n)*A</Table.Td>
                                <Table.Td>t*(2/n)*A+(1/n)*A</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>n</Table.Td>
                                <Table.Td>(1/n)*A</Table.Td>
                                <Table.Td>(1/n)*A+t*(1/n)*A</Table.Td>
                                <Table.Td>0</Table.Td>
                                <Table.Td>t*(1/n)*A+(1/n)*A</Table.Td>
                            </Table.Tr>
                            
                        </Table.Tbody>
                        <Table.Caption></Table.Caption>
                    </Table>
                    <Space h={"sm"} />
                    Таким образом, если i - номер года, то выплата i-ый год будет равна: <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msub>
                        <mi>x</mi>
                        <mi>i</mi>
                    </msub>
                    <mo>=</mo>
                    <mi>y</mi>
                    <mo>&#x22C5;</mo>
                    <mfrac>
                        <mrow>
                        <mi>n</mi>
                        <mo>&#x2212;</mo>
                        <mo stretchy="false">(</mo>
                        <mi>i</mi>
                        <mo>&#x2212;</mo>
                        <mn>1</mn>
                        <mo stretchy="false">)</mo>
                        </mrow>
                        <mi>n</mi>
                    </mfrac>
                    <mi>A</mi>
                    <mo>+</mo>
                    <mstyle displaystyle="true" scriptlevel="0">
                        <mfrac>
                        <mn>1</mn>
                        <mi>n</mi>
                        </mfrac>
                    </mstyle>
                    <mi>A</mi>
                    </math>, или:
                    <Space h={"sm"} />
                                        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                    <mstyle mathsize="1.2em">
                        <mrow>
                        <msub>
                            <mi>x</mi>
                            <mi>i</mi>
                        </msub>
                        <mo>=</mo>
                        <mstyle displaystyle="true" scriptlevel="0">
                            <mfrac>
                            <mi>r</mi>
                            <mn>100</mn>
                            </mfrac>
                        </mstyle>
                        <mo>&#x22C5;</mo>
                        <mstyle displaystyle="true" scriptlevel="0">
                            <mfrac>
                            <mrow>
                                <mi>n</mi>
                                <mo>&#x2212;</mo>
                                <mi>i</mi>
                                <mo>+</mo>
                                <mn>1</mn>
                            </mrow>
                            <mi>n</mi>
                            </mfrac>
                        </mstyle>
                        <mi>A</mi>
                        <mo>+</mo>
                        <mstyle displaystyle="true" scriptlevel="0">
                            <mfrac>
                            <mn>1</mn>
                            <mi>n</mi>
                            </mfrac>
                        </mstyle>
                        <mi>A</mi>
                        </mrow>
                    </mstyle>
                    </math>
                    

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
                content: <Text>Некоторые экономические задачи требуют рассчитать максимальное или минимально значение того или иного параметра. Такие задачи относят к задачам на оптимизацию (то есть на нахождение наибольшего или наименьшего значения). Большинство из них решается составлением т.н. целевой функции, нахождением ее производной и точек максимума или минимума.</Text> ,
            },
        ],
    },
    {
        src_name: "theory-of-economics",
        name: "Теория Экономики",
        image: "https://i.pinimg.com/564x/cf/35/91/cf3591c157824cef0e27ed092549afe0.jpg",
        sections: [
            {
                title: "Экономическая теория как наука",
                content: <Text fw={0}>
                                                <b><i>Экономическая теория</i></b> – фундаментальная наука, раскрывающая
                            законы, управляющие развитием производства, распределения, обмена и
                            потребления, и поэтому является методологической основой всей системы
                            экономических наук
                            <Space h={"sm"} />
                                                <b><i>Экономическая теория</i></b> — наука об эффективном использовании
                            ограниченных ресурсов. Эффективность - это одно из базовых понятий
                            экономической науки, которое дает возможность исследовать развитие
                            общественного производства. 
                            <Space h={"sm"} />

                            Хозяйственная деятельность людей представляет собой сложный
                            и запутанный комплекс разнообразных явлений и процессов, в котором теоретическая экономика выделяет четыре стадии: собственно
                            производство, распределение, обмен и потребление.
                            <Space h={"sm"} />
                                                        Если посмотреть на домохозяйство с точки зрения удовлетворения его
                            материальных потребностей, то в качестве цели будет выступать
                            максимизация удовлетворения потребностей, а в качестве средств ее
                            достижения – максимизация дохода домохозяйства
                                <Space h={"sm"} />
                                                            Экономическая эффективность домохозяйства = Максимизация
                            удовлетворения потребностей при оптимизации как структуры /
                            Максимизация дохода домохозяйства при минимизации затрат
                            ресурсов.
                            <Space h={"sm"} />
                            Экономическая эффективность фирмы = Максимизация прибыли /
                            минимизация издержек
                            <Space h={"sm"} />
                            Главной целью компании является максимизация прибыли, которая
                            является результатом производства. Средствами ее достижения являются
                            затраты фирмы, которые в экономической теории называется издержками. В
                            реальной хозяйственной практике она измеряется через норму прибыли:
                            <Space h={"sm"} />
                            Норма прибыли = ( Величина прибыли / величина издержек ) * 100%  

                            <Space h={"sm"} />    

                            <i><b>Производство</b></i> — это процесс создания материальных и духовных благ, необходимых для существования и развития человека.
                            <Space h={"sm"} />

                            <i><b>Распределение</b></i> — это процесс определения доли, количества,
                            пропорции, в которой каждый хозяйственный субъект принимает
                            участие в произведенном продукте.
                            <Space h={"sm"} />

                            <i><b>Обмен</b></i> — это процесс движения материальных благ и услуг от
                            одного субъекта к другому и форма общественной связи производителей и потребителей, опосредствующая общественный обмен
                            веществ.
                            <Space h={"sm"} />

                            <i><b>Потребление</b></i> — это процесс использования результатов производства для удовлетворения определенных потребностей.
                </Text> ,
            },
            {
                title: "Теория поведения потребителя",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Теория фирмы",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Теория рынков и рыночных структур",
                content: <Text>Находится в разработке...</Text> ,
            },
            
        ],
    },
    {
        src_name: "financial-literacy",
        name: "Финансовая грамотность",
        image: "https://i.pinimg.com/564x/20/66/52/2066527356f678e462bce6b025b59dcf.jpg",
        sections: [
            {
                title: "Банковская и налоговая системы",
                content: <Text fw={100}>В повседневной жизни каждый человек так или иначе сталкивается с работой финансовых организаций.
                     <Space h={"sm"} />
                    <i><b>Финансовая организация</b></i> — это специальная организация, которая на основании государственного разрешения (его называют лицензией) предоставляет различного рода услуги, связанные с использованием и перемещением денежных средств от одного клиента к другому. Такие услуги называются <i><b>финансовыми</b></i>.
                    <Space h={"sm"} />
                    К финансовым услугам относятся:
                    <ul>
                        <li>-Банковские услуги</li>
                        <li>-Страховые услуги</li>
                        <li>-Услуги по пенсионному накоплению</li>
                        <li>-Покупа и продажа ценных бумаг</li>
                    </ul>
                    <Space h={"sm"} />

                    Финансовые организации в качестве основной цели своей деятельности рассматривают привлечение свободных денежных средств граждан и предоставление денежных средств в долг тем, кто в них нуждается.
                    <Space h={"sm"} />


                    К финансовым организациям относят:
                    <ul>
                        <li>-Банки</li>
                        <li>-Страховые компании</li>
                        <li>-Пенсионные фонды</li>
                        <li>-Кредитные союзы</li>
                        <li>-Инвестиционные фонды, компании по доверительному управлению средствами инвесторов</li>
                        <li>-Брокерские компании</li>
                        <li>-Дилерские компании</li>
                        <li>-Фондовые биржи</li>
                    </ul>
                    <Space h={"sm"} />

                    Рассмотрение деятельности финансовых организаций начнём с банков, так как среди населения услуги этих финансовых организаций наиболее востребованы
                    <Space h={"sm"} />
                    К основной деятельности банков относят:
                    <ul>
                        <li>-Кредитные услуги (предоставление кредитов)</li>
                        <li>-Расчетные операции (осуществление платежей по поручению держателей, вкладчиков и т.д.)</li>
                        <li>-Кассовые операции (прием и выдача денежных средств)</li>
                        <li>-Комиссионные операции (выдача клиентам поручений по операциям, связанных с куплей-продажей)</li>
                        <li>-Курсовые операции (покупка и продажа иностранной валюты и ценных бумаг)</li>
                        <li>-Финансовые операции</li>
                    </ul>
                    <Space h={"sm"} />
                    К банковским организациям также относятся специальные клиринговые учреждения и лизинговые компании

                    

                    
                </Text> ,
            },
            {
                title: "Риски и финансовая безопасность",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Кредитование",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Страхование",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Пенсионное накопление",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Финансовые механизмы предприятия",
                content: <Text>Находится в разработке...</Text> ,
            },
            {
                title: "Организация и ведение собственные бизнеса",
                content: <Text>Находится в разработке...</Text> ,
            },
        ],
    },
] as ITheoryItem[]