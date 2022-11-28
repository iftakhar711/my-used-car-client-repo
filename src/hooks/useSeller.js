import { useEffect, useState } from "react";


const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://used-products-server-iftakhar711.vercel.app/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isAdmin);
                    setisSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;