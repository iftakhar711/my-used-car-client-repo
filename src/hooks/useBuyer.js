import { useEffect, useState } from "react";


const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setisBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://products-server-eta.vercel.app/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setisBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;