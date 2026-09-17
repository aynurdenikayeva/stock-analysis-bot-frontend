const API_URL = "http://localhost:8080/api/portfolio";

export async function getPortfolio() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "Failed to load portfolio. Please check your network connection.",
    );
  }

  return response.json();
}

export async function addToPortfolio(stock) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stock),
  });

  if (!response.ok) {
    throw new Error("Failed to add stock to portfolio.");
  }

  return response.json();
}

export async function removeFromPortfolio(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete stock.");
  }
}
