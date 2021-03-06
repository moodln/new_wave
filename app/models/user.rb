class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true 
    validates :password_digest, :session_token, presence: true 
    validates :password, length: {minimum: 6}, allow_nil: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    after_initialize :ensure_session_token, :set_defaults
    attr_reader :password
    attr_accessor :name 

    has_many :albums,
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :Album, 
        dependent: :destroy

    has_one :article, 
      primary_key: :id, 
      foreign_key: :artist_id, 
      class_name: :Article
    
    has_one_attached :photo

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def set_defaults 
    self.name ||= self.username
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
    
end
