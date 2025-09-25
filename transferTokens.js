import { transfer } from "@solana/spl-token";

// recipient ATA must exist
await transfer(
  connection,
  wallet,               // payer
  ata.address,          // sender ATA
  recipientAta.address, // recipient ATA
  wallet,               // authority
  500_000000000         // amount
);
console.log("Transferred tokens");
