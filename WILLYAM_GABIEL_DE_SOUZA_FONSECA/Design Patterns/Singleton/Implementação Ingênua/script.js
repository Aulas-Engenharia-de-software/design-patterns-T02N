function createConfig() {
  return {
    theme: "light",
    setTheme(newTheme) {
      this.theme = newTheme;
    },
    getTheme() {
      return this.theme;
    }
  };
}

const config1 = createConfig();
const config2 = createConfig();

function updateThemeDisplay() {
  document.getElementById("themeDisplay1").textContent = config1.getTheme();
  document.getElementById("themeDisplay2").textContent = config2.getTheme();
}

function updatePageTheme() {
  if (config1.getTheme() === "dark" && config2.getTheme() === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

document.getElementById("theme1").addEventListener("change", function () {
  config1.setTheme(this.value);
  updateThemeDisplay();
  updatePageTheme();
});

document.getElementById("theme2").addEventListener("change", function () {
  config2.setTheme(this.value);
  updateThemeDisplay();
  updatePageTheme();
});