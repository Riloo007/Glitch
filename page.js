console.log("Yes It's Working");

var header = `
<meta name="viewport" content="width=device-width, initial-scale=2">

<header>
<div class="navMenu">
                    <ul style="overflow: hidden; height: 45px; display: grid;" id="HiddenMenu">
                        <li><a for="Menu" id="Menu" onclick='ToggleMenu();'>Menu</a></li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="TiCalculator.html">Calculator Hacking</a></li>
                        <li><a href="blender.html">Blender</a></li>
                        <li><a href="web.html">Web Development</a></li>
                        <li><a href="web.html">Photoshop</a></li>
                        <li><a href="web.html">Animation</a></li>
                        <li><a href="img2txt.html">Image to Text Art</a></li>
                        <li><a href="atari.html">Atari</a></li>
                    </ul>
                </div>

    <table>
        <tr>
            <td style="width: 0%;">
                <div onclick="window.location.href='index.html';" style="width: 180px;">
                    <img src="logo.png" width="50px" height="50px">
                    <h1>Glitch</h1>
                </div>
            </td>
            <td style="width: fit-content;"></td>
            <td>
            </td>
        </tr>
      </table>
</header>
`;

var footer = `
<footer>
  <p>
    Copyright 2022 © Glitch
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