import { createMint } from "@solana/spl-token";

const mint = await createMint(
  connection,
  wallet,            // fee payer
  wallet.publicKey,  // mint authority
  null,              // freeze authority
  9                  // decimals
);
console.log("Mint created:", mint.toBase58());
