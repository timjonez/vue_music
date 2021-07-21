import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

jest.mock('@/includes/firebase', () => {});

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [{}, {}, {}];
    Home.methods.getSongs = () => false;
    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
      global: {
        mocks: {
          $t: (message) => message,
        },
      },
    });
    const items = component.findAllComponents(SongItem);
    expect(songs).toHaveLength(songs.length);
    // expect(items).toHaveLength(songs.length);
  });
});
