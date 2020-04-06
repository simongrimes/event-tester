import { Component, h } from '@stencil/core';

@Component({
  tag: 'no-shadow-container',
  styleUrl: 'no-shadow-container.css',
  shadow: false
})
export class MyComponent {
  render() {
    return <div>
      <p>no-shadow-container</p>
      <slot />
    </div>;
  }
}
