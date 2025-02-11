document.addEventListener("DOMContentLoaded", () => {
  const extendedColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque",
    "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",
    "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",
    "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold",
    "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink",
    "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
    "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan",
    "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen",
    "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
    "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace",
    "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod",
    "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
    "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell",
    "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey",
    "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato",
    "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow",
    "yellowgreen"
  ];

  const colorKeywordPicker = document.getElementById("colorKeywordPicker");

  const picon1 = document.getElementById("picon_1");
  const picon2 = document.getElementById("picon_2");
  const picon3 = document.getElementById("picon_3");
  const picon4 = document.getElementById("picon_4");
  const picon5 = document.getElementById("picon_5");
  const picon6 = document.getElementById("picon_6");
  const picon7 = document.getElementById("picon_7");
  const picon8 = document.getElementById("picon_8");

  const fanOfficeCoolStatus1 = document.getElementById("acOfficeCoolStatus1");

  const tableContainer = document.getElementById("colorTableContainer");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  let isFirstLoad = true;

  const showCopyNotification = (colorName) => {

    if (isFirstLoad) return;
    const copyNotification = document.getElementById("copyNotification");
    const copyMessageHSL = document.getElementById("copyMessageHSL");
  

    copyNotification.classList.remove("show-message");
    copyMessageHSL.classList.remove("show-message");

    copyNotification.textContent = `${colorName} copied to clipboard!`;
    copyNotification.classList.add("show-message");

    setTimeout(() => {
      copyNotification.classList.remove("show-message");
    }, 2000);
  };


  const copyToClipboard = (color) => {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = color;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    showCopyNotification(color);

    picon_1.style.color = color;
    picon_2.style.color = color;
    picon_3.style.color = color;
    picon_4.style.color = color;
    picon_5.style.color = color;
    picon_6.style.color = color;
    picon_7.style.color = color;
    picon_8.style.color = color;

    if (fanOfficeCoolStatus1.textContent === "On") {
      picon1.classList.add("active");
    } else {
      picon1.classList.remove("active");
    }
  };

  const defaultColor = "dodgerblue";
  copyToClipboard(defaultColor);
  isFirstLoad = false;

  let row;
  extendedColors.forEach((color, index) => {
    if (index % 20 === 0) {
      row = document.createElement("tr");
      tbody.appendChild(row);
    }

    const cell = document.createElement("td");
    cell.style.backgroundColor = color;
    cell.addEventListener("click", () => copyToClipboard(color));
    row.appendChild(cell);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);

  const hueRange = document.getElementById("hueRange");
  const saturationRange = document.getElementById("saturationRange");
  const lightnessRange = document.getElementById("lightnessRange");
  const alphaRange = document.getElementById("alphaRange");

  const hueValue = document.getElementById("hueValue");
  const saturationValue = document.getElementById("saturationValue");
  const lightnessValue = document.getElementById("lightnessValue");
  const alphaValue = document.getElementById("alphaValue");

  const modifierColorDisplay = document.getElementById("modifierColorDisplay");
  const iconExamples = document.querySelectorAll(".icon");
  const copyMessageHSL = document.getElementById("copyMessageHSL");


  const updateFanColorAndState = () => {
    const hslColor = `hsla(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;

    modifierColorDisplay.style.backgroundColor = hslColor;
  };

  hueRange.addEventListener("input", updateFanColorAndState);
  saturationRange.addEventListener("input", updateFanColorAndState);
  lightnessRange.addEventListener("input", updateFanColorAndState);
  alphaRange.addEventListener("input", updateFanColorAndState);
});


hueRange.addEventListener("input", (e) => {
  hueValue.textContent = e.target.value;
  updateHSLColor();
});
saturationRange.addEventListener("input", (e) => {
  saturationValue.textContent = e.target.value;
  updateHSLColor();
});
lightnessRange.addEventListener("input", (e) => {
  lightnessValue.textContent = e.target.value;
  updateHSLColor();
});
alphaRange.addEventListener("input", (e) => {
  alphaValue.textContent = e.target.value;
  updateHSLColor();
});

document.getElementById("exportHSLModifierBtn").addEventListener("click", () => {
  const hslColor = `hsla(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
  const copyMessageHSL = document.getElementById("copyMessageHSL");
  const copyNotification = document.getElementById("copyNotification");




  copyNotification.classList.remove("show-message");
  copyMessageHSL.classList.remove("show-message");

  copyMessageHSL.textContent = `${hslColor} copied to clipboard!`;
  copyMessageHSL.classList.add("show-message");

  copyToClipboard(hslColor);

  setTimeout(() => {
    copyMessageHSL.classList.remove("show-message");
  }, 2000);
});

function copyToClipboard(text) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = text;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);
}

const updateHSLColor = () => {
  const hslColor = `hsla(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
  modifierColorDisplay.style.backgroundColor = hslColor;
  document.getElementById("exportHSLModifierBtn").textContent = `Copy ${hslColor} to clipboard`;
};

document.addEventListener("DOMContentLoaded", () => {
  const hueRange = document.getElementById("hueRange");
  const saturationRange = document.getElementById("saturationRange");
  const lightnessRange = document.getElementById("lightnessRange");
  const alphaRange = document.getElementById("alphaRange");

  const hueValue = document.getElementById("hueValue");
  const saturationValue = document.getElementById("saturationValue");
  const lightnessValue = document.getElementById("lightnessValue");
  const alphaValue = document.getElementById("alphaValue");

  const icon1 = document.getElementById("icon_1");
  const icon2 = document.getElementById("icon_2");
  const icon3 = document.getElementById("icon_3");
  const icon4 = document.getElementById("icon_4");
  const icon5 = document.getElementById("icon_5");
  const icon6 = document.getElementById("icon_6");
  const icon7 = document.getElementById("icon_7");
  const icon8 = document.getElementById("icon_8");


  const fanOfficeCoolStatus = document.getElementById("acOfficeCoolStatus");

  const updateFanColorAndState = () => {
    const hslColor = `hsla(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;

    icon1.style.color = hslColor;
    icon2.style.color = hslColor;
    icon3.style.color = hslColor;
    icon4.style.color = hslColor;
    icon5.style.color = hslColor;
    icon6.style.color = hslColor;
    icon7.style.color = hslColor;
    icon8.style.color = hslColor;

    if (fanOfficeCoolStatus.textContent === "On") {
      icon1.classList.add("active");
    } else {
      icon1.classList.remove("active");
    }
  };

  hueRange.value = 180;
  saturationRange.value = 50;
  lightnessRange.value = 50;
  alphaRange.value = 1;

  hueValue.textContent = hueRange.value;
  saturationValue.textContent = saturationRange.value;
  lightnessValue.textContent = lightnessRange.value;
  alphaValue.textContent = alphaRange.value;

  updateFanColorAndState();

  hueRange.addEventListener("input", (e) => {
    hueValue.textContent = e.target.value;
    updateFanColorAndState();
  });

  saturationRange.addEventListener("input", (e) => {
    saturationValue.textContent = e.target.value;
    updateFanColorAndState();
  });

  lightnessRange.addEventListener("input", (e) => {
    lightnessValue.textContent = e.target.value;
    updateFanColorAndState();
  });

  alphaRange.addEventListener("input", (e) => {
    alphaValue.textContent = e.target.value;
    updateFanColorAndState();
  });

  function copyToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
  }

  const copyMessageHSL = document.getElementById("copyMessageHSL");

  document.getElementById("exportHSLModifierBtn").addEventListener("click", () => {
    const hslColor = `hsla(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
    copyMessageHSL.textContent = `${hslColor} copied to clipboard!`;
    copyMessageHSL.classList.add("show-message");

    copyToClipboard(hslColor);

    setTimeout(() => {
      copyMessageHSL.classList.remove("show-message");
    }, 2000);
  });

});


document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');
  const iframe = document.getElementById('mainFrame');


  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';
  }

  function sendModeToIframe() {
    if (iframe && iframe.contentWindow) {
      if (document.body.classList.contains('dark-mode')) {
        iframe.contentWindow.postMessage('enable-dark-mode', '*');
      } else {
        iframe.contentWindow.postMessage('disable-dark-mode', '*');
      }
    }
  }

  if (modeToggle) {
    modeToggle.addEventListener('change', function () {
      if (modeToggle.checked) {
        document.body.classList.add('dark-mode');
        modeLabel.textContent = 'Dark Mode';
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        modeLabel.textContent = 'Light Mode';
        localStorage.setItem('dark-mode', 'disabled');
      }
      sendModeToIframe();
    });
  }

  window.addEventListener('message', function (event) {
    if (event.data === 'iframe-ready') {
      sendModeToIframe();
    }
  });
});