import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'no-shadow-component',
  styleUrl: 'no-shadow-component.css',
  shadow: false
})
export class MyComponent {

  @Element() el: HTMLElement;

  private addTag(name: string) {
    let div = this.el.ownerDocument.createElement("div");
    let aTag = this.el.ownerDocument.createElement("a");
    aTag.href = "www.google.com";
    aTag.innerText = name;

    div.appendChild(aTag);
    this.el.appendChild(div);
  }

  componentDidLoad() {
    this.addTag ("In componentDidLoad test link");

    setTimeout(() => {
      this.addTag ("In componentDidLoad test link 3 second delay");
    }, 3000);
  }

  render() {
    return <div>
      <p>no-shadow-component</p>
      <a href="www.google.com">In Render test link</a>
    </div>;
  }
}
