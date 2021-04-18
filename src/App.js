import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { Home } from "./Layouts/home/home";
import { Archive } from './Layouts/archive/archive';

import './App.css';
import {useState} from "react";
import {NoteModel} from "./models/note-model";

const {Header, Content, Footer} = Layout;

const App = () => {
  const path = useLocation().pathname;
  
  const cacheNotes = (newState) => window.localStorage.setItem('current', JSON.stringify(newState));
  const getCachedNotes = () => JSON.parse(localStorage.getItem('current') || '[]');
  
  const [notes, setNotes] = useState(getCachedNotes());
  
  const removeNote = (id) => {
    const newState = notes.filter(item => item.id !== id)
    setNotes(newState);
    cacheNotes(newState);
  };
  const addNote = (name) => {
    const newState = [new NoteModel(name), ...notes];
    setNotes(newState)
    cacheNotes(newState);
  };
  const editNote = (id, name) => {
    const newState = notes.map(item => {
      if (item.id !== id) return item;
      item.name = name;
      return item;
    });
    setNotes(newState);
    cacheNotes(newState);
  }
  
  const archiveNote = (id) => {
    const newState = notes.map(item => {
      if (item.id !== id) return item;
      item.isArchived = true;
      return item;
    });
    setNotes(newState);
    cacheNotes(newState);
  };
  
  const unarchiveNote = (id) => {
    const newState = notes.map(item => {
      if (item.id !== id) return item;
      item.isArchived = false;
      return item;
    });
    setNotes(newState);
    cacheNotes(newState);
  };
  
  return (
    <Layout className="layout">
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[path]}>
          <Menu.Item key="/"><Link to="/">My Notes</Link></Menu.Item>
          <Menu.Item key="/archive"><Link to="/archive">Archive</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <div className="content-inner">
          <Switch>
            <Route exact path="/">
              <Home
                data={notes.filter(note => !note.isArchived)}
                removeNote={id => removeNote(id)}
                addNote={name => addNote(name)}
                editNote={(id, name) => editNote(id, name)}
                archiveNote={id => archiveNote(id)}
              />
            </Route>
            <Route path="/archive">
              <Archive
                editNote={(id, name) => editNote(id, name)}
                unarchiveNote={id => unarchiveNote(id)}
                data={notes.filter(note => note.isArchived)}
              />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Morei Victor © 2021, Web Project, TUM</Footer>
    </Layout>
  )
}


export default App;
