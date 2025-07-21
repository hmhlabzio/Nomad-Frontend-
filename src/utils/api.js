export const fetchPlaces = async () => {
  const apiUrl = `${import.meta.env.VITE_PAYLOAD_API_URL}/api/places?limit=100`;
  console.log("Fetching from:", apiUrl);

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      // ✅ No need to set headers for GET unless required
    });

    const data = await res.json();
    return data?.docs || [];
  } catch (error) {
    console.error('🚨 FETCH FAILED IN PRODUCTION:', error.message);
    return [];
  }
};
