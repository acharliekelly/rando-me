
const IPSUMS = {
  lorem: 'https://loripsum.net/api/',
  hipsum: 'https://hipsum.co/api/?type=hipster-centric&paras=',
  corporate: 'https://corporatelorem.kovah.de/api/',
  dino: 'http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=',
  bacon: 'https://baconipsum.com/api/?type=all-meat&paras='
};

const getIpsumKeys = () => {
  return Object.keys(IPSUMS)
}

const getContentUrl = (source, paragraphs) => {
  return IPSUMS[source] + paragraphs;
};

const getRandomContentUrl = paragraphs => {
  const count = Object.keys(IPSUMS).length;
  const r = Math.floor(Math.random() * count);
  const src = Object.keys(IPSUMS)[r];
  return IPSUMS[src] + paragraphs;
}


module.exports = {
  getIpsumKeys,
  getContentUrl,
  getRandomContentUrl
}

