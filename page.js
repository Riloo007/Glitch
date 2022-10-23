console.log("Yes It's Working");

var header = `
<header>
  <img src="logo.png" width="50px" height="50px">
  <h1>Glitch</h1>
</header>
`;

var footer = `
<footer>
  <p>
    Copyright 2022 © Glitch
  </p>
</footer>
`;

document.getElementById("global-page-header").innerHTML = header;
document.getElementById("global-page-footer").innerHTML = footer;