import { useEffect, useState } from "react";

function Content() {
    const [time, setTime] = useState(10);

    useEffect(() => {
        const countTime = () => {
            if (time > 0) setTime(time - 1);
        };

        setTimeout(countTime, 1000);
    }, [time]);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Content;
