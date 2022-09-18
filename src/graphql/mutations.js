/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist(
    $input: CreatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    createPlaylist(input: $input, condition: $condition) {
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
export const updatePlaylist = /* GraphQL */ `
  mutation UpdatePlaylist(
    $input: UpdatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    updatePlaylist(input: $input, condition: $condition) {
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
export const deletePlaylist = /* GraphQL */ `
  mutation DeletePlaylist(
    $input: DeletePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    deletePlaylist(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
