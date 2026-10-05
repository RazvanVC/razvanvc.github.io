---
id: TOPICS-BANK
title: Banco de temas + notas operativas
type: bank
last_updated: 2026-05-14
---

# Banco de temas

Reserva de temas para llenar slots futuros del calendario. Cuando un slot se acerca, mover el tema a un fichero de post (`posts/YYYY-MM-DD-slug.md`) con frontmatter y borrador.

## Heurística para llenar slots

- Cada **domingo (post largo):** caso real con métrica O un pattern de profundidad.
- Cada **miércoles (corto):** opinión, anécdota técnica concreta o post de "trampa" (cosa pequeña pero útil que se sabe poco).

## Temas pendientes (slots ya asignados pero sin borrador)

- ~~**2026-05-24 (Dom · largo) — Specs vivas en el repo, no Words muertos en SharePoint.**~~ Movido a `posts/2026-05-24-specs-vivas-en-el-repo.md` (borrador con material fresco de las specs de Astrea + Core del repo kdd-fenix de esta semana — patrón source_doc + depends_on + originals/).
- **2026-05-27 (Mié · corto) — OG tags: por qué tu URL en LinkedIn renderiza una miniatura fea.** Útil + meta, atrae engagement de la red de Tech Leads.
- **2026-05-31 (Dom · largo) — 5 lecciones refactorizando un Spring Batch en producción.** Listicle de lecciones — sin tablas internas, todo principio general.
- **2026-06-03 (Mié · corto) — Programa formativo de 10 sesiones: diseño que retiene.** Reflexión sobre el balance teoría↔lab, secuencia de complejidad, KPIs reales del cross-team.
- **2026-06-10 (Mié · corto) — Doble conteo silencioso en cubos OLAP: cuándo `OriginScope` te salva la vida.** Bug que aparece en agregaciones tras un join.
- **2026-06-14 (Dom · largo) — Mapear columna a columna entre dos sistemas: el artefacto que desbloquea proyectos.** Cómo desbloqueé un proyecto donde nadie sabía qué campo del nuevo equivalía al viejo.
- **2026-06-17 (Mié · corto) — El formatter `DOUBLE[0.00%]` que ya multiplica por 100.** Trampa que tropieza a equipos nuevos en Atoti.

## Banco general (sin slot asignado)

### Posts cortos potenciales

- **ADRs como commit messages largos**, que tu yo del futuro te agradecerá.
- **Lo que aprendes enseñando una tecnología que ya usabas.** Reflexión sobre rol enablement.
- **El quiz como herramienta pedagógica:** 2 fáciles, 4 medias, 4 difíciles atadas a las extensiones.
- **Validar joins en cubos OLAP cuando el SDK no expone API de inspección.** La prueba real la da el cubo al referenciar la jerarquía — un fail rápido es mejor que un assert que no existe.
- **"Hablar con quien lo ejecuta antes de tocar el código"** — método cuando un proceso lleva tiempo torpe.
- **Por qué el primer post en LinkedIn es el más fácil — y el segundo el más difícil.** Meta-post (cuando haya material suficiente).
- **Reescribiendo el CV personal para roles TL/EM** — lo que aprendí.

### Posts largos potenciales

- **El día que añadí un Apps Script entre Drive y el equipo.** Caso técnico micro derivado de la Serie 2/3.
- **Cuando rerunear un job ya no da miedo:** la transformación cultural de un equipo cuando los batches son idempotentes (deriva de Idempotencia).
- **Documentación que sobrevive a la rotación del equipo:** cómo escribimos handoffs vivos en lugar de Words muertos.
- **Diff entre versiones críticas de una vista de DB:** un solo `WHERE` cambió silenciosamente; cómo lo capturas en trazabilidad.

## Notas operativas

### Formato en LinkedIn

- El composer NO renderiza markdown (`-`, `**`, `#`).
- Para listas usar **números literales** (`1.`, `2.`), **Unicode bullets** `•` o **em-dashes** `—`.
- Negrita y cursiva se aplican desde la barra del composer (no siempre en móvil).
- Hashtags al final del post.

### Días/horas óptimos (LinkedIn España, perfiles tech)

- **Martes-jueves 8:00-10:00** o **12:00-14:00:** peak B2B tech.
- **Viernes:** funciona para opinión / personal branding.
- **Domingo noche (20:00-22:00):** captura "preparándose para el lunes" — bajo competencia.
- **Sábado:** lo más bajo, evitar.

### Imágenes

- Posts cortos tiran solos sin imagen.
- Para los largos, plantear si una captura simple del flujo (diagrama de cajas) ayuda al engagement.

### Etiquetas a personas

- Si en algún post se menciona a un compañero o lead concreto, etiquetarle suma alcance.
- Sin exagerar: 1 mención por post máximo.
