import React from "react";

const choice = (items) => {
  const randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
};

const remove = (items, item) => {
  const remaining = items.filter((i) => i !== item);
  return remaining;
};

export { choice, remove };
