export const random = (length: number = 6) => {
  const dict = 'ABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890';
  return [...Array(length)]
    .reduce(acc => acc + dict[Math.floor(Math.random() * dict.length)], '')
    .toLowerCase();
};
