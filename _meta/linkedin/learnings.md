---
id: LEARNINGS-LINKEDIN
title: Aprendizajes acumulados
type: learnings
last_updated: 2026-05-19
---

# Aprendizajes acumulados

Lo que vamos sacando de cada post. Se actualiza tras cada snapshot de métricas y tras cada conversación / interacción significativa con la audiencia.

## Sobre el algoritmo de LinkedIn

- **Debut lift es solo del primer post.** Serie 1/3 (972 imp a 9d) tuvo el empuje extra que LinkedIn da a "perfil nuevo activo". Esa ventaja no se repite. Comparar posts 2+ entre sí, no contra el primero.
- **Cero comentarios externos = post muere antes de tiempo.** Comentarios > reacciones > shares en el ranking. De ahí la regla de añadir primer comentario propio. Pero ojo: el comentario propio NO basta — los tres posts publicados (Serie 1, Serie 2, Idempotencia) tuvieron primer comentario propio y siguen con 0 comentarios externos a 9d, 6d y 2d respectivamente. Tres ceros consecutivos confirman que el patrón actual no activa comentarios — el problema NO es la pregunta de cierre, es que la red comenta poco en general. Cambiar de palanca: pedir respuestas explícitas a 2-3 contactos cercanos antes de publicar, o probar pregunta abierta sin tecnicismo.
- **Curva de impresiones consolidada (al 19-may):** Serie 1/3: 506 → 816 → 957 → 972 (24h / 4d / 7d / 9d) — la cola larga ya está prácticamente plana, +1.6% entre día 7 y día 9. Serie 2/3: 280 → 468 → 531 (24h / 4d / 6d, +13% entre día 4 y día 6). Idempotencia: ~9 → 266 (18min / 48h). El snapshot de día 4 es un proxy ya válido del total.
- **Engagement rate referencia (consolidado):** Serie 1/3 = 1.13% (11 react / 972 imp a 9d), Serie 2/3 = 1.88% (10 react / 531 imp a 6d), Idempotencia = **2.26% (6 react / 266 imp a 48h)**. La progresión es real: cada post sube el engagement rate vs el anterior. Objetivo para próximos: ≥2% consolidado a 4d, con al menos 1 comentario externo.
- **Hipótesis confirmándose: pattern-posts retienen mejor que case-posts.** Idempotencia (pattern) tiene el engagement rate más alto de los tres, pese a arrancar más lento. Razón probable: la pieza-pattern atrae perfiles que ya saben de lo que se habla y reaccionan; la pieza-caso reparte impresiones a audiencia que solo lee.

## Sobre la red actual

- **Audiencia sesgada a juniors y el sesgo se está estabilizando entre 55-57%.** Serie 1/3 a 7d: 48%. Serie 2/3 a 6d: 57%. Idempotencia a 2d: 55%. El sesgo no se agrava más, pero tampoco baja — la red sigue cargada de early-career de la etapa NTT.
- **Empresas en "Quien ha visto tu perfil desde la publicación":**
  - Serie 2/3 (6d): Nter Tech Services (3), Santander (2), NFQ (2). Sener desapareció del panel al ensanchar la ventana.
  - Idempotencia (2d): Nter Tech Services (1), Gestycontrol Consultores Informáticos (1) — primera vez que aparece Gestycontrol.
  - **Patrón:** Nter Tech Services aparece en los dos últimos posts → seguimiento natural de la etapa NTT. Santander aparece consistentemente → buena señal para el posicionamiento banca/riesgo.
- **Crecer hacia perfiles TL/EM** requiere acción manual: revisar "Quien ha visto tu perfil" tras cada post y mandar invitación con mensaje a los relevantes. La regla del 14-may no se está ejecutando con consistencia — hay que medirla, no solo escribirla.
- **Distribución geográfica:** Madrid 29% → 36% → 45% (Serie 1 → Serie 2 → Idempotencia). Sube de forma consistente — los pattern-posts atraen perfil más Madrid-concentrado que los case-posts narrativos.
- **Distribución sectorial:** 28% → 25% → 25% Desarrollo de software. Estable.
- **Followers ganados por post:** Serie 1/3 = 2, Serie 2/3 = 1, Idempotencia = 0 (todavía a 2d). Ratio follower/100imp = 0.21 (Serie 1) / 0.19 (Serie 2) / 0.0 (Idempotencia). El primer post sigue siendo el más eficiente en conversión a follower — debut lift se nota también ahí.
- **Followers totales:** 357 al 19-may (de 356 al 17-may, +1 en 2 días). Ritmo de +1.3 followers/semana orgánico. Para llegar a 500+ en 4-6 semanas haría falta 24-36 follows/semana — orgánico solo no llega; net new connections manuales son críticas.

## Sobre la voz y el formato

- **Hook con métrica al frente funciona** ("Dos días a la semana"). Cifras en línea 1 detienen el scroll mejor que frases generales.
- **Bloque de identidad solo en posts debut o cuando la audiencia es nueva.** En posts 2+ no hace falta — los seguidores ya saben quién es el autor.
- **Separador `—` en línea propia** crea ritmo visual sin depender de markdown que LinkedIn no renderiza.
- **Listas numeradas** funcionan; bullets `-` no (LinkedIn los muestra como texto literal).
- **Cliffhanger al final** ("la próxima semana cuento...") solo funciona si la promesa se cumple en plazo. Sub-prometer y cumplir es mejor que sub-prometer y desaparecer.
- **Frase de marca al cierre fuera (regla 2026-05-16) — confirmado positivo.** Idempotencia (sin frase) tiene engagement rate 2.26% a 48h, el más alto de los tres posts. La hipótesis "quitar la frase no daña, posiblemente ayuda" se valida. Mantener la regla.

## Sobre el target editorial

- **"Más rápido vs más humano"** como tesis editorial está aterrizando bien en las primeras conversaciones — la gente recuerda esa frase de Serie 1/3 y la cita.
- **Mencionar honesto los "flecos pendientes"** (Idempotencia menciona que aún quedan cosas por arreglar) refuerza credibilidad y abre puerta a secuela natural.

## Por confirmar (necesita más datos)

- ¿Funciona mejor publicar domingo 20-22h ES que el miércoles 8-10h? Datos parciales: Serie 1 dom 20:21 → 506 imp 24h. Serie 2 mié 08:30 → 280 imp 24h. Idempotencia dom 20:00 → 266 imp 48h. Domingo parece ganar a 24h pero la muestra es de un dato por slot. Necesitamos un segundo dom-noche y un segundo mié-mañana para confirmar.
- ¿Qué tipo de pregunta de cierre genera más comentarios? Tres posts seguidos con pregunta específica + matiz técnico dan 0 comentarios externos. Cambiar el patrón en próximo post — probar pregunta de "experiencia personal" sin opciones predefinidas, o pedir respuestas directas a 2-3 contactos cercanos antes de publicar.
- ¿Cuántos followers nuevos da en media cada post largo bien rematado? Muestra: 0.21 (Serie 1) / 0.19 (Serie 2) / 0.0 (Idempotencia a 48h). Idempotencia puede subir cuando se cierre el snapshot 7d. Provisionalmente, ratio ~0.2 follow/100imp para series, indefinido para pattern.
- ¿Las piezas-pattern siguen siendo más eficientes en engagement aunque arranquen lentas? Idempotencia a 48h ya supera engagement rate de Serie 2/3 a 6d. Hace falta un segundo pattern-post para validar.

## Histórico de decisiones editoriales

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-05-10 | Cadencia inicial 1/semana | Punto de partida conservador |
| 2026-05-14 | Cadencia subida a 2/semana | Algoritmo agota un post en 72-96h, podemos meter 2 sin canibalizar |
| 2026-05-14 | Cambio Lun+Jue → Dom+Mié | Razvan ya tenía hábito Dom+Mié y Serie 1/3 funcionó en domingo |
| 2026-05-14 | Reglas de engagement obligatorias | 0 comentarios en los 2 primeros posts confirma que el algoritmo necesita activación |
| 2026-05-14 | Estructura KDD-lite con fichero por post | Escalabilidad: 1 fichero gigante no escala a 30+ posts |
| 2026-05-16 | Em-dash inline fuera en posts, frase de marca fuera del cierre | Sonaba a traducción del inglés y a plantilla. Em-dash sigue válido como separador estructural entre bloques |
| 2026-05-17 | Empezar a publicar piezas-pattern fuera de serie (Idempotencia) | Probar si los pattern posts retienen audiencia tan bien como los casos narrativos. Mide engagement a 4d |
| 2026-05-19 | Validar quitar frase de marca del cierre — mantener regla | Idempotencia a 48h tiene engagement rate 2.26%, el más alto de los tres posts publicados. La hipótesis "cerrar con pregunta directa, no con sello" se confirma |
