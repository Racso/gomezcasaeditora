# Casa Editora Los Hermanos Gómez

Sitio web del sello editorial **Casa Editora Los Hermanos Gómez** (Bucaramanga, Santander, Colombia) — *"Elevando el libro desde 2005"*.

Una sola página estática: editorial, catálogo de obras, semblanza del fundador y contacto.

## Estructura

```
index.html      Página única
styles.css      Estilos (Fraunces + Spectral; paleta tinta/papel/cielo/ocre)
script.js       Menú móvil + reveal al hacer scroll
img/            Emblema, retrato y carátulas (auto-alojadas)
Dockerfile      nginx:alpine sirviendo el sitio estático
nginx.conf      gzip + caché de estáticos
```

## Desarrollo local

```bash
python3 -m http.server 8000   # luego abrir http://localhost:8000
```

## Despliegue

Desplegado con [Poof](https://github.com/Racso/poof) sobre nginx:

```bash
poof deploy gomezcasaeditora
```

Cada push a `main` reconstruye la imagen y redespliega automáticamente.

## Contenido

Texto e imágenes provienen del portal del autor, Óscar Humberto Gómez Gómez
(<https://oscarhumbertogomez.com>). Contacto editorial: gomezcasaeditora@gmail.com
