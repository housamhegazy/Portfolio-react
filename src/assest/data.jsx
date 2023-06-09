import maltimart from "./images/maltimart.png";
import maltimart2 from "./images/maltimart-02.png";
import maltimart3 from "./images/maltimart-03.png";
import maltimart4 from "./images/maltimart-04.png";
import maltimart5 from "./images/maltimart-05.png";
import ecommerce1 from "./images/ecommerce-project1.png";
import ecommerce2 from "./images/ecommerce-project2.png";
import ecommerce3 from "./images/ecommerce-project3.png";
import ecommerce4 from "./images/ecommerce-project4.png";
import ecommerceRedux from "./images/ecommerce-redux.png";
import ecommerceRedux3 from "./images/ecommerce-redux-03.png";
import ecommerceRedux2 from "./images/ecommerce-redux-2.png";
import foodera from "./images/foodera1.png";
import trainer from "./images/trainer.png";
import fbApp1 from './images/fbApp1.png'
import fbApp2 from './images/fbApp2.png'
import fbApp3 from './images/fbApp3.png'
import fbApp4 from './images/fbApp4.png'
import fbApp5 from './images/fbApp5.png'
import fbApp6 from './images/fbApp6.png'

export const projects = [
  {
    imgURL: [
      `${maltimart}`,
      `${maltimart2}`,
      `${maltimart3}`,
      `${maltimart4}`,
      `${maltimart5}`,
    ],
    name: "Ecommerce Template",
    id: 1,
    details:
      "responsive E-commerce website with cart ,product details,admin dashboard to add products ,users page ,login , signup page and checkout page",
    skills: "React,React-Bootstrape,Css3,Redux,firebase",
    projectURL:"https://gleeful-torte-6d0000.netlify.app/"
  },
  {
    imgURL: [`${ecommerceRedux}`, `${ecommerceRedux2}`, `${ecommerceRedux3}`],
    name: "Ecommerce template",
    id: 2,
    details:
      "responsive E-commerce website with cart ,product details,using redux to get products from Api",
    skills: "React,Mui,Redux",
    projectURL:"https://magical-centaur-375ecd.netlify.app/"
  },
  {
    imgURL: [
      `${ecommerce1}`,
      `${ecommerce2}`,
      `${ecommerce3}`,
      `${ecommerce4}`,
    ],
    name: "Ecommerce Template",
    id: 3,
    details:
      "responsive E-commerce website with cart ,product details,using redux to get products from Api",
    skills: "React,Mui,Css3",
    projectURL:"https://grand-biscuit-e4ce0f.netlify.app/"
  },
  {
    imgURL: [`${foodera}`],
    name: "Reataurant Template",
    id: 4,
    details:
      "responsive Restaurant Website to show foods and price to customers ",
    skills: "React,Css3,tailwind",
    projectURL:"https://heartfelt-longma-576f29.netlify.app/"
  },
  {
    imgURL: [`${trainer}`],
    name: "X-Gym Template",
    id: 5,
    details: "responsive Gym Website to show training machines and trainers ",
    skills: "React,Tailwind,Css3",
    projectURL:"https://gleeful-bavarois-0ded04.netlify.app/"
  },
  {
    imgURL: [`${fbApp1}`,`${fbApp2}`,`${fbApp3}`,`${fbApp4}`,`${fbApp5}`,`${fbApp6}`],
    name: "Socila media App",
    id: 6,
    details: "responsive Social App ,add posts and comments ,profile page,singin page,signup page ",
    skills: "React,Mui,Css3,Firebase",
    projectURL:"https://level4-mui.web.app/"
  },
];
