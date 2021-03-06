import StoryMixin from './story-mixin.js';

/**
 * Element to story summary for 'job' type
*/
class StoryJob extends StoryMixin(HTMLElement) {
  render() {
    return `${super.render()}
      <div>
        <h4><a id="title" href="" on-click="navigate"></a></h4>
        <span id="time"></span>
        | <span id="domain"></span>
      </div>
    `;
  }

  observeData(oldValue, newValue) {
    if (!newValue.id) return;

    const title = this.$id.title;

    title.href = newValue.url;
    title.textContent = newValue.title;

    this.$id.time.textContent = newValue.time_ago;
    this.$id.domain.textContent = newValue.domain;
  }
}

customElements.define('x-story-job', StoryJob);
