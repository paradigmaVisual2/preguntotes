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
    <Container>
      <Row>
        <Col>
          <NewQuestion update={setUpdate} />
        </Col>
        <Col>
          <AllQuestions update={update} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
