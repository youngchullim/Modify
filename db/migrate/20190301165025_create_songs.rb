class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :genre, null: false
      t.integer :album_id, null: false
      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :genre
    add_index :songs, :album_id
  end
end
