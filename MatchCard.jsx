function MatchCard({ team1, team2, date, venue }) {
  return (
    <div className="match-card">
      <h2>{team1} vs {team2}</h2>
      <p>📅 {date}</p>
      <p>📍 {venue}</p>
      <button>Book Ticket</button>
    </div>
  );
}

export default MatchCard;