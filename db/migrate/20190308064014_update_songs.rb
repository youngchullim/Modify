class UpdateSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :song, :string
  end
end
