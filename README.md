# KENEKITA - Sito Web

Sito web professionale per KENEKITA, azienda di Co-Hosting & Property Management in Sardegna.

## Stack Tecnico

- **Astro 5** - Framework statico
- **Tailwind CSS** - Styling
- **TinaCMS** - CMS headless con pannello admin
- **TypeScript** - Tipizzazione
- **Cloudflare Pages** - Deploy

## Setup iniziale

```bash
npm install
```

## Sviluppo locale

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`

## CMS Admin (TinaCMS)

```bash
npm run cms
```

L'admin sarà disponibile su `http://localhost:4321/admin`

## Build

```bash
npm run build
```

L'output viene generato in `dist/`

## Deploy Cloudflare Pages

1. Collega il repository GitHub a Cloudflare Pages
2. Imposta il build command: `npm run build`
3. Imposta la output directory: `dist`
4. Aggiungi le variabili d'ambiente:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`

## Configurazione TinaCloud

1. Vai su https://app.tina.io
2. Crea un nuovo progetto
3. Ottieni `Client ID` e `Token`
4. Aggiungili come variabili d'ambiente

## Struttura foto

Le foto delle camere vanno messe in:
```
public/camere/nome-camera/
  hero.jpg
  1.jpg
  2.jpg
  ...
```

Il CMS gestisce solo i path, le foto vanno caricate manualmente in queste cartelle.

## Form contatti

Configura il tuo endpoint Formspree:
1. Registrati su https://formspree.io
2. Crea un nuovo form
3. Sostituisci `YOUR_FORM_ID` in:
   - `src/pages/contatti.astro`
   - `src/pages/per-proprietari.astro`

## Variabili d'ambiente

Crea un file `.env`:
```
TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```
