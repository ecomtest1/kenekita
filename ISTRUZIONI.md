# ISTRUZIONI KENEKITA - Setup completo

## 1. FOTO DELLE CAMERE

### Struttura cartelle
Metti le foto in queste cartelle (dentro `public/camere/`):

```
public/camere/villa-i-lecci/
  hero.jpg        (foto principale)
  1.jpg
  2.jpg
  3.jpg
  ...

public/camere/villa-jasmine-smeralda/
  hero.jpg
  1.jpg
  2.jpg
  ...
```

### Le 21 proprietà (nomi cartelle esatti)
1. villa-i-lecci
2. villa-jasmine-smeralda
3. miramare-house
4. la-perla-bianca
5. dream-the-sea
6. gardenia-luxury
7. haven-of-arbour
8. la-maison-des-arches
9. sailor-s-house-porto-cervo
10. profumo-di-sardegna
11. sunset-blue-house
12. la-smeraldina
13. moonlight-sea
14. sailor-house-stintino
15. smeralda-blue-sky
16. smeralda-green
17. villa-le-tre-perle
18. suite-stylehouse
19. center-stylehouse
20. le-vele-alghero
21. topazio-home

### Foto consigliate per ogni camera
- 1 foto hero (landscape, alta qualità)
- 3-5 foto galleria
- Formato: JPG, ottimizzate per web (max 200KB l'una)

### Foto generali sito
Metti in `public/images/`:
- hero-sardegna.jpg (foto hero homepage)
- about-team.jpg (foto team nella pagina Chi Siamo)

## 2. CONFIGURAZIONE TINACMS / TINACLOUD

### Passaggi:
1. Vai su https://app.tina.io
2. Registrati / Accedi con GitHub
3. Crea un nuovo progetto
4. Collega il repository GitHub di questo progetto
5. Ottieni:
   - **Client ID**
   - **Token**

### Variabili d'ambiente
Crea un file `.env` nella root del progetto:
```
TINA_CLIENT_ID=il_tuo_client_id
TINA_TOKEN=il_tuo_token
```

Per Cloudflare Pages, aggiungi le variabili in:
- Dashboard Cloudflare > Pages > Progetto > Settings > Environment Variables

### CMS Admin
- Locale: `npm run cms` → http://localhost:4321/admin
- Produzione: https://kenekita.it/admin

## 3. FORM CONTATTI (Web3Forms)

1. Vai su https://web3forms.com
2. Inserisci la tua email e ottieni la **Access Key**
3. Sostituisci `YOUR_ACCESS_KEY` in:
   - `src/pages/contatti.astro`
   - `src/pages/per-proprietari.astro`

Il form reindirizza automaticamente a `https://kenekita.it/grazie` dopo l'invio.
Crea una pagina `src/pages/grazie.astro` se vuoi una pagina di conferma personalizzata.

## 4. DEPLOY CLOUDFLARE PAGES

### Configurazione:
1. Collega il repository GitHub su Cloudflare Pages
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Variabili d'ambiente:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`
4. Salva e fai deploy

### Webhook per rebuild automatico
- Cloudflare Pages si ricostruisce automaticamente su ogni push su GitHub
- Se modifichi contenuti dal CMS → salva → commit su Git → rebuild automatico

## 5. SEO

Modifica questi valori in `src/layouts/Layout.astro`:
- `site` nel `astro.config.mjs`
- Logo path per Schema.org
- Immagine OG (crea `public/og-image.jpg`, 1200x630px)

## 6. DOMINIO

Configura il dominio custom su Cloudflare Pages:
1. Vai su Pages > Domains
2. Aggiungi `kenekita.it`
3. Segui le istruzioni DNS

## 7. GOOGLE ANALYTICS (opzionale)

Aggiungi lo script GA4 in `src/layouts/Layout.astro` prima di `</head>`

## 8. MODIFICHE TESTI

I testi delle pagine statiche si modificano direttamente nei file:
- `src/pages/index.astro` (Homepage)
- `src/pages/chi-siamo.astro`
- `src/pages/per-proprietari.astro`
- `src/pages/contatti.astro`

Le camere si gestiscono dal CMS o modificando i file in `src/content/rooms/`

## 9. COMANDI UTILI

```bash
# Sviluppo locale
npm run dev

# Con CMS
npm run cms

# Build
npm run build

# Preview build locale
npm run preview
```

## 10. MULTILINGUA

Il sito è pronto per l'inglese. Per attivarlo:
1. Crea cartelle `src/pages/en/`
2. Copia le pagine e traduci
3. Aggiungi switch lingua nella navbar

---

## CONTATTI SUPPORTO

Per problemi tecnici, controlla:
- Astro docs: https://docs.astro.build
- TinaCMS docs: https://tina.io/docs
- Cloudflare Pages docs: https://developers.cloudflare.com/pages
