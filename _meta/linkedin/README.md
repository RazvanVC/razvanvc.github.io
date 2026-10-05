---
id: INDEX-LINKEDIN
title: Plan de contenido LinkedIn — índice
type: index
last_updated: 2026-05-14
---

# Plan de contenido LinkedIn — Razvan

> Fuente de verdad del contenido editorial. Estructura KDD-lite: un fichero por post, agrupado en `posts/`, con frontmatter YAML para metadatos. La carpeta `_meta/` está excluida del build de Jekyll, así que nada de esto se publica en razvanvc.github.io.

## Estructura del folder

```
_meta/linkedin/
├── README.md              ← (estás aquí) Índice + calendario
├── strategy.md            Posicionamiento, cadencia, buckets, reglas, voz
├── topics-bank.md         Banco de temas + notas operativas (formato LinkedIn, etc.)
├── learnings.md           Aprendizajes acumulados de cada post
└── posts/
    ├── 2026-05-10-serie-1-dolor-plan-despliegue.md       (publicado)
    ├── 2026-05-13-serie-2-mas-rapido-vs-mas-humano.md    (publicado)
    ├── 2026-05-17-idempotencia.md                        (borrador listo)
    ├── 2026-05-20-abs-sum-vs-sum-abs.md                  (borrador listo)
    └── 99-serie-3-llm-pipeline.md                        (placeholder)
```

## TL;DR

- **Cadencia:** 2 posts/semana — domingo largo (20-22h ES) + miércoles corto (8-10h ES).
- **Posicionamiento:** Tech Lead que automatiza procesos críticos. Bucket dominante: casos reales con métrica.
- **Reglas duras:** no KDD-as-jerga, no CitaBOT, no nombres de tablas internas. Intrum = real estate; Santander = enablement.
- **Engagement:** todo post cierra con pregunta concreta + primer comentario propio a los 5-10 min.

Para detalle ver [strategy.md](strategy.md).

## Calendario

| Estado | Fecha | Post | Formato |
|---|---|---|---|
| ✅ Publicado | Dom 10-may | [Serie 1/3 · El dolor del plan de despliegue](posts/2026-05-10-serie-1-dolor-plan-despliegue.md) | Largo |
| ✅ Publicado | Mié 13-may | [Serie 2/3 · Más rápido vs más humano](posts/2026-05-13-serie-2-mas-rapido-vs-mas-humano.md) | Largo |
| 📝 Borrador listo | Dom 17-may | [Idempotencia: primera línea de defensa cuando un batch falla](posts/2026-05-17-idempotencia.md) | Largo |
| 📝 Borrador listo | Mié 20-may | [abs(SUM) vs SUM(abs)](posts/2026-05-20-abs-sum-vs-sum-abs.md) | Corto |
| 📝 Borrador listo | Dom 24-may | [Specs vivas en el repo, no Words muertos en SharePoint](posts/2026-05-24-specs-vivas-en-el-repo.md) | Largo |
| ⏳ Por escribir | Mié 27-may | OG tags y preview LinkedIn | Corto |
| ⏳ Por escribir | Dom 31-may | 5 lecciones refactor Spring Batch en producción | Largo |
| ⏳ Por escribir | Mié 3-jun | Programa formativo de 10 sesiones | Corto |
| 🔒 Placeholder | Dom 7-jun | [Serie 3/3 · El LLM en el pipeline](posts/99-serie-3-llm-pipeline.md) | Largo |
| ⏳ Por escribir | Mié 10-jun | Doble conteo silencioso en cubos OLAP | Corto |
| ⏳ Por escribir | Dom 14-jun | Mapear columna a columna entre dos sistemas | Largo |
| ⏳ Por escribir | Mié 17-jun | El formatter `DOUBLE[0.00%]` que multiplica solo | Corto |

Más temas en el [banco](topics-bank.md).

## Cómo se usa este folder

**Para escribir un nuevo post:**

1. Crear fichero `posts/YYYY-MM-DD-slug.md` con frontmatter completo (ver convención en `strategy.md`).
2. Rellenar texto a publicar + primer comentario propio + notas de redacción.
3. Actualizar el calendario en este README.
4. Mover el tema del banco si venía de ahí.

**Tras publicar:**

1. Actualizar `status: publicado` y `date_published` en el frontmatter.
2. Añadir `url_analytics` cuando esté disponible.
3. A las 24h: añadir una fila a la tabla "Snapshots de métricas" del post.
4. A los 7d y 30d: repetir snapshot.
5. Si hay lecciones que aplican a futuros posts, actualizar `learnings.md`.

**Para cambiar la cadencia o las reglas:**

Editar `strategy.md`. Si la decisión es importante, dejar una fila en el "Histórico de decisiones editoriales" de `learnings.md`.

## Próximos pasos (acción inmediata)

1. **Dom 17-may (20:00-22:00 ES):** publicar Idempotencia. Añadir primer comentario propio a los 5-10 min.
2. **Mié 20-may (8:00-10:00 ES):** publicar abs(SUM) vs SUM(abs). Mismo proceso.
3. Tras cada post: capturar snapshot 24h al frontmatter + tabla del post.
4. Revisar "Quien ha visto tu perfil" semanalmente y mandar invitación a TL+ relevantes.
5. Cuando la validación LLM esté en prod (~3-4 semanas), completar `99-serie-3-llm-pipeline.md` y publicar.

## Enlaces útiles

- **LinkedIn perfil:** https://www.linkedin.com/in/razvanvc/
- **LinkedIn Post Inspector** (para validar previews OG): https://www.linkedin.com/post-inspector/
- **Web CV:** https://razvanvc.github.io/
