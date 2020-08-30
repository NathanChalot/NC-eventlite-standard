class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :start_datetime, null: false
      t.string :location, null: false

      t.timestamps
    end
  end
end
