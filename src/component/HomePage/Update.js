import React from "react";
import UpdateCard from "./UpdateCard";

const Update = () => {
  const recentUpdateList = [
    {
      headline: "Coordinator Bharati for the Australia",
      date: "september 26, 2019",
    },
    {
      headline:
        "After returning from Europe, Bharati says: 'We must be careful not to allow right-wing alternatives.'",
      date: "August 24, 2018",
    },
    {
      headline: "Coordinator Bharati leaving for Canada",
      date: "August 6, 2017",
    },
  ];
  var key = recentUpdateList.length - 1;
  return (
    <>
      <h3 style={{ marginBottom: 50}}>Update</h3>
      <div>
          {recentUpdateList.map((el, index)=>{
              return(<UpdateCard key={index} headline = {el.headline} date = {el.date} k = {key--} ></UpdateCard>)
          })}
      </div>
    </>
  );
};

export default Update;
