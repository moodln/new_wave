class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :username, null: false, unique: true
      t.string :location
      t.string :name 
      t.text :about
      t.text :img_url
      t.boolean :artist
      t.integer :artist_id 
      t.string :password_digest 
      t.string :session_token
      t.timestamps
    end

    add_index :users, :email 
    add_index :users, :username 
    add_index :users, :name 
    add_index :users, :session_token 
    add_index :users, :artist_id
  end
end
