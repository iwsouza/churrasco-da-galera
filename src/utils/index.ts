/**
 * Formatador de moeda BRL
 * @param value number ou string
 * @returns
 */
export const formatCurrency = (value: number | string) => {
  const verified =
    value === null || undefined ? (value = 0.0) : isNaN(Number(value)) ? (value = 0.0) : value;
  return String(
    Number(verified).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  );
};
