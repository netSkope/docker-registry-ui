

export async function fetchDiveReport(family, image, tag) {
    const queryParams = new URLSearchParams({ family, image, tag }).toString();
    const backend_url = `https://ep-pokeball.netskope.io/api/dive/report?${queryParams}`;
    console.log(backend_url);
    try {
      const response = await fetch(backend_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching fetchDiveReport data:', error);
      return [];
    }
}