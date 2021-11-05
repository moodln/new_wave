class AddColumnsToAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :password_digest, :string, null: false
    change_column :users, :session_token, :string, null: false
    change_column :albums, :title, :string, null: false 
    add_column :albums, :artist_id, :integer, null: false
    add_column :albums, :created_at, :datetime, null: false
    add_column :albums, :updated_at, :datetime, null: false
  end
end
