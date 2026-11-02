# Laboratorio J&M Las Garzas — Sitio web (Astro + Tailwind v4)

Sitio estático, rápido y accesible (WCAG 2.1 AA) para el laboratorio clínico **J&M Las Garzas**.

## Puesta en marcha
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático, listo para cualquier hosting)
```

## Arquitectura
```
jym-las-garzas/
├─ astro.config.mjs          # Astro + Tailwind (plugin Vite) + sitemap
├─ public/                   # favicon, robots.txt  (colocar aquí logo.svg oficial)
└─ src/
   ├─ data/                  # ← contenido editable SIN tocar componentes
   │  ├─ site.ts             #   RIF, teléfono, WhatsApp, sedes, zonas de domicilio
   │  ├─ exams.ts            #   catálogo del buscador (requisitos de preparación)
   │  └─ services.ts         #   categorías de servicios
   ├─ layouts/BaseLayout.astro   # <head>, SEO, Open Graph, JSON-LD Schema.org, "saltar al contenido"
   ├─ components/
   │  ├─ Header.astro        # nav sticky, menú móvil sin JS, botón A+ de tamaño de texto
   │  ├─ Hero.astro          # propuesta de valor + 3 CTAs + ficha de preparación
   │  ├─ ExamSearch.astro    # buscador en tiempo real (JS nativo)
   │  ├─ Services.astro      # tarjetas expandibles (<details>)
   │  ├─ ResultsPortal.astro # SIMULACIÓN de UI del portal de resultados
   │  ├─ Locations.astro     # sedes, horarios, mapa, WhatsApp, domicilio
   │  ├─ B2B.astro           # salud ocupacional / convenios
   │  ├─ Footer.astro / Logo.astro
   ├─ pages/index.astro      # ensambla las secciones
   └─ styles/global.css      # tokens de diseño (@theme) y clases .btn/.field
```

## Pendientes antes de publicar (datos que no se pudieron confirmar)
- **Horarios** de atención (`src/data/site.ts`) — hoy dicen "Por confirmar".
- **Dominio** real: `astro.config.mjs` y `public/robots.txt` (`TU-DOMINIO.com`).
- **Preparación de exámenes** (`src/data/exams.ts`): contenido orientativo; debe aprobarlo el bioanalista responsable.
- **Convenios B2B**: confirmar qué ofrece realmente el laboratorio.
- **Logo oficial** (SVG) y, si se desea, coordenadas `geo` en el JSON-LD.
- Más sedes: agregar objetos a `LOCATIONS`; la UI se adapta sola.

## Accesibilidad aplicada
- Fuente Atkinson Hyperlegible (diseñada para baja visión), base 18 px y botón **A+** (hasta ~131 %).
- Contraste ≥ 4.5:1 en todo el texto; foco visible de 3 px; objetivos táctiles ≥ 48 px.
- Todo operable con teclado; `<label>` reales; errores de formulario con `aria-invalid` + mensaje asociado; `aria-live` en resultados.
- Respeta `prefers-reduced-motion`. Sin carruseles ni animaciones automáticas.

## SEO local
- JSON-LD `DiagnosticLab` + `MedicalBusiness` con dirección, teléfono, RIF, zonas atendidas y `MedicalTest` por examen.
- Una sola página con encabezados jerárquicos (h1 → h2 → h3), canonical, Open Graph, sitemap.
- Siguiente paso: reclamar y completar la ficha de Google Business Profile con los mismos datos (NAP idéntico).

## Seguridad y privacidad del portal de resultados
`ResultsPortal.astro` es **solo una maqueta**. Para operar con datos reales:

1. **Backend aparte** (o Astro con `output: 'server'`/adaptador) que valide en servidor; la validación del cliente es solo comodidad.
2. **HTTPS obligatorio**, HSTS (`max-age` ≥ 1 año), TLS 1.2+, cookies `Secure; HttpOnly; SameSite=Strict`.
3. **Autenticación fuerte**: cédula + código de muestra de un solo uso y, idealmente, segundo factor (OTP por WhatsApp/SMS o fecha de nacimiento).
4. **Anti-abuso**: rate limiting por IP y por cédula, bloqueo temporal tras fallos, CAPTCHA que respete la privacidad (p. ej. Cloudflare Turnstile).
5. **Mensajes genéricos** ante error ("Los datos no coinciden"); nunca revelar si existe la cédula.
6. **PDF protegidos**: almacenamiento cifrado en reposo (AES-256), entrega mediante **URL firmada de un solo uso y pocos minutos**, `Cache-Control: no-store`, `Content-Disposition: attachment`.
7. **Cero datos de salud en URLs, localStorage o analítica**; no registrar cédulas en logs; minimizar datos recolectados.
8. **Cabeceras**: `Content-Security-Policy` estricta, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, `Permissions-Policy` mínima.
9. **Auditoría**: registro de accesos (quién, cuándo, qué informe) con retención definida; copias de seguridad cifradas.
10. **Cumplimiento**: los resultados son datos de salud (categoría sensible). Consultar con un asesor legal la normativa venezolana aplicable de confidencialidad médica y protección de datos; como referencia de buenas prácticas internacionales: GDPR (art. 9) y HIPAA. Publicar una **política de privacidad** y obtener consentimiento informado.
11. Nunca enviar resultados por canales no cifrados sin consentimiento expreso del paciente (WhatsApp/correo son prácticas comunes aquí; documentar el consentimiento).
