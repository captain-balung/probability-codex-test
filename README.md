# 機率統計互動賭場

一個部署於 GitHub Pages 的機率統計教學互動網站。專案以靜態 HTML、CSS、JavaScript 製作，透過硬幣分布、鐘形曲線與骰寶模擬，讓學生用操作的方式理解組合數、二項分配、期望值、莊家優勢與下注策略風險。

## 線上部署

GitHub Repository:

https://github.com/captain-balung/probability-codex-test

若已啟用 GitHub Pages，請在 repository 的 `Settings > Pages` 將來源設定為：

- Branch: `main`
- Folder: `/ (root)`

## 模組內容

### A. 鐘形曲線視覺化

檔案：`modules/bell_curve.html`

- 輸入硬幣數量 `1-100`
- 使用 `BigInt` 精確計算組合數 `C(n,k)`
- 使用對數縮放長條圖呈現二項分布
- `n > 20` 時自動進入 dense-mode，隱藏細部標籤

### B. 硬幣二項分配分析

檔案：`modules/coin.html`

- 輸入硬幣數量 `1-100`
- `n <= 10` 時實際窮舉所有 H/T 組合
- `n > 10` 時使用組合公式計算機率
- 以卡片與進度條顯示各正面次數的機率

### D. 骰寶固定平注模擬

檔案：`modules/sicbo.html`

- 設定初始本金、固定下注額、模擬次數
- 支援大 / 小下注
- 豹子出現時大、小皆輸
- 使用 D3.js v7 繪製損益走勢圖

### E. 骰寶馬丁格爾模擬

檔案：`modules/sicbo2.html`

- 設定初始本金、初始下注額、賭桌上限、模擬次數
- 輸了加倍，贏了重置
- 下注額超過桌限時記錄策略失敗事件
- 使用 D3.js v7 繪製損益走勢圖

### F. 真實骰寶遊戲體驗

檔案：`modules/sicbo3.html`

- 設定本金與籌碼面額
- 支援完整骰寶注區：
  - 大 / 小
  - 單點 1-6
  - 指定對子
  - 任意豹子
  - 指定豹子
  - 兩點組合
  - 總和 4-17
- 支援同時多區下注
- 擲骰動畫與即時結算
- 賭桌樣式參考傳統 Sic Bo layout，並調整為本站賭場風色系

## 專案結構

```text
.
├── index.html
├── assets/
│   └── casino-bg.png
├── css/
│   └── style.css
├── js/
│   └── main.js
├── modules/
│   ├── bell_curve.html
│   ├── coin.html
│   ├── sicbo.html
│   ├── sicbo2.html
│   └── sicbo3.html
└── 需求文件_修訂版.md
```

## 使用技術

- HTML5
- CSS3
- Vanilla JavaScript
- BigInt
- D3.js v7
- GitHub Pages

## 本機預覽

在專案根目錄執行：

```bash
python -m http.server 4173 --bind 127.0.0.1
```

然後開啟：

```text
http://127.0.0.1:4173
```

## 設計重點

- 所有頁面共用導航列，透過 `js/main.js` 動態注入
- 路徑使用相對路徑，適合部署於 GitHub Pages 子路徑
- 教學頁保留可讀性與數學精確性
- 骰寶頁使用較強烈的賭場風格，增加課堂操作趣味
