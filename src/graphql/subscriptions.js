/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlaylist = /* GraphQL */ `
  subscription OnCreatePlaylist {
    onCreatePlaylist {
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
export const onUpdatePlaylist = /* GraphQL */ `
  subscription OnUpdatePlaylist {
    onUpdatePlaylist {
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
export const onDeletePlaylist = /* GraphQL */ `
  subscription OnDeletePlaylist {
    onDeletePlaylist {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
