(function () {
  const modules = [
    { id: "home", label: "首頁", href: "index.html" },
    { id: "bell", label: "鐘形曲線", href: "modules/bell_curve.html" },
    { id: "coin", label: "硬幣分析", href: "modules/coin.html" },
    { id: "sicbo", label: "固定平注", href: "modules/sicbo.html" },
    { id: "sicbo2", label: "馬丁格爾", href: "modules/sicbo2.html" },
    { id: "sicbo3", label: "骰寶賭桌", href: "modules/sicbo3.html" }
  ];

  const page = document.body.dataset.page || "home";
  const prefix = page === "home" ? "" : "../";
  const nav = document.getElementById("site-nav");

  if (nav) {
    nav.innerHTML = `
      <nav class="site-nav" aria-label="主選單">
        <div class="nav-inner">
          <a class="brand" href="${prefix}index.html">
            <span class="brand-mark">骰</span>
            <span>機率統計互動賭場</span>
          </a>
          <div class="nav-links">
            ${modules.map(item => {
              const href = item.id === "home" ? `${prefix}index.html` : `${prefix}${item.href}`;
              const active = item.id === page ? " active" : "";
              return `<a class="${active}" href="${href}">${item.label}</a>`;
            }).join("")}
          </div>
        </div>
      </nav>
    `;
  }

  window.ProbCasino = {
    clamp(value, min, max) {
      return Math.max(min, Math.min(max, Number(value) || min));
    },
    formatNumber(value) {
      const n = Number(value);
      if (!Number.isFinite(n)) return String(value);
      if (Math.abs(n) >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
      if (Math.abs(n) >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
      if (Math.abs(n) >= 1_000) return `${(n / 1_000).toFixed(2)}K`;
      return n.toLocaleString("zh-TW");
    },
    formatBigInt(value) {
      const text = value.toString();
      if (text.length <= 12) return Number(text).toLocaleString("zh-TW");
      const mantissa = `${text[0]}.${text.slice(1, 4)}`;
      return `${mantissa}e${text.length - 1}`;
    },
    rollDice() {
      return [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
    },
    sicboOutcome(dice, target) {
      const sum = dice.reduce((a, b) => a + b, 0);
      const triple = dice[0] === dice[1] && dice[1] === dice[2];
      if (triple) return false;
      if (target === "big") return sum >= 11 && sum <= 17;
      return sum >= 4 && sum <= 10;
    },
    isTriple(dice) {
      return dice[0] === dice[1] && dice[1] === dice[2];
    }
  };
})();
