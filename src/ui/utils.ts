export const formatMoney = (amount: number) => {
    return Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
    }).format(amount);
}