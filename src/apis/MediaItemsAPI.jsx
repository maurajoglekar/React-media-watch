const MediaItemsAPI = {
    mediaItems: [
        {
          id: 1,
          name: 'Firebug',
          medium: 'Series',
          category: 'Science Fiction',
          year: 2010,
          watchedOn: 1294166565384,
          isFavorite: false
        },
        {
          id: 2,
          name: 'The Small Tall',
          medium: 'Movies',
          category: 'Comedy',
          year: 2015,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 3,
          name: 'The Redemption',
          medium: 'Movies',
          category: 'Action',
          year: 2016,
          watchedOn: null,
          isFavorite: false
        }, {
          id: 4,
          name: 'Hoopers',
          medium: 'Series',
          category: 'Drama',
          year: null,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 5,
          name: 'Happy Joe',
          medium: 'Movies',
          category: 'Action',
          year: 2015,
          watchedOn: 1457166565384,
          isFavorite: false
        }
    ],
    getAll: function() { return this.mediaItems},
    getById: function(id) {
      return this.mediaItems.find(item => item.id === id)
    },
    getByMedium: function(medium) {
        return this.mediaItems.filter(item => item.medium === medium)
    },
    getNewId: function() {
        if (this.mediaItems.length > 0) {
            return Math.max.apply(Math, this.mediaItems.map(mediaItem => mediaItem.id)) + 1;
          } else {
            return 1;
          }
    },
    addMedium: function(mediaItem) {
        mediaItem.id = this.getNewId();
        this.mediaItems.push(mediaItem);
        return this.mediaItems
    },
    deleteMedium: function(id) {
        const mediaItem = this.mediaItems.find(i => i.id === id);
        const index = this.mediaItems.indexOf(mediaItem);
        if (index >= 0) {
          this.mediaItems.splice(index, 1);
        }
        return this.mediaItems
    }   
  }
  export default MediaItemsAPI