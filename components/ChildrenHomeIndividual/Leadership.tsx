'use client'
import LeadershipCard from "./LeadershipCard"
import { leaders } from "./ChiData";

export default function Leadership() {

  const leadershipCard = leaders.map((leader)=> {
    return(
      <LeadershipCard
      key={leader.id}
      {...leader}
       />
    )
  })

  return (
    <div className="leadership-container">
      <h1>Our Leadership</h1>
      <div className="leadership-images">
       {leadershipCard}
      </div>
    </div>
  );
}

