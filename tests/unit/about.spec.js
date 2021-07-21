import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';
// import { mount } from '@vue/test-utils';

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);
    // const wrapper = mount(About);

    expect(wrapper.text()).toContain('about');
  });
});
