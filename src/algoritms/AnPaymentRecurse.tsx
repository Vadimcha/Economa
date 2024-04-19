export interface IRow {
    year: string,
    first: string,
    second: string,
    third: string
}

export const AnPaymentRecurse = (years: number, copyRows: IRow[] = []): IRow[] => {
    let rows = copyRows;
    if(years == 0) {
        return rows;
    }
    if (rows.length == 0)
        rows.push({year: "1", first: "A", second: "t * A", third: "t * A - x"})
    else {
        let prevElem = rows[rows.length - 1]
        let first = prevElem.third
        let second = ''
        for(let i = 0; i < first.length; ++i) {
            if(first[i] == "t" && first[i + 1] != '^') second += '(t^2)';
            else if(first[i] == "t" && first[i + 1] == '^') {
                second += `t^${Number(first[i + 2]) + 1}`;
                i += 2;
            }
            else if(first[i] == "x" && first[i - 1] != 't' && first[i - 1] != ')') second += 'tx'
            else second += first[i]
        }
        let third = second + ' - x'
        rows.push({year: String(Number(prevElem.year) + 1), first: first, second: second, third: third})
    }
    return AnPaymentRecurse(years - 1, rows)
}