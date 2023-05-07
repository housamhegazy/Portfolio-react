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
  },
  {
    imgURL: [`${ecommerceRedux}`, `${ecommerceRedux2}`, `${ecommerceRedux3}`],
    name: "Ecommerce template",
    id: 2,
    details:
      "responsive E-commerce website with cart ,product details,using redux to get products from Api",
    skills: "React,Mui,Redux",
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
  },
  {
    imgURL: [`${foodera}`],
    name: "Reataurant Template",
    id: 4,
    details:
      "responsive Restaurant Website to show foods and price to customers ",
    skills: "React,Css3,tailwind",
  },
  {
    imgURL: [`${trainer}`],
    name: "X-Gym Template",
    id: 4,
    details: "responsive Gym Website to show training machines and trainers ",
    skills: "React,Tailwind,Css3",
  },
];
