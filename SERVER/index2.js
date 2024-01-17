const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Hardcoded API key (replace with your actual key or use environment variables)
const geocodingApiKey = 'm4/mATNWCd9ReO/WW22YrA==dYJ5vHmQDDdRf7BJ';

if (!geocodingApiKey) {
    console.error('API key is missing. Please provide a valid API key.');
    process.exit(1); // Exit the process if API key is not provided
}

app.post('/api/location', async (req, res) => {
  const { city, country } = req.body;

  try {
      console.log('Received request for location:', { city, country });

      const apiUrl = `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`;



      const response = await axios.get(apiUrl, {
          headers: {
              'X-Api-Key': geocodingApiKey,
          },
      });

      console.log('Geocoding API Response:', response.data);
      if (response.data && response.data.length > 0) {
          const locations = response.data.map(result => ({
              latitude: result.latitude,
              longitude: result.longitude,
              country: result.country,
              state: result.state,
              name: result.name
                  // Add other properties you want to include in the response

          }));

          res.json({ locations });

      } else {
          res.status(404).json({ error: 'Location not found' });
      }

  } catch (error) {
      console.error('Error in backend route:', error.response ?.data || error.message);
      res.status(error.response ?.status || 500).json({ error: 'Internal Server Error' });
  }

}
  );


  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});