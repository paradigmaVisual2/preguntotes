import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Alert,
  Button,
  Col,
  FormControl,
  FormSelect,
  Row,
} from "react-bootstrap";
import { supabase } from "../App";

export const NewQuestion = ({ update }) => {
  const [title, setTitle] = useState("");
  const [diff, setDiff] = useState(0);
  const [points, setPoints] = useState(0);
  const [ans, setAns] = useState(false);
  const [okay, setOkay] = useState(false);
  const [error, setError] = useState(false);

  const handleCreate = async () => {
    const { error } = await supabase
      .from("question")
      .insert([{ text: title, difficulty: diff, points: points, answer: ans }]);
    if (error) {
      setError(true);
      setOkay(false);
    } else {
      setOkay(true);
      setError(false);
      update((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>New Question</h1>
      <Row>
        <h3>Title</h3>
        <FormControl
          as="input"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <Row style={{ marginTop: 20 }}>
          <Col>
            <h3>Difficulty</h3>
            <FormSelect
              value={diff}
              onChange={({ target }) => setDiff(target.value)}
            >
              <option value={0}>Easy</option>
              <option value={1}>Medium</option>
              <option value={2}>Hard</option>
            </FormSelect>
          </Col>
          <Col>
            <h3>Points</h3>
            <input
              className="form-control"
              type="number"
              value={points}
              onChange={({ target }) => setPoints(target.value)}
            />
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <h4>is true?</h4>
          <Form.Check
            type="checkbox"
            value={ans}
            onChange={({ target }) => setAns(target.value)}
          />
        </div>
      </Row>
      <Button onClick={handleCreate}>Create question</Button>
      {okay ? (
        <Alert variant="success" style={{ marginTop: 10 }}>
          Question created
        </Alert>
      ) : null}
    </div>
  );
};
