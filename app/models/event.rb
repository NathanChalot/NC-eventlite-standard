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
class Event < ApplicationRecord
end
