import Hello from "./component/Hello";
import HelloClassComponent from "./component/HelloClassComponent";

const dataList = [
  {
    name: "Duc",
    gender: "male"
  },
  {
    name: "Viet",
    gender: "male"
  },
  {
    name: "Khuynh",
    gender: "male"
  },
  {
    name: "Vi",
    gender: "male"
  },
  {
    name: "Phuoc",
    gender: "male"
  },
];

// Viết gọn của arr fn, khi return về 1 giá trị cố định có thể viết tắt
// const sum = (a, b) => a + b;
// const sum_ = (a, b) => {
//   let c = a * b;
//   return a + b + c;
// };

function App() {
  const renderContent = (data) => { //data is array
    return data.map((dataItem, index) => {
      // viết kiểu arrow fn đầy đủ phải có return
      return (
        <Hello key={index} content={dataItem.name} gender={dataItem.gender}>
          <span style={{ color: "red", fontWeight: 700 }}>Xin chao: </span>
        </Hello>
      )
    })
  }

  return (
    <> {renderContent(dataList)}; </> //jsx
  );
  const changeDemo = () => {}
}

export default App; 
