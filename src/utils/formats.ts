export const formatPrice = (price: string) => price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatRooms = (count: number, name: string) => `${count} ${name}${count !== 1 ? "s" : ""}`;

export const getNowString = () => {
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  const nowString = new Date(Date.now() - tzoffset).toISOString().replace(/[^0-9]/g, "");

  return `${nowString.slice(0, 8)}_${nowString.slice(8, 14)}`;
};
