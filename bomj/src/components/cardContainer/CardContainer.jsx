import React from 'react'
import './style.css'
import img1 from './image__1_.jpeg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'


const picks = [
    {
        id: 0,
        name: "",
        title: "",
        amount: 0,
        zppersecond: "0"
    },
    {
        id: 1,
        name: "Elon Musk",
        title: "This is Elon Musk, he owns tesla and founds as the creator of PayPal. His fortune is approximately 300.000.000.000$.",
        photo: img1,
        amount: 300000000000,
        zppersecond: 68
    },
    {
        id: 2,
        name: "Bill Gates",
        title: "This is Bill Gates, he is co-founder of Microsoft. His fortune is approximately 130.000.000.000$.",
        photo: img2,
        amount: 130000000000,
        zppersecond: 20
    },
    {
        id: 3,
        name: "Nazarbayev",
        title: "This is NN, he is ...(You know who he is), His fortune is ~200klimon.",
        photo: img3,
        amount: 200000000,
        zppersecond: 3
    },
    {
        id: 4,
        name: "Marbik",
        title: "This is Marbik, he is one of the creators of this webpage. His GPA is lower than 1.5. He is not good soccer player, but tanks better than anyone else. His fortune (if he sells his house, parents, motorcycle, laptop and etc.) is 60000$.",
        photo: img4,
        amount: 60000,
        zppersecond: 0.000005
    },
    {
        id: 5,
        name: "Yeboka",
        title: "This is Yeboka, he is one of the creators of this webpage. He is good at coding and understanding all the principles of working with PLs. His fortune (if he sells his house, brother(which is here), car, laptop and etc.) is 250000$.",
        photo: img5,
        amount: 250000,
        zppersecond: 0.001
    }, 
]





export const CardContainer = ({pick, input}) => {

    const facts = [
        {
            id: 1,
            text: "Lamborginies you can buy ;) (may be partial)" ,
            amount: (input / 327000).toFixed(5)
        }, 
        {
            id: 2,
            text: "The weight with only 1$ dollar bills (kg)",
            amount: input * 0.001
        },
        {
            id: 3,
            text: "The number of IPhones 13 Pro you can buy (1099$)",
            amount: (input / 1099).toFixed(3)
        },
        {
            id: 4,
            text: `Elon Musk will earn the money as your salary in (seconds)`,
            amount: (input / 68).toFixed(2)
        },
        {   
            id: 5,
            text: "How many trees(average-sized) would be for your cash (1$ bill)",
            amount: (input/40000).toFixed(2)
            
        },
        {
            id: 6,
            text: "After this time you will earn to the Newest Bugatti Chiron (days)",
            amount: (3000000 / (input / 30)).toFixed(5)
        },
        {
            id: 7,
            text: "How many nFactorial START courses you can buy (till 17 July 389.000kzt)",
            amount: (input / 890).toFixed(4)
        },
        {
            id: 8,
            text: "How many Bitcoins you can buy",
            amount: (input/19360).toFixed(6)
        },
        {
            id: 9,
            text: "How many times you can invite Kairat Nurtas to your Toi",
            amount: (input/8000).toFixed(4)
        }
    ]

    let select = picks[pick];
    console.log(select);
  return (
    <div className='container'>
        <div className="personCard">
            <div className="ramka">
            {select.photo ? <img src={select.photo ? select.photo : ''} alt="sdf" className='photo'/> : ''}
                
            </div>
            <div className="text">
                <h2>{select.name}</h2>
                <p>{select.title}</p>
                <p className='motivationText'>
                    If you don't spend your money for nothing you will be as him after {(select.amount/(input/30)).toFixed(3)} days ({(select.amount/(input*12)).toFixed(3)} years).
                </p>
            </div>
        </div>
        <div className="facts">
            {facts.map((fact) => (
                <div key = {fact.id} className='card'>
                    <span className='digits'>{fact.amount}</span>
                    <p>{fact.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
