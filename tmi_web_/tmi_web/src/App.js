import React from "react";
import RoutesPage from "./RoutesPage";

function App() {
  return (
    <div className="App">
      <RoutesPage/>
    </div>
  );
}

export default App;

// /////////////////////////////////////
// import React, { Component } from "react";
// import "./App.css";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       list: [],
//       update: false,
//     };
//   }

//   componentDidMount() {
//     this._getData();
//   }

//   _addData = async (e) => {
//     const { uid } = this.state;
//     const { pw } = this.state;
//     const { nickname } = this.state;
//     e.preventDefault();

//     const res = await axios("/add/user", {
//       method: "POST",
//       data: { uid: uid, pw: pw, nickname: nickname },
//       headers: new Headers(),
//     });

//     if (res.data) {
//       alert("Data added");
//       return window.location.reload();
//     }
//   };

//   _nameUpdate(e) {
//     this.setState({ uid: e.target.value });
//   }
//   _pwUpdate(e) {
//     this.setState({ pw: e.target.value });
//   }
//   _nicknameUpdate(e) {
//     this.setState({ nickname: e.target.value });
//   }

//   _getData = async () => {
//     const res = await axios.get("/get/data");

//     // if (res.data[0] === undefined) {
//     //   let cover = [];
//     //   cover.push(res.data);

//     //   return this.setState({ list: cover });
//     // }
//     console.log(res);
//     // this.setState({ list: res.data });
//   };

//   render() {
//     const { list } = this.state;

//     return (
//       <div className="App">
//         <h3>TMI WEB</h3>
//         <br />
//         <form method="POST" onSubmit={this._addData}>
//           <div>
//             ID
//             <input
//               type="text"
//               maxLength="20"
//               onChange={(e) => this._nameUpdate(e)}
//             />
//           </div>
//           <div>
//             Password
//             <input
//               type="password"
//               maxLength="10"
//               onChange={(e) => this._pwUpdate(e)}
//             />
//           </div>
//           <div>
//             Nickname
//             <input
//               type="text"
//               maxLength="10"
//               onChange={(e) => this._nicknameUpdate(e)}
//             />
//           </div>
//           <input type="submit" value="Add" />
//         </form>
//         <br /> <br />
//         <div style={{ height: "250px", overflow: "auto" }}>
//           <h4 style={{ color: "#ababab" }}> Users List </h4>

//           <div
//             style={{
//               border: "solid 1px black",
//               width: "50%",
//               marginLeft: "25%",
//               textAlign: "left",
//             }}
//           >
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "32% 35% 30%",
//                 textAlign: "center",
//               }}
//             >
//               <div> id </div>
//               <div> Uid </div>
//               <div> nickname </div>
//             </div>
//           </div>

//           {list.length !== 0
//             ? list.map((el, key) => {
//                 return (
//                   <div
//                     key={key}
//                     style={{
//                       display: "grid",
//                       lineHeight: "40px",
//                       gridTemplateColumns: "32% 35%",
//                       width: "50%",
//                       marginLeft: "25%",
//                     }}
//                   >
//                     <div> {el.id} </div>
//                     <div> {el.uid} </div>
//                     <div> {el.nickname} </div>
//                   </div>
//                 );
//               })
//             : null}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
