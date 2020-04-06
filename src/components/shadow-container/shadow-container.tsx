import { Component, h } from '@stencil/core';

@Component({
  tag: 'shadow-container',
  styleUrl: 'shadow-container.css',
  shadow: true
})
export class MyComponent {
  render() {
    return <div>
      <p>shadow-container</p>
      <slot />
    </div>;
  }
}
