/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
      id
      name
      songs {
        items {
          id
          title
          createdAt
          updatedAt
          playlistSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlaylists = /* GraphQL */ `
  query ListPlaylists(
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      playlist {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      albums {
        items {
          id
          content
          createdAt
          updatedAt
          songAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
      playlistSongsId
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        playlist {
          id
          name
          createdAt
          updatedAt
        }
        albums {
          nextToken
        }
        createdAt
        updatedAt
        playlistSongsId
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      song {
        id
        title
        playlist {
          id
          name
          createdAt
          updatedAt
        }
        albums {
          nextToken
        }
        createdAt
        updatedAt
        playlistSongsId
      }
      content
      createdAt
      updatedAt
      songAlbumsId
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        song {
          id
          title
          createdAt
          updatedAt
          playlistSongsId
        }
        content
        createdAt
        updatedAt
        songAlbumsId
      }
      nextToken
    }
  }
`;
