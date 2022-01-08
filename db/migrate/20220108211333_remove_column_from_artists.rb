class RemoveColumnFromArtists < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :artist_id
  end
end
