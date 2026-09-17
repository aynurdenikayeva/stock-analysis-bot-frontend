const API_URL = "http://localhost:8080/api/stocks";

export async function getStockHistory(symbol) {
  const response = await fetch(
    `${API_URL}/history/${symbol}`
  );

  if (!response.ok) {
    throw new Error("Failed to load stock history");
  }

  return response.json();
}