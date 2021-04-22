import './add-note.css';

import {Typography, Input, Button} from "antd";
import {CloseOutlined, PlusOutlined} from "@ant-design/icons";
import {useState} from "react";

export const AddNote = (props) => {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  
  const cancelAdd = () => {
    setName('');
    setAdding(false);
  }
  
  const saveAdd = () => {
    if (!name || !name.length) return;
    props.add(name);
    setName('');
    setAdding(false);
  }
  
  const staticView = () => (
    <div className="add" onClick={() => setAdding(true)}>
      <PlusOutlined className="add-icon"/>
      <Typography.Text>Adaugare</Typography.Text>
    </div>
  );
  
  const editView = () => (
    <div className="add">
      <Input placeholder="Notam..." value={name} onChange={ev => setName(ev.target.value)}/>
      <Button
        className="add-action"
        shape="circle"
        icon={<PlusOutlined className="icon"/>}
        onClick={saveAdd}
      />
      <Button
        className="add-action"
        shape="circle"
        icon={<CloseOutlined className="icon"/>}
        onClick={cancelAdd}
      />
    </div>
  )
  

  return adding ? editView() : staticView();
}
