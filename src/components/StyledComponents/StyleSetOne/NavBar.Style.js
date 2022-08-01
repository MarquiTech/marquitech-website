// import styled from "styled-components";


// export const NavBar = styled.div`

//     position: fixed;
//   align-items: center;
//   top: 0;
//   left: 0;
//   z-index: 9999;
//   width: 100%;
//   height: 100px;
//   background-color: white;
//   box-shadow: 0px 0px 10px gray;
//   display: flex;
//   line-height: 50px;
//   padding: 20px;

// `


import { createGlobalStyle } from "styled-components";


export const NavBarStyles = createGlobalStyle`
    
.nav{
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100px;
    background-color: white;
    /* box-shadow: 0px 0px 10px gray; */
    box-shadow: 3px 0px 17px #b2b2b2ab;
    display: flex;
    line-height: 50px;
    padding: 20px;
    }
.float_left{
    float: left;
}
.float_right{
    float: right;
}

.m-top-2{
    margin-top: 110px!important;
}
#hamburger{
display: none;
}
#menu_list_nav a{
    color: #000;
    margin-right: 30px;
    font-weight: 600;
    font-size: 15px;
}
#menu_back {
    position: fixed;
    top: 14vh;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999999999;
    display: none;
  }
  #menu_body {
    width: 100%;
    height: 200px;
    position: absolute;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px;
  }
  #menu_body p{
    line-height: 0.7em;
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
    }
`