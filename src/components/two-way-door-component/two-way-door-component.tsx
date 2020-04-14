import { Component, h} from '@stencil/core';

@Component({
  tag: 'two-way-door-component',
  styleUrl: 'two-way-door-component.css',
  shadow: true
})
export class twoWayDoorComponent {

  // Check if there is config in the 'two way door' window object.
  private handleAClicks() {
    const twoWayDoor = window['analyticsDoor'];

    console.log(twoWayDoor);

    if (twoWayDoor && twoWayDoor.trackATagClick && twoWayDoor.aTagClickFunction) {
      const clickFunction = new Function(twoWayDoor.aTagClickFunction);
      clickFunction();
    }
  }

  render() {
    return <div>
      <ul>
        <li><a href="#" onClick={() => this.handleAClicks()}>Link A</a></li>
        <li><a href="#" onClick={() => this.handleAClicks()}>Link B</a></li>
      </ul>
    </div>;
  }
}
