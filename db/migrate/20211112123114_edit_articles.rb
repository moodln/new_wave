class EditArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :artist_id, :integer
  end
end
