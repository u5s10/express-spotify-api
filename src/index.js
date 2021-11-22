const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { searchFor, getArtist, getAlbum, getAlbumTracks } = require('./spotify/spotify')

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


app.get('/tracks', async (req, res) => {
  try {
    const tracks = await searchFor(req.query.q);
    res.send(tracks);
  } catch (error) {
    res.send(error);
  }
});

app.get('/artists/:id', async (req, res) => {
  try {
    const artist = await getArtist(req.params.id);
    res.send(artist);
  } catch (error) {
    res.send(error);
  }
});

app.get('/albums/:id', async (req, res) => {
  try {
    const album = await getAlbum(req.params.id);
    res.send(album);
  } catch (error) {
    res.send(error);
  }
});


app.get('/albums/:id/tracks', async (req, res) => {
  try {
    const album = await getAlbumTracks(req.params.id);
    res.send(album);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});