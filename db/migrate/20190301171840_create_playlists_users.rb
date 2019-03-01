class CreatePlaylistsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists_users do |t|
      t.integer :playlist_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :playlists_users, :playlist_id
    add_index :playlists_users, :user_id
  end
end
