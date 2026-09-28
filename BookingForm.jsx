function BookingForm() {
  return (
    <section className="booking-section" id="book">
      <h2>Book Your IPL Ticket</h2>
      <p>Fill in the details below to book your seat.</p>

      <form className="booking-form">

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Select Match</label>
        <select required>
          <option value="">-- Select Match --</option>
          <option>RCB vs CSK</option>
          <option>MI vs KKR</option>
          <option>SRH vs RR</option>
        </select>

        <label>Number of Tickets</label>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Enter number of tickets"
          required
        />

        <label>Seat Category</label>
        <select required>
          <option value="">-- Select Category --</option>
          <option>General</option>
          <option>Premium</option>
          <option>VIP</option>
        </select>

        <button type="submit">Book Ticket</button>

      </form>
    </section>
  );
}

export default BookingForm;