import React from "react";
import { useParams } from "react-router-dom";

function user() {
  const { userId } = useParams();
  return (
    <div className="bg-orange-400 text-black text-3xl text-center py-5">
      User:{userId}
    </div>
  );
}

export default user;
