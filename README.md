# Minimal Portfolio (Navbar + Background Presets)

- Bootstrap **v5.3.8** (CSS + JS)
- Dark theme
- Tabs are controlled from the **navbar** (Bio / Research / papers / Contact)
- Background presets you can change instantly

## Change background
### Option A (quick)
In `index.html`, change:
```html
<body class="bg-aurora">
```
to any of:
- `bg-aurora`
- `bg-nebula`
- `bg-ocean`
- `bg-sunset`
- `bg-mono`

### Option B (UI)
Use the **Background** dropdown in the navbar (it saves your choice in localStorage).

## Optional upload background (commented)
There is a commented block in `index.html` that includes:
```html
<input id="bgUpload" type="file" ... />
```
Uncomment it to enable a local preview upload. (Not stored on GitHub; only in that browser session.)

## Replace your photo
Put your image here (same name):
`assets/img/akash_1.jpg`

## GitHub Pages deploy
Upload files to repo root → Settings → Pages → Deploy from branch → main /(root)
