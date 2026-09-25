<div align="center">

# ◈ ZYON

### `A quiet place to play.`

A dark, minimal gaming interface inspired by macOS, glassmorphism, misty forests, and late-night aesthetics.

[**Launch Zyon**](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/) · [**Report an Issue**](../../issues)

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0f1518&height=120&section=header&text=ZYON%20BETA&fontColor=ffffff&fontSize=32&fontAlignY=65" alt="Zyon banner">

</div>

## ✦ About

**Zyon** is a lightweight browser gaming interface built with plain **HTML, CSS, and JavaScript**.

The goal is simple: keep everything clean, dark, smooth, and easy to navigate.

```text
╭──────────────────────────────────────────────╮
│  Zyon beta                    FRIDAY  6:16 PM │
├──────────────┬───────────────────────────────┤
│  Browse      │  Library                      │
│              │                               │
│  ▱ Library   │  ┌─────────────────────────┐  │
│  ◉ Recent    │  │       AFTERLIGHT         │  │
│  ♡ Favorites │  │  A calm place to reset.  │  │
│              │  └─────────────────────────┘  │
│              │  Quick picks                  │
│              │  ▣      ▣      ▣             │
╰──────────────┴───────────────────────────────╯
```

## ✧ Features

- 🌲 Misty dark-forest atmosphere
- 🌧️ Animated rain and drifting fog
- 🪟 macOS-inspired glass window
- 🔴🟡🟢 Window controls
- 📚 Library, Recent, and Favorites views
- 🔎 Instant game search
- 🕐 Live date and time
- 📱 Responsive on desktop and mobile
- ⚡ No framework required
- 🌐 Works with GitHub Pages

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| `HTML` | Structure |
| `CSS` | Interface, animations & responsive layout |
| `JavaScript` | Search, navigation & interactions |
| `GitHub Pages` | Hosting |

## 📁 Project Structure

```text
Zyon/
├── index.html
├── style.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    └── forest.jpg
```

## 🎮 Adding Games

Open `script.js` and find:

```js
const games = [
  {
    name: "Afterlight",
    desc: "A calm endless glide."
  }
];
```

Add your own entries:

```js
{
  name: "Your Game",
  desc: "Your description."
}
```

Then add your own click behavior if the game should open a specific page.

> Only link to games and websites you have permission to use.

## 🚀 Deploy With GitHub Pages

1. Create a GitHub repository.
2. Upload the Zyon files.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**.
6. Choose `main` and `/ (root)`.
7. Click **Save**.

After GitHub finishes deploying, your site will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## 🎨 Customization

Want to make Zyon yours?

### Background

Put your own image here:

```text
assets/forest.jpg
```

### Main colors

Edit the variables at the top of `style.css`:

```css
:root {
  --text: #f2f4f5;
  --muted: #9fa9ae;
  --line: #ffffff1c;
  --panel: #182024bb;
}
```

### Site name

Change `Zyon beta` in `index.html`.

---

<div align="center">

### `ZYON BETA`

**minimal · dark · quiet · yours**

<br>

Made with HTML · CSS · JavaScript

</div>

