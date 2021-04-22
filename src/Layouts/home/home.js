import './home.css';
import {Button, List, Typography} from "antd";
import {Note} from "../../components/note/note";
import {AddNote} from "../../components/add-note/add-note";
import {CheckOutlined, MinusOutlined} from "@ant-design/icons";
import {Fragment } from 'react';

export const Home = (props) => (
    <div className="home">
      <Typography.Title>Note</Typography.Title>
      <List
        bordered
        dataSource={props.data}
        header={
          <AddNote
            add={name => props.addNote(name)}
          />
        }
        renderItem={item => (
          <Note
            note={item}
            edit={(id, name) => props.editNote(id, name)}
            buttons={(
              <Fragment>
                <Button
                  className="button"
                  type="primary"
                  shape="circle"
                  icon={<CheckOutlined/>}
                  onClick={() => props.archiveNote(item.id)}
                />
                <Button
                  className="button"
                  type="primary"
                  shape="circle"
                  icon={<MinusOutlined/>}
                  onClick={() => props.removeNote(item.id)}
                />
              </Fragment>
            )}
          />
        )}
      />
    </div>
  );
