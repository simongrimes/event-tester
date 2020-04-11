import { Component, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

class analyticsEventPayload {
  public functionName: string;
  public parameters: string[];
}

@Component({
  tag: 'psudo-data-layer-component',
  styleUrl: 'psudo-data-layer-component.css',
  shadow: true
})
export class psudoDataLayerComponent {

  @Prop() analyticsParamAA = '';
  @Prop() analyticsParamAB = '';
  @Prop() analyticsParamAC = '';

  @Prop() analyticsParamBA = '';
  @Prop() analyticsParamBB = '';
  @Prop() analyticsParamBC = '';

  @Event({
    eventName: 'analyticsEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) analyticsEvent: EventEmitter;

  @Element() el: HTMLElement;

  private fireEventA() {
    const payload = new analyticsEventPayload();

    payload.functionName = 'pfEventAFunction';
    payload.parameters = [];
    payload.parameters[0] = this.analyticsParamAA;
    payload.parameters[1] = this.analyticsParamAB;
    payload.parameters[2] = this.analyticsParamAC;

    this.analyticsEvent.emit(payload);
  }

  private fireEventB() {
    const payload = new analyticsEventPayload();

    payload.functionName = 'pfEventBFunction';
    payload.parameters = [];
    payload.parameters[0] = this.analyticsParamBA;
    payload.parameters[1] = this.analyticsParamBB;
    payload.parameters[2] = this.analyticsParamBC;

    this.analyticsEvent.emit(payload);
  }

  render() {
    return <div>
      <ul>
        <li><a href="#" onClick={() => this.fireEventA()}>Link A</a></li>
        <li><a href="#" onClick={() => this.fireEventB()}>Link B</a></li>
      </ul>
    </div>;
  }
}
