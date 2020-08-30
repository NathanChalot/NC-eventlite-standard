# == Schema Information
#
# Table name: events
#
#  id             :bigint           not null, primary key
#  location       :string           not null
#  start_datetime :datetime         not null
#  title          :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
FactoryBot.define do
  factory :event do
    title { "MyString" }
    start_datetime { "2020-08-30 11:40:50" }
    location { "MyString" }
  end
end
