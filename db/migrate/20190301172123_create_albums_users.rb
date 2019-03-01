class CreateAlbumsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :albums_users do |t|
      t.integer :album_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :albums_users, :album_id
    add_index :albums_users, :user_id
  end
end
