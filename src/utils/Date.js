function currentYear() {
  const now = new Date();
  return now.getFullYear();
}

function ageYears() {
  const bDay = new Date(2004, 11, 1); // 1 dicembre 2004
  const now = new Date();

  let age = now.getFullYear() - bDay.getFullYear();

  if (
    now.getMonth() < bDay.getMonth() ||
    (now.getMonth() === bDay.getMonth() && now.getDate() < bDay.getDate())
  ) {
    age--;
  }

  return age;
}

export { ageYears };
export default currentYear;
