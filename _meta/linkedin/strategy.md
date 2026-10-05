---
id: STRATEGY-LINKEDIN
title: Estrategia editorial LinkedIn
type: strategy
last_updated: 2026-05-14
---

# Estrategia editorial LinkedIn

## Posicionamiento

Tech Lead que automatiza procesos críticos. ActiveViam pasa a tema de fondo (~1 mención cada 5-6 semanas para mantener keywords vivas). El feed se construye sobre casos reales de automatización con métricas concretas.

## Cadencia

2 posts por semana — **domingo (largo, ~2000 chars, 20:00-22:00 ES) + miércoles (corto, ~900 chars, 8:00-10:00 ES)**. 3-4 días de separación para que el primero madure en el feed antes de competir con el segundo.

El domingo al final del día captura "preparándose para el lunes" y evita la competencia B2B fuerte de mediados de semana. El miércoles, mañana clásica para perfiles tech España.

La cadencia anterior (1/semana) se subió a 2/semana tras leer las métricas de los dos primeros posts — el ciclo del algoritmo agota un post en 72-96h, así que 2/semana es el sweet spot sin canibalizarse.

## Buckets (peso objetivo)

| Bucket | Peso | Descripción |
|---|---|---|
| `automatizacion-caso` | 50% | Casos reales con métrica concreta |
| `automatizacion-pattern` | 20% | Patterns transferibles (idempotencia, observabilidad, recovery) |
| `tech-lead-docs` | 15% | Enablement, documentación, formación |
| `olap-mantenimiento` | 10% | ActiveViam / Atoti / OLAP — keywords vivas |
| `meta-branding` | 5% | OG tags, perfil, contenido sobre contenido |
| `automatizacion-ia` | extra | Cuando hay caso real con LLM en el flujo |

## Reglas de contenido (no negociables)

- No KDD-as-jerga pública, no CitaBOT, no nombres de tablas / vistas / columnas internas.
- Intrum = real estate / servicios financieros.
- Santander = enablement, no embedded dev.
- Métricas verificables o "estimadas" honestas. Nunca infladas.

## Reglas de engagement

- **Cierre con pregunta concreta** antes del sello de marca. Genéricas tipo "qué opináis" no funcionan; preguntas específicas sobre el problema sí.
- **Primer comentario propio** a los 5-10 minutos de publicar, con una pregunta o un matiz de la historia.
- **Responder comentarios en menos de 1h** el primer día.
- **Revisar "Quien ha visto tu perfil"** tras cada post — los visitantes son candidatos a invitación de conexión con mensaje corto.

## Voz / tono

Estructura visual con bullets cuando hay enumeración, prosa natural en primera persona dentro de cada bloque. Sin paréntesis-de-etiqueta. Frase de marca *"dejar los sistemas mejor de lo que los encontré"* embebida conversacionalmente al cerrar, no estampada como firma. En series, rotar el sujeto (cosas / sistema / equipo) y el verbo para que no se sienta con plantilla.

## Convenciones técnicas del repo

- Frontmatter en cada fichero de post (`posts/YYYY-MM-DD-slug.md`):
  - `id` — identificador único tipo `POST-YYYY-MM-DD`
  - `status` — `placeholder | borrador | borrador-listo | publicado | archivado`
  - `date_planned` — fecha de publicación prevista
  - `date_published` — timestamp ISO cuando ya está publicado
  - `format` — `largo | corto`
  - `length_chars` — recuento aproximado
  - `bucket` — uno de los buckets de arriba
  - `series` — objeto `{name, part, of}` si pertenece a una serie, `null` si no
  - `depends_on` — lista de IDs de posts previos que es bueno haber leído
  - `url_analytics` — URL al post analytics en LinkedIn (cuando publicado)
  - `tags` — lista de hashtags / temas
- Naming de ficheros: `YYYY-MM-DD-slug.md`. Para placeholders sin fecha confirmada, prefijo `99-slug.md`.
- Cada fichero de post lleva: texto a publicar, primer comentario propio si aplica, snapshots de métricas (cuando publicado), lecciones, notas de redacción.

## Stats de referencia

- Engagement rate referencia (reacciones / impresiones a 7d): objetivo ≥2%.
- Curva típica de impresiones: ~60% del total en las primeras 24h.
- Debut lift: solo el primer post del perfil tuvo amplificación extra del algoritmo. Comparar posts 2+ entre sí, no contra el debut.
