import {
    useState,
    useLayoutEffect
} from "react"

export function UseDimension(): number[] {

    const [dim, setDim] = useState([0, 0])

    useLayoutEffect(() => {

        function updateDim() {
            setDim([window.innerWidth, window.innerHeight]);
        };

        updateDim();
        window.addEventListener('resize', updateDim);

        return () => {
            window.removeEventListener('resize', updateDim);
        };

    }, [])

    return dim
}

export default function UseDate(l: string[],t: number): any[] {

    const [date, setDate] = useState(l.map(() => '0'))

    useLayoutEffect(() => {

        function recognizeDate(s: string | undefined): any {
            let r;
            let date: Date = new Date();
            if (s === 'date') {
                r = date.getDate()
            } else if (s === 'day') {
                r = date.getDay()
            } else if (s === 'hour') {
                r = date.getHours();
            } else if (s === 'minute') {
                r = date.getMinutes();
            } else if (s === 'second') {
                r = date.getSeconds();
            }
            return r
        }

        function updateDate() {
            let result: string[] = [];
            for (let i = 0; i < l.length; i++) {
                let x = l[i];
                result.push(recognizeDate(x));
            }
            setDate(result)
        }



        const update = setInterval(updateDate, t);

        return () => {
            clearInterval(update);
        }
    }, [])

    return date
}