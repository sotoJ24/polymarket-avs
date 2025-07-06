# Polymarket AVS

A minimal AVS simulation to verify prediction requests using simple logic, inspired by Polymarket.

## How It Works

- Enter a prediction with either "YES" or "NO".
- The AVS simulates an inference result (can later be connected to Gemma or external APIs).

## Example

```bash
npx tsx scripts/avs.ts
```

Input:

```
Will Ethereum hit 100k by 2025? - YES
```

Output:

```
✅ AVS Response:
Prediction likely to resolve as YES ✅
```
![Screenshot from 2025-07-05 20-42-17](https://github.com/user-attachments/assets/de0709f5-9016-435a-a167-48745c4566da)

