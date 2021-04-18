import './note.css';
import {Button, Input, List, Typography} from 'antd';
import {CheckOutlined, CloseOutlined, EditOutlined} from "@ant-design/icons";
import {useState} from "react";

export const Note = (props) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.note.name);
  
  const cancelEdit = () => {
    setName(props.note.name);
    setEditing(false);
  }
  
  const saveEdit = () => {
    props.edit(props.note.id, name);
    setEditing(false);
  }
  
  const staticView = () => (
    <List.Item className="note">
      <Typography.Text>{props.note.name}</Typography.Text>
      <div className="button-group">
        <Button className="button" type="primary" shape="circle" onClick={() => setEditing(true)} icon={<EditOutlined/>}/>
        {props.buttons}
      </div>
    </List.Item>
  )
  
  const editingView = () => (
    <List.Item className="note">
      <Input
        placeholder="I want to..."
        onChange={ev => setName(ev.target.value)}
        value={name}
      />
      <Button
        className="add-action"
        shape="circle"
        icon={<CheckOutlined className="icon"/>}
        onClick={saveEdit}
      />
      <Button
        className="add-action"
        shape="circle"
        icon={<CloseOutlined className="icon"/>}
        onClick={cancelEdit}
      />
    </List.Item>
  )
  
  return editing? editingView() : staticView();
}
