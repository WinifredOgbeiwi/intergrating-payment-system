import React, { useState } from "react"
import { PaystackButton } from "react-paystack"

const PAYSTACK_PUBLIC_KEY = "pk_test_4ae66eb66c079a10dac0500f26cd3df6fce56c09"
const Donate = () => {
    const publicKey = PAYSTACK_PUBLIC_KEY;
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [amount, setAmount] = useState('')
    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        // onSuccess: () =>
        //     setInvoice(true),
        onClose: () => alert("Are you sure you want to cancel? ")
    }
    const date = new Date().toDateString()
    return (
        <div className="flex justify-center items-center h-screen text-xl">
            <div className="w-2/3 md:w-1/3 ">
                    <form className="flex flex-col gap-7 text-center">
                        <input
                            className="border-2 p-2"
                            type="text"
                            id="name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="border-2 p-2"
                            type="text"
                            id="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                     
                        <input
                            className="border-2 p-2"
                            type="text"
                            id="phone"
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />

                    
                        <input
                            className="border-2 p-2"
                            type="number"
                            id="amount"
                            placeholder="Amount"
                            required
                            onChange={(e) => setAmount(e.target.value)}
                        />
                
                     </form>
 <PaystackButton {...componentProps} className=" px-4 py-2 rounded-md bg-green-500  hover:bg-green-900 mt-6"/>   
            </div>

        </div>
    )
}

export default Donate
