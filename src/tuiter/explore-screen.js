import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item";

function OldExploreScreen() {
  return (
    <>
      <TuitSummaryItem />
      <TuitSummaryItem
        tuit={{
          topic: "Music",
          userName: "TSwift",
          time: "3h",
          title: "Taylor Swift's new album is a hit!",
          image: "taylor.png"
        }}
      />
    </>
  );
}
export default OldExploreScreen;
