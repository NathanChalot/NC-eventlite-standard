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
require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
