export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInItaly(): Date {
  // Return current time - formatting function will handle IST conversion
  return new Date();
}

export function formatTimeForItaly(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Asia/Kolkata", // Indian Standard Time
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Get the timezone abbreviation dynamically
  const timeZoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value || "IST";

  formattedTime += ` ${timeZoneName}`;

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
