# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  
  User.destroy_all
  demo1 = User.create!(email: 'young1@gmail.com', password: 'password')
  demo2 = User.create!(email: 'young2@gmail.com', password: 'password')
  demo3 = User.create!(email: 'young3@gmail.com', password: 'password')
  demo4 = User.create!(email: 'young4@gmail.com', password: 'password')
  demo5 = User.create!(email: 'young5@gmail.com', password: 'password')


end