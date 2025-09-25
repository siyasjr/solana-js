import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const sig = await connection.requestAirdrop(wallet.publicKey, 1 * LAMPORTS_PER_SOL);
await connection.confirmTransaction(sig, "confirmed");
console.log("Airdropped 1 SOL to:", wallet.publicKey.toBase58());
