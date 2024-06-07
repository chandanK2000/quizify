const Booking = require('../models/bookingSchema');


exports.createBooking = async (req, res) => {
  try {
    // Log the request body to ensure it's correctly formatted
    console.log('Request Body:', req.body);

    // Attempt to create a new booking
    const newBooking = await Booking.create(req.body);

    // Log the newly created booking
    console.log('New Booking:', newBooking);

    // Respond with a success message and the created booking
    res.status(201).json({ message: 'Booking created successfully', data: newBooking });
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error creating booking:', error);

    // Respond with an internal server error message
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ data: bookings });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ data: booking });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
