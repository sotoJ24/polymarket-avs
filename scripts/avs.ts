// scripts/avs.ts

import readline from "readline";
import { validatePredictionRequest } from "../lib/validate.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter prediction request (e.g., 'Will Ethereum hit 100k by 2025? - YES? - YES'):\n", async (input) => {
  const result = await validatePredictionRequest(input);
  console.log("\n✅ AVS Response:");
  console.log(result);
  rl.close();
});
