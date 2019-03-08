class UpdateAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :photo, :string
  end
end
