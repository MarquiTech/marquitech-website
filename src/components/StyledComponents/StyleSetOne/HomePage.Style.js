import { createGlobalStyle } from "styled-components";

export const HomePageStyles = createGlobalStyle`

   .hero-text{
     font-size:2.7rem;
     font-weight: 700;
   }
   .b-radius{
    border-top-left-radius: 6rem;
    border-top-right-radius: 6rem;
    box-shadow: 3px 0px 17px #b2b2b2ab;
    
   }
   .responsive-padding{
    padding: 6rem;
   }
   #mobile-hero-display{
    display: none;
   }
   .wwd_text{
    font-size: 34px;
   }
   .m-top-2{
    margin-top: 110px;
}
   #display-none-mobile{
    display: block;
   }
     @media (max-width: 576px) {
         #menu_list_nav{
             display: none!important;
         }
         .responsive-padding{
            padding: 1.5rem;
        }
        .m-top-2{
            margin-top: 0px;
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
        #mobile-hero-display{
            display: block;
        }
        #display-none-mobile{
            display: none;
        }
.b-radius{
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    
   }
   .wwd_text{
    font-size: 24px;
   }
     }

`;
