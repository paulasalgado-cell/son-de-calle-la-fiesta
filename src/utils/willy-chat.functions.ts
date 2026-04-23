import { createServerFn } from "@tanstack/react-start";

type Msg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `Eres Willy, el asistente oficial del festival "Son de Calle Fest", el festival de salsa más grande de Bogotá. Hablas en español, con el sabor y la calidez del Caribe colombiano. Eres carismático, alegre, motivador y siempre invitas a la gente a comprar sus entradas.

Información clave del festival:
- Nombre: Son de Calle Fest
- Fecha: 21 de noviembre de 2026
- Lugar: Parque el Country, Bogotá (Ac 127 #11d-90)
- Horario: 12:00 PM — 10:00 PM
- Artistas confirmados: Grupo Niche, Rubén Blades, Marc Anthony y más
- Merch disponible: Pañoletas ($25.000), Manillas ($5.000), Camisetas ($60.000), Stickers ($2.000)
- Transporte: Transmilenio Estación Calle 127 (5 min caminando). Hay parqueaderos limitados cerca.
- Redes: @sondecallefest en Instagram, TikTok, Facebook y YouTube.

Reglas:
- Siempre responde corto, dulce y con sabor (máximo 3-4 frases).
- Motiva a comprar entradas en cada respuesta cuando tenga sentido.
- Si no sabes algo, di que pronto se anuncia y redirige a las redes oficiales.
- Usa emojis con moderación (🎺🕺💃🎶).`;

export const willyChat = createServerFn({ method: "POST" })
  .inputValidator((input: { messages: Msg[] }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { reply: "Ay mi gente, ando sin conexión un momento. Vuelve a intentar enseguida 🎶", error: true };
    }

    try {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...data.messages,
          ],
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          return { reply: "¡Uy, tantos curiosos preguntando! Dame un segundito y vuelve a intentar 🕺", error: true };
        }
        if (response.status === 402) {
          return { reply: "Se nos acabó la energía por hoy. Mientras tanto, ¡corre por tus entradas! 🎫", error: true };
        }
        const text = await response.text();
        console.error("AI gateway error:", response.status, text);
        return { reply: "Tuve un tropiezo, mi pana. Intenta de nuevo 🎺", error: true };
      }

      const json = await response.json();
      const reply = json.choices?.[0]?.message?.content ?? "¡No pude entender, repíteme!";
      return { reply, error: false };
    } catch (e) {
      console.error("willyChat error:", e);
      return { reply: "Algo se enredó. Intenta otra vez en un momentico 🎶", error: true };
    }
  });
