import { Link } from "react-router-dom"

const  Information =[
   {
    id:1,
    text:    "Celka biyaha ee miyiga waa arrin muhiimad weyn\n" + 
            "u leh dadka ku nool miyiga Soomaaliya",
    infor:`Ceel waa ilo biyo oo laga qodo dhulka si loogu isticmaalo 
    biyaha cabitaanka, waraabka, iyo isticmaalka guud ee nolosha  
     Ceelasha ayaa door muhiim ah ka ciyaara nolosha dadka ku nool miyiga
    gaar ahaan Soomaaliya oo ay biyo yari ka jirto......`,

    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRSeqGrJKdAxac1NwNmDD1Pf_IowT5KOFTStoxuubZO93TzIbK9lffj-FvCQTjynjgDA&usqp=CAU",
     Btn:"Faahfaahin Celka",
     Link:"/cels"
     
   },

   {
      id:2,
      text:"Beeraha waa mid ka mid ah tiirarka ugu muhiimsan ee \n" + 
      "dhaqaalaha Soomaaliya gaar ahaan deegaannada miyiga ah,",
      infor: `Beeruhu waxay leeyihiin door muhiim ah oo kaalin ka 
      qaata nolol maalmeedka, cuntada, iyo dhaqaalaha bulshada
      Inkastoo Soomaaliya ay tahay dal leh cimilad qallafsan oo 
      badanaa abaar iyo roob la'aan ka jirto, haddana beeraha ayaa
       weli kaalin weyn ku leh nolosha dadka iyo wax soo saarka waddanka.......`,
      image:"https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=600",
      Btn:"Faahfaahin Beeraha",
        // Link:"/BuyFarm"
        Link:"/Nucyada Bearaha"
     },
     {
      id:2,
      text:"Beeraha waa mid ka mid ah tiirarka ugu muhiimsan ee \n" + 
      "dhaqaalaha Soomaaliya gaar ahaan deegaannada miyiga ah,",

      infor: `Xoolaha Soomaaliya waxay leeyihiin muhiimad weyn oo dhaqan iyo dhaqaale.
       Dalka wuxuu leeyahay dhul ballaaran oo ku habboon xoolo dhaqashada,
        waxaana la soo saaraa noocyo badan oo xoolo ah........`,

      image:"data:image/jpeg;base64,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",
      Btn:"Faahfaahin Beeraha",
        // Link:"/BuyFarm"
        Link:"/Nucyada Xoolaha"
     },
     
]

export default Information