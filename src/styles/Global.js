import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --bg-base: #331D2C;
    --bg-secondary: #3F2E3E;
    --bg-third: #A78295;
    --color: #EFE1D1
}
html{
    font-family: 'Roboto Condensed', sans-serif;    
    color: var(--color);
    background-color: var(--bg-base);
    background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
}
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.4s;
}
.hiddenNav{
  transform: translateY(-158px);
  box-shadow: none;
}
@media only screen and (max-width: 768px){
    .hiddenNav{
      transform: translateY(-446px);
      box-shadow: none;
    }
}
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
// font-family: 'Nunito', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;
// font-family: 'Schibsted Grotesk', sans-serif;
// font-family: 'Silkscreen', cursive;

//colors #ffffff #f4f4f1   
//#f8f9fa #f1f3f4
//text colors #cacac7 #2b393c #a2a29e 
//#5f6368
// font family "Google Sans",Roboto,Arial,Helvetica,sans-serif; proxima
//letter-spacing: normal;
//line-height: 28px;
//font-size: 20px;
export default GlobalStyle;