export async function data() {
  const res = await fetch(`https://api.hnpwa.com/v0/news/1.json`);
  return res.json();
}
