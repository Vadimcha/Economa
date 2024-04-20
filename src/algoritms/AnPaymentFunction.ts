export const AnPaymentFunction = ({
    
  Summ, years, percents, payment, overpayment, choice}:
  {Summ: number, years: number, percents: number, payment: number, overpayment: number, choice: string}) => {
    function getBaseLog(x: number, y: number) {
        return Math.log(y) / Math.log(x);
      }
    switch (choice) {
        case 'Срок': {
            if (years){
                return years;
                break
            }
            let percents2 = (100+percents)/100
            let equation_for_years = (payment)/(payment+Summ-Summ*percents2) 
            let result = getBaseLog(percents2, equation_for_years);
            if (result == -Infinity || result == +Infinity){
                return undefined
            }
            return Number(result.toFixed(1));
            break;
        }
        case 'Сумма кредита': {
            if (Summ){
                return Summ;
                break
            }
            let percents2 = (100+percents)/100
            let result = payment * ((percents2**years-1)/(percents2**(years)*(percents2-1)));
            console.log("ABOBA", payment, percents, percents2, years)
            return Number(result.toFixed(6));
            break;
        }
        case 'Процент кредита': {
            if (percents){
                return percents;
                break
            }
            
            return undefined
            break;
        }
        case 'Ежегодная выплата по кредиту': {
            if (payment){
                return payment;
                break
            }
            let percents2 = (100+percents)/100
            let result = Summ*(percents2-1)*(percents2**years)/(percents2**years-1)
            return Number(result.toFixed(6));
            break;
        }
        case 'Переплата по кредиту': {
            if (overpayment){
                return overpayment;
                break
            }
            let percents2 = (100+percents)/100
            let new_paiment = payment
            if(!payment) {
                new_paiment = Summ*(percents2-1)*(percents2**years)/(percents2**years-1)
            }
            let result = years*new_paiment-Summ
            return Number(result.toFixed(6));
            break;
        }
        case 'Сумма выплат по кредиту': {
            
            let new_paiment = payment, new_overpayment = overpayment
            let percents2 = (100+percents)/100
            
            if (!Summ){
                Summ = payment * ((percents2**years-1)/(percents2**(years)*(percents2-1)))
            }
            if (!payment){
                payment = Summ*(percents2-1)*(percents2**years)/(percents2**years-1)
            }
            if(!overpayment) {
                new_overpayment = years*new_paiment-Summ
            }
            let result = new_overpayment+Summ;
            return result = Number(result.toFixed(6))

            break;
        }
    }
    
}