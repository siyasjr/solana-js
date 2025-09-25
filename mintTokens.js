import { mintTo } from "@solana/spl-token";

await mintTo(
  connection,
  wallet,       // payer
  mint,         // mint
  ata.address,  // ATA
  wallet,       // authority
  1000_000000000 // 1000 tokens (with 9 decimals)
);
console.log("Minted tokens to ATA");
