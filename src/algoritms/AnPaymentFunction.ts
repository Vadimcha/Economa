export const AnPaymentFunction = ({
  Summ, years, percents, payment, overpayment, choice}:
  {Summ: number, years: number, percents: number, payment: number, overpayment: number, choice: string}) => {
    let result = 0
    switch (choice) {
        case 'Срок': {
            if (years){
                result = years;
            }
            result = 0
            break;
        }
        case 'Сумма кредита': {
            result = payment * (100/(percents))*(1-(100/(100+percents))**(years));
            console.log("ABOBA", payment, percents, years)
            result = Number(result.toFixed(6));
            break;
        }
        case 'Процент кредита': {
            result = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
            result = Number(result.toFixed(6));
            break;
        }
        case 'Ежегодная выплата по кредиту': {
            result = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
            result = Number(result.toFixed(6));
            break;
        }
        case 'Переплата по кредиту': {
            let new_paiment = payment
            if(!payment) {
                new_paiment = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
            }
            result = years*new_paiment-Summ
            result = Number(result.toFixed(6));
            break;
        }
        case 'Сумма выплат по кредиту': {
            let new_paiment = payment, new_overpaiment = overpayment
            if(!overpayment) {
                new_paiment = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
                new_overpaiment = years*new_paiment-Summ
            }
            result = (years*new_overpaiment)/(years-(100/(percents))*(1-(100/(100+percents))**(years)));
            result = Number(result.toFixed(6))

            break;
        }
    }
    return result
}