const API_BASE = (import.meta.env.VITE_API_BASE || "").replace(/\/$/, "");

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

export async function processPdf({ name, numQuestions, outputFormat, file }) {
  const body = new FormData();
  body.append("name", name);
  body.append("num_questions", String(numQuestions));
  body.append("output_format", outputFormat);
  body.append("file", file);

  const response = await fetch(apiUrl("/api/process"), { method: "POST", body });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.detail || "Request failed");
  }
  return data;
}
