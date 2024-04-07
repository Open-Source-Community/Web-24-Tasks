	const moviesData = [
  {
    original_language: "en",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    poster_path: "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
    release_date: "2024-03-27",
    title: "Godzilla x Kong: The New Empire",
  },
  {
    original_language: "en",
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    release_date: "2024-03-02",
  },
  {
    original_language: "zh",
    overview:
      "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
    poster_path: "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
    release_date: "2023-07-20",
    title: "Creation of the Gods I: Kingdom of Storms",
  },
  {
    original_language: "en",
    poster_path: "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
    release_date: "2024-03-08",
    title: "Road House",
  },
  {
    original_language: "en",
    overview:
      "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    release_date: "2024-02-14",
    title: "Madame Web",
  },
];

export default moviesData;

const imgPath = "https://image.tmdb.org/t/p/w500/";

// example for first  movie in the array
// you have to make this for every movie in moviesData array
const posterPath = imgPath + moviesData[1].poster_path;
