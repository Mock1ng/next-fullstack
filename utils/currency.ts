const currencyRp = (nominal: number) => {
  const res = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3
  });
  return res.format(nominal);
};

export default currencyRp;
