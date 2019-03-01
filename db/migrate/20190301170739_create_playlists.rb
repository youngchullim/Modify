class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.boolean :private, default: false
      t.timestamps
    end
    add_index :playlists, :name
  end
end
