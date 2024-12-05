/* eslint-disable no-undef */
exports.handler = async function (event) {
  try {
    const apiKey = process.env.VITE_API_KEY;
    const search = event.queryStringParameters?.q || "";
    const searchTerm = search ? `&q=${encodeURIComponent(search)}` : '';
    if (!apiKey) {
      throw new Error("La clé API est manquante !");
    }

    const response = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=100${searchTerm}`
    );

    if (!response.ok) {
      throw new Error(`Erreur API Rijksmuseum : ${response.status}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.artObjects),
    };
  } catch (error) {
    console.error("Erreur dans la fonction serverless :", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
