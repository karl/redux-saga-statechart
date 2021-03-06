module.exports = {
  key: 'video-app',
  initial: 'home',
  states: {
    home: {
      onEntry: ['getContent'],
      on: {
        PLAY: 'player',
      },
    },
    player: {
      onEntry: ['trackPlay', 'getNextEpisode'],
      on: {
        CLOSE: 'home',
      },
    },
  },
};
