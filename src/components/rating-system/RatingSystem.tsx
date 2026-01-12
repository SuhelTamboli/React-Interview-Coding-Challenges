import { useState } from "react";

export default function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRating = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <h1 className="font-bold text-lg">Rating System</h1>
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            className={`${
              i < selectedRating ? "text-yellow-400" : ""
            } cursor-pointer text-3xl`}
            key={i}
            onClick={() => handleRating(i + 1)}
          >
            ★
          </div>
        ))}
      </div>
    </div>
  );
}
