export default `
body {
  background-color: rgba(0,0,0,.8);
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
div:not(:last-child) {
  width: 400px;
  height: 95vh;
  box-shadow: 0 0 10px dimgrey;
  overflow: auto;
}
section div:not(:first-child) {
  margin-left: 20px;
}
section div:last-child form:not(last-child) {
  margin-bottom: 20px;
}
div, table {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
a {
  color: white;
  transition: all 300ms;
}
a:hover {
  color: lightblue;
  text-decoration: none;
}
div::-webkit-scrollbar {
  width: 10px;
}
div::-webkit-scrollbar-track {
  background: black;
}
div::-webkit-scrollbar-thumb {
  background: dimgrey;
  border-radius: 5px;
}
`;