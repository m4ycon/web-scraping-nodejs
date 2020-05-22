export default `
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
div {
  width: 400px;
  height: 95vh;
  overflow: auto;
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