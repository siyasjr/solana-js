import { getAccount } from "@solana/spl-token";

const accountInfo = await getAccount(connection, ata.address);
console.log("Token balance:", Number(accountInfo.amount));
