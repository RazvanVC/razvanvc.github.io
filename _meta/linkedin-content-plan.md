# Plan de contenido LinkedIn — REFACTORIZADO

> Este fichero se ha refactorizado el 2026-05-14 a estructura KDD-lite con fichero por post.
>
> **La nueva fuente de verdad vive en:** [`_meta/linkedin/`](./linkedin/)

## Cómo encontrar lo que buscas

| Antes vivía en este fichero | Ahora vive en |
|---|---|
| Índice + calendario | [`_meta/linkedin/README.md`](./linkedin/README.md) |
| Estrategia, cadencia, buckets, reglas | [`_meta/linkedin/strategy.md`](./linkedin/strategy.md) |
| Banco de temas + notas operativas | [`_meta/linkedin/topics-bank.md`](./linkedin/topics-bank.md) |
| Aprendizajes acumulados | [`_meta/linkedin/learnings.md`](./linkedin/learnings.md) |
| Borradores y posts publicados | Un fichero por post bajo [`_meta/linkedin/posts/`](./linkedin/posts/) |

## Posts actuales

- [Serie 1/3 · El dolor del plan de despliegue](./linkedin/posts/2026-05-10-serie-1-dolor-plan-despliegue.md) — publicado 10-may
- [Serie 2/3 · Más rápido vs más humano](./linkedin/posts/2026-05-13-serie-2-mas-rapido-vs-mas-humano.md) — publicado 13-may
- [Idempotencia](./linkedin/posts/2026-05-17-idempotencia.md) — borrador listo, programar Dom 17-may 20-22h ES
- [abs(SUM) vs SUM(abs)](./linkedin/posts/2026-05-20-abs-sum-vs-sum-abs.md) — borrador listo, programar Mié 20-may 8-10h ES
- [Serie 3/3 · El LLM en el pipeline](./linkedin/posts/99-serie-3-llm-pipeline.md) — placeholder, pendiente de prod

## Por qué la nueva estructura

- **Escalabilidad:** un fichero gigante no escala a 30+ posts.
- **Cada post es un artefacto autocontenido:** texto, métricas, lecciones, decisiones de redacción viven juntos.
- **Frontmatter YAML** en cada fichero permite filtrar/agrupar con herramientas (jq, grep, scripts) — `status: publicado`, `bucket: automatizacion-caso`, `series.name: SERIE-DESPLIEGUE-FENIX`, etc.
- **Naming `YYYY-MM-DD-slug.md`** ordena alfabéticamente por fecha — escaneo rápido.

Este fichero se puede borrar cuando ya no haga falta el stub. Mientras tanto, sirve de puente para no perder enlaces antiguos.
