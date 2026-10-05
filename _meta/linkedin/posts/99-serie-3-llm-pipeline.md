---
id: POST-SERIE-3-LLM
title: "Serie 3/3 · El LLM en el pipeline"
status: placeholder
date_planned: 2026-06-07
format: largo
length_chars: 1500
bucket: automatizacion-ia
series:
  name: SERIE-DESPLIEGUE-FENIX
  part: 3
  of: 3
depends_on:
  - POST-2026-05-13
condition: "Depende de que la validación con LLM esté en prod (3-4 semanas desde 13-may). Si no está listo el 7-jun, mover slot y meter post del banco."
tags:
  - automatizacion
  - tech-lead
  - ia
  - process-automation
---

# Serie 3/3 · El LLM en el pipeline

Cierre de la serie sobre el plan de despliegue de Fénix. Cuando la validación LLM esté en producción, hay que volver a esta plantilla, rellenar placeholders con criterios reales y métricas actualizadas, y publicar.

## Texto placeholder

```
Cierre de la serie sobre el plan de despliegue de Fénix (Intrum). La primera ola fue Python local. La segunda, Google Apps Script ordenando los scripts por tiempo de ejecución para que el equipo de validación saliera antes de casa.

La tercera la teníamos en el roadmap desde el principio: meter un LLM en el pipeline.

[Hoy ya está en producción / lo subimos esta semana]: cada script SQL que se sube a la carpeta de Drive del release pasa primero por una skill de [Claude / Gemini] que lo valida contra nuestras reglas internas antes de marcarlo como apto para el plan.

Lo que valida la skill:
[criterio 1: por completar]
[criterio 2: por completar]
[criterio 3: por completar]

Lo importante no es que un LLM lea SQL. Eso ya lo hace cualquiera. Lo importante es que lo hace dentro del flujo real del equipo, sin pedirle a nadie que cambie su forma de trabajar. El dev sube el script como siempre. La validación llega antes de que el plan se construya. Si algo falla, lo ve quien tiene que verlo, no quien lo descubre a las 3 AM.

[Resultado actualizado: por completar cuando esté en prod — métrica concreta del valor que añadió la validación]

Si os tengo que dejar una sola idea de toda esta serie, es esta: la automatización compite con la inercia. Y a la inercia hay que entrarle varias veces hasta ganarle del todo.

Que es, en el fondo, lo que persigo desde que empecé en esto: que el equipo que venga detrás se encuentre menos cosas raras de las que me encontré yo.

#Automatización #TechLead #IA #ProcessAutomation
```

## Pendiente de completar antes de publicar

- Decidir si es Claude o Gemini (o ambos) — actualizar el corchete.
- Rellenar los tres criterios que valida la skill.
- Añadir métrica concreta: scripts rechazados/aceptados, tiempo ahorrado al equipo de validación, etc.
- Actualizar el primer párrafo según cuándo se publique respecto a la subida a prod.

## Notas de redacción

- Cierre con frase de marca en variante "equipo" — *"que el equipo que venga detrás se encuentre menos cosas raras de las que me encontré yo"*.
- Mantener el arco narrativo de las 3 olas — el lector que llega tarde puede leer este post solo y entender la serie completa.
- El insight del post no es "LLM lee SQL" sino "encajamos el LLM en el flujo sin pedirle al equipo cambiar su forma de trabajar". Subrayar eso.
