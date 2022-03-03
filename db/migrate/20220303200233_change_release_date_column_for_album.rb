class ChangeReleaseDateColumnForAlbum < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :release_date, :string
  end
end
