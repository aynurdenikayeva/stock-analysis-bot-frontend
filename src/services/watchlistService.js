const API_URL = "http://localhost:8080/api/watchlist";

export async function getWatchlist() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to load watchlist");
  }
  return response.json();
}

export async function addToWatchlist(symbol) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symbol }),
  });
  if (!response.ok) throw new Error("Failed to add");
  return response.json();
}

export async function removeFromWatchlist(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete");
}
