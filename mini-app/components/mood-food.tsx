"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MoodFood() {
  const [mood, setMood] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const suggestFood = () => {
    const lower = mood.toLowerCase();
    let food = "Pizza";
    if (lower.includes("happy")) food = "Ice Cream";
    else if (lower.includes("sad")) food = "Soup";
    else if (lower.includes("energetic")) food = "Salad";
    setSuggestion(food);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Input
        placeholder="Enter your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="max-w-xs"
      />
      <Button onClick={suggestFood}>Suggest Food</Button>
      {suggestion && (
        <p className="text-lg font-medium">
          Based on your mood, we suggest: <strong>{suggestion}</strong>
        </p>
      )}
    </div>
  );
}
