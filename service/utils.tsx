// dateUtils.ts

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Parsing string tanggal ke objek Date
  const dateObject = new Date(dateString.replace(/-/g, "/"));

  // Format tanggal menggunakan objek Date
  return dateObject.toLocaleDateString("en-US", options);
};
