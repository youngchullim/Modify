class UpdateArtist < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :genre, :string
  end
end
