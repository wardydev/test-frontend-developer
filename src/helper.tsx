export function formatNumberWithCurrency(number: number) {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);

  return formattedNumber + " NT";
}
