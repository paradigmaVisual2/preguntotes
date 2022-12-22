import React, { useState, useEffect } from "react";
import { supabase } from "../App";
export const AllQuestions = ({ update }) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [okay, setOkay] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase.from("question").select("*");
      if (error) {
        setError(true);
        setOkay(false);
      } else {
        setQuestions(data);
        setOkay(true);
        setError(false);
      }
    };
    fetchQuestions();
  }, [update]);

  return (
    <div>
      <h1>All Questions</h1>
      {error && <h3>Error loading questions</h3>}
      {okay && (
        <div>
          {questions.map((q) => (
            <div
              key={q.id}
              style={{
                borderRadius: 8,
                border: "solid",
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
                borderColor: "#bdbdbd",
              }}
            >
              <h5>{q.text}</h5>
              <h6>Difficulty: {q.difficulty}</h6>
              <h6>Points: {q.points}</h6>
              <h6>Answer: {q.answer ? "True" : "False"}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
