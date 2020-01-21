import facepaint from 'facepaint';

const medias = [280, 375, 414, 960, 1024, 1440];

const toMinWidth = value => `@media(min-width: ${value}px)`;

const mq = facepaint(medias.map(toMinWidth));

export { mq };
