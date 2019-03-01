class CreateSongsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :songs_users do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :songs_users, :song_id
    add_index :songs_users, :user_id
  end
end
