// Forum.js
import Card from "../components/Card";
import CardData from "./fakeData.json"

const Forum = () => {
    const cardData = CardData.map(data => {
        return <Card
            key={data.id}
            {...data}
        />
    })

    console.log(cardData)
  return (
    <div className="forum-container">
      <div className="forum-header">Forum</div>
      <div className="forum-card">
        {cardData}
      </div>
    </div>
  );
};

export default Forum;
