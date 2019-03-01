class CreateArtistsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :artists_users do |t|
      t.integer :artist_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :artists_users, :artist_id
    add_index :artists_users, :user_id
  end
end
