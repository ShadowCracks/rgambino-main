import React from 'react';
import BookingForm from '../components/Booking/BookingForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Booking() {
  // Define navItems
  const navItems = ['Home', 'About Us', 'Services', 'Pricing'];

  return (
    <div>
      {/* Pass navItems to Header */}
      <Header navItems={navItems} />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default Booking;
