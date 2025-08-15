const { Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

(async () => {
    const dataSize = 1024*1024;
    const minBalance = await connection.getMinimumBalanceForRentExemption(dataSize);
    console.log(`Rent-Exemption-Min : ${minBalance / LAMPORTS_PER_SOL} SOL`);
} ) ();

