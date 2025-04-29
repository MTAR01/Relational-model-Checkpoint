// script.js

// Data classes
class Hotel {
  constructor(hotelID, hotelName, address, phone) {
    this.hotelID = hotelID;
    this.hotelName = hotelName;
    this.address = address;
    this.phone = phone;
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }
}

class Room {
  constructor(roomID, roomNumber, hotelID) {
    this.roomID = roomID;
    this.roomNumber = roomNumber;
    this.hotelID = hotelID;
  }
}

class Guest {
  constructor(guestID, guestName, phone) {
    this.guestID = guestID;
    this.guestName = guestName;
    this.phone = phone;
  }
}

class Booking {
  constructor(bookingID, guestID, roomID, bookingDate) {
    this.bookingID = bookingID;
    this.guestID = guestID;
    this.roomID = roomID;
    this.bookingDate = bookingDate;
  }
}

// Example data
const hotels = [
  new Hotel(1, "Luxury Stay", "123 Main Street", "123-456-7890"),
  new Hotel(2, "Comfort Inn", "456 Elm Street", "987-654-3210")
];

hotels[0].addRoom(new Room(101, "Room 101", hotels[0].hotelID));
hotels[0].addRoom(new Room(102, "Room 102", hotels[0].hotelID));
hotels[1].addRoom(new Room(201, "Room 201", hotels[1].hotelID));

const guests = [
  new Guest(1, "John Smith", "555-123-4567"),
  new Guest(2, "Jane Doe", "555-987-6543")
];

const bookings = [
  new Booking(1, guests[0].guestID, hotels[0].rooms[0].roomID, "2025-04-29"),
  new Booking(2, guests[1].guestID, hotels[0].rooms[1].roomID, "2025-05-01")
];

// Function to render data
function renderData() {
  const hotelsElement = document.getElementById('hotels');
  const guestsElement = document.getElementById('guests');
  const bookingsElement = document.getElementById('bookings');

  hotels.forEach(hotel => {
    const hotelItem = document.createElement('li');
    hotelItem.textContent = `Name: ${hotel.hotelName}, Address: ${hotel.address}, Phone: ${hotel.phone}`;
    hotelsElement.appendChild(hotelItem);
  });

  guests.forEach(guest => {
    const guestItem = document.createElement('li');
    guestItem.textContent = `Name: ${guest.guestName}, Phone: ${guest.phone}`;
    guestsElement.appendChild(guestItem);
  });

  bookings.forEach(booking => {
    const bookingItem = document.createElement('li');
    bookingItem.textContent = `Booking ID: ${booking.bookingID}, Guest ID: ${booking.guestID}, Room ID: ${booking.roomID}, Date: ${booking.bookingDate}`;
    bookingsElement.appendChild(bookingItem);
  });
}

// Render data when the page loads
window.onload = renderData;
