class AddColumnToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :description, :text
    add_column :albums, :release_date, :date 
    add_column :albums, :price, :decimal, precision: 8, scale: 2, default: 7.00
  end
end
