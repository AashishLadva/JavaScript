function getData(dataId, getNextData) {
  console.log("data ", dataId);

  if (getNextData) {
    getNextData();
  }
}
const getNextData = () => getData(2);
getData(1, getNextData);

const jp = (name) => {
  console.log(name);
};
const pj = (name, jp) => {
  if (jp) {
    jp(name);
  }
};
pj("john", jp);
