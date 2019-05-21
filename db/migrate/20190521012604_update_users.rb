class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_song_id, :integer
  end
end
