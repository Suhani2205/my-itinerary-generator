export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc:"A sole traveles",
        icon:'🙋🏾‍♀️',
        people:'1',
    },
    {
        id:2,
        title:'A couple',
        desc:"Two travelers",
        icon:'👫🏾',
        people:'2',
    },
    {
        id:3,
        title:'Family',
        desc:"A group of fun loving adv",
        icon:'🏡',
        people:'3 to 5 people',
    },
    {
        id:4,
        title:'Friends',
        desc:"A bunch of thrill-seekers",
        icon:'👩‍👩‍👦‍👦',
        people:'5 to 12 people',
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:"Stay conscious of costs",
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:"Keep cost on the average side",
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:"Don't worry about cost",
        icon:'💎',
    },
]


// export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.'

export const AI_PROMPT = `
Generate a travel plan in JSON format based on the following:

1. **Location**: {location}
2. **Number of Days**: {totalDays}
3. **Traveler Group**: {traveler}
4. **Budget**: {budget}

The JSON should include:

- **tripDetails**: location, duration, budget, and travelers.
- **hotelOptions**: An array of 3 hotel suggestions with the following fields:
  - hotelName
  - hotelAddress
  - price (in local currency or range)
  - - hotelImageUrl: A valid Unsplash Source link in the form 
  "https://source.unsplash.com/800x600/?hotel,{location},{index}"
  where {location} is the city name and {index} is 1-3
  - geoCoordinates (latitude, longitude)
  - rating (out of 5)
  - descriptions (1-2 lines)

- **itinerary**: A daily plan for {totalDays} days.
  For each day include:
  - theme (e.g., sightseeing, adventure)
  - bestTimeToVisit
  - places[]: An array of 2-3 places with:
    - placeName
    - placeDetails
    - placeImageUrl (use real or placeholder image link)
    - geoCoordinates
    - ticketPricing
    - rating
    - timeTravel (from previous location)

Format the entire response as JSON.
Use Unsplash image URLs or placeholder image links that allow hotlinking
`.trim();
