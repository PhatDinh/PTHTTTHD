import Navbar from "../../Navbar/Navbar";
import './AddCoursePage.css';
import NavAssess from '../../NavAssess/NavAssess';
import ScrollToTop from '../../ScrollToTop';
import Session from '../Session/Session';

import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  Modal,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function AddCoursePage(props) {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [courseName, setCourseName] = useState();
  const [descript, setDescript] = useState();
  const [trainSkill, setTrain] = useState();
  const [target, setTarget] = useState();
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  const [session, setSession] = useState({
    sessionName: '',
    content: '',
    trainingSkill: '',
    target: '',
  });

  const [sessions, setSessions] = useState([]);

  const addSkill = (event) => {
    if (!skills.includes(event.target.value)) {
      setSelectedSkill(event.target.value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:8080/api/skills', {
        method: 'GET',
      })
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
          else return res.json();
        })
        .then((data) => {
          setSkills(data);
        });
    };

    fetchData();
  }, []);

  const handleSessionChange = (value, name) => {
    setSession((s) => ({
      ...s,
      [name]: value,
    }));
  };

  function handleCreateCourse() {
    const data = fetch('http://localhost:8080/api/addCourse', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        _id: id,
        courseName: courseName,
        description: descript,
        skill: skills.find((sk) => sk.skillName === selectedSkill),
        skillId: skills.find((sk) => sk.skillName === selectedSkill)?._id,
        target: target,
        sessions: sessions,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        navigate(-1);
      })
      .then((data) => {
        console.log(data);
        navigate(-1);
      });
  }

  const handleAddSession = () => {
    setSessions([...sessions, session]);
    setIsModalOpen(false);
    setSession({
      sessionName: '',
      content: '',
      trainingSkill: '',
      target: '',
    });
  };

  const handleDelete = (i) => {
    setSession(sessions.splice(i, 1));
  };

  return (
    <div className="container-addCourse">
      <ScrollToTop />
      <div>
        <Navbar title="CREATE COURSE" />
        <NavAssess />
      </div>
      <div className="title-add-course">
        <label htmlFor="fname">Course name</label>
        <input
          type="text"
          id="fname"
          placeholder="course name"
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      <div className="title-add-course">
        <label htmlFor="fdes">Description</label>
        <br></br>
        <textarea
          className="field"
          id="fdes"
          name="fdes"
          placeholder="Description"
          onChange={(e) => setDescript(e.target.value)}
        ></textarea>
      </div>
      <div className="title-add-course">
        <Typography variant="h6" align="start">
          Skills
        </Typography>
        {selectedSkill && (
          <Table>
            <TableBody>
              <TableRow
                key={selectedSkill}
                sx={{
                  border: 1,
                  borderColor: '#E0E0E0',
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography>{selectedSkill}</Typography>{' '}
                  <IconButton onClick={() => setSelectedSkill('')}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}

        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <Select label="Choose skill" onChange={addSkill} fullWidth>
            {skills.map((e) => {
              return (
                <MenuItem value={e.skillName} key={e._id}>
                  {e.skillName}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </div>

      <div className="title-add-course">
        <label htmlFor="ftar">Target</label>
        <br></br>
        <textarea
          className="field"
          id="ftar"
          name="ftar"
          placeholder="Target"
          onChange={(e) => setTarget(e.target.value)}
        ></textarea>
      </div>

      <h4>Sessions</h4>
      <Session handleDelete={handleDelete} sessions={sessions}></Session>

      <div className="title-add-course">
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          +
        </button>
      </div>

      <div className="title-add-course-btn">
        <button className="cancel-btn" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button className="create-btn" onClick={handleCreateCourse}>
          Create
        </button>
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Box sx={{ width: 1200, backgroundColor: 'white' }}>
            <div className="title-add-course">
              <label htmlFor="fname">Create session</label>
            </div>

            <div className="title-add-course">
              <label htmlFor="fname">Session name</label>
              <input
                type="text"
                id="fname"
                placeholder="course name"
                onChange={(e) =>
                  handleSessionChange(e.target.value, 'sessionName')
                }
              />
            </div>

            <div className="title-add-course">
              <label htmlFor="fdes">Content</label>
              <br></br>
              <textarea
                className="field"
                id="fdes"
                name="fdes"
                placeholder="content"
                onChange={(e) => handleSessionChange(e.target.value, 'content')}
              ></textarea>
            </div>

            <div className="title-add-course">
              <label htmlFor="fdes">trainingSkill</label>
              <br></br>
              <textarea
                className="field"
                id="fdes"
                name="fdes"
                placeholder="trainingSkill"
                onChange={(e) =>
                  handleSessionChange(e.target.value, 'trainingSkill')
                }
              ></textarea>
            </div>

            <div className="title-add-course">
              <label htmlFor="fdes">target</label>
              <br></br>
              <input
                type="text"
                id="fname"
                placeholder="target"
                onChange={(e) => handleSessionChange(e.target.value, 'target')}
              />
            </div>

            <div className="title-add-session-btn">
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="create-btn" onClick={() => handleAddSession()}>
                Add
              </button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default AddCoursePage;