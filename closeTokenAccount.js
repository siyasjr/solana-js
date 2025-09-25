import { closeAccount } from "@solana/spl-token";

await closeAccount(
  connection,
  wallet,         // payer
  ata.address,    // token account to close
  wallet.publicKey, // destination for SOL refund
  wallet          // authority
);
console.log("Closed ATA and refunded rent");
