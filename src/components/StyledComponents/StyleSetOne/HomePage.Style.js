
import { createGlobalStyle } from "styled-components";


export const HomePageStyles = createGlobalStyle`

   .hero-text{
     font-size:3rem;
     font-weight: 700;
   }
   .b-radius{
    border-top-left-radius: 6rem;
    border-top-right-radius: 6rem;
    box-shadow: 3px 0px 17px #b2b2b2ab;
    
   }
   .wwd_text{
    font-size: 34px;
   }
     @media (max-width: 576px) {
         #menu_list_nav{
             display: none!important;
         }
         .nav{
             height: 86px;
         }
         #hamburger{
             display: block;
         }
         .hero-text{
            font-size:1.7rem;
            font-weight: 700;
        }
.b-radius{
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    
   }
   .wwd_text{
    font-size: 24px;
   }
     }

`


