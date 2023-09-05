// BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBookingContext = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    numberOfGuests: '',
    occasion: '',
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
