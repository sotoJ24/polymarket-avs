// lib/validate.ts

export async function validatePredictionRequest(request: string): Promise<string> {
  if (request.toLowerCase().includes("yes")) {
    return "Prediction likely to resolve as YES ✅";
  } else if (request.toLowerCase().includes("no")) {
    return "Prediction likely to resolve as NO ❌";
  }
  return "Prediction unclear 🤔 (need more context)";
}
