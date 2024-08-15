export default function Content({ app, initialState }) {
  this.state = initialState;

  this.target = document.createElement("div");
  this.target.className = "content";
  app.appendChild(this.target);

  this.template = () => {
    const temp = [];
    this.state.forEach((photo) => {
      temp.push(`<img src="${photo.url}"></img>`);
    });
    return temp;
  };

  this.render = () => {
    this.target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
