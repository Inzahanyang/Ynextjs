const { Button } = require("antd");

const Second = props => {
  return (
    <div>
      <h1>데이터 조회</h1>
      <div>
        <Button type="primary">최신 데이터 로드</Button>
        <Button type="danger">데이터 삭제</Button>
      </div>
    </div>
  );
};

export default Second;
