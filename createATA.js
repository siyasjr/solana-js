import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const ata = await getOrCreateAssociatedTokenAccount(
  connection,
  wallet,        // payer
  mint,          // token mint
  wallet.publicKey // owner of the ATA
);
console.log("ATA:", ata.address.toBase58());
