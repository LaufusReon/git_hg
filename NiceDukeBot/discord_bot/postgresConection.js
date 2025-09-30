// *** 👇 Aquí mandas datos a n8n vía webhook
        fetch("https://TU_N8N_SERVER/webhook/music-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user: message.author.username,
            song: url,
            genre: "pendiente", // Podrías usar un API de análisis de música
        }),
        });