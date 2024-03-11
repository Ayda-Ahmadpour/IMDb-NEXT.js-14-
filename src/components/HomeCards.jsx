import React from "react";

export default function HomeCards({ result }) {
  return (
    <div>
      {result.map((movie) => {
        return (
          <div
            key={movie.id}
            className="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-md"
          >
            <h1 className="text-xl font-bold">{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </div>
  );
}
