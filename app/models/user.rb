# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  current_song_id :integer
#

class User < ApplicationRecord
  attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :playlists_users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :PlaylistsUser
  
  has_many :songs_users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :SongsUser

  has_many :albums_users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :AlbumsUser
  
  has_many :artists_users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ArtistsUser

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

end
