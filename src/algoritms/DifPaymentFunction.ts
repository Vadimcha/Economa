export const DifPaymentFunction = 
    ({years, percents, summa_payments, summa_credit, selected_year, choice}:
    {years: number, percents: number, summa_payments: number, summa_credit: number, selected_year: number, choice: string}) => {
        let result = 0
        switch (choice) {
            case 'Срок': {
                let result = undefined
                return result

                break
            }
            case 'Сумма кредита': {
                let result = undefined
                return result

                break
                
            }
            case 'Процент кредита': {
                let result = undefined
                return result
                break
                
            }
            case 'Сумма выплат': {
                if (summa_payments){
                    return summa_payments
                    break
                }
                let overpayment = (percents/100)*summa_credit*(years+1)/2
                let result = overpayment+summa_credit
                return Number(result.toFixed(6))
                break
            }
            case 'Переплата по кредиту': {
                let result = (percents/100)*summa_credit*(years+1)/2
                return Number(result.toFixed(6))
                break
            }
            case 'Величина выплаты в определенный год': {
            

                let result = (percents/100)*(years-selected_year+1)/summa_credit+(summa_credit)/years 
                return Number(result.toFixed(6));
                break
            }
        }
    return result
}