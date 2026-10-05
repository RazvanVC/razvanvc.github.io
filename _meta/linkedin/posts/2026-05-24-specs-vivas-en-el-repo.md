---
id: POST-2026-05-24
title: "Specs vivas en el repo, no Words muertos en SharePoint"
status: borrador-listo
date_planned: 2026-05-24T20:00:00+02:00
format: largo
length_chars: 1900
bucket: tech-lead-docs
series: null
depends_on: []
tags:
  - tech-lead
  - docs-as-code
  - software-engineering
  - documentation
---

# Specs vivas en el repo, no Words muertos en SharePoint

Patrón doc-as-code aplicado a specs funcionales. Tres campos de frontmatter que separan "transcribir el Word" de tener un grafo navegable de specs vivas. Material fresco del trabajo en el repo del proyecto principal estas semanas.

## Texto a publicar

```
Llevo unas semanas montando algo en el repo del proyecto principal que ya está cambiando cómo el equipo encuentra cosas. Es docs-as-code aplicado a las specs funcionales — pero la pieza que importa no es el .md, son los metadatos que llevan al lado.

—

El Word funcional sigue existiendo. Es el contrato firmado, la pieza legal. Pero el dev que tiene que tocar el código no entra a SharePoint cada vez. Termina preguntando en Slack o reescribiendo lo mismo en el ticket.

Lo que estoy aplicando para cerrar esa distancia es meter las specs en el repo, en Markdown, junto al código que documentan. Pero lo que separa esto de simplemente "copiar el Word a Markdown" son tres campos en el frontmatter:

1. source_doc apunta a la sección concreta del Word original (sec 6.6.1, por ejemplo). Si mañana el funcional cambia, ese campo me dice exactamente qué spec hay que revisar.

2. depends_on lista las specs hermanas relacionadas. Cuando alguien lee FEAT-001 y depende de DOM-002 + FEAT-003, no busca. Lo tiene enlazado.

3. Una carpeta originals al lado de los .md guarda el .docx original. Diff cuando alguien edita el Word; alerta cuando la spec se queda atrás.

Con esos tres campos, el Word sigue siendo el contrato funcional firmado, la spec en .md es lo que el dev lee y edita en el día a día, y un agente IA puede leer cualquiera de las dos cuando hace falta.

—

La trampa es no quedarse en "transcribir el Word a Markdown". El valor está en lo que rodea al texto: el ancla al funcional original y las dependencias entre specs hermanas. Eso es lo que convierte una pila de ficheros en un grafo navegable.

¿En tu equipo dónde vive la documentación funcional y dónde la lee el dev en el día a día? Me interesa especialmente quien haya intentado cerrar esa distancia y se haya topado con el clásico "el Word está desactualizado, nadie lo mantiene".

#TechLead #DocsAsCode #SoftwareEngineering
```

## Primer comentario propio (publicar 5-10 min después)

```
PD: el patrón aplica igual a ADRs y runbooks. Tres campos básicos en el frontmatter — status, owner, last_reviewed — y un grep ya te da qué docs llevan más de 6 meses sin tocar y a quién preguntar. Es la pieza que falta para que las specs envejezcan visiblemente y no en silencio.
```

## Notas de redacción

- **Primera persona, soporte real.** Lo que describe el post es literalmente lo que Razvan está aplicando estas semanas en el repo del proyecto principal (frontmatter con `source_doc:` ancla a secciones del Word, `depends_on:` cruzado entre specs hermanas, carpeta `originals/` con el .docx al lado del .md). No es anécdota inventada — es práctica vigente.
- **Cambio de palanca en pregunta de cierre.** Los tres posts anteriores cerraron con "¿te ha pasado X?" + matiz técnico y dieron 0 comentarios externos consecutivos. Este pregunta por el statu quo del lector ("¿dónde vive y dónde se lee?") en lugar de por experiencia personal. Hipótesis: cuesta menos responder por costumbre que por episodio recordado.
- Cierre con pregunta directo a hashtags. Sin frase de marca (regla 2026-05-16, confirmada efectiva tras Idempotencia).
- Sin nombres de cliente, sin KDD-as-jerga pública, sin nombres de tablas/vistas/columnas internas. Solo nombres genéricos del patrón doc-as-code (`source_doc`, `depends_on`, `originals`).
- Em-dash `—` como separador entre bloques, listas numeradas (sin bullets `-` que LinkedIn no renderiza).
- ADRs/runbooks dejados solo para el PD para no diluir el cuerpo. El cuerpo se centra en specs funcionales (el caso concreto); el PD extiende a las dos primas más cercanas (ADRs y runbooks) atrayendo a perfiles de arquitectura y SRE.
- **Hashtags:** #TechLead atrae al target principal TL/EM; #DocsAsCode + #SoftwareEngineering amplían a perfiles backend y arquitectura.
