// Singleton para o tema
const ThemeConfig = (function () {
  let instance;

  function createInstance() {
    let theme = "light";
    return {
      getTheme() {
        return theme;
      },
      setTheme(newTheme) {
        theme = newTheme;
        this.applyTheme();
        this.syncSelects();
        this.updateDisplays();
      },
      applyTheme() {
        if (theme === "dark") {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      },
      syncSelects() {
        document.getElementById("theme1").value = theme;
        document.getElementById("theme2").value = theme;
      },
      updateDisplays() {
        document.getElementById("themeDisplay1").textContent = theme;
        document.getElementById("themeDisplay2").textContent = theme;
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config = ThemeConfig.getInstance();

document.getElementById("theme1").addEventListener("change", function () {
  config.setTheme(this.value);
});

document.getElementById("theme2").addEventListener("change", function () {
  config.setTheme(this.value);
});

// Inicialização
config.setTheme("light");
