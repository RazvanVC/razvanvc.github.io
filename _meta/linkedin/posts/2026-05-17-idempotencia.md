---
id: POST-2026-05-17
title: "Idempotencia: primera línea de defensa cuando un batch falla"
status: publicado
date_planned: 2026-05-17T20:00:00+02:00
date_published: 2026-05-17T20:00:00+02:00
format: largo
length_chars: 2050
bucket: automatizacion-pattern
series: null
depends_on: []
url_analytics: https://www.linkedin.com/analytics/post-summary/urn:li:activity:7461842729451294720/
tags:
  - automatizacion
  - spring-batch
  - tech-lead
  - backend-engineering
---

# Idempotencia: primera línea de defensa cuando un batch falla

Caso real del batch de carga diaria en Fénix — duplicados en producción y fix con tabla intermedia + unique constraint sobre la clave funcional.

## Texto a publicar

```
Un duplicado apareció en producción, en una tabla que por diseño no podía tenerlos. Y la pregunta no fue "¿cómo lo arreglo?", fue "¿cuántos más hay así, y desde cuándo?".

Desde ese día tengo claro lo barato que sale diseñar idempotencia, y lo caro que sale no hacerlo.

—

El batch en cuestión era uno de los procesos de carga diaria del proyecto. En su diseño original era directo: leer la fuente, transformar, escribir en la tabla final. Sin tabla intermedia. Sin registro de qué se había procesado ya. Sin red de seguridad.

Funcionaba bien hasta que un bug hizo que hubiera que lanzar el proceso dos veces sobre los mismos datos. Y la tabla final no tenía nada que protegiera contra esa segunda escritura.

El fix no fue parchear el bug. El fix fue cambiar el contrato del batch:

1. Añadimos una tabla intermedia que registra cada evento procesado antes de tocar la tabla final.
2. Pusimos un unique constraint sobre esa tabla, sobre la clave funcional del evento.
3. El flujo pasa primero por ahí, si un evento ya entró antes, la constraint lo rechaza, y el batch lo trata como "ya procesado" y sigue.

Resultado: ahora ese batch se puede ejecutar las veces que haga falta. Si cae a mitad, lo reruneas. Si alguien lo lanza dos veces por accidente, no pasa nada. Si necesitamos reprocesar un día concreto, también puedes. La idempotencia te abre la puerta a operaciones que antes daban miedo.
—

No está todo cerrado: aún quedan flecos en otra parte del flujo que vamos arreglando en las próximas semanas. Pero el contrato principal, "este batch puede ejecutarse N veces sin producir duplicados", ya está.

Y la lección que me llevo es esta: la pregunta más útil que se le puede hacer a un batch antes de subirlo a producción no es "¿qué hace?". Es "¿qué pasa si se ejecuta dos veces?". Si no tienes respuesta, el bug ya está escrito, solo falta que alguien lo dispare.

¿Tú cómo lo resuelves en tus procesos batch? ¿Constraints, idempotency keys, registro previo de eventos? Me interesa especialmente quien lo haya hecho con Spring Batch, donde el JobExecution te ayuda parte del camino pero no todo.

#Automatización #SpringBatch #TechLead #BackendEngineering
```

## Primer comentario propio (publicar 5-10 min después)

```
PD técnica que no cabía en el post: en Spring Batch el JobExecution + StepExecution te dan idempotencia parcial, es decir si reanudas un job interrumpido, no repite chunks ya commiteados. Pero eso solo aplica dentro de la misma ejecución. Si alguien lanza el job otra vez como ejecución nueva, ya estás solo. Por eso la tabla de eventos con constraint sigue siendo la red real, no el framework.
```

## Notas de redacción

- Caso real basado en el batch de carga de resultados de llamada. NO nombrar el nombre interno del batch ni el de las tablas, generalizar como "tabla intermedia" y "tabla final".
- Mencionar fleco pendiente (otro bug en arreglo en próximas semanas) para abrir secuela natural, futuro post sobre la segunda capa de defensa.
- Cierre con pregunta concreta + matiz para atraer a perfiles Spring Batch. Sin frase de marca (regla actualizada 2026-05-16, sonaba a plantilla).

## Snapshots de métricas

| Captura | Impresiones | Alcance | Reacciones | Comentarios | Shares | Visitas perfil | Followers ganados |
|---|---|---|---|---|---|---|---|
| 18 min (Dom 17-may ~20:18) | 9 | 3 | 0 | 1* | 0 | 0 | 0 |
| ~48h (Mar 19-may) | 266 | 139 | 6 | 1* | 0 | 4 | 0 |

> *El comentario es la PD técnica propia publicada inmediatamente después. NO es engagement externo.
>
> Snapshots 4d y 7d por capturar.

**Audiencia top (al 2º día):** 55% Sin experiencia · 45% Madrid y alrededores · 25% Desarrollo de software

**Quién ha visto el perfil desde esta publicación:** 1 trabaja en Nter Tech Services · 1 en Gestycontrol Consultores Informáticos — primera vez que aparece Gestycontrol.

**Engagement rate consolidado:** 6 react / 266 imp = **2.26%** — por encima de Serie 1/3 (1.15%) y Serie 2/3 (1.92% a 4d) en la misma ventana de tiempo, y subiendo sin frase de marca al cierre.

## Lecciones del post

- Engagement rate (2.26% a 48h) es el más alto de los tres posts publicados — la hipótesis "quitar la frase de marca no daña, posiblemente ayuda" empieza a validarse.
- Madrid sube a 45% (vs 29% Serie 1, 36% Serie 2) — el sesgo geo va corrigiéndose post a post. El pattern-post sobre Spring Batch atrae perfil más senior y más Madrid-concentrado.
- **0 comentarios externos otra vez** — la palanca débil sigue sin moverse, ni con pregunta concreta + matiz técnico hacia Spring Batch. Tres posts seguidos a cero, ya no es ruido: la red simplemente no comenta.
- Curva más plana que Serie 1/3 en mismo periodo (266 a 48h vs ~600+ Serie 1/3 a 24h) — sin debut lift confirmado, los pattern-posts arrancan más lentos pero con mejor engagement rate.
- Primer post sin pertenecer a una serie y sin frase de marca: el formato "caso real + lección + pregunta técnica concreta" funciona como standalone. Valida intercalar piezas-pattern entre piezas-caso.
