export default function calculateTTC(ht, taux) {
    if (ht < 0 || taux < 0) {
        throw new Error("HT and taux must be non-negative values.");
    }
    const ttc = ht * (1 + taux / 100);
    return {
        ht,
        taux,
        ttc
    };
}