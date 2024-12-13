import React, { useState } from 'react';
import questionsData from './questionsData';
import { AudioRecorder } from 'react-audio-voice-recorder';
import axios from 'axios';
import { CircularProgress } from "@mui/material";
import "./MainPage.css";
import { Navbar, Nav, Container, Form, Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

const QuestionComponent = ({ question, onCorrectAnswer, onNextQuestion, correctAnswers }) => {

  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleRecordingComplete = (audioBlob) => {
    setAudioBlob(audioBlob);
  };

  const handleSubmitSpeech = async () => {
    setUploadStatus(null);
    if (audioBlob) {
      setProcessing(true);
      try {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recorded_audio.opus');
        formData.append('specialId', question.specialId);

        const response = await axios.post('http://0.0.0.0:8000/api/upload-audio', formData);

        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.message === "Correct") {
            setUploadStatus('Correct');
            onCorrectAnswer();
          } else if (responseData.message === "Wrong") {
            setUploadStatus('Wrong');
          } else {
            setUploadStatus('Error');
            console.error('Unexpected response content:', responseData);
          }
        } else {
          setUploadStatus('Error, unexpected status code');
          console.error('Unexpected status code:', response.status);
        }
      } catch (error) {
        console.error('Error uploading audio:', error);
        setUploadStatus('Error');
      } finally {
        setProcessing(false);
      }
    } else {
      alert('Please record your voice first');
    }
  };

  const handleNextQuestion = () => {
    setAudioBlob(null); // Clear audioBlob state for the next question
    onNextQuestion(); // Call onNextQuestion function to move to the next question
    setUploadStatus(null)
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Col md={6}>
          {/* Question Container */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3>{question.text}</h3>
          </div>

          {/* Options List */}
          <ListGroup as="ol" numbered>
            {question.choices.map((choice) => (
              <ListGroup.Item as="li" key={choice.id}>
                {choice.text}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Audio Recorder Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              mimeType="audio/wav"
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
              }}
            />
            {audioBlob && (
              <audio controls src={URL.createObjectURL(audioBlob)} style={{ marginTop: '10px' }}></audio>
            )}
          </div>

          {/* Submit and Next Buttons */}
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            {
              processing ? (
                <div className="loader" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CircularProgress />
                  <p>Processing</p>
                </div>
              ) : (
                <ButtonGroup>
                  <Button variant="primary" className="submit-button" onClick={handleSubmitSpeech}>
                    Submit
                  </Button>
                  <Button variant="secondary" className="next-button" onClick={handleNextQuestion} style={{ marginLeft: '10px' }}>
                    Next
                  </Button>
                </ButtonGroup>
              )
            }
            {uploadStatus && <p>{uploadStatus}</p>}
          </div>

        </Col>
      </Container>
    </div>
  );
};

const JumbledQuestionComponent = ({ question, onCorrectAnswer, onNextQuestion, correctAnswers }) => {

  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleRecordingComplete = (audioBlob) => {
    setAudioBlob(audioBlob);
  };

  const handleSubmitSpeech = async () => {
    setUploadStatus(null);
    if (audioBlob) {
      setProcessing(true);
      try {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recorded_audio.opus');
        formData.append('specialId', question.specialId);

        const response = await axios.post('http://0.0.0.0:8000/api/upload-audio2', formData);

        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.message === "Correct") {
            setUploadStatus('Correct');
            onCorrectAnswer();
          } else if (responseData.message === "Wrong") {
            setUploadStatus('Wrong');
          } else {
            setUploadStatus('Error');
            console.error('Unexpected response content:', responseData);
          }
        } else {
          setUploadStatus('Error, unexpected status code');
          console.error('Unexpected status code:', response.status);
        }
      } catch (error) {
        console.error('Error uploading audio:', error);
        setUploadStatus('Error');
      } finally {
        setProcessing(false);
      }
    } else {
      alert('Please record your voice first');
    }
  };

  const handleNextQuestion = () => {
    setAudioBlob(null); // Clear audioBlob state for the next question
    onNextQuestion(); // Call onNextQuestion function to move to the next question
    setUploadStatus(null)
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Col md={6}>
          {/* Question Container */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3>{question.text}</h3>
          </div>
          {/* Audio Recorder Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              mimeType="audio/wav"
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
              }}
            />
            {audioBlob && (
              <audio controls src={URL.createObjectURL(audioBlob)} style={{ marginTop: '10px' }}></audio>
            )}
          </div>

          {/* Submit and Next Buttons */}
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            {
              processing ? (
                <div className="loader" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CircularProgress />
                  <p>Processing</p>
                </div>
              ) : (
                <ButtonGroup>
                  <Button variant="primary" className="submit-button" onClick={handleSubmitSpeech}>
                    Submit
                  </Button>
                  <Button variant="secondary" className="next-button" onClick={handleNextQuestion} style={{ marginLeft: '10px' }}>
                    Next
                  </Button>
                </ButtonGroup>
              )
            }
            {uploadStatus && <p>{uploadStatus}</p>}
          </div>

        </Col>
      </Container>
    </div>
  );
};


const TopicComponent = ({ topic, onSelectTopic }) => {
  return (
    <div className="d-grid gap-2 w-50 mx-auto" style={{ marginBottom: '20px' }}>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => onSelectTopic(topic)}
        className="w-100"
        style={{ margin: '10px 0' }}
      >
        {topic.name}
      </Button>
    </div>
  );
};

const MainPage = ({ onLogout }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedJumbled, setSelectedJumbled] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowScore(false);
  };

  const handleSelectJumbled = (topic) => {
    setSelectedTopic(topic);
    setSelectedJumbled(topic);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowScore(false);
  };
  const handleGoBack = () => {
    setSelectedTopic(null);
    setSelectedJumbled(null);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowScore(false);
  };

  const handleCorrectAnswer = () => {
    setCorrectAnswers(correctAnswers + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === selectedTopic.questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const topicsPerColumn = Math.ceil(questionsData.topics.length / 2); // Calculate topics per column
  const topicsColumn1 = questionsData.topics.slice(0, 5); // Topics for column 1
  const topicsColumn2 = questionsData.topics.slice(5, 10); // Topics for column 2

  const [showInstructions, setShowInstructions] = useState(false);


  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };


  return (
    <>
      {selectedTopic ? (
        <div>
          <header>
            <div className="IIIT">
              <Navbar bg="primary" variant={"dark"} expand="lg" >
                <Navbar.Brand href="#" className="mx-3">IIIT Vyakaran e-Shikshak v1.0
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar" />
                <Navbar.Collapse id="responsive-navbar">
                  <Nav className="ms-auto">
                    <Nav.Link onClick={handleGoBack}>Home</Nav.Link>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                  </Nav>

                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>
          {showScore ? (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <p>You have visited all questions.</p>
              <p>Total Correct Answers: {correctAnswers}</p>
              <Button variant="primary" onClick={handleGoBack}>
                Go back to topic selection
              </Button>
            </div>
          ) :

            (selectedJumbled ?
              <JumbledQuestionComponent
                question={selectedTopic.questions[currentQuestionIndex]}
                onCorrectAnswer={handleCorrectAnswer}
                onNextQuestion={handleNextQuestion}
                correctAnswers={correctAnswers}
              />
              :
              (
                <QuestionComponent
                  question={selectedTopic.questions[currentQuestionIndex]}
                  onCorrectAnswer={handleCorrectAnswer}
                  onNextQuestion={handleNextQuestion}
                  correctAnswers={correctAnswers}
                />
              )
            )}
        </div>
      ) :

        (
          <div>
            <header>
              <div className="IIIT">
                <Navbar bg="primary" variant={"dark"} expand="lg" >
                  <Navbar.Brand href="#" className="mx-3">IIIT Vyakaran e-Shikshak v1.0
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar" />
                  <Navbar.Collapse id="responsive-navbar">
                    <Nav className="ms-auto">
                      <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </header>
            <div>
              <Container fluid style={{ marginTop: '40px', padding: '0 30px', }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>Fill in the blanks</h2>
                <Row>
                  <Col xs={12} md={6} className="p-2">
                    {topicsColumn1.map(topic => (
                      <ListGroup.Item key={topic.id}>
                        <TopicComponent topic={topic} onSelectTopic={handleSelectTopic} />
                      </ListGroup.Item>
                    ))}
                  </Col>

                  <Col xs={12} md={6} className="p-2">
                    {topicsColumn2.map(topic => (
                      <ListGroup.Item key={topic.id}>
                        <TopicComponent topic={topic} onSelectTopic={handleSelectTopic} />
                      </ListGroup.Item>
                    ))}
                  </Col>
                </Row>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>Jumbled sentences</h2>
                <div className="d-grid gap-2 w-50 mx-auto" style={{ marginBottom: '20px' }}>
                  <TopicComponent topic={questionsData.topics[10]} onSelectTopic={handleSelectJumbled} />
                </div>
              </Container>
            </div>

            <footer style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "100%", textAlign: "center", marginBottom: "10px" }}>
              <p>&copy; 2024 SPL,IIITH.</p>
              <button onClick={toggleInstructions}>Instructions</button>
              {showInstructions && <p>1. Open 'chrome://flags/#unsafely-treat-insecure-origin-as-secure' in the browser <br /> 2. Add website url in the text box under 'insecure origins treated as secure' <br />3. Enable it and relaunch browser.</p>}
            </footer>
          </div>
        )}
    </>

  );
};

export default MainPage;
