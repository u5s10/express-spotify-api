require('dotenv').config();
const axios = require('axios');
const qs = require('qs');

let clientId = process.env.SPOTIFY_CLIENT_ID;
let clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function getToken() {
  try {
    const auth = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(clientId + ':' + clientSecret).toString('base64')}`
      },
      data: qs.stringify({
        grant_type: 'client_credentials'
      })
    });
    return auth.data.access_token;
  } catch (error) {
    return error;
  }
}

async function searchFor(query, offset) {
  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}&offset=${offset}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.tracks.items
  } catch (error) {
    return error;
  }
}

async function getArtist(id){

  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/artists/${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}


async function getArtistsAlbums(id){

  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getArtistsTopTracks(id){

  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getAlbum(id){

  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/albums/${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getAlbumsTracks(id){

  try {
    const token = await getToken();
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/albums/${id}/tracks`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.items;
  } catch (error) {
    return error;
  }
}

module.exports = {
  searchFor,
  getArtist,
  getArtistsAlbums,
  getArtistsTopTracks,
  getAlbum,
  getAlbumsTracks,
};