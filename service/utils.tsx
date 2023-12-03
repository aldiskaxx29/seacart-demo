// dateUtils.ts

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  // Parsing string tanggal ke objek Date
  const dateObject = new Date(dateString?.replace(/-/g, "/"));

  // Dapatkan tanggal, bulan, dan tahun
  const day = dateObject.toLocaleDateString("en-US", { day: "numeric" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const year = dateObject.toLocaleDateString("en-US", { year: "numeric" });

  // Gabungkan hasilnya dengan format yang diinginkan
  return `${day} ${month} ${year}`;
};
