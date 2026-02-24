import { useState } from 'react'


import {InputBox} from './components'
import useCurrencyInfo from './hooks/currency_info.js'

function App() {
    const [amount,setAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setTo]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0);

    const rates = useCurrencyInfo(from);

    const options=Object.keys(rates)

    const res=()=>{                                 //-> function to multiply the values 
       setConvertedAmount(amount*(rates[to] ))
    }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://i.pinimg.com/1200x/d7/eb/a5/d7eba59d540c5cd82ba84bb441869c27.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           res()    //-----  onCurrencyChange={(currency)=> setFrom(currency)}                        onCurrencyChange={(currency)=> setFrom(currency)}                        onCurrencyChange={(currency)=> setFrom(currency)}                        onCurrencyChange={(currency)=> setFrom(currency)}                        onCurrencyChange={(currency)=> setFrom(currency)}                        onCurrencyChange={(currency)=> setFrom(currency)}----------- calling converting  
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onAmountChange={(amount)=> setAmount(amount)} //arrow function ..gets call when we change somethig in from div -> this function get call from inputBox.jsx
                                onCurrencyChange={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisable={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }


export default App
