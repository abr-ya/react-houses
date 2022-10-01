export const formatPrice = (price: string) => price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatRooms = (count: number, name: string) => `${count} ${name}${count !== 1 ? "s" : ""}`;
