# alexgrlt.github.io

Personal academic website of Alexandre Grellet, PhD student in economics at Sciences Po.
Live at <https://alexgrlt.github.io>. Built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme, in English and French (jekyll-polyglot).

## Where things live

| What | Where |
| --- | --- |
| Pages (about, CV, projects, teaching, news) | `_pages/en/`, `_pages/fr/` |
| Research projects | `_projects/en/`, `_projects/fr/` |
| News items | `_news/en/`, `_news/fr/` |
| CV shown on the CV page | `_data/en/cv.yml`, `_data/fr/cv.yml`; PDF in `assets/CV/cv.pdf` |
| Course hub pages | `assets/teaching/mathcamp.md` (`/teaching/mathcamp/`), `assets/teaching/PAPE.md` (`/teaching/PAPE/`) |
| Slides and exercise sheets | `assets/teaching/mathcamp/`, `assets/teaching/PAPE/` |
| Site settings | `_config.yml`, social links in `_data/socials.yml` |
| Pages kept out of the site for now | `_unused_pages/` |

Every page, project and news item exists twice (EN and FR), linked by the same `page_id` / `news_id`.

## Build locally

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

Pushing to `main` builds and deploys the site with GitHub Actions (`.github/workflows/deploy.yml`).

## Publishing slides

1. Render the Quarto deck.
2. Encrypt the HTML with staticrypt, reusing the folder's `.staticrypt.json` salt.
3. Check nothing is left unencrypted: `grep -L staticrypt assets/teaching/**/*.html`
4. Add the link to the course hub page and commit.

PDFs cannot be encrypted by staticrypt: anything committed here is public.

## Credits

Theme: al-folio (MIT licence). DESSA project image: Unsplash
(<https://unsplash.com/fr/photos/un-homme-allonge-dans-son-lit-avec-une-horloge-sur-lui-nqr6-Ix22EQ>), Unsplash licence.
