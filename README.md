# DoDa e-Agency Website

This is a Jekyll-based multilingual website for DoDa e-Agency, using Tabler.io for styling. The site supports both Italian and English languages.

## Project Structure

```
jekyll-site/
├── _config.yml                  # Jekyll configuration file for GitHub Pages
├── _data/
│   └── translations/            # Translation data files
│       ├── en.yml               # English translations
│       └── it.yml               # Italian translations
├── _includes/                   # Reusable components
│   ├── header.html              # Header with language selector
│   ├── navbar.html              # Navigation component
│   └── footer.html              # Footer component
├── _layouts/                    # Template layouts
│   ├── default.html             # Main layout template
│   └── page.html                # Page layout
├── _sass/                       # Sass stylesheets
├── assets/                      # Static assets
│   ├── css/                     # Compiled CSS
│   ├── js/                      # JavaScript files
│   └── images/                  # Image files
├── en/                          # English pages
│   └── index.html               # English homepage
├── it/                          # Italian pages
│   └── index.html               # Italian homepage
└── index.html                   # Root index (redirects to default language)
```

## Features

- Multilingual support (Italian and English)
- Responsive design using Tabler.io
- GitHub Pages compatibility
- Language selector in the header
- Translation files for all site content

## Development Setup

1. Install Ruby and Bundler
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the development server
5. Visit `http://localhost:4000` in your browser

## Deployment

This site is configured for GitHub Pages. Simply push to your GitHub repository to deploy.

## Adding Content

### Adding a new page

1. Create a new file in both `en/` and `it/` directories
2. Add front matter with layout, title, description, and language
3. Add content using Markdown or HTML

### Adding translations

1. Add new translation keys to `_data/translations/en.yml` and `_data/translations/it.yml`
2. Use the translation keys in your templates with `{{ translations.key }}`

## License

This project is licensed under the MIT License - see the LICENSE file for details.