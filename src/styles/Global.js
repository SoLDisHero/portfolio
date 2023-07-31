import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
:root{
    --bg-base: #f4f4f1;
    --bg-secondary: #C4DFDF;
    --bg-third: #146C94;
    --color: #5f6368;
}
html{
    font-family: 'Roboto Condensed', sans-serif;    
    color: var(--color);
    background-color: var(--bg-base);    
}
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.25s;
}
.hiddenNav{
  transform: translateY(-158px);
  box-shadow: none;
}
@media only screen and (max-width: 768px){
    .hiddenNav{
      transform: translateY(-346px);
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

export default GlobalStyle;