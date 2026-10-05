---
id: POST-2026-05-13
title: "Serie 2/3 · Más rápido vs más humano"
status: publicado
date_planned: 2026-05-13
date_published: 2026-05-13T08:30:00+02:00
format: largo
length_chars: 2150
bucket: automatizacion-caso
series:
  name: SERIE-DESPLIEGUE-FENIX
  part: 2
  of: 3
depends_on:
  - POST-2026-05-10
url_analytics: https://www.linkedin.com/analytics/post-summary/urn:li:activity:7460382860332531712/
tags:
  - automatizacion
  - tech-lead
  - process-automation
  - devops
---

# Serie 2/3 · Más rápido vs más humano

Segunda entrega de la serie. Aterriza la métrica (~2 días/semana liberados) y el insight central — el fix no fue acelerar, fue cambiar el orden para que el equipo de validación saliera antes de casa.

## Texto publicado

```
Volvemos al plan de despliegue de Fénix (Intrum). Os debía la pieza que de verdad cambió las cosas — aquí va.

Si no leíste el post anterior, el contexto es: el plan de cada release a producción se hacía a mano. Costaba unos 2 días a la semana de una persona, y dejaba al equipo de validación pegado al reloj fuera de hora.

El primer intento fue obvio: un script en Python que leía la carpeta y montaba el Excel ordenado. Quitó el copy-paste. Pero la queja del equipo no era el copy-paste — era el reloj a las 3 de la mañana.

Cuando me senté con ellos a entender por qué, el problema real apareció: los scripts se desplegaban en el orden en que entraban a la carpeta. Si quedaba uno lento al final, el equipo tenía que esperar a que TODO terminase para cerrar la noche. La sesión se alargaba por culpa del orden, no del contenido.

El fix no fue acelerar el despliegue — ya iba bien — fue cambiar el orden:

1. Agrupar los scripts por incidencia.
2. Estimar el tiempo de cada grupo.
3. Empezar por los más cortos.
4. Dejar los pesados para el final, cuando ya hay tandas validadas.

Resultado: el equipo cierra tandas pronto, valida en paralelo a la ejecución de los scripts largos, y se va antes a casa.

Lo construimos con Google Apps Script sobre la carpeta de Drive del release. La pieza es minúscula. El insight no.

Y la lección que me llevo es esta: la automatización buena no se mide solo en horas ahorradas. Se mide en cuánta gente deja de hacer trabajo que no quería hacer, y en cuánto más humano queda el sistema cuando alguien lo opera de madrugada.

Lo de hoy son ~2 días a la semana de una persona que ya no monta el plan a mano, y un equipo de validación que sale antes a casa. Que es la métrica que de verdad nos importa.

El siguiente paso ya está en el horno: meter un LLM en el flujo para que valide cada script antes de que entre en el plan. Si nada se tuerce, en 3-4 semanas lo tenemos vivo. Os cuento cuando lo tengamos.

Que al final es lo que persigo en cada proyecto: que cuando me vaya, lo que dejo atrás funcione un poco mejor que cuando llegué.

#Automatización #TechLead #ProcessAutomation #DevOps
```

## Snapshots de métricas

| Captura | Impresiones | Alcance | Reacciones | Comentarios | Shares | Visitas perfil | Followers ganados |
|---|---|---|---|---|---|---|---|
| 24h (Jue 14-may ~14:00) | 280 | 156 | 6 | 0 | 0 | 2 | 0 |
| 4 días (Dom 17-may) | 468 | 272 | 9 | 0 | 0 | 7 | 1 |
| 6 días (Mar 19-may) | 531 | 310 | 10 | 0 | 0 | 8 | 1 |

> Snapshot 7d por capturar (Mié 20-may) — entre día 4 y día 6 sumó solo +63 imp (+13%), la curva se aplana igual que Serie 1/3.

**Audiencia top (al 6º día):** 57% Sin experiencia · 36% Madrid y alrededores · 25% Desarrollo de software

**Quién ha visto el perfil desde esta publicación (6d):** 3 trabajan en Nter Tech Services · 2 en Santander · 2 en NFQ — Sener desapareció del panel al ensanchar la ventana; NFQ entra ahora.

**Engagement rate consolidado:** 10 react / 531 imp = **1.88%** (estable desde 1.92% a 4d — la cola larga no diluye el engagement como pasó con Serie 1/3).

## Lecciones del post

- Engagement rate (1.88% a 6d) sigue por encima de Serie 1/3 consolidado (1.15%) — la audiencia engancha mejor con la pieza-aterrizaje que con la del dolor.
- Sin debut lift, alcance bruto ~55% del de Serie 1/3 a misma ventana (531 vs 972 a ~8d).
- **Comentarios externos: 0 en 6 días.** La pregunta de cierre no removió el algoritmo. Es la palanca más débil que arrastramos desde Serie 1/3 — la regla del comentario propio a los 5-10 min sola no basta.
- 8 visitas al perfil (vs 2 a 24h, 7 a 4d) — la cola larga llega tarde pero llega. Y el follower atribuido confirma que la pieza-aterrizaje captura mejor que la del dolor.
- Sesgo a "sin experiencia" SUBE entre Serie 1 (48%) y Serie 2 (57%) — la red sigue chupándose audiencia early-career, urgente ampliar net new connections hacia TL/EM.

## Notas de redacción

- Reentrada al hilo con *"Volvemos al plan de despliegue de Fénix"* — recap explícito para quienes lleguen tarde.
- Recap del dolor en una sola línea.
- Bullets pasados a numerados al publicar (LinkedIn no renderiza markdown).
- Variación de la frase de marca: *"que cuando me vaya, lo que dejo atrás funcione un poco mejor que cuando llegué"* — ángulo "proyecto".
- Cliffhanger explícito al final hacia Serie 3/3 con plazo aproximado (3-4 semanas).
