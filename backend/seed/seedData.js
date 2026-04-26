const today = new Date();

const toISODate = (offsetDays = 0) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
};

const approvedEvents = [
  { title: "Kandy Perahera", category: "Cultural", location: "Kandy", district: "Kandy", days: 0 },
  { title: "Galle Fort Soiree", category: "Social", location: "Galle", district: "Galle", days: 0 },
  { title: "Mist Valley Yoga", category: "Wellness", location: "Hatton", district: "Hatton", days: 0 },
  { title: "Colombo Symphony", category: "Music", location: "Colombo 07", district: "Colombo", days: 0 },
  { title: "Wild Trails Safari", category: "Nature", location: "Yala", district: "Yala", days: 0 },
  { title: "Canvas & Cocktails", category: "Arts", location: "Colombo 03", district: "Colombo", days: 0 },
  { title: "Chef's Table Night", category: "Gourmet", location: "Negombo", district: "Negombo", days: 0 },
  { title: "Legacy Dance Expo", category: "Heritage", location: "Anuradhapura", district: "Anuradhapura", days: 0 },
  { title: "Jaffna Heritage Walk", category: "Cultural", location: "Jaffna", district: "Jaffna", days: 0 },
  { title: "Trinco Sunset Meetup", category: "Social", location: "Trincomalee", district: "Trincomalee", days: 0 },
  { title: "Tea Country Retreat", category: "Wellness", location: "Nuwara Eliya", district: "Nuwara Eliya", days: 0 },
  { title: "Harbor Beats Live", category: "Music", location: "Galle", district: "Galle", days: 0 },
  { title: "Riverfront Jazz", category: "Music", location: "Batticaloa", district: "Batticaloa", days: 0 },
  { title: "Hilltop Art Fair", category: "Arts", location: "Matale", district: "Matale", days: 0 },
  { title: "Coconut Coast Picnic", category: "Social", location: "Kalutara", district: "Kalutara", days: 0 },
  { title: "Forest Dawn Trek", category: "Nature", location: "Sinharaja", district: "Ratnapura", days: 0 },
  { title: "Gourmet Street Night", category: "Gourmet", location: "Colombo 04", district: "Colombo", days: 0 },
  { title: "Temple Light Walk", category: "Heritage", location: "Kurunegala", district: "Kurunegala", days: 0 },
  { title: "Island Dance Circle", category: "Cultural", location: "Mannar", district: "Mannar", days: 0 },
  { title: "Sunrise Wellness Hour", category: "Wellness", location: "Badulla", district: "Badulla", days: 0 },
  { title: "Beachside Folk Session", category: "Music", location: "Matara", district: "Matara", days: 0 },
  { title: "Tea Estate Stories", category: "Heritage", location: "Nuwara Eliya", district: "Nuwara Eliya", days: 0 },
  { title: "Urban Sketch Meet", category: "Arts", location: "Gampaha", district: "Gampaha", days: 0 },
  { title: "Moonlit Food Trail", category: "Gourmet", location: "Puttalam", district: "Puttalam", days: 0 },
  { title: "Lagoon Photo Walk", category: "Nature", location: "Trincomalee", district: "Trincomalee", days: 0 },
  { title: "Market Day Social", category: "Social", location: "Anuradhapura", district: "Anuradhapura", days: 0 },
  { title: "Heritage Craft Night", category: "Heritage", location: "Polonnaruwa", district: "Polonnaruwa", days: 0 },
  { title: "Garden Soundscape", category: "Music", location: "Kegalle", district: "Kegalle", days: 0 },
  { title: "Nature & Mindfulness", category: "Wellness", location: "Monaragala", district: "Monaragala", days: 0 },
  { title: "Seaside Culture Fest", category: "Cultural", location: "Hambantota", district: "Hambantota", days: 0 },
  { title: "Chef's Counter Live", category: "Gourmet", location: "Colombo 05", district: "Colombo", days: 0 },
  { title: "Meadow Orchestra", category: "Music", location: "Galle", district: "Galle", days: 0 },
  { title: "Clay & Canvas", category: "Arts", location: "Matara", district: "Matara", days: 0 },
  { title: "Rainforest Yoga", category: "Wellness", location: "Ratnapura", district: "Ratnapura", days: 0 },
  { title: "Cultural Night Walk", category: "Cultural", location: "Colombo 01", district: "Colombo", days: 0 },
  { title: "Harbor Picnic Party", category: "Social", location: "Negombo", district: "Negombo", days: 0 },
  { title: "Tea Tasting Journey", category: "Gourmet", location: "Nuwara Eliya", district: "Nuwara Eliya", days: 0 },
  { title: "Safari Stories", category: "Nature", location: "Yala", district: "Yala", days: 0 },
  { title: "Royal Drums Night", category: "Heritage", location: "Kandy", district: "Kandy", days: 0 },
  { title: "Open Air Poetry", category: "Arts", location: "Jaffna", district: "Jaffna", days: 0 },
  { title: "Coastline Wellness", category: "Wellness", location: "Galle", district: "Galle", days: 0 },
  { title: "Evening Jazz Loft", category: "Music", location: "Colombo 07", district: "Colombo", days: 0 },
  { title: "Community Sundown", category: "Social", location: "Gampaha", district: "Gampaha", days: 0 },
  { title: "Temple Art Paths", category: "Heritage", location: "Kurunegala", district: "Kurunegala", days: 0 },
  { title: "Botanical Tea Walk", category: "Nature", location: "Kandy", district: "Kandy", days: 0 },
  { title: "Night Market Carnival", category: "Gourmet", location: "Colombo 03", district: "Colombo", days: 0 },
  { title: "Dawn Dance Ritual", category: "Cultural", location: "Batticaloa", district: "Batticaloa", days: 0 },
  { title: "Sunset Sound Bath", category: "Wellness", location: "Matale", district: "Matale", days: 0 },
  { title: "Eastern Story Circles", category: "Social", location: "Trincomalee", district: "Trincomalee", days: 0 },
  { title: "Monsoon Art House", category: "Arts", location: "Badulla", district: "Badulla", days: 0 },
];

const pendingEvents = [
  { title: "Temple Street Preview", category: "Cultural", location: "Matale", district: "Matale", days: 2 },
  { title: "Gallery Night Draft", category: "Arts", location: "Kegalle", district: "Kegalle", days: 3 },
  { title: "Night Market Test", category: "Gourmet", location: "Kurunegala", district: "Kurunegala", days: 1 },
  { title: "River Safari Plan", category: "Nature", location: "Batticaloa", district: "Batticaloa", days: 4 },
  { title: "Beach Yoga Setup", category: "Wellness", location: "Kalutara", district: "Kalutara", days: 5 },
  { title: "City Jazz Proof", category: "Music", location: "Colombo 06", district: "Colombo", days: 2 },
];

const rejectedEvents = [
  { title: "Low Signal Session", category: "Music", location: "Colombo", district: "Colombo", days: -5 },
  { title: "Duplicate Heritage Run", category: "Heritage", location: "Galle", district: "Galle", days: -3 },
  { title: "Needs License Review", category: "Social", location: "Gampaha", district: "Gampaha", days: -1 },
  { title: "Photo Quality Rework", category: "Arts", location: "Badulla", district: "Badulla", days: -2 },
  { title: "Missing Venue Detail", category: "Cultural", location: "Jaffna", district: "Jaffna", days: -4 },
  { title: "Late Safety Review", category: "Nature", location: "Yala", district: "Yala", days: -6 },
];

const seedData = [
  ...approvedEvents.map((event, index) => ({
    title: event.title,
    description: `${event.category} event for ${event.location} visitors`,
    image: `https://picsum.photos/seed/approved-${index + 1}/1200/800`,
    location: event.location,
    district: event.district,
    category: event.category,
    date: toISODate(event.days),
    status: "approved"
  })),
  ...pendingEvents.map((event, index) => ({
    title: event.title,
    description: `${event.category} event awaiting review`,
    image: `https://picsum.photos/seed/pending-${index + 1}/1200/800`,
    location: event.location,
    district: event.district,
    category: event.category,
    date: toISODate(event.days),
    status: "pending"
  })),
  ...rejectedEvents.map((event, index) => ({
    title: event.title,
    description: `${event.category} event rejected after review`,
    image: `https://picsum.photos/seed/rejected-${index + 1}/1200/800`,
    location: event.location,
    district: event.district,
    category: event.category,
    date: toISODate(event.days),
    status: "rejected"
  })),
];

module.exports = seedData;
