import CompostMixin from '../../build/libs/compost/compost-mixin.js';
import CompostRepeatMixin from '../../build/libs/compost/repeat-mixin.js';

import './nav-item.js';

class Nav extends CompostRepeatMixin(CompostMixin(HTMLElement)) {
  static get properties() {
    return {
      items: {
        type: Array,
        value: [],
        observer: 'observeItems'
      },

      current: {
        type: String,
        value: null,
        observer: 'observeCurrent',
      },
    }
  }

  render() {
    return super.render(`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: space-between;

          background-color: #86AB83;
        }

        #logo {
          padding: 5px;
          background-color: white;
          margin-left: 1rem;
          display: flex;
          align-items: center;
          border-radius: 3px;
        }

        #logo img {
          height: 20px;
          width: auto;
        }
      </style>
      <div id="logo">
        <img src="/images/logo.svg" alt="compost">
      </div>
    `, `
      <x-nav-item></x-nav-item>
    `);
  }

  getKey(value, index) {
    return value.id;
  }

  observeCurrent(oldValue, newValue) {
    this.$('slot').assignedNodes().forEach((node) => {
      node.current = newValue === node.id;
    });
  }

  updateItem(el, value, index) {
    el.href = `/${value.id}`;
    el.name = value.name;
    el.id = value.id;
  }
}

customElements.define('x-nav', Nav);