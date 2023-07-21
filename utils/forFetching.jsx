const key = process.env.NEXT_PUBLIC_AUTH_KEY;
export const url = "https://api.themoviedb.org/3/";
export const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
  next: {
    revalidate: 1000
  }
};
