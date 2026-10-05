---
id: POST-2026-05-20
title: "abs(SUM) vs SUM(abs)"
status: publicada
date_planned: 2026-05-20T07:47:00+02:00
format: corto
length_chars: 950
bucket: olap-mantenimiento
series: null
depends_on: []
tags:
  - risk-management
  - frtb
  - activeviam
  - data-platforms
---

# abs(SUM) vs SUM(abs)

Post-trampa típico para reporting de riesgo. Diferencia entre exposición neta y bruta. Mantenimiento de keywords ActiveViam / FRTB con un caso que cualquier ingeniero que haya tocado risk-reporting reconocerá.

## Texto a publicar

```
Un detalle pequeño que tropieza a media oficina cuando empiezan a tocar reporting de riesgo:

abs(SUM) NO es lo mismo que SUM(abs).

Y según cuál uses, el report dice cosas distintas.

abs(SUM) → sumas primero, valor absoluto al final. Mide exposición NETA: los longs cancelan los shorts.

SUM(abs) → valor absoluto de cada operación, luego sumas. Mide exposición BRUTA: no hay cancelación, ves el tamaño total movido.

Ejemplo. Tienes +100 y -100 en un libro de trading.
abs(SUM) = 0 → estás cuadrado.
SUM(abs) = 200 → has movido 200, aunque netas a cero.

Las dos son útiles. Pero responden a preguntas distintas:
abs(SUM) pregunta "¿cuánto me la juego?"
SUM(abs) pregunta "¿cuánto he estado moviendo?"

¿Te ha pasado pillarlo en algún sistema de reporting? Es de los bugs silenciosos más comunes. El report dice "estamos bien" cuando en realidad solo dice "está cuadrado".

#RiskManagement #FRTB #ActiveViam #DataPlatforms
```

## Primer comentario propio (publicar 5-10 min después)

```
PD: la misma trampa con otro disfraz aparece en VaR — neto y bruto miden cosas distintas, y la diferencia importa cuando alguien lee el report y toma una decisión. Si usáis Atoti, las measures con `tt.where` ayudan a separar las dos sin duplicar columnas.
```

## Notas de redacción

- Sin nombrar cliente concreto ni inventar caso vivido — explicación conceptual con ejemplo numérico.
- Cierre con pregunta y directo a hashtags. Sin frase de marca (regla actualizada 2026-05-16, suena a plantilla).
- Primer comentario propio extiende el tema a VaR y menciona `tt.where` para atraer a perfiles Atoti.
- Sin bullets `-` en el cuerpo, todo prosa con saltos de línea, evita el bug de markdown en LinkedIn.
