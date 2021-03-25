export async function data(params: { name: string }) {
  const res = await fetch(`https://api.hnpwa.com/v0/user/${params.name}.json`);
  return res.json();
}
