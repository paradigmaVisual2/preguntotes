import "./App.css";
import { NewQuestion } from "./components/NewQuestion";
import { createClient } from "@supabase/supabase-js";
import { Row, Col, Container } from "react-bootstrap";
import { AllQuestions } from "./components/AllQuestions";
import { useState } from "react";

const supabaseUrl = "https://azekunndtyvizcosopst.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [update, setUpdate] = useState(0);
  return (
    <div className="main-container p-5">
      <Row>
        <Col className="m-2">
          <NewQuestion update={setUpdate} />
        </Col>
        <Col className="m-2">
          <AllQuestions update={update} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
