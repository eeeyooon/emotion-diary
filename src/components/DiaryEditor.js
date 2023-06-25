import { useNavigate } from "react-router-dom";
import { useState } from "react";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"새로운 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <section>
        <h4>오늘은 언제인가요?</h4>
        <div className="input_box">
          <input
            className="input_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
      </section>
    </div>
  );
};

export default DiaryEditor;
