console.log("Yes It's Working");

var header = `
<meta name="viewport" content="width=device-width, initial-scale=.8">

<header>
<div class="navMenu">
                    <ul id="HiddenMenu">
                        <li><a for="Menu" id="Menu">Menu</a></li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="TiCalculator.html">Calculator Hacking</a></li>
                        <li><a href="blender.html">Blender</a></li>
                        <li><a href="web.html">Web Development</a></li>
                        <li><a href="web.html">Photoshop</a></li>
                        <li><a href="animations.html">Animation</a></li>
                        <li><a href="img2txt.html">Image to Text Art</a></li>
                        <li><a href="replaceText.html">Replace Text</a></li>
                        <li><a href="atari.html">Atari</a></li>
                    </ul>
                </div>

    <table>
        <tr>
            <td>
                <div onclick="window.location.href='index.html';" id="MenuLogo">
                    <img src="logo.png" width="50px" height="50px" id="PageLogo">
                    <h1 id="PageTitle">Glitch</h1>
                </div>
            </td>
            <td style="width: fit-content;"></td>
            <td>
            </td>
        </tr>
      </table>
</header>

<style>
  #HiddenMenu {
      overflow: hidden;
      max-height: 45px;
      display: grid;
      transition: max-height 0.5s;
  }
  #HiddenMenu:hover {
      max-height: 500px;
      transition: max-height 0.5s;
  }

  #PageLogo {
    margin: 0px;
    width: 45px;
    height: 45px;
    transform: rotate(0deg);
    transition: .5s;
  }
  #PageTitle {
    text-shadow: 0px 0px 0px 0px #83B0D4;
    transition: .5s;
  }
  #MenuLogo {width: max-content;}
  #MenuLogo:hover h1 {
    text-shadow: 0px 0px 5px #83B0D4;
    transition: .5s;
  }
  #MenuLogo:hover img {
    margin: -5px;
    width: 55px;
    height: 55px;
    transform: rotate(360deg);
    transition: .5s;
  }
    
</style>
`;

var footer = `
<footer>
  <p>
    Copyright 2022 &#169 Glitch
  </p>
</footer>
`;
MenuClosed = true;

function ToggleMenu() {
    if(MenuClosed) {
        document.getElementById("HiddenMenu").style = "display: grid; height: fit-content;"
        MenuClosed = false;
    }else{
        document.getElementById("HiddenMenu").style = "display: grid; height: 45px;"
        MenuClosed = true;
    }
}

document.getElementById("global-page-header").innerHTML = header;
document.getElementById("global-page-footer").innerHTML = footer;

window.scrollTo(0, 0);