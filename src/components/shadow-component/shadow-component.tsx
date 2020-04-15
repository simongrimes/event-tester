import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'shadow-component',
  styleUrl: 'shadow-component.css',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLElement;

  private addTag(name: string) {
    let div = this.el.shadowRoot.ownerDocument.createElement("div");
    let aTag = this.el.shadowRoot.ownerDocument.createElement("a");
    aTag.href = "https://www.google.com";
    aTag.innerText = name;

    div.appendChild(aTag);
    this.el.shadowRoot.appendChild(div);
  }

  componentDidLoad() {
    this.addTag ("In componentDidLoad test link");

    setTimeout(() => {
      this.addTag ("In componentDidLoad test link 3 second delay");
    }, 3000);
  }

  render() {
    return <div>
      <p>shadow-component</p>
      <a href="https://www.google.com">In Render test link</a>
    </div>;
  }
}
