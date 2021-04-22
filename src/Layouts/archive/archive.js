import {Note} from "../../components/note/note";
import {Button, List, Typography} from "antd";
import {UploadOutlined} from "@ant-design/icons";

export const Archive = (props) => {
  return (
    <div>
      <Typography.Title>Arhiva</Typography.Title>
      <List
        bordered
        dataSource={props.data}
        renderItem={item => (
          <Note
            note={item}
            edit={(id, name) => props.editNote(id, name)}
            buttons={(
              <Button
                shape="circle"
                type="primary"
                onClick={() => props.unarchiveNote(item.id)}
                icon={<UploadOutlined className="icon"/>}
              />
            )}
          />
        )}
      />
    </div>
  )
}
