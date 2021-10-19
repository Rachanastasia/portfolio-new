export async function getMediumArticles(offset = 0) {
  try {
    const response = await fetch(`${process.env.API_URL}/api/feed`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching Medium articles: ", error?.message);
  }
}
