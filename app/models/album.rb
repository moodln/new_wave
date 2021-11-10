class Album < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist, 
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :User

    has_many :songs,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Song

    has_one_attached :photo
    has_one_attached :song
end 